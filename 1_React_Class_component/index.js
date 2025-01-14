class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello There</h1>
      </div>
    );
  }
}

// function Hello2() {
//   return <h1> This is a function </h1>;
// }

ReactDOM.render(<Hello />, document.getElementById("root"));
