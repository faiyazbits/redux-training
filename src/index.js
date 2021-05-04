import store from "./store";
import * as actions from "./action";

// single state object for entire application ( single source of truth)
// you should not directly mutate or update the store (changes are made with pure functions)
// state is readonly

// dispatch an action
// reducer will get called with current state and current action, will return state
// components are notified (subscribe)
// components will take the latest and update themselves

// issue tracking
// add issue, remove issue and mark issue as resolved

// design the store


console.log("store",store);
console.log("current state",store.getState());


store.subscribe(() => {
    console.log("store changed", store.getState());
})


store.dispatch(actions.addIssue("newBug"));
store.dispatch(actions.addIssue("new bug2"));
store.dispatch(actions.addIssue("new bug3"));
store.dispatch(actions.addIssue("new bug4"));
store.dispatch(actions.addIssue("new bug5"));
store.dispatch(actions.addIssue("new bug6"));


store.dispatch(actions.removeIssue(2));
store.dispatch(actions.removeIssue(4));
 
store.dispatch(actions.resolvedIssue(1));
store.dispatch(actions.resolvedIssue(3));


// exercise one : refactor action creator for remove issue
// exercise two : implmenet bug resolution state management