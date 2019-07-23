import React, {Component} from 'react'
import ProxyHoc from './proxyHoc'

class CommonComponent extends Component {
  constructor() {
    super()
    this.state = {
      name:'CommonComponent'
    }
  }
  render() {
    return <input value='123' />
  }
}

export default ProxyHoc(CommonComponent)