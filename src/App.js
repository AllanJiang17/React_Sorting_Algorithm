import './App.css';
import Bar from './bar/bar';
import { Component } from 'react';
import Algorithm from './algorithm';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      array: [4,5,2,1,6,9,8,7],
      delay: 400,
      currentStep: 0,
      timeouts: [],
      pastArray: [4,5,2,1,6,9,8,7]
    };
    this.algorithm = Algorithm.bubbleSort;
  }

  play = () => {
    this.update(this.algorithm(this.state.array));
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

  onSelect = (event) => {
    switch(event.value) {
      case "Bubble Sort":
        this.algorithm = Algorithm.bubbleSort;
        break;
      case "Insertion Sort":
        this.algorithm = Algorithm.insertionSort;
        break;
      default:
        this.algorithm = Algorithm.bubbleSort;
    }
  }

  render() {
    let bar = this.state.array.map(int => {
      return <h1 className='individualBar'>{int}</h1>;
    })

    const options = [
      'Bubble Sort', 'Insertion Sort'
    ];

    return (
      <div className='App'>

        <header className='App-header'>
          Sorting Algorithm Visualizer
        </header>

        <Dropdown className='dropDown' options={options} onChange={this.onSelect} placeholder="Select an Algorithm" />

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
