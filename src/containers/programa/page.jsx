import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormPrograma from './form';

class PagePrograma extends React.Component {
    handleSubmit(values){
        console.log(values);
    }
    render() {
        //console.log(this);
        return (
            <FormPrograma value={{firstName: 'Michael', lastName: 'Jackson'}} onSubmit={this.handleSubmit} />
        );
    }
}

function mapStateToProps(state){
    return {
    };
}


export default connect(mapStateToProps)(PagePrograma);
