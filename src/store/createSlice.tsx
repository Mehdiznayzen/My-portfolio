import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState : {
        darkMode : false,
        color : '#4AC0FF'
    },
    reducers:{
        handleDarkMode(state){
            state.darkMode = !state.darkMode
            if(document.body.classList.contains('white')){
                document.body.classList.remove('white')
                state.color = '#4AC0FF'
            }else{
                document.body.classList.add('white')
                state.color = '#EFFDFF'
            }
            console.log('jsf')
        }
    }
})

export const actions = cartSlice.actions
