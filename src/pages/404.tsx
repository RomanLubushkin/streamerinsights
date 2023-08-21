import * as React from "react"

import { Seo } from "../components/seo/seo"
import { Header } from "../components/marketing/header/header"
import { Footer } from "../components/marketing/footer/footer"
import { HeadFC, Link, PageProps } from "gatsby"
import { AppPath } from "../utils/path"

export const Head: HeadFC = () => <Seo title="404: Not Found" />

const NotFoundPage: React.FC<PageProps> = () => (
  <>
    <Header />
    <main className="height-100vh flex items-center justify-center text-stone-100">
      <div>
        <h1 className="text-center text-lg text-2xl font-semibold">404: Not Found</h1>
        <p className="text-lg text-center font-medium">You just hit a route that doesn&#39;t exist... try <Link className="text-stone-400 underline hover:text-stone-100" to={AppPath.ROOT}>start over</Link>.</p>
      </div>
    </main>
    <Footer />
  </>
)

export default NotFoundPage
