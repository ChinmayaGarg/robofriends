import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { robots } from "../robots";

// Props never change, these are always just inputs that we get and we never modify the props.

// State is simply an object, an object that  describes the application.

// State here which describes our application is "robots" and whatever is given as input in the SearchBox

// State can be changed change because of which we will be able to change the inputs and hence, we will be able
// to change what "robots" array means(what gets displayed)

// A parent feeds state into a child component and as soon as component receives the state, it becomes a
// property, that child component can never change.

// The parent just tells what the state is and the child receives it as the robots.

class App extends Component {
  constructor() {
    super();
    this.state = {
      // this is not allowed before(without) super, super calls the constructor of the component
      // Now wehave our states i.e. robots and searchfield. These states describe our apps. State usually lives in the parent component.
      robots: robots, // Here, robots does not need to be the part of the state because robots is never changing
      // We just make new array filteredRobots and pass this in the components. But we here kept in the state
      // just to show as an example.
      searchfield: "",
    };
  }

  // The below function will give error because we are calling below function in SearchBox.js and we are also using this in the below
  // function which assumes this to be input in SearchBox.js because it is called there, but input does not have state.robots .
  // Hence, use arrow function to solve this.

  // Rule of thumb: Anytime you make your own methods on a component and use "this." syntax, then make arrow functions.

  //   onSearchChange(event) {
  //     console.log(event);
  //     const filteredRobots = this.state.robots.filter((robots) => {
  //       return robots.name
  //         .toLowerCase()
  //         .includes(this.state.searchfield.toLowerCase());
  //     });
  //   }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    // In react we never use this.searchfield =
    // console.log(event);
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      // filter works kind of like map, by iterating over evey instance of the object/array
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
      // If the name of the robots in lowercase includes anything from the searchfileld in lowercase(does the comparison)
      // then only return robots that return to true this
    });
    console.log(filteredRobots);
    return (
      <div className="tc">
        <h1>ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {/* We use this because it is an object */}
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

//
//
//
// const state = {
//   robots: robots,
//   searchfield: "",
// };

// function App() {
//   return (
//     <div className="tc">
//       <h1>ROBOFRIENDS</h1>
//       <SearchBox />
//       <CardList robots={robots} />
//     </div>
//   );
// }

export default App;
