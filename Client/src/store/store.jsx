import {configureStore} from "@reduxjs/toolkit"
import taskSlice from "./taskSlice"
const store = configureStore({
    reducer: {"taskManage": taskSlice.reducer}
})

export default store