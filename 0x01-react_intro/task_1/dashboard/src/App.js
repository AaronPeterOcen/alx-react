import "./App.css";
import hlogo from "./logo.jpg";
import { getFooterCopy, getFullYear } from "./utils.js";

const year = getFullYear();
const getFooter = getFooterCopy(false);
function App() {
  return (
    <>
      <header className="App-header">
        <img src={hlogo} alt="holberton" />
        <h1>School dashboard</h1>
      </header>
      <div className="linea"></div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="linea"></div>
      <footer className="App-footer">
        <p>
          Copyright {year} - {getFooter}
        </p>
      </footer>
    </>
  );
}

export default App;
