import { useState } from "react";
import "./App.css";
import Places from "./component/Places";

function App() {
  const [place, setPlace] = useState("");
  const [places, setPlaces] = useState(["서울숲", "경의선숲길", "한강공원"]);
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
  const filteredArray = places.filter((place) => location === place);
  const onSearch = (event) => {
    event.preventDefault();
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
      <Places
        places={location.length > 0 ? filteredArray : places}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
