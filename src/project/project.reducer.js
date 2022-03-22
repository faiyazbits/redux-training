import * as actionTypes from './project.actionType';


export default function projectReducer(state = [], action) {

    switch (action.type) {
        case actionTypes.ADD_PROJECT:           
            return {
                ...state,
                projects : action.payload.description
            }

            case actionTypes.REMOVED_PROJECT:
                return {
                  projects:  state.projects.filter(project =>project.id != action.payload.id)
                } 

                case actionTypes.SELCTE_PROJECT:
                    return {
                        ...state,
                        currentProject : state.projects.filter(project =>project.id == action.payload.id)
                    }
               
 
        default:
            return state;
    }
}