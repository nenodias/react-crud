import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import PagePrograma from './page';

class IndexPrograma extends Component {
    render() {
        return (
            <div className="index-programa">
                <h2>Listagem de Programas</h2>
                <PagePrograma />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
    };
}

export default connect(mapStateToProps)(IndexPrograma);
