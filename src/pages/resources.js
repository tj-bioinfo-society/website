import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import SEO from "../components/SEO"

const ResourcesPage = () => {
  const { heroImage } = useStaticQuery(graphql`
    query resourcesQuery {
      heroImage: file(relativePath: { eq: "index.jpg" }) {
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
      <SEO title="Resources" description="A list of resources compiled by TJ Bioinformatics Society that could help you get started in bioinformatics." />
      <Hero image={heroImage} title={"Resources"} />
      <div className='mx-auto max-w-screen-lg py-20 pt-20 px-4 sm:px-8 md:px-12'>
        <div className='mb-8'>
          <h2 className='mb-3 font-extrabold text-3xl'>Bioinformatics Resources</h2>
          <p className='text-md text-gray-500'>Here are some resources you can use to get started in the field of bioinformatics:</p>
          
          <h3 className='mt-3 font-extrabold text-xl'>Courses</h3>
          <ul className='text-gray-500 list-disc pl-8 my-2'>
            <li className='text-green-600 underline'><a href='https://ocw.mit.edu/courses/health-sciences-and-technology/hst-947-medical-artificial-intelligence-spring-2005/index.htm' target="_blank">MIT Medical AI Course (2005)</a></li>
            <li className='text-green-600 underline'><a href='https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-s897-machine-learning-for-healthcare-spring-2019/' target="_blank">MIT Machine Learning for Healthcare (2019)</a></li>
          </ul>
          
          <h3 className='mt-3 font-extrabold text-xl'>Books</h3>
          <ul className='text-gray-500 list-disc pl-8 my-2'>
            <li className='text-green-600 underline'><a href='http://userpages.fu-berlin.de/digga/p4b.pdf' target="_blank">Python for Biologists Book PDF (2013)</a></li>
            <li className='text-green-600 underline'><a href='http://englishonlineclub.com/pdf/Python%20for%20Bioinformatics%20(Second%20Edition)%20[EnglishOnlineClub.com].pdf' target="_blank">Python for Bioinformatics Book PDF (2018)</a></li>
          </ul>

          <h3 className='mt-3 font-extrabold text-xl'>Practice</h3>
          <ul className='text-gray-500 list-disc pl-8 my-2'>
            <li className='text-green-600 underline'><a href='http://hplgit.github.io/bioinf-py/doc/pub/html/index.html' target="_blank">Practice Python bioinformatics exercises</a></li>
            <li className='text-green-600 underline'><a href='http://rosalind.info/problems/locations/' target="_blank">Rosalind</a></li>
          </ul>
        </div>
        <div className=''>
          <h2 className='mb-3 font-extrabold text-3xl'>Machine Learning Resources</h2>
          <p className='text-md text-gray-500'>Here are some resources you can use to learn machine learning and deep learning, some of the fastest-growing fields of computer science that have made their mark on bioinformatics.</p>
          
          <h3 className='mt-3 font-extrabold text-xl'>Courses</h3>
          <ul className='text-gray-500 list-disc pl-8 my-2'>
            <li className='text-green-600 underline'><a href='https://deeplizard.com/learn/playlist/PLZbbT5o_s2xq7LwI2y8_QtvuXZedL6tQU' target="_blank">DeepLizard: Machine Learning & Deep Learning Fundamentals</a></li>
            <li className='text-green-600 underline'><a href='https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv' target="_blank">Stanford CNN for visual recognition lectures (2017)</a></li>
            <li className='text-green-600 underline'><a href='https://www.youtube.com/watch?v=UzxYlbK2c7E&list=PLF9D0C9213BEBF4B5&index=1' target="_blank">Stanford Machine Learning (2008)</a></li>
            <li className='text-green-600 underline'><a href='https://www.youtube.com/watch?v=TjZBTDzGeGg&list=PLUl4u3cNGP63gFHB6xb-kVBiQHYe_4hSi' target="_blank">MIT Artificial Intelligence course (2010)</a></li>
            <li className='text-green-600 underline'><a href='https://www.youtube.com/watch?v=rZufA635dq4&list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI&index=4' target="_blank">MIT Deep Learning (2020)</a></li>
            <li className='text-green-600 underline'><a href='https://www.youtube.com/watch?v=PPLop4L2eGk&list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN' target="_blank">Free version of Andrew Ng's Coursera ML course</a></li>
          </ul>
          
          <h3 className='mt-3 font-extrabold text-xl'>Books</h3>
          <ul className='text-gray-500 list-disc pl-8 my-2'>
            <li className='text-green-600 underline'><a href='http://d2l.ai/' target="_blank">Dive into Deep Learning</a></li>
          </ul>

          <h3 className='mt-3 font-extrabold text-xl'>Tutorials</h3>
          <ul className='text-gray-500 list-disc pl-8 my-2'>
            <li className='text-green-600 underline'><a href='https://github.com/enggen/Deep-Learning-Coursera/blob/master/Neural%20Networks%20and%20Deep%20Learning/Building%20your%20Deep%20Neural%20Network%20-%20Step%20by%20Step.ipynb' target="_blank">Building a basic neural network (Deep Learning - Coursera)</a></li>
            <li className='text-green-600 underline'><a href='https://deeplizard.com/learn/playlist/PLZbbT5o_s2xrwRnXk_yCPtnqqo4_u2YGL' target="_blank">DeepLizard Keras Tutorial</a></li>
            <li className='text-green-600 underline'><a href='https://www.tensorflow.org/tutorials/estimator/keras_model_to_estimator' target="_blank">Create an Estimator from a Keras model</a></li>
            <li className='text-green-600 underline'><a href='https://www.youtube.com/watch?v=wQ8BIBpya2k&list=PLQVvvaa0QuDfhTox0AjmQ6tvTgMBZBEXN&index=1' target="_blank">Basic CNN and RNN models</a></li>
            <li className='text-green-600 underline'><a href='https://tensorflow-object-detection-api-tutorial.readthedocs.io/en/latest/index.html' target="_blank">Tensorflow Object Detection tutorial</a></li>
          </ul>

          <h3 className='mt-3 font-extrabold text-xl'>Setup</h3>
          <ul className='text-gray-500 list-disc pl-8 my-2'>
            <li className='text-green-600 underline'><a href='https://www.tensorflow.org/install/pip' target="_blank">Pip TensorFlow Setup</a></li>
            <li className='text-gray-500'>Windows Ubuntu Setup with Conda</li>
            <ul className='text-gray-500 list-disc pl-8'>
              <li className='text-green-600 underline'><a href='https://towardsdatascience.com/setting-up-a-data-science-environment-using-windows-subsystem-for-linux-wsl-c4b390803dd' target="_blank">Jupyter Notebook setup</a></li>
              <li className='text-green-600 underline'><a href='https://medium.com/hugo-ferreiras-blog/using-windows-subsystem-for-linux-for-data-science-9a8e68d7610c' target="_blank">Jupyter Lab setup</a></li>
            </ul>
            <li className='text-gray-500'>Windows</li>
            <ul className='text-gray-500 list-disc pl-8'>
              <li className='text-green-600 underline'><a href='https://towardsdatascience.com/python-environment-setup-for-deep-learning-on-windows-10-c373786e36d1' target="_blank">Conda Windows setup with NVIDIA cuDNN</a></li>
            </ul>
            <li className='text-gray-500'>Mac</li>
            <ul className='text-gray-500 list-disc pl-8'>
              <li className='text-green-600 underline'><a href='https://medium.com/@MattGosden/set-up-your-mac-for-python-and-jupyter-using-virtual-environments-730bf2888e05' target="_blank">Pip setup</a></li>
              <li className='text-green-600 underline'><a href='https://towardsdatascience.com/get-your-computer-ready-for-machine-learning-how-what-and-why-you-should-use-anaconda-miniconda-d213444f36d6' target="_blank">Conda setup</a></li>
              <li className='text-green-600 underline'><a href='https://www.clairesaintdonat.com/musings/2018/11/20/setting-up-a-data-science-environment-on-osx' target="_blank">Complete data science environment</a></li>
            </ul>
            <li className='text-green-600 underline'><a href='https://www.tensorflow.org/tutorials/estimator/keras_model_to_estimator' target="_blank">Create an Estimator from a Keras model</a></li>
            <li className='text-green-600 underline'><a href='https://www.youtube.com/watch?v=wQ8BIBpya2k&list=PLQVvvaa0QuDfhTox0AjmQ6tvTgMBZBEXN&index=1' target="_blank">Basic CNN and RNN models</a></li>
            <li className='text-green-600 underline'><a href='https://tensorflow-object-detection-api-tutorial.readthedocs.io/en/latest/index.html' target="_blank">Tensorflow Object Detection tutorial</a></li>
          </ul>

          <h3 className='mt-3 font-extrabold text-xl'>Other</h3>
          <ul className='text-gray-500 list-disc pl-8 my-2'>
            <li className='text-green-600 underline'><a href='https://sgfin.github.io/learning-resources/' target="_blank">List of ML Resources</a></li>
            <li className='text-green-600 underline'><a href='https://www.freecodecamp.org/news/the-best-resources-i-used-to-teach-myself-machine-learning-part-1-292232d167/' target="_blank">The Best Resources I Used to Teach Myself Machine Learning</a></li>
            <li className='text-green-600 underline'><a href='https://ai.google/education' target="_blank">Google AI Education</a></li>
            <li className='text-green-600 underline'><a href='https://docs.conda.io/projects/conda/en/4.6.0/_downloads/52a95608c49671267e40c689e0bc00ca/conda-cheatsheet.pdf' target="_blank">Conda Cheat Sheet</a></li>
         </ul>
        </div>
      </div>
    </Layout>
  )
}

export default ResourcesPage