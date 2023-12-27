import "./App.css";

import List from "./components/List";

function App() {
  const list = [
    {
      id: 1,
      name: "Mahesh",
      age: 25,
      city: "Delhi",
    },
    {
      id: 2,
      name: "Ajay",
      age: 23,
      city: "Jaipur",
    },
    {
      id: 3,
      name: "Gautam",
      age: 34,
      city: "Chennai",
    },
    {
      id: 4,
      name: "Jayesh",
      age: 27,
      city: "Mathura",
    },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Lists are mentioned belowed</h1>
      <List listItems={list} />
    </>
  );
}

export default App;
