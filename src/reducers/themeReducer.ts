import { reducerActionType } from '../types/reducerActionType';



//Criacação do type

export type ThemeType = {
   status: 'dark' | 'light';
}


export const themeInitialState:  ThemeType = {
    status: 'light'
}

//Criação do reducer

export const themeReducer = (state: ThemeType, action: reducerActionType ) =>{
    
    switch(action.type){
        case 'CHANGE_STATUS':
            return {...state, status: action.payload.status};
        break;  
           
    }
    
    return state;
}