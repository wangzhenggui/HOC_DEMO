import React, { Component } from 'react';
import HocRef from './HocRef'

class RefComponent extends Component {
  render() {
    return (
      <div>
        通过Ref回调返回实例对象
      </div>
    )
  }
}

export default HocRef(RefComponent)