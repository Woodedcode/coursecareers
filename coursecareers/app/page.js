1/15/26
//right click file in VS code to get right path for folder

import Post from "@/components/Post";

export default function Home() {
  return <div>
      <Post 
      title="Ryan is new to programming"
      author="Ryan Woods"
      content="Ryan is very green to this but it getting better"/>
      <Post 
      title="Ryan is new to programming"
      author="Ryan Woods"
      content="Ryan is very green to this but it getting better"/>
    </div>
}


1/15/26
//updated through lessons

import Post from "@/components/Post";

export default function Home() {
  const post = [{
    title:"My Post",
    author: "Ryan Woods",
    content: "I am an 'ok' react developer",
    following: false},
    {
    title:"My Post 2",
    author: "Ryan Woods",
    content: "just testing things out",
    following: true},
    {
    title:"My Post 3",
    author: "Ryan Woods",
    content: "this is another post",
    following: false}]
  return <div>
    {post.map((content,idx) => {
      return <Post {...content} key={idx}/>
    })}
    </div>
}


1/16/26
"use client";
import Post from "@/components/Post";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  function addPost() {
    const newPost = {
      author: author,
      content: content,
      title: title,
      following: false
    }

    setPosts([...posts,newPost]);
    setContent("");
    setAuthor("");
    setTitle("");
  }

  return <div>
    <div>
    <input type="text" value={title} onChange={setTitle} />
      <input type="text" value={content} onChange={setContent} />
      <input type="text" value={author} onChange={setAuthor} />
      <button onClick={addPost}>Add Post</button>
    </div>
    <div className="posts">
      {posts.map((post,idx) => (
        <Post {...post} key={idx + Math.random()} />
      ))}
    </div>
  </div>
}



2/25/26

// function Text({ content,strong }) {
//   if (strong) {
//     return <strong>{content}</strong>
//   }

//   return <p>{content}</p>
// }
import Post from "@/components/Post"


export default function Home() {
  const posts = [
    {
      title: "My Post",
      author: "Ryan Woods",
      content: "I am an ok programmer",
      following:false
    },
    {
      title: "My Post 2",
      author: "Ryan Woods",
      content: "I am a decent programmer",
      following:true
    },
    {
      title: "My Post 3",
      author: "Ryan Woods",
      content: "I am a great programmer",
      following:false
    },
    {
      title: "My Post 4",
      author: "Ryan Woods",
      content: "I am a great programmer",
      following:false
    },
  ]

  return (
    <div>
      { posts.map((content,idx) => {
        return <Post {...content} key={idx}/>
      })}
    </div>
  );
}


2/25/26

// function Text({ content,strong }) {
//   if (strong) {
//     return <strong>{content}</strong>
//   }

//   return <p>{content}</p>
// }
"use client";
import Post from "@/components/Post"
import {useState, useEffect} from "react";

export default function Home() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (content.length >= 10) alert("Your content is getting kind of long")
  }, [content])

  function addPost() {
    const newPost = {
      author: author,
      content: content,
      title: title,
      following: false
    }

    setPosts([...posts, newPost])
    setContent("");
    setAuthor("");
    setTitle("");
  }

  return (
    <div>
      <div>
        <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title"/>

        <input 
        type="text" 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Content"/>

        <input 
        type="text" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
        placeholder="Author"/>

        <button onClick={addPost}>Add Post</button>
      </div>
      <div className="posts">
        {posts.map((posts, idx) => (
          <Post {...posts} key={idx + Math.random()}/>
        ))}
      </div>
    </div>
  )
}



3/2/26 TIC_TAC_TOE

"use client";
import { useState } from "react";

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board({squares, xIsNext, onPlay}) {

  function onSquareClick(idx) {
    if (squares[idx] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[idx] = xIsNext ? "X" : "O";
    onPlay(newSquares)
  }

  const winner = calculateWinner(squares);

  return (
    <>
      {winner ? (
        <p>Winner is: {winner}</p>
      ) : (
        <p>Next Player: {xIsNext ? "X" : "O"}</p>
      )}
      <div className="board-row">
        <Square value={squares[0]} onClick={() => onSquareClick(0)} />
        <Square value={squares[1]} onClick={() => onSquareClick(1)} />
        <Square value={squares[2]} onClick={() => onSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => onSquareClick(3)} />
        <Square value={squares[4]} onClick={() => onSquareClick(4)} />
        <Square value={squares[5]} onClick={() => onSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => onSquareClick(6)} />
        <Square value={squares[7]} onClick={() => onSquareClick(7)} />
        <Square value={squares[8]} onClick={() => onSquareClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1);
  }
  
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares,move) => {
    let description;
    if (move > 0){
      description = "Go to move #" + move;
    } else {
      description = "Go to game start"
    }
    return <li key={move + Math.random}>
      <button onClick={() => jumpTo(move)}>{ description }</button>
    </li>
  
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}
