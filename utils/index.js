const Tools = {
  baseRouter () {
    let baseRouter = '/chartered/'
    if (process.client) {
      baseRouter = window.location.hostname.includes('localhost')
        ? '/'
        : '/chartered/'
    }
    return baseRouter
  },
  nl2br (str) {
    const breakTag = '<br>'
    return (str + '').replace(
      /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
      '$1' + breakTag + '$2'
    )
  },
  scrollToTop (scrollDuration) {
    if (process.client) {
      const scrollStep = -window.scrollY / (scrollDuration / 15)
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep)
        } else {
          clearInterval(scrollInterval)
        }
      }, 15)
    }
  }
}

export default Tools
