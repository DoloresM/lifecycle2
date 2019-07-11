import React,  {Component} from 'react';

  class Ticker extends Component{
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }


componentDidMount(){
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }


  shouldComponentUpdate(nextProp, nextState){
    if(nextState.count % 3 === 0) return true;
    else return false;
  }



  render(){
    return(<div>
          <p>The ticker is: {this.state.count}</p>
          <button>Reset Ticker</button>
          </div>
    )
  }
}

export default Ticker;
