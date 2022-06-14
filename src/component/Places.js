function Places({ places, onDelete }) {
  return (
    <ul>
      {places.map((place, idx) => {
        return (
          <li key={idx}>
            {place} <button onClick={() => onDelete(idx)}>X</button>
          </li>
        );
      })}
    </ul>
  );
}

export default Places;
