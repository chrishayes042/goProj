import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <form method="POST" action="/form">
        <label>Name</label>
        <input name="name" type="text" value="" />
        <label>Address</label>
        <input name="address" type="text" value="" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
