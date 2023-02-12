

 import React, { createContext, useReducer } from "react";
 import {UserType,userInitialState, userReducer } from '../reducers/userReducer';
 import { reducerActionType } from "../types/reducerActionType";
 import {ThemeType,themeInitialState,themeReducer} from '../reducers/themeReducer';



type initialStateType = {
    user: UserType;
    theme: ThemeType;
}

type ContextType  = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
 }

const initialState = {
    user: userInitialState,
    theme: themeInitialState
}

export const Context  = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});


const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action),
    theme: themeReducer(state.theme, action)
});



export const ContextProvider= ({ children }:React.PropsWithChildren) => {

    const [state, dispatch] = useReducer(mainReducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}}> 
            {children}
        </Context.Provider>
    );
}



// type ContextType = {
//     name: string;
//     age: number;
// }

// const initialState = {
//     name : 'Fábio',
//     age: 35
// }

// export const  Context = createContext<ContextType>(initialState);


// export const ContextProvider= ({ children }:React.PropsWithChildren) => {
//     return (
//         <Context.Provider value={initialState}> 
//             {children}
//         </Context.Provider>
//     );
// }


