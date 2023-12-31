import React from 'react'
import ServiceCard from '../../../global/components/serviceCard'
import {serviceData} from'../../../global/utils/data'

const OurServices = () => {
  return (
    <section className="services_section">
        <div className="page_width">
          <h2>Explore our <span>Services</span></h2>
          <div className="services_card">
            {serviceData.map((item, index)=>{
                return(
                    <ServiceCard img={item.img} title={item.title} />
                )
            })}
            </div>
        </div>
      </section>
  )
}

export default OurServices