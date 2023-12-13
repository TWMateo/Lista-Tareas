import { configureStore } from "@reduxjs/toolkit"
import listaTareasSlice from "../features/ListaTareasSlice"


export const store = configureStore ({
    reducer:{
        listaT: listaTareasSlice
    }
})

