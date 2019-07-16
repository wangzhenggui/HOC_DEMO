import React, { Component } from 'react'

const propsProxyHoc = WrappedComponent => class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadImage: '', // 代理图片
    }
  }
  componentDidMount() {
    const image = new Image()
    image.onload = () => {
      this.setState({
        loadImage: this.props.imageUrl,
      })
    }
    // 测试图片加载延时
    // setTimeout((function() {
    //   return function() { image.src = this.props.imageUrl }
    // })().bind(this), 2000)
    image.src = this.props.imageUrl
  }
  render() {
    console.log('高阶组件--render')
    return <WrappedComponent {...this.props} loadImage={this.state.loadImage} />
  }
}

export default propsProxyHoc
