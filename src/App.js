import React from 'react';
import './App.css';
import CommonComponent from './components/II/index'
import ProxyState from './components/proxyState'
import ImageComponentHOC from './components/proxyProps/ImageCompnent'
import RefHoc from './components/ref'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        loading:false
      })
    },5000)
  }
  render() {
    return <div className="App">
    <ImageComponentHOC imageUrl="https://gw.alipayobjects.com/mdn/iot_box_me/afts/img/A*C9PaS6eDCQAAAAAAAAAAAABkARQnAQ" title="Proxy代理"/>
    <CommonComponent loading={this.state.loading}/>
    <ProxyState />
    <RefHoc />
  </div>
  }
}

export default App;
