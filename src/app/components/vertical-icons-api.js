var yo = require('yo-yo')
var csjs = require('csjs-inject')
const remixLib = require('remix-lib')

const styleguide = require('../ui/styles-guide/theme-chooser')
const styles = styleguide.chooser()

// API
class VerticalIconsApi {

  constructor(verticalIconsComponent, pluginManagerApi) {
    pluginManagerApi.event.on('activation', (module) => verticalIconsComponent.addIcon(module) )
    this.component = verticalIconsComponent
  }

  addIcon(icon) {
    this.component.addIcon(icon)
  }

  removeIcon(icon) {
    this.component.removeIcon(icon)
  }
}
module.exports = VerticalIconsApi
