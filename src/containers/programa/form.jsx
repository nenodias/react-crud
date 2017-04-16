import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';

class FormPrograma extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form className="pure-form pure-form-aligned" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Programa</legend>
                    <div className="pure-control-group">
                        <label htmlFor="id">Id</label>
                        <Field name="id" component="input" type="text"/>
                    </div>
                    <div className="pure-control-group">
                        <label htmlFor="nome">Nome</label>
                        <Field name="nome" component="input" type="text"/>
                    </div>
                    <div className="pure-control-group">
                        <label htmlFor="valor">Valor</label>
                        <Field name="valor" component="input" type="text"/>
                    </div>
                    <div className="pure-controls">
                        <button className="pure-button pure-button-primary" type="submit">Enviar</button>
                    </div>
                </fieldset>
            </form>
        );
    }
}

function mapStateToProps(state){
    const form = _.get(state, 'form.programaForm');
    const entidade = _.get(state,'programas.entidade');
    if(form && entidade ){
        //A Cada Submit salva recarrega os dados do form
        _.set(state,'form.programaForm.values.id', entidade.id );
        _.set(state,'form.programaForm.values.nome', entidade.nome );
        _.set(state,'form.programaForm.values.valor', entidade.valor );

        //Após isso apaga o state de entidade, para que só entre aqui após os submits
        let novo = state.programas.merge({
            entidade:null
        });
        state.programas = novo;
    }
    return {};
}

const form = reduxForm({
    form: 'programaForm'
});

export default connect(mapStateToProps)(form(FormPrograma));
