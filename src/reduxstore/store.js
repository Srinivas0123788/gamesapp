import { configureStore } from "@reduxjs/toolkit"
import {vasu} from "./reducers"
 
var store  = configureStore({
    reducer : vasu
})
 
export default store