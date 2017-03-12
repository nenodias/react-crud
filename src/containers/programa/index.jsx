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
            <div className="index-programa">
                <h2>Listagem de Programas</h2>
                <ul>{listItems}</ul>
                <PagePrograma />
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
