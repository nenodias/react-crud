import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import PagePrograma from './page';

import * as programsActions from '../../store/programas/actions';
import * as programsSelectors from '../../store/programas/reducer';

class IndexPrograma extends Component {

    componentDidMount() {
        this.props.dispatch(programsActions.fetchPrograms());
    }

    render() {
        if(!this.props.rowsById){
            return this.renderLoading();
        }
        const programsArray = this.props.rowsArray;
        const listItems = programsArray.map((p) =>
          <li key={p.id}>{p.nome} - {p.valor}</li>
        );
        return (
            <div>
                <div className="header index-metatabela">
                    <h1>Listagem de Programas</h1>
                    <h2>Aqui as Programas são cadastradas</h2>
                </div>
                <div className="content">
                    <ul>{listItems}</ul>
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

function mapStateToProps(state){
    return {
        rowsById: programsSelectors.programsById(state),
        rowsArray: programsSelectors.programsArray(state)
    };
}

export default connect(mapStateToProps)(IndexPrograma);
