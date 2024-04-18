import React from 'react'
import Navbar from '../component/Navbar'
import Newhero from '../component/newhero'
import AboutPage from '../component/NewAbout'
import Services from '../component/NewServices'
import TrueAI from '../component/TrueAI'
import SolutionsComponent from '../component/NewSolutions'
import NewVision from '../component/NewVision'
import BlogSection from '../component/NewBlog'
import ClientSection from '../component/NewClient'
import NewFigures from '../component/NewFigures'
import FAQSection from '../component/NewQuestions'



const HomePage = () => {
  return (
    <div>
      
      <Newhero />
      <AboutPage/>
      <Services />
      <TrueAI />
      <SolutionsComponent />
      <NewVision />
      <BlogSection />
      <ClientSection />
      <NewFigures />
      <FAQSection />
      
      <Navbar />
         
    </div>
  )
}

export default HomePage
