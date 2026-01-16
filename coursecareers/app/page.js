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
