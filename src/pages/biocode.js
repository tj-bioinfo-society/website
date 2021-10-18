import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import Team from "../components/index/team"

const BiocodePage = () => {
  const { heroImage } = useStaticQuery(graphql`
    query biocodeQuery {
      heroImage: file(relativePath: { eq: "biocode.jpg" }) {
				childImageSharp {
					fluid(quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
    }
  `)
  return (
    <Layout>
      <SEO title="BioCode" description="The BioCode competition is a prorgramming competition held by TJ Bioinformatics Society that challenges students to solve biology-related problems efficiently using code." />
      <Hero image={heroImage} title={"TJHSST BioCode"} subtitle={"A bioinformatics competition for high school students we host where students must solve biology-related problems efficiently using code."} centered={true} />
      <div className='mx-auto max-w-screen-lg py-20 pt-20 px-4 sm:px-8 md:px-12'>
        <div className='mb-8'>
          <p className="text-gray-500 text-lg">
            TJHSST BioCode is an annual coding competition hosted by TJ Bioinformatics Society. At BioCode,
            teams compete with each other to solve the most number of problems, within a wide range of difficulty. 
            hese problems are all related to biology but require no previous biological knowledge and only minimal CS experience. 
            The competition is completely free and we have free food and over $1500 in prizes. The competition will consist of an 
            opening ceremony, 4 hours of programming time, and an awards ceremony.
          </p>
        </div>
        <div className='mb-8'>
          <h1 className='font-extrabold text-4xl mb-4'>Structure</h1>
          <p className="text-gray-500 text-lg mb-3">
            There will be three divisions: middle school, basic high school (have not taken AP 
            Computer Science), and advanced high school (have taken AP Computer Science). Prizes 
            will be awarded to the top 10 middle school teams, and top 3 high school teams in each 
            category. If you currently do not have a team, we will pair you with other students in 
            your division. More information will be given during opening ceremonies.
          </p>
          <p className="text-gray-500 text-lg">
            During the programming portion, teams of up to four will receive a set of problems 
            to complete (anything as simple as "translate this DNA into RNA" to "model equilibrium 
            in this population"). The problems will explain all the biology you need to solve the 
            problem - essentially, you will solve coding problems that happen to be about biology. 
            We designed the problem set so that, even with simple knowledge of Java/Python/C++/other 
            languages, you will be able to do a significant amount of the problems. More difficult 
            problems will be worth more points. Descriptions of the programming problems, test cases, 
            and point values are given in a packet. More information about problem submission will be 
            given during opening ceremonies.
          </p>
        </div>
        <div className='mb-8'>
          <h1 className='font-extrabold text-4xl mb-4'>Workshops</h1>
          <p className="text-gray-500 text-lg">
            In addition, if you finish early, cannot solve any more problems, or are interested in 
            learning something new, then there are sessions during those 4 hours of programming where 
            you can learn more about bioinformatics, programming, or the school TJHSST. In these 
            lectures, you can learn a new programming language, get assistance with solving one of 
            the competition problems, or learn about how bioinformatics is applied in the real world. 
            More information about these sessions will be given during opening ceremonies.
          </p>
        </div>
        <div className='mb-8'>
          <h1 className='font-extrabold text-4xl mb-4'>Prizes</h1>
          <p className="text-gray-500 text-lg">
            Each division will have individual prizes for the winners of their respective divisions. 
            These prizes will include a cash prize and possible sponsored prizes (to be announced later).
          </p>
        </div>
        <div>
          <h1 className='font-extrabold text-4xl mb-4'>Sponsors</h1>
          <p className="text-gray-500 text-lg">
            To be announced later.
          </p>
        </div>
      </div>
      <Team biocode={true} />
    </Layout>
  )
}

export default BiocodePage