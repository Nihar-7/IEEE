import React from 'react';

const Register = () => {
    return (

        <>
        <div className='container d-flex justify-content-center'>

            <div className='container m-5 w-50 bg-light d-flex flex-column align-items-center'>


                <h4 className="mb-3 fs-1 ">Register</h4>
                <form className="needs-validation " novalidate="">
                    <div className="row g-3 d-flex flex-column align-items-center justify-content-center">



                        <div className="col-12">
                            <label for="name" className="form-label">Name</label>
                            <div className="input-group has-validation">

                                <input type="text" className="form-control" id="name" required="" />
                                <div className="invalid-feedback">
                                    Your username is required.
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>




                        <div className="col-12">
                            <label for="category" className="form-label">Category</label>
                            <select className="form-select" id="category" required="">
                            
                                    <option value="" disabled selected>choose</option>
                        
                                <option>Applicant</option>
                                <option>Reviewer</option>
                                <option>Admin</option>

                            </select>
                            <div className="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>
                        <div className="col-12">
                            <div class="form-group">
                                <label for="exampleInputPassword1">Choose Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                        </div>



                    </div>

                    <hr className="my-3" />

                    <button className="w-100 btn btn-primary btn-lg " type="submit">Register</button>
                </form>


            </div>
        </div>
        </>
    );
}

export default Register;