import './App.css';
import Bar from './bar/bar';
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      array: [4,5,2,1,6,9,8,7],
      delay: 400,
      currentStep: 0,
      timeouts: [],
      pastArray: []
    };
    this.play = this.play.bind(this);
  }

  play = () => {
    this.update(this.bubbleSort());
  }

  reset = () => {
    this.state.timeouts.forEach((timeout) => clearTimeout(timeout));
		this.setState({ 
      timeouts: [],
      array: this.state.pastArray,
      currentStep: 0
    });
  }

  update = (steps) => {
    console.log(steps);
    var timeouts = [], i = 0;

    while (i < steps.length - this.state.currentStep) {
			let timeout = setTimeout(() => {
				let currentStep = this.state.currentStep;
				this.setState({
					array: steps[currentStep],
					currentStep: currentStep + 1,
				});
			}, this.state.delay * i);
      timeouts.push(timeout);
			i++;
		}

    this.setState({
      timeouts:timeouts
    })
  }
  
  swap = (arr, xp, yp) => {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }
  
  bubbleSort(){
    var i, j, n = this.state.array.length, arr = this.state.array;
    var steps = [];
    for (i = 0; i < n-1; i++){
      for (j = 0; j < n-i-1; j++){
        if (arr[j] > arr[j+1]){
          this.swap(arr,j,j+1);
        }
        steps.push(arr.slice());
      }
    }
    return steps;
  }
  
  handleChange = (event) =>{
    this.setState({
      array: event.target.value.split(',').map(i => {
        return parseInt(i);
      }),
      pastArray: event.target.value.split(',').map(i => {
        return parseInt(i);
      })
    });
    console.log(this.state.array);
  }

  render() {
    let bar = this.state.array.map(int => {
      return <h1 className='individualBar'>{int}</h1>;
    })
    return (
      <div className='App'>

        <header className='App-header'>
          Sorting Algorithm Visualizer
        </header>

        <div className='frame'>
          {bar}
        </div>

        <button onClick={this.play}>
          Start
        </button>

        <button onClick={this.reset}>
          Reset
        </button>

      <form onSubmit={this.handleSubmit}>
        <label>
          List:
          <input className='userInput' type="text" onChange={this.handleChange}/>
        </label>
      </form>

      </div>
    );
  }

}

export default App;
