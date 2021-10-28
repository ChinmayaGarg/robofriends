import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
// import ErrorBoundary from "../components/ErrorBoundary";

function App() {
  //   constructor() {
  //     super();
  //     this.state = {
  //       robots: [],
  //       searchfield: "",
  //     };
  //   }
  // We will recreate above code with the help of useState() hook.

  // inside the useState(), we give the initial state. In this case, a empty array.
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState("");

  //   const onSearchChange = (event) => {
  //     this.setState({ searchfield: event.target.value });
  //   };

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  //   componentDidMount() {
  //     fetch("https://jsonplaceholder.typicode.com/users") //fetching from the link, whatever the users are
  //       .then((response) => response.json()) // we get a response, then we converted into json using response.json
  //       .then((users) => {
  //         // getting the users
  //         this.setState({ robots: users }); // updating the users with setState
  //       });
  //   }

  // We will recreate above code with the help of useEffect() hook.
  //When 2nd parameter i.e. an array is empty, it is the shortcut to componentDidMount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        // getting the users
        setRobots(users);
      });
  }, []);

  // useEffect will run automatically every time the function App gets run
  //   In the useEffect we tell what the side effect is.

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">ROBOFRIENDS</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
