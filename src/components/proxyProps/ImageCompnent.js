import React,{ Component } from 'react'
import PropsProxyHoc from './proxyImage'
import ProxySwap from './proxySwap'

class ImageComponent extends Component {
  render() {
    return <img alt='' src={ this.props.loadImage }/>
  }
}

export default ProxySwap(PropsProxyHoc(ImageComponent))
