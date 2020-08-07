import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 正方形のマス目
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick = { () => { this.props.onClick()} }>
        {/* TODO を以下の形に変更 数字が表示される */}
        {this.props.value}
      </button>
    );
  }
}

// 盤面
class Board extends React.Component {
  constructor(props){
    // サブクラスなので（以下略）
    super(props)
    this.state = {
      // Array(9)は9つのemptyの配列を返す fill(null)でそれをnullで満たしている
      squares: Array(9).fill(null),
    }
  }

  handleClick(i) {
    // const squares = this.state.squares.slice()となっているけど、slice()意味ないのでは??
    // => 現在の配列を変更する代わりに、配列のコピーを作成するための方便としてのslice()
    // データを直接いじるのがmutete（書き換え） 不変なのがimmutableな方法
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares})
  }

  renderSquare(i) {
    // return <Square />;
    // コンストラクタで定義した中身の配列のうち、自身のインデックスのものを見に行く
    return(
      <Square
        value = {this.state.squares[i]} 
        onClick = {() => this.handleClick(i)}
      />
    )
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
