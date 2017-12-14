import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import PagePrograma from './page';

import * as programsActions from '../../store/programas/actions';
import * as programsSelectors from '../../store/programas/reducer';

class IndexPrograma extends Component {

    componentDidMount() {
        this.props.dispatch(programsActions.fetchPrograms());
    }

    findById(id){
        this.props.dispatch(programsActions.loadProgram(id));
    }

    render() {
        if(!this.props.rowsById){
            return this.renderLoading();
        }
        if(this.props.id !== undefined){
            this.findById(this.props.id);
        }
        const programsArray = this.props.rowsArray;
        const header = (
        <div>
            <div className="pure-g">
                <div className="pure-u-1-3">
                    Nome
                </div>
                <div className="pure-u-1-3">
                    Valor
                </div>
                <div className="pure-u-1-3">
                    &nbsp;
                </div>
            </div>
        </div>);

        const listItems = programsArray.map((p) =>
          (<div key={p.id} className="">
            <div className="pure-g">
                <div className="pure-u-1-3">
                    {p.nome}
                </div>
                <div className="pure-u-1-3">
                    {p.valor}
                </div>
                <div className="pure-u-1-3">
                    <button onClick={this.findById.bind(this, p.id)} className="pure-button">Editar</button>
                </div>
            </div>
          </div>)
        );
        return (
            <div>
                <div className="header index-metatabela">
                    <h1>Listagem de Programas</h1>
                    <h2>Aqui as Programas são cadastradas</h2>
                </div>
                <div className="content">
                    <div>{header}{listItems}</div>
                    <PagePrograma />
                </div>
            </div>
        );
    }

    renderLoading(){
        return (
            <p>Loading...</p>
            );
    }

}

function mapStateToProps(state, ownProps){
    return {
        id: ownProps.id,
        rowsById: programsSelectors.programsById(state),
        rowsArray: programsSelectors.programsArray(state)
    };
}

export default connect(mapStateToProps)(IndexPrograma);
