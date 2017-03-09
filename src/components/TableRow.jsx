import _ from 'lodash';
import React from 'react';

export default class TableRow extends React.Component {

    render() {
        const backgroundColor = this.props.selected ? '#c0f0ff' : '#fff';
        return (
            <tr
            style={{ backgroundColor }}
            onClick={ this.onClick.bind(this) }
            >
            {this.props.children}
            </tr>
            );
    }


    onClick(){
        this.props.onClick(this.props.rowId);
    }
}
