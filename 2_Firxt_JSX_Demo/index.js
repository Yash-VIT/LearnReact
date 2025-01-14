function FunnyJokes() {
  const funny = [
    "Knock, Knock",
    "Who's There",
    "Yo, Dawg",
    "Stop Knocking Hoe!",
  ];
  return funny[Math.floor(Math.random() * funny.length)];
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the first JSX</h1>
        {/* <img src="img.jpg" /> */}
        <h2>{FunnyJokes()}</h2>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
