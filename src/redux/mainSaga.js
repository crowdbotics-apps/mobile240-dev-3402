import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth3117Saga from '../features/EmailAuth3117/redux/sagas';
import EmailAuth3057Saga from '../features/EmailAuth3057/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth3117Saga,
EmailAuth3057Saga,
EmailAuthSaga,
    
  ]);
}