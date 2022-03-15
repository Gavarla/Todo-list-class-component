import React from 'react';
import './style.css';

class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [
        'sunday',
        'monday',
        'thusday',
        '----------?',
        'thuesday',
        'friday',
        '-------?',
      ],
    };
  }
  addNumber = () => {
    var newnumber = document.getElementById('d1').value;
    this.setState({ arr: [...this.state.arr, newnumber] });
    // this.arr.push(newnumber);
    // console.log(this.arr);
  };

  render() {
    return (
      <div>
        {this.arr}
        <h1>Enter text</h1>

        <input type="text" id="d1" />
        <button onClick={this.addNumber}>Add</button>

        {this.state.arr.map((x) => {
          return <h3>{x}</h3>;
        })}
      </div>
    );
  }
}

export default Name;
