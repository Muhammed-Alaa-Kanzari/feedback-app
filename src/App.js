import React from "react";

const comments = [
  { id: 1, text: "Comment 1" },
  { id: 2, text: "Comment 2" },
  { id: 3, text: "Comment 3" },
];
// const current = new Date();
// const date = `${current.getDate()}/${
//   current.getMonth() + 1
// }/${current.getFullYear()}`;
function App() {
  return (
    <div className="container">
      <h1>FeedBack</h1>
      {/* <h2>{date}</h2>s */}

      <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
