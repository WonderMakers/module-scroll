import { Scroll } from './class'

export default ({ app }, inject) => {
  // const isDev = app.context.isDev
  const options = JSON.parse(`<%= JSON.stringify(options).replace(/^"/, "'").replace(/"$/, "'") %>`)
  inject('scroll', new Scroll(document.scrollingElement, options))
}
