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
  }
}

export default Tools
