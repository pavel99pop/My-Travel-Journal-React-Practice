import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import data from "./data";

function App() {
  const content = data.map((item) => <Body {...item} />);
  return (
    <div>
      <Header />
      {content}
    </div>
  );
}

export default App;
