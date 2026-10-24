import React from 'react'
import Header from './Header'
import Footer from './Footer'
import StudentCard from './StudentCard'

export default function StudentProfile() {
  return (
    <>
    <Header/>
  <div className="container my-4">
        <div className="row g-4">
          <div className="col-12 col-sm-6 col-md-3">
            <StudentCard id="1" name="yasir idrees khan" email="yasir@gmail.com" major="BSCS" gpa="3.5" phone="1234567890" />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <StudentCard id="2" name="yasir idrees khan" email="yasir@gmail.com" major="BSCS" gpa="3.5" phone="1234567890" />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <StudentCard id="3" name="yasir idrees khan" email="yasir@gmail.com" major="BSCS" gpa="3.5" phone="1234567890" />
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <StudentCard id="4" name="yasir idrees khan" email="yasir@gmail.com" major="BSCS" gpa="3.5" phone="1234567890" />
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}
