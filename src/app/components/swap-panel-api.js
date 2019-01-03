var yo = require('yo-yo')
var csjs = require('csjs-inject')
const remixLib = require('remix-lib')

const styleguide = require('../ui/styles-guide/theme-chooser')
const styles = styleguide.chooser()

class SwapPanelApi {
  constructor (swapPanelComponent, verticalIconsComponent) {
    this.nodes = {}
    this.component = swapPanelComponent
    verticalIconsComponent.event.on('showContent', (moduleName) => {
      this.component.showContent(moduleName)
    })
  }

  /*
    content: DOM element
    by appManager
  */
  getParent () {
    // add the DOM to the swappanel
    return this.component.view
  }

  reference (modulename, domElement) {
    this.nodes[modulename] = domElement
  }
}

module.exports = SwapPanelApi
