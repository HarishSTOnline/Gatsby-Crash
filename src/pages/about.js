import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

const aboutPage = function about() {
    return (
        <Layout>
            <SEO title="about-page"></SEO>
            <div>
                <h1>This is an ABOUT page!</h1>
                <p>Let's build something simple!</p>
            </div>
        </Layout>
    )
}

export default aboutPage;
