import React from 'react';

const Signin = () => {
    return (
        <>

            <div className="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header " style={{ backgroundColor: "#9ceaef" }}>
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Sign in</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3 needs-validation" novalidate>

                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Enter Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">Enter Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" />
                                </div>
                                <div className="col-md-4 offset-md-8">
                                    <a href='/'>forgot password ?</a>
                                </div>
                                <div className="col-md-5 offset-md-4">

                                    <span className='text-dark fw-bolder'>____ or sign in with____</span>

                                </div>

                                <div className="col-md-4"></div>
                                <div className="col-md-2">
                                    <i className="fa-brands fa-google text-danger fa-2x"></i>
                                </div>
                                <div className="col-md-2">
                                    <i className="fa-brands fa-facebook text-primary fa-2x"></i>
                                </div>
                                <div className="col-md-3">
                                    <i className="fa-brands fa-github text-dark fa-2x"></i>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </div>

                            </form>




                            {/* form */}
                            {/* <form className="row g-3 needs-validation" novalidate>
                                <div className="col-md-4">
                                    <label for="validationCustom01" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="validationCustom01" value="Mark" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label for="validationCustom02" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="validationCustom02" value="Otto" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Enter Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">Choose Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" />
                                </div>
                                <div className="col-md-4"></div>
                                <div className="col-md-5">

                                    <span className='text-dark fw-bolder'>____ or sign in with____</span>

                                </div>
                                <div className="col-md-4"></div>
                                <div className="col-md-2">
                                    <i className="fa-brands fa-google text-danger fa-2x"></i>
                                </div>
                                <div className="col-md-2">
                                    <i className="fa-brands fa-facebook text-primary fa-2x"></i>
                                </div>
                                <div className="col-md-3">
                                    <i className="fa-brands fa-github text-dark fa-2x"></i>
                                </div>





                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </div>
                            </form> */}
                            {/* form */}


                        </div>
                        <div className="modal-footer" style={{ backgroundColor: "#9ceaef" }}>

                            <span>Don't have account ? </span>
                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">sign up</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundColor: "#9ceaef" }}>
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Sign up</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* form */}
                            {/* <form className="row g-3 needs-validation" novalidate>

                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Enter Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">Enter Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" />
                                </div>
                            <div className="col-md-4 offset-md-8">
                            <a href='/'>forgot password ?</a>
                            </div>
                            <div className="col-md-5 offset-md-4">

                                    <span className='text-dark fw-bolder'>____ or sign up with____</span>

                                </div>

                                <div className="col-md-4"></div>
                                <div className="col-md-2">
                                    <i className="fa-brands fa-google text-danger fa-2x"></i>
                                </div>
                                <div className="col-md-2">
                                    <i className="fa-brands fa-facebook text-primary fa-2x"></i>
                                </div>
                                <div className="col-md-3">
                                    <i className="fa-brands fa-github text-dark fa-2x"></i>
                                </div>
                               
                            </form> */}
                            <form className="row g-3 needs-validation" novalidate>
                                <div className="col-md-4">
                                    <label for="validationCustom01" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="validationCustom01" value="Mark" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label for="validationCustom02" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="validationCustom02" value="Otto" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Enter Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">Choose Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" />
                                </div>
                                <div className="col-md-4"></div>
                                <div className="col-md-5">

                                    <span className='text-dark fw-bolder'>____ or sign up with____</span>

                                </div>
                                <div className="col-md-4"></div>
                                <div className="col-md-2">
                                    <i className="fa-brands fa-google text-danger fa-2x"></i>
                                </div>
                                <div className="col-md-2">
                                    <i className="fa-brands fa-facebook text-primary fa-2x"></i>
                                </div>
                                <div className="col-md-3">
                                    <i className="fa-brands fa-github text-dark fa-2x"></i>
                                </div>





                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </div>
                            </form>
                            {/* form */}




                        </div>
                        <div className="modal-footer " style={{ backgroundColor: "#9ceaef" }}>
                            <span>Already have account ? </span>
                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal">Sign in</button>



        </>
    );
}



export default Signin;