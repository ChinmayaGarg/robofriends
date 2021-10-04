import React from "react";
import "tachyons";

const Card = ({ name, email, id }) => {
  return (
    // <h1></h1> This line creates an error because we need to return only one thing under
    // this return and in this case we are returning one div element. Returning this h1
    // element will make function to return 2 things, therefore generating an error.
    <div className="bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5">
      <h2>{`RoboFriend ${id}`}</h2>
      <img
        src={`https://robohash.org/njkcdqe${id}?200x200`} //String inside `` is called template stirng. Hence we have to wrap it in the curly braces, because it is a JS expression.
        alt="robots"
      ></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
