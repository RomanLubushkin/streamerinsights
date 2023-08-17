/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

export const Seo: React.FC<{ title: string, description?: string }> = props => {
    const {title, description} = props;
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description}/>
        </>
    )
}
