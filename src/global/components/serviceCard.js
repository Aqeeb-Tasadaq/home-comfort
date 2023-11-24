import React from 'react'
import AC from '../../assets/images/home/ac.jpeg'

const ServiceCard = ({img, title}) => {
  return (
    <div className="product_card">
              <div className="product_img">
                <img src={img? img : AC} alt="Ac" />
              </div>
              <div className="over_lay">
                <div className="text_section">
                  <h2>{title? title : "AC Cleaning"}</h2>
                  <button>Book now</button>
                </div>
              </div>
            </div>
  )
}

export default ServiceCard