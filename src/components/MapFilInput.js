import React, { useRef } from "react";

const MapFilInput = () => {
  var ref2 = useRef();

  let ref = { id: 2, username: "Tushar" };
  let list = ["pune", "mumbai", "nagpur", "kolkata", "delhi"];
  let ref1 = [
    { id: 1, username: "Tushar", active: true },
    { id: 2, username: "Rohit", active: true },
    { id: 3, username: "Amit", active: true },
    { id: 4, username: "Sandip", active: false },
  ];

  const handle = (e) => {
    console.log(ref2.current.value);
  };

  return (
    <div>
      <p>{ref.username}</p>
      <h2>Map</h2>
      {list.map((item, index) => (
        <>
          <h3>{item}</h3>
        </>
      ))}

      <h2>Filter and Map chaining</h2>
      {ref1
        .filter((item) => item.active)
        .map((item, index) => (
          <h1>
            {item.id}. {item.username}
          </h1>
        ))}

      <h1>Getting values from input field</h1>

      <input ref={ref2} type="text"></input>
      <input type="submit" value="enter name" onClick={handle}></input>
    </div>
  );
};

export default MapFilInput;
