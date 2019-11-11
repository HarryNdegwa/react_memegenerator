import React from "react";

function FormComponent(props) {
    return (
        <div>
            <form>
                <input type="text" name="firstName" placeholder="First Name" value={props.state.firstName} onChange={props.changeHandler} />
                <br />
                <br />
                <input type="text" name="lastName" placeholder="Last Name" value={props.state.lastName} onChange={props.changeHandler} />
                <br />
                <br />
                <input type="text" name="age" placeholder="Age" value={props.state.age} onChange={props.changeHandler} />
                <br />
                <br />
                <div>
                    <input type="radio" name="gender" value="male" onChange={props.changeHandler} /><span>Male</span>
                    <br />
                    <input type="radio" name="gender" value="female" onChange={props.changeHandler} /><span>Female</span>
                </div>
                <br />
                {/* <input type="text" name="destination" placeholder="Destination" value={props.state.destination} onChange={props.changeHandler} /> */}
                <p>Please select your destination</p>
                <select value={props.state.destination} name="destination" onChange={props.changeHandler}>
                    <option value="Nairobi">Nairobi</option>
                    <option value="Nakuru">Nakuru</option>
                    <option value="Mombasa">Mombasa</option>
                    <option value="Kisumu">Kisumu</option>
                </select>
                <br />
                <br />
                <input type="checkbox" checked={props.state.isKenyan} onChange={props.changeHandler} name="isKenyan" />Kenyan
                    <br />
                <input type="checkbox" checked={props.state.isForeigner} onChange={props.changeHandler} name="isForeigner" />Foreigner
                    <br />
                <br />
                <input type="text" name="diet" placeholder="Dietary restriction" value={props.state.diet} onChange={props.changeHandler} />
                <br />
                <br />
                <br />
                <br />
                <button>Submit</button>
                <hr style={{ margin: "10px 0px", color: "#000" }} />
            </form>

            <h1>Entered Information</h1>
            <div style={{ textAlign: 'left' }}>
                <p>Your name:{props.state.firstName} {props.state.lastName}</p>
                <br />
                <p>Your age:{props.state.age} years</p>
                <br />
                <p>Your gender:{props.state.gender}</p>
                <br />
                <p>Your destination:{props.state.destination}</p>
                <br />
                <p>Your dietary restrictions:{props.state.diet}</p>
            </div>
        </div>
    )
}



export default FormComponent;