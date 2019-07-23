import React from 'react'
const ProxyHoc = WrapperComponent => class extends WrapperComponent {
  render() {
    if (!this.props.loading) {
      const fiberNode = super.render() //　这里返回的是我们的FiberNode
      console.log(fiberNode)
      let newProps = {}
      if(fiberNode && fiberNode.type === 'input') {
        newProps = {
          value: '456'
        }
      }
      const props = Object.assign({},fiberNode.props,newProps) 
      return React.cloneElement(fiberNode,props,fiberNode.props.children)
    } else {
      return <div> loading </div>    
    }
  }
}

export default ProxyHoc