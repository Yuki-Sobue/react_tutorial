import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 正方形のマス目
class Square extends React.Component {

  constructor(props){
    // SquareクラスはReact.Componenrのサブクラスなので、サブクラスのコンストラクタではsuperを呼ぶ
    super(props)
    this.state = {
      value: null,
    }
  }

  render() {
    return (
      // stateの値をXにする
      <button className="square" onClick = { () => { this.setState({value: 'X'})} }>
        {/* TODO を以下の形に変更 数字が表示される */}
        {this.state.value}
      </button>
    );
  }
}

// 盤面
class Board extends React.Component {
  renderSquare(i) {
    // return <Square />;
    return <Square value = {i} />
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// ゲーム
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
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
