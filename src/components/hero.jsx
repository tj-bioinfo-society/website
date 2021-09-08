import React from 'react'
import BackgroundImage from 'gatsby-background-image'

const Hero = ({ image, title, subtitle }) => {
  return subtitle ? (
    <BackgroundImage 
      className="bg-no-repeat bg-center bg-cover overflow-hidden px-8 text-white h-screen"
      fluid={[
        "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55))",
        image.childImageSharp.fluid,
    ]}>
      <div className="non-index-hero mt-40 px-4 sm:mt-32 sm:px-6 md:mt-36 lg:mt-36 xl:mt-44">
        <h1 className="text-4xl tracking-tight max-w-3xl leading-10 font-extrabold text-gray-100 sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl mb-8">{title}</h1>
        <h4 className="mt-3 text-base font-bold max-w-md text-green-100 sm:text-lg md:mt-5 md:text-xl md:max-w-xl">{subtitle}</h4>
      </div>
    </BackgroundImage>
  ) : (
    <BackgroundImage 
      className="bg-no-repeat bg-center bg-cover overflow-hidden px-8 text-white"
      style={{
        height: "60vh",
      }}
      fluid={[
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        image.childImageSharp.fluid,
    ]}>
      {/* <div className="non-index-hero mt-40 mx-auto max-w-screen-xl px-4 sm:mt-32 sm:px-6 md:mt-36 lg:mt-36 xl:mt-44">
        <h1 className="text-5xl tracking-tight leading-10 font-extrabold text-gray-100 sm:text-6xl sm:leading-none md:text-7xl mb-8">{title}</h1>
      </div> */}
      {/* <div className="non-index-hero mt-40 px-4 sm:mt-32 sm:px-6 md:mt-36 lg:mt-36 xl:mt-44"> */}
      <div className="non-index-hero px-4 sm:px-6" style={{marginTop: "25vh"}}>
        <h1 className="text-5xl text-center md:text-left tracking-tight max-w-3xl leading-10 font-extrabold text-gray-100 sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl mb-8">{title}</h1>
      </div>
    </BackgroundImage>
  )
}

export default Hero