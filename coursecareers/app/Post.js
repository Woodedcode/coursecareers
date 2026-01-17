1/15/26

export default function Post({ title,author,content}) {
    return (
    <div>
        <h1>{title}</h1>
        <h3>By: {author}</h3>
        <p>{content}</p>
    </div>
    );
}

1/15/26
//updated through lessons
import "./post.css";


export default function Post({ title,author,content,following}) {
    const button = !following ? (<button>Follow</button>) : (<button>Unfollow</button>)
    return (
    <div className="card">
        <h1>{title}</h1>
        <h3>By: {author}</h3>
        {button}
        <p>{content}</p>
    </div>
    );
}


1/16/26
import "./post.css";

export default function Post({ title,author,content}) {
    return (
    <div className="card">
        <h1>{title}</h1>
        <h3>By: {author}</h3>
        <p>{content}</p>
    </div>
    );
}
