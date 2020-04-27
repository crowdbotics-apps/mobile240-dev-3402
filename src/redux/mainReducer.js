import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth3117Reducer from '../features/EmailAuth3117/redux/reducers';
import EmailAuth3057Reducer from '../features/EmailAuth3057/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth3117: EmailAuth3117Reducer,
EmailAuth3057: EmailAuth3057Reducer,
EmailAuth: EmailAuthReducer,

});