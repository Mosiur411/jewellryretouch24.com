import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'light',
        /* theme: 'dark', */
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'light' : 'light';
           /*  state.theme = state.theme === 'light' ? 'dark' : 'light'; */
        },
    },
});

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
