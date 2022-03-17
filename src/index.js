import store from "./store";
import * as actionCreators from './actionCreators'




store.subscribe(() => {
    console.log("store changed", store.getState());
})


store.dispatch(actionCreators.addIssue('one issue added'))
store.dispatch(actionCreators.addIssue('second issue added'))
store.dispatch(actionCreators.addIssue('third issue added'))

store.dispatch(actionCreators.removeIssue(2))

store.dispatch(actionCreators.resolveIssue(3))



