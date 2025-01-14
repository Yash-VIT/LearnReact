function CondSet() {
  return (
    <h2>
      This is your conditional Life expectancy:{" "}
      {Math.floor(Math.random() * 10 + 80)}
    </h2>
  );
}

class JsxConditonal extends React.Component {
  render() {
    var num = 16;
    let welcomeYash;
    if (num === 16) {
      welcomeYash = (
        <div>
          <p>
            <h3>
              Welcome Yash! <br></br>
              <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
            </h3>
          </p>
        </div>
      );
    } else {
    }
    return (
      <div>
        <h1>Welcome to the Conditional World</h1>
        <h2>{CondSet()}</h2>
        <h3>
          This is my Conditional Castle...{welcomeYash}
          <p>{num === 16 ? "It is your birthday" : null} </p>
        </h3>
      </div>
    );
  }
}

ReactDOM.render(<JsxConditonal />, document.getElementById("root"));
