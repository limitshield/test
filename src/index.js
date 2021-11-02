import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Route exact path="*" render={() => <App />} />
    <Link to="./12">top</Link>
  </BrowserRouter>,
  rootElement
);

function App() {
  return <div className="App"></div>;
}
