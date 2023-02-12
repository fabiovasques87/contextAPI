import { reducerActionType } from '../types/reducerActionType';



//Criacação do type

export type UserType = {
    name: string;
    age: number
}


export const userInitialState: UserType = {
    name: '',
    age: 0
}

//Criação do reducer

export const userReducer = (state: UserType, action: reducerActionType ) =>{
    
    switch(action.type){
        case 'CHANGE_NAME':
            return {...state, name: action.payload.name};
        break;  
        case 'CHANGE_AGE':
            return {...state, age: action.payload.age};
        break;    
    }
    
    return state;
}