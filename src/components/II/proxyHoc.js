import React from 'react'
const ProxyHoc = WrapperComponent => class extends WrapperComponent {
  componentWillMount() {
    console.log('HOC组件--> componentWillMount')
  }
  componentDidMount() {
    console.log('HOC组件--> componentDidMount')
  }
  render() {
    console.log('HOC组件--> render')
    if (!this.props.loading) {
      console.log(super.render())
      return super.render() //　这里返回的是我们的FiberNode
    } else {
      return <div> loading </div>    
    }
  }
}

export default ProxyHoc