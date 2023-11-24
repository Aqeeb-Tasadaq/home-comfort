import React from 'react'
import Start from '../../../assets/images/home/after_banner/start.svg'
import dollar from '../../../assets/images/home/after_banner/dollar.svg'
import users from '../../../assets/images/home/after_banner/users.svg'

const OurFeatures = () => {
  return (
    <div className="page_width">
    <section className=" features">
      <div className="feature1">
        <img src={Start} alt="Service" />
        <p>24/7 Service</p>
      </div>
      <div className="feature2">
        <img src={dollar} alt="Service" />
        <p>Reasonable Rates</p>
      </div>
      <div className="feature3">
        <img src={users} alt="users" />
        <p>Experienced Team</p>
      </div>
    </section>
  </div>
  )
}

export default OurFeatures