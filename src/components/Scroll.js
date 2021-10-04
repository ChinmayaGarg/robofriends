import React from "react";

const Scroll = (props) => {
  //   console.log(props);
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "533px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

// Scroll is not a self closing-component, it is a wrapper component.
// So, how do we tell Scroll to render whatever is inside you?
// We have learnt about props and state, but there is one more thing called children.
// These are automatically passed as props in the component and we can access them using props.children.

// One can style in JSX using double curly braces {{}}. Outer {} says that this is a JS expression,
// and inner {} says that it is returning an object.
