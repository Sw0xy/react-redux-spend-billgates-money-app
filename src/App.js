import "./App.css";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import MoneyContainer from "./components/MoneyContainer";
import { data } from "./utils/data";

function App() {
  console.log(data);
  return (
    <div className="App">
      <Header />
      <MoneyContainer />
      <div className="items-container">
        {data.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
