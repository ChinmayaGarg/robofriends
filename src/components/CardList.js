import React from "react";
import Card from "./Card";
// import { robots } from "./robots"; //We have to destructure anything that we are importing if the file from which we are importing is not using "export default".
//Eg: Card.js uses export default and hence we imported Card function without destructuring it, but robots.js didn't use "export default" hence we have to destructure the thing we are importing and in this case robots.

// As robots.js file export robots using "export" instead of "export default".
// Which means that file can have multiple exports, but here in robots.js, though we
// have used "export" only and not "export default", we still are have one export,
// exporting robots object.

// console.log(robots);

// const CardList = ({ robots }) => {
//   console.log(robots);
//   return (
//     <section>
//       {robots.map((prop) => {
//         console.log(prop);
//         // <Card id={prop.id} name={prop.name} email={prop.email} />;
//         return (
//           <section>
//             <Card id={prop.id} name={prop.name} email={prop.email} />
//           </section>
//         );
//       })}
//     </section>
//   );
// };

// const CardList = ({ robots }) => { // object is always passed in curly braces in ES6
//   const CardComponent = robots.map((prop, i) => {
//     return (
//       // <section>
//       <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
//       // </section>
//     );
//   });
//   return <section>{CardComponent}</section>;
// };

// function CardList() {
//   return (
//     <div>
//       {robots.map((prop) => {
//         return <Card id={prop.id} name={prop.name} email={prop.email}></Card>;
//       })}
//     </div>
//   );
// }

const CardList = ({ robots }) => {
  return (
    <section>
      {robots.map((prop) => (
        <Card key={prop.id} id={prop.id} name={prop.name} email={prop.email} />
      ))}
    </section>
  );
};

export default CardList;
