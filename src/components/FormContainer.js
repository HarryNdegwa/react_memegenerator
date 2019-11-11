import React from "react";

import FormComponent from "./FormComponent";


class FormContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: '20',
            destination: 'nairobi',
            diet: '',
            gender: '',
            isKenyan: true,
            isForeigner: true
        }

        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
        let target = e.target;
        let name = target.name;

        let value = target.type === "checkbox" ? target.checked : target.value;

        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <FormComponent changeHandler={this.changeHandler} state={this.state} />
        )
    }
}















export default FormContainer;