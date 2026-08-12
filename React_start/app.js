import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement used here
//React Element
const heading = React.createElement("h1", {}, "Hello I am Arya!");

// jSX with one line
const jsxHeading = <h1>Hello I am Arya(from Jsx)!</h1>;

//jsx with multi line
const jsxHeading2 = (
  <h1 className="heading">Hello I am Arya with multilines</h1>
);

//React Component
//Class Component
//Functional Component

//Functional Component
// Way 1
const HeadingComponent = () => {
  return <h1 className="headings">Hello Arya from Functional Component</h1>;
};
// Way 2 : this way is used mostly
const HeadingComponent2 = () => (
  <h1 className="headingss">Hello Arya From Functional Component</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//Component Composition
const Title = () => <h1>Hello Arya</h1>;

// implementing javascript in jsx using {}
const number = 1000;
const HeadingComponent3 = () => {
  return (
    <div id="container">
      <Title />
      <Title></Title>
      {Title()}
      {number} 
      <h1>This is your Space!!</h1>
    </div>
  );
};


//jsx React Element
//root.render(jsxHeading2);


//Normal Functional Component Render
// root.render(<HeadingComponent />);


//Componenet Composition
root.render(<HeadingComponent3 />)
