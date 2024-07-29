// const heading = React.createElement("h2" , {id:"heading" , xyz:"abc"} , "Hello from React.JS")

// const root = ReactDOM.createRoot(document.querySelector("#root"))

// root.render(heading)



const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" },
    [React.createElement("h1", {}, "Hey I am h1 tag"), React.createElement("h2", {}, "hey i am siblings heading"), ]) , 

    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "Hey I am h1 tag"), React.createElement("h2", {}, "hey i am siblings heading"), ]) 
     )


console.log(parent)


const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(parent)


