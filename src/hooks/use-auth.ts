import * as React from "react";
import {UserInfo} from "../types/user-info";
import {
    getAccessToken,
    getUserInfo,
    setAccessToken as storageSetAccessToken,
    setUserInfo as storageSetUserInfo
} from "../utils/local-storage";

type AuthState = {
    isLoaded: boolean;
    userInfo?: UserInfo;
    accessToken?: string;
};

export const useAuth = () => {
    const [state, setState] = React.useState<AuthState>({isLoaded: false});

    const setAccessToken = React.useCallback((value: string) => {
        setState(state => ({...state, accessToken: value}));
        storageSetAccessToken(value);
    }, []);


    const setUserInfo = React.useCallback((value: UserInfo) => {
        setState(state => ({...state, userInfo: value}));
        storageSetUserInfo(value);
    }, []);

    React.useEffect(() => {
        setState(state => ({...state, isLoaded: true, userInfo: getUserInfo(), accessToken: getAccessToken()}))
    }, [])

    return {
        isLoaded: state.isLoaded,
        isAuth: !!state.userInfo,
        userInfo: state.userInfo,
        setUserInfo,
        accessToken: state.accessToken,
        setAccessToken
    };
}