import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class IndexPrograma extends Component {
    render() {
        return (
            <div>
                <div className="header index-metatabela">
                    <h1>Listagem de Relações</h1>
                    <h2>Aqui as Relações são cadastradas</h2>
                </div>
                <div className="content">

                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
    };
}

export default connect(mapStateToProps)(IndexPrograma)
