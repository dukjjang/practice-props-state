import { useState } from "react";
import "./App.css";

function App() {
  const [place, setPlace] = useState("");
  const [places, setPlaces] = useState([]);
  const [location, setLocation] = useState("");
  const onChange = (event) => {
    setPlace(event.target.value);
  };
  const onSearchChange = (event) => {
    setLocation(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (place === "") {
      return;
    }

    setPlaces((prev) => [place, ...prev]);

    setPlace("");
  };
  const onSearch = (event) => {
    event.preventDefault();
    setPlaces(places.filter((place) => location === place));
  };

  const onDelete = (idx) => {
    setPlaces(places.filter((place, placeIndex) => idx !== placeIndex));
  };
  return (
    <div>
      <div className="inputContainer">
        <form onSubmit={onSubmit}>
          <input
            className="input"
            type="text"
            value={place}
            onChange={onChange}
            placeholder="장소"
          ></input>
          <button className="btn">추가</button>
        </form>
        <form onSubmit={onSearch}>
          <input
            className="input"
            value={location}
            onChange={onSearchChange}
            placeholder="현재위치"
          ></input>
          <button className="btn">검색</button>
        </form>
      </div>

      <ul>
        {places.map((place, idx) => {
          return (
            <li key={idx}>
              {place} <button onClick={() => onDelete(idx)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
