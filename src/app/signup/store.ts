import { IUser } from './user';
import { SIGNUP} from './actions';
import API from '../API/API';

export interface IUserState {
    user: IUser;
}
export const INITIAL_STATE: IUserState = {
    user: null,
}
export function rootReducer(state: IUserState, action): IUserState {
    switch (action.type) {
        case SIGNUP:
            API.register("Van", "vanthuyphan@gmail.com", "123456");
            console.log("In Logging in");

    }
    return state;
}