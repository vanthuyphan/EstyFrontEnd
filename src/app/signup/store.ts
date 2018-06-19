import {IUser} from "./user";
import {SIGNUP} from "./actions";

export interface IUserState {
    user: IUser;
}
export const INITIAL_STATE: IUserState = {
    user: null,
}
export function rootReducer(state: IUserState, action): IUserState {
    switch (action.type) {
        case SIGNUP:
    }
    return state;
}