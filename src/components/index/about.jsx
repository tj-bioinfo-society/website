import React from 'react'

const AboutClub = () => {
  return (
    <div className='mx-auto max-w-screen-xl py-20 pt-20 px-4 sm:px-8 md:px-12'>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="sm:col-span-1">
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight'>What We Do</h1>
        </div>
        <div className="sm:col-span-2">
          <p className="text-gray-500 text-lg">
            TJ Bioinformatics Society was established to inform students about the rapidly-growing
            field of bioinformatics. From analyzing large genomes to synthesizing novel 
            drugs for proteins, bioinformatics is becoming more important in the medical and biological 
            research industry and could be used to save lives. Our club hopes to introduce you to 
            bioinformatics through <strong>informative lectures, hand-on lectures, and fun games</strong>. 
            No previous knowledge is required, so join us during <strong>Wednesday B block in Room 251</strong>!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutClub