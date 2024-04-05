import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import AboutClub from '../components/index/about'
import Team from '../components/index/team'
import SEO from "../components/SEO"
import teamData from '../data/team.json'

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
      <div className='bg-gray-100'>
        <div className='max-w-screen-lg mx-auto py-10 px-4 sm:px-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <div className='text-center sm:text-left'>
              <h1 className="text-2xl tracking-tight leading-8 sm:leading-none font-extrabold sm:text-3xl lg:text-4xl xl:text-5xl mb-4">
                Sign up now!
              </h1>
              <p className='text-md text-gray-500'>
                Fill out the registration form to register for TJ BioCode, where you can learn new skills and potentially win hundreds of dollars in prizes!
              </p>
            </div>
            <div className='flex justify-center sm:justify-end items-center sm:text-right'>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf6EQ7gTSJScIHGQL76p49kSHahlUhnZfQqK2Pgx_dbRYfuVA/viewform" target="_blank" className="bg-green-500 hover:bg-green-400 focus:outline-none focus:bg-green-400 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white transition duration-150 ease-in-out">Register</a>
            </div>
          </div>
        </div>
      </div>
	<AboutClub />
      <Team biocode={false} />
    </Layout>
  )
}

export default IndexPage
