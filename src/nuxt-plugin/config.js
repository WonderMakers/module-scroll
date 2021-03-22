export default {
  socials: {
    fb: (url, title, description, image) => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    vk: (url, title, description, image) => `https://vk.com/share.php?url=${url}&title=${title}%20${description}&image=${image}`,
    tw: (url, title, description, image) => `https://twitter.com/intent/tweet?url=${url}&text=${title}%20${description}`,
    tg: (url, title, description, image) => `tg://share?url=${url}&text=${title}%20${description}`,
    ok: (url, title, description, image) => `https://connect.ok.ru/offer?url=${url}&title=${title}&imageUrl=${image}`,
    reddit: (url, title, description, image) => `https://www.reddit.com/submit?url=${url}&title=${title}%20${description}&video_poster_url=${image}`
  }
}
