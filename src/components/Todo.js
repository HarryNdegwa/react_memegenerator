import React from "react";

// import Child from "./Child";
// import Conditional from "./Conditional";

// import profile from "../prof.jpg"
// import todos from "./todosData";

// class Todo extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//         this.clickHandler = this.clickHandler.bind(this);
//     }

//     clickHandler() {
//         this.setState((prevState) => {
//             return {
//                 // ++ returns a new val
//                 count: prevState.count + 1
//             }
//         })
//     }



//     render() {
//         var styles = { fontSize: '100px' }
//         return (
//             <div>
//                 <h1 style={styles}>{this.state.count}</h1>
//                 <button onClick={this.clickHandler}>Double</button>
//             </div>
//         )
//     }
// }


// class Todo extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             count: 1,
//             isLoading: true
//         }
//         this.clickHandler = this.clickHandler.bind(this);
//     }

//     clickHandler() {
//         this.setState(function (prevState) {
//             return {
//                 count: prevState.count * 2
//             }
//         })
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({
//                 isLoading: false
//             })
//         }, 3000);
//     }

//     render() {
//         var styles = { fontSize: '100px' }
//         return (
//             <div style={styles}>
//                 {/* <h1>{this.state.count}</h1>
//                 <button onClick={this.clickHandler}>Square</button>
//                 <Child count={this.state.count} /> */}
//                 {this.state.isLoading ? <h1>Loading...</h1> :
//                     <Conditional />}
//             </div>
//         )
//     }
// }

// function Todo(props) {
//     return (
//         <div>
//             <input type="checkbox" checked={props.completed} onChange={e => props.changeHandler(props.id)} />
//             <p>{props.todo}</p>
//         </div>
//     )
// }

class Todo extends React.Component {

    componentDidMount() {
        console.log("Todo did Mount!");
    }

    render() {
        return (
            <div>
                <input type="checkbox" checked={this.props.completed} onChange={e => this.props.changeHandler(this.props.id)} />
                {this.props.completed ? <p style={{ color: '#ccc', textDecoration: 'line-through' }}>{this.props.todo}</p> : <p>{this.props.todo}</p>}

            </div>
        )
    }

}

export default Todo;