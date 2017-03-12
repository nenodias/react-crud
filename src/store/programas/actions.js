import _ from 'lodash';
import * as types from './actionTypes';
import ProgramaService from '../../services/programaService';
import * as programasSelectors from './reducer';

export function fetchPrograms(){
    return async(dispatch, getState) => {
        try{
            const programsArray = await ProgramaService.getPrograms();
            const programsById = _.keyBy(programsArray, (program) => program.id);
            dispatch({  type:types.PROGRAMS_FETCHED, programsById, programsArray });
        }catch(error){
            console.error(error);
        }
    };
}
