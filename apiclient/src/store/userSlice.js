import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";


const user_slice= createSlice({
    
    name: 'user',
    initialState: { user: null},
    reducers: {
        sign_user(state, action) {
            state.user = action.payload;
            localStorage.setItem('itoken',state.user.token)
            console.log(state.user.token);

            // localStorage.setItem('token',state.user['token'])
        },
     
        register_user() {
            console.log('reg');
        }
        // , Redirect(action){
        //     const navigate = useNavigate();
        //     navigate(action.payload);


        // }

    }
})

export const user_actions = user_slice.actions;
export default user_slice;