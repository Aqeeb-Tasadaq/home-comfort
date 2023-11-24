import React from 'react'
import Banner from './features/banner'
import OurFeatures from './features/ourFeatures'
import About from './features/about'
import CompanyAuthority from './companyAuthority'
import Emergency  from './emergency'
import OurServices from './features/ourServices'

const HomePage = () => {
  return (
    <div>
    <Banner/>
    <OurFeatures/>
    <OurServices/>
    <About/>
    <CompanyAuthority/>
    <Emergency/>
    </div>
  )
}

export default HomePage