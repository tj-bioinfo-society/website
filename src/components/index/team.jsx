import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import teamData from '../../data/team.json'
import boardData from '../../data/board.json'

const Team = ({biocode}) => {
  const { teamImages } = useStaticQuery(graphql`
    query {
      teamImages: allFile(filter: { relativeDirectory: { eq: "team" } }) {
        edges {
          node {
            childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  quality: 95
                  width: 192
                  height: 192
                )
            }
            name
          }
        }
      }
    }
  `)
  return (
    <div className="bg-green-50">
      <div className='mx-auto max-w-screen-xl py-20 px-4 sm:px-8 md:px-12 text-center'>
        <div className="grid grid-cols-1 gap-8">
          <div className='mb-2'>
            <h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight'>{biocode ? "Board" : "Officers"}</h1>
          </div>
          <div className='justify-center grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {(biocode ? boardData : teamData).map(member => {
              return (
                <div className='justify-center items-center flex flex-col mx-auto'>
                  <GatsbyImage
                      className="rounded-full shadow-md w-70 h-70 px-auto"
                      image={getImage(
                        teamImages.edges.find(
                          x => x.node.name === member.img
                        ).node.childImageSharp.gatsbyImageData
                      )}
                      alt={member.name}
                    />
                  <p className='text-lg font-bold mt-4'>{member.name}</p>
                  <p className='text-sm'>{member.position}</p>
                </div>
              )
            })}
          </div>
        </div>
        <p className='mt-8 text-base'>If you have any questions, please send us an email at <a className='text-green-500 font-semibold' href="mailto:tjbioinformatics@gmail.com">tjbioinformatics@gmail.com</a>!</p>
      </div>
    </div>
  )
}

export default Team