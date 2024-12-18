import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    //In JavaScript classes, you need to always call super(...) when defining the constructor of a subclass.
    //All React component classes that have a constructor should start with a super(props) call.
    super(props);

    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {/*
            Properties vs. State: https://kentcdodds.com/blog/props-vs-state
            One limit to props is that you're not allowed to change them.
        */}
        State: {this.state.value} - Value: {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Select squares...';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);
