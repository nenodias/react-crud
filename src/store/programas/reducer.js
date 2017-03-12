import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    programsById: undefined,
    programsArray:[]
});

export default function reduce(state = initialState, action = {}){
    switch(action.type){
        case types.PROGRAMS_FETCHED:
            const retorno = state.merge({
                programsById:action.programsById,
                programsArray:action.programsArray
            });
            return retorno;
        default:
            return state;
    }
}

export function programsById(state){
    return state.programas.programsById;
}

export function programsArray(state){
    return state.programas.programsArray;
}
