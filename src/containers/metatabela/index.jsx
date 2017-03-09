import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class IndexPrograma extends Component {
    render() {
        return (
            <div className="index-metatabela">
                <h2>Listagem de Metatabelas</h2>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
    };
}

export default connect(mapStateToProps)(IndexPrograma)
