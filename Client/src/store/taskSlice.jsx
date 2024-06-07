import { createSlice } from "@reduxjs/toolkit";


let initialState = {
  taskList: [],
  userName: "",
  currentUpdateTask: {},
  deleteTaskId: null
};

const taskSlice = createSlice({
  initialState: initialState,
  name: "taskManage",
  reducers: {


    getTask(state,action){
       
        const newData = action.payload.data
        state.taskList = newData
    

    },
    updateTask(state, action){

      const newData = action.payload
    
      return {...state, currentUpdateTask: {...newData}}
    },
    deleteTask(state, action){
      const deleteId = action.payload.id
        state.deleteTaskId = deleteId
      
    },

    addUserName(state, action){
      const name = action.payload.name
      state.userName = name
    }
  },
});

export default taskSlice;
const taskActions = taskSlice.actions
export {taskActions}