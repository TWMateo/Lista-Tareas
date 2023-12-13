import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listaTareas: [
  ],
};

export const ListaTareasSlice = createSlice({
    name:"ListaTareas",
    initialState,
    reducers:{
        añadirTarea:(state,action) => {
            state.listaTareas.push(action.payload)
        }
    }
})

export const { añadirTarea } = ListaTareasSlice.actions
export default ListaTareasSlice.reducer
