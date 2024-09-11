import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import { useState } from 'react'
import Hero from "../components/hero"
import Layout from "../components/layout"
import LectureData from '../data/lectures.json'
import SEO from "../components/SEO"

const LecturesPage = () => {
  const { heroImage } = useStaticQuery(graphql`
    query lecturesQuery {
      heroImage: file(relativePath: { eq: "index.jpg" }) {
				childImageSharp {
					fluid(quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
    }
  `)
  const years = ['2021-22', '2022-23', '2023-24', '2024-25'].reverse()
  const [curYear,setCurYear] = useState(years[0])

  return (
    <Layout>
      <SEO title="Lectures" description="Past lectures from TJ Bioinformatics Society covering a wide range of topics in bioinformatics." />
      <Hero image={heroImage} title={"Lectures"} />
      <div className='mx-auto max-w-screen-lg py-20 pt-20 px-4 sm:px-8 md:px-12'>
        <h1 className='font-extrabold text-3xl mb-6'>{years[0]} Lectures</h1>
        <div className='flex space-x-6 justify-center flex-wrap'>
          {years.map(year => {
            return (
              <button className={"font-bold px-8 py-4 mb-6 text-black rounded-md shadow " + (year == curYear ? "bg-green-100 hover:bg-green-100" : "bg-gray-100 hover:bg-gray-200")} onClick={() => setCurYear(year)}>{year}</button>
            )
          })}
        </div>
        <div className="overflow-scroll max-w-screen-lg no-scrollbar">
          <table className="w-full bg-transparent mx-auto rounded-md" style={{minWidth: "500px"}}>
            <thead>
              <tr className='bg-gray-600 text-white'>
                <th className='py-3 text-left px-4 border-b-2 border-b-gray-600'>Date</th>
                <th className='py-3 text-left px-4 border-b-2 border-b-gray-600'>Title</th>
                <th className='py-3 text-left px-4 border-b-2 border-b-gray-600'>Author</th>
              </tr>
            </thead>
            <tbody>
              {LectureData[curYear].map(lecture => {
                return (
                  <tr className='hover:bg-gray-100'>
                    <td className='border-b-2 py-3 px-4'>{lecture.date}</td>
                    <td className='border-b-2 py-3 px-4'>
                      {lecture.url ? (
                        <a className='text-green-500 font-semibold' href={lecture.url} target={lecture.url ? "_blank" : "#"}>{lecture.title}</a>
                      ) : (
                        <p className='text-green-500 font-semibold cursor-pointer'>{lecture.title}</p>
                      )}
                    </td>
                    <td className='border-b-2 py-3 px-4'>{lecture.author}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        
      </div>
    </Layout>
  )
}

export default LecturesPage
