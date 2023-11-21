export function vasu(state  = {
    isloggedin : false
} , action ){
  switch(action.type){
 
    case "LOGIN_SUCCESS" : {
                    // modify the stat of store
                    state = {...state}
                    state.isloggedin = true
                    return state
    }
    default : return state
  }
}