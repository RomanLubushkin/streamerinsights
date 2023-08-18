import * as React from "react";
import {navigate, PageProps} from "gatsby";
import {processAuthResult} from "../../utils/auth";
import {AuthError} from "../../utils/auth.types";
import {Header} from "../../components/layout/header/header";
import {Footer} from "../../components/layout/footer/footer";
import {useAuth} from "../../hooks/use-auth";
import {getUserInfo, GetUserInfoError} from "../../api/get-user-info";
import {AppPath} from "../../utils/path";

type DataProps = {}

type State = {
    authErr?: AuthError;
    userInfoErr?: GetUserInfoError;
};

const Twitch: React.FC<PageProps<DataProps>> = () => {
    const [state, setState] = React.useState<State>({});
    const {setAccessToken, setUserInfo} = useAuth();

    React.useEffect(() => {
        const [token, authErr] = processAuthResult();
        if (authErr) {
            setState(state => ({...state, authErr}));
        } else if (!token) {
            setState(state => ({...state, authErr: AuthError.UNKNOWN_ERROR}));
        } else {
            setAccessToken(token);
            getUserInfo(token).then(([userInfo, userInfoErr]) => {
                if (userInfoErr) {
                    setState(state => ({...state, userInfoErr}));
                } else if (!userInfo) {
                    setState(state => ({...state, userInfoErr: GetUserInfoError.UNKNOWN}));
                } else {
                    setUserInfo(userInfo);
                    navigate(AppPath.PROFILE.replace(':login', userInfo.login));
                }
            })
        }
    }, []);

    return (
        <>
            <Header/>
            <main className="h-24 text-stone-100">
                {!state.authErr && !state.userInfoErr && (
                    <div className="text-lg">Loading</div>
                )}
                {state.authErr === AuthError.CORRUPTED_RESPONSE && (
                    <div className="text-lg">Corrupted response</div>
                )}
                {state.authErr === AuthError.ACCESS_DENIED && (
                    <div className="text-lg">Access Denied</div>
                )}
                {(state.authErr === AuthError.UNKNOWN_ERROR) && (
                    <div className="text-lg">Unknown Error</div>
                )}
                {(state.userInfoErr === GetUserInfoError.UNKNOWN) && (
                    <div className="text-lg">Unknown Error</div>
                )}
                {(state.userInfoErr === GetUserInfoError.INTERNAL_ERROR) && (
                    <div className="text-lg">Internal Error</div>
                )}
                {(state.userInfoErr === GetUserInfoError.UNAUTHORIZED) && (
                    <div className="text-lg">Unauthorized Error</div>
                )}
            </main>
            <Footer/>
        </>
    )
}

export default Twitch