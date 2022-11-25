import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      array: [4,5,2,1,6,9,8,7],
      delay: 400,
      currentStep: 0,
      timeouts: []
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
      array: [4,5,2,1,6,9,8,7],
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

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          Sorting Algorithm Visualizer
        </header>
        <h1>
          {this.state.array}
        </h1>
        <button onClick={this.play}>
          Start
        </button>
        <button onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }

}

export default App;
