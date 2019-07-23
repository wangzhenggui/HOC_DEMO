import React, { Component } from 'react'

const HocRef = WrappedComponent => class extends Component {
  proc(instacnce) {
    console.log(instacnce)
  }
  render() {
    const props = Object.assign({},this.props,{
      ref: this.proc.bind(this)
    })
    return <WrappedComponent {...props} />
  }
}

export default HocRef
