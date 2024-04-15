import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../api/types';
import { RootState } from '../store';



const initialState: IUserState = {
    token: null,
    user: null,
}

export const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        setUser: (state,action: PayloadAction<IUserState>) =>{
            if (action.payload.token) {
                localStorage.setItem("token", action.payload.token);
                state.token = action.payload.token;
            }
            state.user = action.payload.user
        },
        logout: (state) => {
            localStorage.clear();
            state.user = null;
            state.token = null
        }
    },
})

export default userSlice.reducer
export const selectUser = (state: RootState) => state.userState;
export const { logout, setUser } = userSlice.actions;