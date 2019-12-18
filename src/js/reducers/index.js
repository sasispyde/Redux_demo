import { ADD_ARTICLES } from '../constants/index'

const initialState = {
	articles : []
};

function rootReducer(state = initialState, action){
	if(action == 'ADD_ARTICLES'){
		return {
			...state,
			articles:action.payload
		}
	}
	return state;
}

export default rootReducer;