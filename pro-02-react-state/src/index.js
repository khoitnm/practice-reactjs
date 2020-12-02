import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const SQUARE_VALUE = 'X';

/*
For the Square component, instead of using a class, we'll just simplify the code by using a function.
Hence Square is called "Function Component"

This class will be replaced by the function Square(props)
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.clickSquare}>
        PropsValue: {this.props.propsValue}
      </button>
    );
  }
}
*/
function Square(props) {
  return (
    <button className="square" onClick={props.clickSquare}>
      PropsValue: {props.propsValue}
    </button>
  );
}


/*
We may think that Board should just ask each Square for the Square’s state. Although this approach is possible in React, we discourage it because the code becomes difficult to understand, susceptible to bugs, and hard to refactor. Instead, the best approach is to store the game’s state in the parent Board component instead of in each Square. The Board component can tell each Square what to display by passing a prop, just like we did when we passed a number to each Square.
To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.
*/
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(4).fill(null),
    };
  }

  /*
  It looks like this method is trigger whenever this.state is changed!
  */
  render() {
    let status = this.calculateSumStatus(this.state.squares);
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
        </div>
        <div className="board-row">
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
      </div>
    );
  }

  renderSquare(i) {
    return <Square
            propsValue={this.state.squares[i] /* Square.props.propsValue == Board.state.squares[i] */}
            clickSquare={() => this.handleClickSquareFromBoard(i) /* Square.props.clickSquare == handleClickSquareFromBoard(i) */}
            />;
  }

  handleClickSquareFromBoard(i) {
    /*
    We are using immutable approach here.
    The benefits of this approach are: https://reactjs.org/tutorial/tutorial.html#why-immutability-is-important
      - Simplify complex features (sometimes, with event-driven and time travelling requirements)
      - Detecting changes
      - Optimization performance for React to determine should re-render or not (based on detecting changes)
    */
    const squares = this.state.squares.slice();
    squares[i] = SQUARE_VALUE;
    this.setState({squares: squares});
  }

  calculateSumStatus(squares) {
    let allSquareHasValue = true;
    let sum = 0;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === SQUARE_VALUE){
        sum += 1;
      } else {
        allSquareHasValue = false;
      }
    }

    if (allSquareHasValue) {
      return 'All squares are counted!!! '+ sum;
    } else {
      return 'Some squares are counted: ' + sum;
    }
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board /> {/* Render Board component without any input properties (props) */}
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
