import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const SQUARE_VALUE = 'X';

function Square(props) {
  return (
    <button className="square" onClick={props.clickSquare}>
      PropsValue: {props.propsValue}
    </button>
  );
}

class BoardState {
    constructor(history = [new HistoryItem()], current = new HistoryItem()){
      this.history = history;
      this.current = current;
    }
}

class HistoryItem {
    constructor(squares = Array(4).fill(null)){
      this.squares = squares;
    }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = new BoardState();
  }

  render() {
    let status = this.calculateSumStatus(this.state.current.squares);
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
      </div>
    );
  }

  renderSquare(i) {
    return <Square
            propsValue={this.state.current.squares[i] /* Square.props.propsValue == Board.state.squares[i] */}
            clickSquare={() => this.handleClickSquareFromBoard(i) /* Square.props.clickSquare == handleClickSquareFromBoard(i) */}
            />;
  }

  handleClickSquareFromBoard(i) {
    const history = this.state.history.slice();
    const currentSquares = this.state.current.squares.slice();
    currentSquares[i] = SQUARE_VALUE;
    const current = new HistoryItem(currentSquares);
    this.setState(new BoardState(history, current));
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

// ========================================

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);
