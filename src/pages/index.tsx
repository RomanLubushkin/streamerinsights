import * as React from "react"
import {HeadFC, Link, PageProps} from "gatsby"

import {Seo} from "../components/seo"

type DataProps = {}

const Index: React.FC<PageProps<DataProps>> = () => (
    <div>
        <h1 className="text-5xl font-bold underline">
            Hello world!
        </h1>
        <Link to="/">Go back to the homepage</Link>
    </div>
)

export const Head: HeadFC<DataProps> = () => <Seo title="Using TypeScript"/>

export default Index
