import React, { Component } from 'react';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    }

    handleSubmit = (e) => {
		e.preventDefault();

		this.doSubmit();
	};

    handleChange = ({ currentTarget: input }) => {
		const data = { ...this.state.data };
		data[input.name] = input.value;
		const errors = { ...this.state.errors };
		const error = this.propertyValidate(input.name, input.value);

		if (error) errors[input.name] = error;
		else delete errors[input.name];

		this.setState({ data, errors: errors || {} });
	};

    propertyValidate(name, value) {
		if (name === 'username') {
            if(value.trim() === '') return 'Username must not be empty.';
        }

        if(name === 'password') {
            if(value.trim() === '') return 'Password must not be empty.';
        }

        return '';
    }
}
 
export default Form;