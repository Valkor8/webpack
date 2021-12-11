export default class AppSevice {
  constructor(text) {
    this.text = text
  }

  log () {
    console.log('[App service]:', this.text)
  }
}

