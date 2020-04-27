import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth3123Reducer from '../features/EmailAuth3123/redux/reducers';
import EmailAuth3121Reducer from '../features/EmailAuth3121/redux/reducers';
import EmailAuth3120Reducer from '../features/EmailAuth3120/redux/reducers';
import EmailAuth3118Reducer from '../features/EmailAuth3118/redux/reducers';
import EmailAuth3057Reducer from '../features/EmailAuth3057/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth3123: EmailAuth3123Reducer,
EmailAuth3121: EmailAuth3121Reducer,
EmailAuth3120: EmailAuth3120Reducer,
EmailAuth3118: EmailAuth3118Reducer,
EmailAuth3057: EmailAuth3057Reducer,

});