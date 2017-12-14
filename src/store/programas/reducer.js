import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    id: undefined,
    programsById: undefined,
    programsArray:[]
});

export default function reduce(state = initialState, action = {}){
    switch(action.type){
        case types.PROGRAMS_FETCHED:
            return state.merge({
                programsById:action.programsById,
                programsArray:action.programsArray
            });
        case types.PROGRAM_SAVED:
            return state.merge({
                entidade:action.retorno,
            });
        case types.PROGRAM_OPENED:
            return state.merge({
                entidade:action.retorno,
            });
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

export function entidadeProgram(state){
    return state.programas.entidade;
}
