import React from 'react';
import './App.css';
import CommonComponent from './components/II/index'
import ProxyState from './components/proxyState'

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
    <CommonComponent loading={this.state.loading}/>
    <ProxyState />
  </div>
  }
}

export default App;
