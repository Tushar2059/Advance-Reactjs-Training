function App() {
  let ref = { id: 2, username: "Tushar" };
  let list = ["pune", "mumbai", "nagpur", "kolkata", "delhi"];
  let ref1 = [
    { id: 1, username: "Tushar",active:true },
    { id: 2, username: "Rohit",active:true },
    { id: 3, username: "Amit",active:true },
    { id: 4, username: "Sandip",active:false },
  ];

  const delete1 = (e) => {
    console.log(e);
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
      {
        ref1.filter((item)=>item.active).map((item,index)=>
        (<h1>{item.id}. {item.username}</h1>)
        )
      }
    </div>
  );
}

export default App;
