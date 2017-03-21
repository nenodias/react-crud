import React, { Component } from 'react';
import FilterLink from './FilterLink';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    menuClicked: false,
    styleMenu:{},
    menuButtonStyle:{}
});

export default class AppBar extends Component{

    constructor() {
        super();
        this.state = initialState;
    }

    showMenu(){
        const menuClicked = ! this.state.menuClicked;
        if(menuClicked){
            this.setState(
                initialState.merge({
                    menuClicked: menuClicked,
                    styleMenu:{marginLeft:0},
                    menuButtonStyle:{left:'150px'}
                })
            );
        }else{
            this.setState(
                initialState.merge({
                    menuClicked: menuClicked,
                    styleMenu:{},
                    menuButtonStyle:{}
                })
            );
        }
        console.log(this.state);
    }

    render(){
        const items = this.props.menu;
        const menuItems = items.map((item,index) =>
          <li key={index}><FilterLink key={index} className="pure-menu-link" filter={item.url}>{item.titulo}</FilterLink></li>
        );

        return (
            <div id="layout">
                <a style={this.state.menuButtonStyle} onClick={this.showMenu.bind(this)} id="menuLink" className="menu-link">
                    <span></span>
                </a>
                <div id="menu" style={this.state.styleMenu}>
                    <div className="pure-menu">
                        <a className="pure-menu-heading">CRUD</a>
                        <ul className="pure-menu-list">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                <div id="main">
                    {this.props.children}
                </div>
            </div>
        );
    }

}
