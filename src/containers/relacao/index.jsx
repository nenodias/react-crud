import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class IndexPrograma extends Component {
    render() {
        return (
            <div className="index-relacao">
                <h2>Listagem de Relações</h2>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
    };
}

export default connect(mapStateToProps)(IndexPrograma)
