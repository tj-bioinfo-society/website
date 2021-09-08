import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404 Not Found" />
      <div className="bg-gray-800 shadow w-full h-16"></div>
      <div className='text-center items-center justify-center flex flex-col' style={{marginTop: "10%"}}>
        <h1 className='text-2xl tracking-tight leading-10 font-extrabold sm:text-4xl sm:leading-none md:text-5xl mb-8'>Error 404: Page Not Found</h1>
        <Link to="/" className='inline bg-green-500 mb-4 hover:bg-green-400 focus:outline-none focus:bg-green-400 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white transition duration-150 ease-in-out'>Return Home</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
