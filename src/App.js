import "./styles.css";
import { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [cityList, setCityList] = useState([]);

  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleAdd = () => {
    setCityList([...cityList, city]);
  };
  const handleDel = (id) => {
    console.log("city", cityList);
    let citiesList = [...cityList];
    citiesList.splice(id, 1);
    setCityList(citiesList);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <label>City:</label>
      <input type="text" value={city} onChange={(e) => handleCity(e)}></input>
      <button onClick={handleAdd}>Add</button>
      {cityList.map((ct, index) => (
        <>
          <p>{ct}</p>
          <button onClick={() => handleDel(index)}>Delete</button>
        </>
      ))}
    </div>
  );
}
