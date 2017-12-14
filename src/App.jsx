import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from './components/AppBar';

import IndexMetaTabela from './containers/metatabela/index';
import IndexPrograma from './containers/programa/index';
import IndexRelacao from './containers/relacao/index';

class Vazio extends Component {
    render() {
        return (<div></div>);
    }
}

const Menu =  [
    {titulo: "MetaTabelas",url:"metatabela"},
    {titulo: "Programas",url:"programa"},
    {titulo: "Relações",url:"relacao"}
];

class App extends Component {
    render() {
        const param = this.props.params;
        const Root = getComponent(param.cadastro);
        return (
            <AppBar menu={Menu}>
                <Root id={param.id} />
            </AppBar>
        );
    }
}

function getComponent(parametro){
    switch (parametro) {
        case 'metatabela':
            return IndexMetaTabela;
        case 'programa':
            return IndexPrograma;
        case 'relacao':
            return IndexRelacao;
        default:
            return Vazio;
    }
}

function mapStateToProps(state, ownProps){
    return {
    };
}

export default connect(mapStateToProps)(App);
