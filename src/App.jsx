import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilterLink from './components/FilterLink';

import IndexMetaTabela from './containers/metatabela/index';
import IndexPrograma from './containers/programa/index';
import IndexRelacao from './containers/relacao/index';

class Vazio extends Component {
    render() {
        return (<div></div>);
    }
}

class App extends Component {
    render() {
        const param = this.props.params;
        const Root = getComponent(param.cadastro);
        return (
            <div className="App">
                <FilterLink filter="metatabela">
                    MetaTabelas
                </FilterLink>
                <FilterLink filter="programa">
                    Programas
                </FilterLink>
                <FilterLink filter="relacao">
                    Relações
                </FilterLink>
                <Root />
            </div>
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

function mapStateToProps(state){
    return {
    };
}

export default connect(mapStateToProps)(App);
