import * as React from "react"
import { navigate, PageProps } from "gatsby"
import { processAuthResult } from "../../utils/auth"
import { AuthError } from "../../utils/auth.types"
import { Header } from "../../components/marketing/header/header"
import { Footer } from "../../components/marketing/footer/footer"
import { useAuth } from "../../hooks/use-auth"
import { getUserInfo, GetUserInfoError } from "../../api/get-user-info"
import { AppPath } from "../../utils/path"

type DataProps = {}

type State = {
  authErr?: AuthError;
  userInfoErr?: GetUserInfoError;
};

const Twitch: React.FC<PageProps<DataProps>> = () => {
  const [state, setState] = React.useState<State>({})
  const { setAccessToken, setUserInfo } = useAuth()

  React.useEffect(() => {
    const [token, authErr] = processAuthResult()
    if (authErr) {
      setState(state => ({ ...state, authErr }))
    } else if (!token) {
      setState(state => ({ ...state, authErr: AuthError.UNKNOWN_ERROR }))
    } else {
      setAccessToken(token)
      getUserInfo(token).then(([userInfo, userInfoErr]) => {
        if (userInfoErr) {
          setState(state => ({ ...state, userInfoErr }))
        } else if (!userInfo) {
          setState(state => ({ ...state, userInfoErr: GetUserInfoError.UNKNOWN }))
        } else {
          setUserInfo(userInfo)
          navigate(AppPath.PROFILE)
        }
      })
    }
  }, [])

  return (
    <>
      <Header />
      <main className="height-100vh flex items-center justify-center text-stone-100">
        {!state.authErr && !state.userInfoErr && (
          <div className="text-lg text-2xl font-semibold">Loading...</div>
        )}
        <div className="text-lg text-2xl font-semibold text-red-400">
          {state.authErr === AuthError.CORRUPTED_RESPONSE && (
            <span>Corrupted response</span>
          )}
          {state.authErr === AuthError.ACCESS_DENIED && (
            <span>Access Denied</span>
          )}
          {(state.authErr === AuthError.UNKNOWN_ERROR) && (
            <span>Unknown Error</span>
          )}
          {(state.userInfoErr === GetUserInfoError.UNKNOWN) && (
            <span>Unknown Error</span>
          )}
          {(state.userInfoErr === GetUserInfoError.INTERNAL_ERROR) && (
            <span>Internal Error</span>
          )}
          {(state.userInfoErr === GetUserInfoError.UNAUTHORIZED) && (
            <span>Unauthorized Error</span>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Twitch