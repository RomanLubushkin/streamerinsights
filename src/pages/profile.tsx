import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { useAuth } from "../hooks/use-auth"
import { SystemStatus } from "../components/system-status/system-status"
import { Header } from "../components/app/header/header"
import { Seo } from "../components/seo/seo"



export const Head: HeadFC = () => (
  <Seo
    title="Profile - streamerinsights.org"
    description="Personal insights"
  />
)

const Page: React.FC<PageProps> = () => {
  const { isAuth, isLoaded, signOut } = useAuth()

  return (
    <>
      <Header isAuth={isAuth} isLoaded={isLoaded} onSignOut={signOut} />
      <main className="p-4 md:p-6 lg:p-0 container mx-auto height-100vh flex-col text-stone-100">
        <SystemStatus
          isAuth={isAuth}
          isParticipant={false}
          isTwitchDataLoaderActive={true}
          isSteamDataLoaderActive={true}
          isRiotDataLoaderActive={false}
          className="mt-14"
        />
      </main>
    </>
  )
}

export default Page