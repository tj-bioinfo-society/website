import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import AboutClub from '../components/index/about'
import Team from '../components/index/team'
import SEO from "../components/SEO"

const IndexPage = () => {
  const { heroImage } = useStaticQuery(graphql`
    query indexPageQuery {
      heroImage: file(relativePath: { eq: "index.jpg" }) {
				childImageSharp {
					fluid(quality: 95) {
						...GatsbyImageSharpFluid
					}
				}
			}
    }
  `)
  return (
    <Layout>
      <SEO />
      <Hero image={heroImage} title={"TJ Bioinformatics Society"} subtitle={"Exploring the revolutionary intersection of biology, computer science, and mathematics."} />
      <AboutClub />
      <Team />
    </Layout>
  )
}

export default IndexPage
