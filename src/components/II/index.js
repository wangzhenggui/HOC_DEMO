import React, {Component} from 'react'
import ProxyHoc from './proxyHoc'

class CommonComponent extends Component {
  constructor() {
    super()
    this.state = {
      name:'CommonComponent'
    }
  }
  componentWillMount() {
    console.log('普通组件--> componentWillMount')
  }
  componentDidMount() {
    console.log('普通组件--> componentDidMount')
  }
  render() {
    console.log('普通组件--> render')
    return <div>
      我是正常显示组件
    </div>
  }
}

export default ProxyHoc(CommonComponent)
