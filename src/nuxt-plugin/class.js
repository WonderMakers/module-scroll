import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import normalizeWheel from 'normalize-wheel'

export class Scroll {
  constructor ($scrollContainer = document.scrollingElement, options = {}) {
    this.$scrollContainer = $scrollContainer === document.scrollingElement ? window : $scrollContainer
    this.$scrollingElement = $scrollContainer
    this.scrollTop = 0
    this.scrollLeft = 0
    this.deltaX = 0
    this.deltaY = 0
    this.deltaLastUpdateTime = 0
    this.deltaUpdateDelay = 30
    this.lastDeltaScrollTop = 0
    this.lastDeltaScrollLeft = 0
    this.progressTop = 0
    this.progressLeft = 0
    this.scrollTopMax = 0
    this.scrollLeftMax = 0
    this.scrollHeight = 0
    this.scrollWidth = 0
    this.raf = null
    this.callbacks = {
      scroll: [],
      tick: [],
      wheel: []
    }
    this.lockNamespaces = []
    this._animateOptions = null
    this.options = Object.assign({}, {}, options)
    this.events = {
      resize: this.resize.bind(this),
      tick: this.tick.bind(this),
      scroll: this.scroll.bind(this),
      wheel: this.wheel.bind(this)
    }
    window.addEventListener('resize', this.events.resize)
    this.$scrollContainer.addEventListener('scroll', this.events.scroll)
    this.$scrollContainer.addEventListener('wheel', this.events.wheel)

    this.tick()
  }

  get scrollData () {
    return {
      x: this.scrollLeft,
      y: this.scrollTop,
      deltaX: this.deltaX,
      deltaY: this.deltaY,
      progressY: this.progressTop,
      progressX: this.progressLeft
      // direction: 1
    }
  }

  recalc () {
    this.scrollHeight = this.$scrollingElement.scrollHeight
    this.scrollWidth = this.$scrollingElement.scrollWidth
    this.scrollTopMax = this.scrollHeight - this.$scrollingElement.clientHeight
    this.scrollLeftMax = this.scrollWidth - this.$scrollingElement.clientWidth
  }

  tick () {
    this.recalc()
    this.calcDelta()
    this.update()
    this.animate()
    this.sendEvent('tick')
    this.raf = requestAnimationFrame(this.events.tick)
  }

  scroll (event) {
    this.update()
    this.sendEvent('scroll', event)
  }

  wheel (e) {
    const normalize = normalizeWheel(e)
    if (this._animateOptions && this._animateOptions.cancelable) {
      this._animateOptions.resolve()
      this._animateOptions = null
    } else if (this._animateOptions && !this._animateOptions.cancelable) {
      e.preventDefault()
    }
    this.sendEvent('wheel', { original: e, normalize })
  }

  calcDelta () {
    const now = Date.now()
    if (now - this.deltaLastUpdateTime > this.deltaUpdateDelay) {
      this.deltaX = this.scrollLeft - this.lastDeltaScrollLeft
      this.deltaY = this.scrollTop - this.lastDeltaScrollTop
      this.lastDeltaScrollTop = this.scrollTop
      this.lastDeltaScrollLeft = this.scrollLeft
      this.deltaLastUpdateTime = now
    }
  }

  update () {
    const scrollTop = this.$scrollingElement.scrollTop
    const scrollLeft = this.$scrollingElement.scrollLeft

    this.scrollTop = scrollTop
    this.scrollLeft = scrollLeft
    this.progressTop = this.scrollTopMax ? this.scrollTop / this.scrollTopMax : 0
    this.progressLeft = this.scrollLeftMax ? this.scrollLeft / this.scrollLeftMax : 0
    // if (this.scrollTop !== scrollTop || this.scrollLeft !== scrollLeft) {
    //   this.scrollTop = scrollTop
    //   this.scrollLeft = scrollLeft
    // }
  }

  sendEvent (eventName, payload) {
    const callbacks = this.callbacks[eventName]
    const scrollData = this.scrollData
    for (const item of callbacks) {
      item.callback(scrollData, payload)
    }
  }

  on (eventName, callback, options = {}) {
    if (this.callbacks[eventName]) {
      this.callbacks[eventName].push({
        callback,
        options
      })
    }
    // this.notify()
  }

  off (eventName, callback) {
    if (this.callbacks[eventName]) {
      const evetIndex = this.callbacks[eventName].findIndex(item => item.callback === callback)
      if (evetIndex > -1) {
        this.callbacks[eventName].splice(evetIndex, 1)
      }
    }
  }

  resize () {}

  lock (value, name, container) {
    if (value) {
      disableBodyScroll(container || this.$scrollContainer)
      if (name) {
        this.lockNamespaces.push(name)
      }
    } else {
      if (name) {
        const nameIndex = this.lockNamespaces.indexOf(name)
        if (nameIndex > -1) {
          this.lockNamespaces.splice(nameIndex, 1)
        }
      }
      if (!this.lockNamespaces.length) {
        enableBodyScroll(container || this.$scrollContainer)
      }
    }
  }

  scrollTo ({ x = 0, y = 0, element = null, duration = 0, cancelable = true }) {
    const isSafari = this.isSafari()

    return new Promise((resolve) => {
      if (element instanceof HTMLElement) {
        y = element.offsetTop
      }
      const scrollOptions = {
        resolve,
        duration,
        cancelable,
        time: Date.now(),
        start: { y: this.scrollTop, x: this.scrollLeft },
        distention: { y: y - this.scrollTop, x: x - this.scrollLeft }
      }
      if (!isSafari) {
        this.$scrollingElement.style.setProperty('scroll-snap-type', 'none')
      }
      if (duration) {
        this._animateOptions = scrollOptions
      } else {
        this.setPosition(scrollOptions.distention.x, scrollOptions.distention.y)
        scrollOptions.resolve()
      }
    }).then(() => {
      if (!isSafari) {
        this.$scrollingElement.style.setProperty('scroll-snap-type', 'none')
      }
    })
  }

  animate () {
    if (!this._animateOptions) {
      return false
    }
    const now = Date.now()
    const dTime = now - this._animateOptions.time
    const positionX = easeInOutQuad(dTime, this._animateOptions.start.x, this._animateOptions.distention.x, this._animateOptions.duration)
    const positionY = easeInOutQuad(dTime, this._animateOptions.start.y, this._animateOptions.distention.y, this._animateOptions.duration)

    this.setPosition(positionX, positionY)

    if (now >= this._animateOptions.time + this._animateOptions.duration) {
      this._animateOptions.resolve()
      this._animateOptions = null
    }
  }

  setPosition (x, y) {
    this.$scrollingElement.scrollLeft = x
    this.$scrollingElement.scrollTop = y
  }

  destroy () {
    cancelAnimationFrame(this.raf)
    document.removeEventListener('resize', this.events.resize)
    this.$scrollContainer.removeEventListener('scroll', this.events.scroll)
  }

  isSafari () {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  }
}

function easeInOutQuad (t, b, c, d) {
  t /= d / 2
  if (t < 1) {
    return c / 2 * t * t + b
  }
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

// function easeInCubic (t, b, c, d) {
//   const tc = (t/=d) * t * t
//   return b + c * (tc)
// }
//
// function inOutQuintic (t, b, c, d) {
//   const ts = (t/=d) * t
//   const tc = ts * t
//   return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc)
// }
