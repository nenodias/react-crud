import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class FormPrograma extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form className="pure-form pure-form-aligned" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Programa</legend>
                    <div className="pure-control-group">
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" component="input" type="text"/>
                    </div>
                    <div className="pure-control-group">
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" component="input" type="text"/>
                    </div>
                    <div className="pure-control-group">
                        <label htmlFor="email">Email</label>
                        <Field name="email" component="input" type="email"/>
                    </div>
                    <div className="pure-controls">
                        <button className="pure-button pure-button-primary" type="submit">Submit</button>
                    </div>
                </fieldset>
            </form>
        );
    }
}

function mapStateToProps(state){
    return {};
}

const form = reduxForm({
    form: 'programaForm'
});

export default connect(mapStateToProps)(form(FormPrograma));
