import React, { Component } from 'react'

const proxySwap = WrappedComponent => class extends Component {
  render() {
    return <div style={{padding: '20px'}}>
        <p>{this.props.title}</p>
        <WrappedComponent {...this.props} />
    </div>
  }
}

export default proxySwap
