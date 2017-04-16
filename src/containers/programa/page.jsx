import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormPrograma from './form';

import * as programsActions from '../../store/programas/actions';
import * as programsSelectors from '../../store/programas/reducer';

class PagePrograma extends React.Component {
    handleSubmit(values){
        if(values.id){
            values.id = +values.id;
        }
        if(values.valor){
            values.valor = +values.valor;
        }
        this.props.dispatch(programsActions.saveProgram(values));
    }
    render() {
        return (
            <FormPrograma value={ {} } onSubmit={this.handleSubmit.bind(this)} />
        );
    }
}

function mapStateToProps(state){
    return {
        entidade:programsSelectors.entidadeProgram(state)
    };
}


export default connect(mapStateToProps)(PagePrograma);
