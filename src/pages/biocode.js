import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import Team from "../components/index/team"
import { StaticImage } from "gatsby-plugin-image"

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
      <Hero image={heroImage} title={"TJHSST BioCode"} subtitle={"A bioinformatics competition for high school and middle school students we host where students must solve biology-related problems efficiently using code."} centered={true} />
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
      <div className='mx-auto max-w-screen-lg py-20 pt-16 px-4 sm:px-8 md:px-12'>
        <div className="mb-12 text-center">
          <a href="https://docs.google.com/document/d/19cQ1VvRE0Z9xtxzWR5XcVMYZkPIIVlFh9izFqw-mGTA/edit?usp=sharing" target="_blank" className="bg-green-500 hover:bg-green-400 focus:outline-none focus:bg-green-400 px-6 py-4 border border-transparent text-lg font-medium rounded-md text-white transition duration-150 ease-in-out">Participant Guide</a>
        </div>
        <div className='mb-8'>
          <p className="text-gray-500 text-lg mb-3">
          TJHSST BioCode is an annual coding competition hosted by the Thomas Jefferson High School 
          for Science and Technology Bioinformatics Society. At BioCode, teams can participate in 1 of 2
          categories: 1) an algorithmic competitive programming style competition to solve the most 
          number of problems, within a wide range of difficulty (these problems are all related to 
          biology but require no previous biological knowledge and only minimal CS experience), or 2) 
          a project-based hackathon where students create and submit any bioinformatics-driven program 
          or style. Participation in BioCode is completely free, and we have more than <strong>$1,500 in prizes</strong>. 
          The competition will consist of an opening ceremony, programming time, workshops from 
          knowledgeable TJ students, guest lectures from professors in the field, and an awards ceremony.
          </p>
	{/* <p className="text-green-800 text-3xl py-8 mb-1 font-bold"> More Information about BioCode 2024 coming soon! </p> */}
        <p className="text-gray-500 text-lg mb-1 font-bold">
          Where: TJHSST, 6560 Braddock Road, Alexandria, VA 22312  
          </p>
          <p className="text-gray-500 text-lg font-bold">
          When: April 20, 10 AM - 7 PM EST
          </p>
        </div>
        <div className='mb-8'>
          <h1 className='font-extrabold text-4xl mb-4'>Structure</h1>
          <p className="text-gray-500 text-lg mb-3">
          For each competition category (competitive programming or hackathon), there will be three divisions: beginner (ex; middle schoolers), intermediate (ex: have not taken AP Computer Science, in high school), and advanced (have taken AP Computer Science). Prizes will be awarded to the top 3 teams in each division, for each category. If you currently do not have a team, we will pair you with other students in your division if you’d like. More information will be released soon, and given during opening ceremonies.
          </p>
          <p className="text-gray-500 text-lg mb-3">
          For competitive programming, teams of up to four will receive problems to complete (anything as simple as "translate this DNA into RNA" to "model equilibrium in this population"). Problems will cover all the biology you need - essentially, you will solve coding problems that happen to be about biology. Problems are designed so even with simple knowledge of Java/Python/C++/other languages, you will be able to do a significant amount of the problems. Descriptions of the programming problems, test cases, and point values are given in a packet. More information about problem submission will be given during opening ceremonies.
          </p>
          <p className="text-gray-500 text-lg">
          For the hackathon, an overview direction/focus will be presented during the opening ceremony, and teams of up to 4 can design any program (ex; website, mobile app, machine learning model) which uses bioinformatics techniques, in the context of the focus. As an example, the focus might look like: How can computer science be used to help diseased people?  
          </p>
        </div>
        <div className='mb-8'>
          <h1 className='font-extrabold text-4xl mb-4'>Workshops</h1>
          <p className="text-gray-500 text-lg">
          If you finish early, cannot solve any more problems, or are interested in learning something new, BioCode will have numerous workshops hosted by knowledgeable TJ students. In these lectures and activities, you can learn a new programming language, get assistance with solving one of the competition problems, or learn about how bioinformatics is applied in the real world. More information about these sessions will be given during opening ceremonies.
          </p>
        </div>
        <div className='mb-8'>
          <h1 className='font-extrabold text-4xl mb-4'>Prizes</h1>
          <p className="text-gray-500 text-lg">
          Each division will have individual prizes for the winners of their respective divisions. These prizes will include a cash prize and possible sponsored prizes (to be announced later).
          </p>
        </div>
        {/* <div>
          <h1 className='font-extrabold text-4xl mb-4'>Sponsors</h1>
          <p className="text-gray-500 text-lg mb-8">
            Our platinum sponsor is <a class="underline text-green-600" href='https://www.redteamcollegeplanning.com' target="_blank">Red Team College Planning</a>.
            Our gold sponsor is the <a class="underline text-green-600" href='https://www.vishnumurthyfoundation.org' target="_blank">Vishnu Murthy Foundation</a>.
            Our bronze sponsor is <a class="underline text-green-600" href='https://aopsacademy.org/' target="_blank">Art of Problem Solving (AoPS)</a>.
          </p>
          <StaticImage className="md:my-auto h-full mx-auto" src="../images/rtcp.png" alt="Red Team College Planning" placeholder="blurred" />
        </div> */}
      </div>
      <Team biocode={true} />
    </Layout>
  )
}

export default BiocodePage
