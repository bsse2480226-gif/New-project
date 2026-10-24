import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

export default function Studentview() {
    const {id} = useParams();
    
    const location = useLocation();
    
   
    const { name, email, major, gpa, phone } = location.state || {};
  return (
    <>
    <div className="Container mt-5">
        <div className="card">
            <div className="card-body">
                
            <h1>Student Profile</h1>
             <hr />

            <h2>Student Profile</h2>
                    <hr />

                    <p><strong>Student ID:</strong> {id}</p>
                    <p><strong>Name:</strong> {name || "N/A"}</p>
                    <p><strong>Program:</strong> {major || "N/A"}</p>
                    <p><strong>GPA:</strong> {gpa || "N/A"}</p>
                    <p><strong>Email:</strong> {email || "N/A"}</p>
                    <p><strong>Phone:</strong> {phone || "N/A"}</p>

                    <Link to="/students" className="btn btn-secondary mt-3">
                        Back to Students
                    </Link>
            </div>
        </div>
    </div>
    </>
  );
}
