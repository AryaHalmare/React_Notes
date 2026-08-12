import React from "react";
import ReactDOM from "react-dom/client";


// const parent = React.createElement("div" ,
//      {id : "parent" } ,
//     React.createElement("div" , {id : "child" } , 
//         React.createElement("h1" , {} , "I am H1 Tag")
//     ));

// const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(parent);


// Output :::
{/* <div id="root">
    <div id = "parent">
        <div id = "child">
            <h1>I am H1 tag</h1>
        </div>
    </div>
</div> */}

// const parent = React.createElement("div" ,
//       {id : "parent" } ,
//     React.createElement("div" , {id : "child" } , [
//         React.createElement("h1" , {} , "I am H1 Tag") ,
//         React.createElement("h2" , {} , "I am H2 tag")]
//     ));

//     const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(parent);

// Output :::
{/* <div id="root">
    <div id = "parent">
        <div id = "child">
            <h1>I am H1 tag</h1>
            <h2>I am H2 tag</h2>
        </div>
    </div>
</div> */}

const parent = React.createElement("div" ,
      {id : "parent" } ,
    [React.createElement("div" , {id : "child" } , [
        React.createElement("h1" , {} , "I am H1 Tag") ,
        React.createElement("h2" , {} , "I am H2 tag")] ,
        
    ) , React.createElement("div" , {id : "child" } , [
        React.createElement("h1" , {} , "I am H1 Tag") ,
        React.createElement("h2" , {} , "I am H2 tag")] ,
        
    )]);

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);

// Output :::
{/* <div id="root">
    <div id = "parent">
        <div id = "child1">
            <h1>I am H1 tag</h1>
            <h2>I am H2 tag</h2>
        </div>
        <div id = "child2">
            <h1>I am H1 tag</h1>
            <h2>I am H2 tag</h2>
        </div>
    </div>
</div> */}


// const heading = React.createElement("h1" , {} , "Hello world from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Attribute to h1 tag

// const heading = React.createElement("h1" , {id :"heading" } , "Hello world from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading) //it will be object