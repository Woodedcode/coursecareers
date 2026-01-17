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

