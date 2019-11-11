import React from "react";

import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import Footer from "./Footer";



class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <MemeGenerator />
                <Footer />
            </div>
        )
    }
}
























































// import Todo from "./Todo";
// import todos from "./todosData";

// import FormContainer from "./FormContainer";


// class App extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             loading: false,
//             character: {}
//         }
//         // this.clickHandler = this.clickHandler.bind(this);
//     }

//     componentDidMount() {
//         this.setState({
//             loading: true
//         })

//         fetch("https://swapi.co/api/people/1")
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({
//                     character: data,
//                     loading: false
//                 })
//             });

//         // this.setState({

//         // })
//     }


//     // clickHandler() {
//     //     this.setState(prevState => {
//     //         return ({ isLoggedIn: !prevState.isLoggedIn })
//     //     });
//     // }

//     render() {
//         return (
//             <div>
//                 {/* <p>{this.state.isLoggedIn ? "Logged in" : "Logged out"}</p>
//                 <button onClick={this.clickHandler}>{this.state.isLoggedIn ? 'Log Out' : 'Log In'}</button> */}
//                 {this.state.loading ? "Loading..." : <p>{this.state.character.name}</p>}
//             </div>
//         )
//     }
// }



// class App extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             myTodos: todos
//         };
//         this.changeHandler = this.changeHandler.bind(this);
//     }

//     changeHandler(id) {
//         this.setState(prevState => {
//             let updatedTodos = prevState.myTodos.map(todo => {
//                 // console.log(this);
//                 if (todo.id === id) {
//                     todo.completed = !todo.completed
//                 }
//                 return todo;
//             });

//             return {
//                 myTodos: updatedTodos
//             };
//         });
//     }

//     render() {
//         let data = this.state.myTodos.map(todo => <Todo key={todo.id} id={todo.id} todo={todo.todo} completed={todo.completed} changeHandler={this.changeHandler} />)
//         return (
//             <div>
//                 {data}
//             </div>
//         )
//     }
// }









// class App extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             fisrtName: '',
//             lastName: '',
//             bio: "",
//             isFriendly: true,
//             gender: 'male',
//             favColor: 'blue'
//         }
//         this.changeHandler = this.changeHandler.bind(this);
//     }


//     changeHandler(e) {
//         // let { name, value, type, checked } = e.target;

//         // type === "checkbox" ? this.setState(prevState => {
//         //     return ({
//         //         isFriendly: !prevState.isFriendly
//         //     })
//         // }) : this.setState({ [name]: value });

//         let target = e.target;
//         // the ternary opeartor always returns a value
//         // if (target.type === "checkbox") {
//         //     console.log(target.checked);
//         //     console.log(this.state.isFriendly);
//         // }
//         let value = target.type === "checkbox" ? target.checked : target.value;

//         let name = target.name;

//         this.setState({
//             [name]: value
//         });

//     }

//     render() {
//         return (
//             <div>
//                 <h3>My Form</h3>
//                 <form>
//                     <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.changeHandler} />
//                     <br />
//                     <br />
//                     <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.changeHandler} />
//                     <button>Submit</button>
//                 </form>
//                 <br />
//                 <br />
//                 <p>{this.state.firstName} {this.state.lastName}</p>
//                 <textarea name="bio" value={this.state.bio} onChange={this.changeHandler} />
//                 <p>{this.state.bio}</p>
//                 <div>
//                     <input type="checkbox" checked={this.state.isFriendly} name="isFriendly" onChange={this.changeHandler} />
//                     isFriendly
//                 </div>
//                 <input type="radio" checked={this.state.gender === "male"} name="gender" value="male" onChange={this.changeHandler} />
//                 <br />
//                 <input type="radio" checked={this.state.gender === "female"} name="gender" value="female" onChange={this.changeHandler} />

//                 <p>You are {this.state.gender}</p>

//                 <p>Choose your favorite color</p>
//                 <select value={this.state.favColor} name="favColor" onChange={this.changeHandler}>
//                     <option value="green">Green</option>
//                     <option value="blue">Blue</option>
//                     <option value="cream">Cream</option>
//                     <option value="purple">Purple</option>
//                 </select>

//                 <p>Your favorite color is: {this.state.favColor}</p>
//             </div>
//         )
//     }
// }


// function App() {
//     return (
//         <div>
//             <FormContainer />
//         </div>
//     )
// }




// import todos from "./todosData";
// import Todo from "./Todo";


// class based components

// class App extends React.Component {

//     render() {
//         return (
//             <div>
//                 <Todo />
//             </div>
//         )
//     }

// }

// map returns  a new array


export default App;



