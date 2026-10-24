import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';

export default function StudentForm() {
    const [formdata, setformdata] = useState({
        name: '',
        email: '',
        phone: '',
        program: '',
        semester: '',
        gender: '',
        address: '',
        terms: false
    });
    
    const [error, seterror] = useState('');
    const [success, setSuccess] = useState('');

    function handlechange(event) {
        const { name, value, type, checked } = event.target;
        setformdata({
            ...formdata,
            [name]: type === 'checkbox' ? checked : value
        });
        seterror('');
        setSuccess('');
    }

    function handleSubmit(event) {
        event.preventDefault();
        seterror('');
        setSuccess('');

        // Validation checks with 'return' to stop execution if an error is found
        if (!formdata.name) {
            seterror("Please enter the name");
            return;
        }
        if (formdata.name.length < 3) {
            seterror("Name must be at least 3 characters.");
            return;
        }
        if (!formdata.email) {
            seterror("Please enter the email");
            return;
        }
        if (!formdata.phone) {
            seterror("Please enter the phone number");
            return;
        }
        if (!formdata.program) {
            seterror("Please select the program");
            return;
        }
        if (!formdata.semester) {
            seterror("Please select the semester");
            return;
        }
        if (!formdata.gender) {
            seterror("Please select the gender");
            return;
        }
        if (!formdata.address) {
            seterror("Please enter the address");
            return;
        }
        if (!formdata.terms) {
            seterror("Please accept the terms and conditions");
            return;
        }

        console.log("Student information", formdata);
        setSuccess("Student registered successfully!");

       
        setformdata({
            name: '',
            email: '',
            phone: '',
            program: '',
            semester: '',
            gender: '',
            address: '',
            terms: false
        });
    }

    return (
        <>
            <Header />
            <div className="container my-4">
                <div className="card shadow-sm">
                    <div className="card-body p-4">
                        <h2 className="mb-4">Student Registration</h2>
                        
                        <form onSubmit={handleSubmit}>
                            
                            {/* Full Name */}
                            <div className='mb-3'>
                                <label className="form-label">Full Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    className='form-control' 
                                    placeholder='Enter your name' 
                                    value={formdata.name} 
                                    onChange={handlechange} 
                                />
                            </div>

                            {/* Email */}
                            <div className='mb-3'>
                                <label className="form-label">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    className='form-control' 
                                    placeholder='Enter your email' 
                                    value={formdata.email} 
                                    onChange={handlechange} 
                                />
                            </div>

                            {/* Phone */}
                            <div className='mb-3'>
                                <label className="form-label">Phone Number</label>
                                <input 
                                    type="number" 
                                    name="phone" 
                                    className='form-control' 
                                    placeholder='Enter your phone' 
                                    value={formdata.phone} 
                                    onChange={handlechange} 
                                />
                            </div>
                            
                            {/* Program */}
                            <div className="mb-3">
                                <label className="form-label">Program</label>
                                <select
                                    name="program"
                                    className="form-select"
                                    value={formdata.program}
                                    onChange={handlechange}
                                >
                                    <option value="">Select Program</option>
                                    <option value="Computer Science">Computer Science</option>
                                    <option value="Software Engineering">Software Engineering</option>
                                    <option value="Information Technology">Information Technology</option>
                                </select>
                            </div>

                            {/* Semester */}
                            <div className="mb-3">
                                <label className="form-label">Semester</label>
                                <select
                                    name="semester"
                                    className="form-select"
                                    value={formdata.semester}
                                    onChange={handlechange}
                                >
                                    <option value="">Select Semester</option>
                                    <option value="1">Semester 1</option>
                                    <option value="2">Semester 2</option>
                                    <option value="3">Semester 3</option>
                                    <option value="4">Semester 4</option>
                                    <option value="5">Semester 5</option>
                                    <option value="6">Semester 6</option>
                                    <option value="7">Semester 7</option>
                                    <option value="8">Semester 8</option>
                                </select>
                            </div>
                            
                            {/* Gender */}
                            <div className="mb-3">
                                <label className="form-label d-block">Gender</label>
                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        className="form-check-input"
                                        checked={formdata.gender === 'Male'}
                                        onChange={handlechange}
                                    />
                                    <label className="form-check-label">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        className="form-check-input"
                                        checked={formdata.gender === 'Female'}
                                        onChange={handlechange}
                                    />
                                    <label className="form-check-label">Female</label>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <textarea
                                    name="address"
                                    className="form-control"
                                    rows="4"
                                    placeholder="Enter your address"
                                    value={formdata.address}
                                    onChange={handlechange}
                                />
                            </div>

                            {/* Terms */}
                            <div className="mb-3">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        className="form-check-input"
                                        checked={formdata.terms}
                                        onChange={handlechange}
                                    />
                                    <label className="form-check-label">
                                        I agree to the terms and conditions.
                                    </label>
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )}

                            {/* Success Message */}
                            {success && (
                                <div className="alert alert-success">
                                    {success}
                                </div>
                            )}

                            {/* Submit Button */}
                            <button type="submit" className="btn btn-primary">
                                Register Student
                            </button>

                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}