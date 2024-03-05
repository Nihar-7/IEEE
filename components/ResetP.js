import React from 'react';



const ResetP = () => {
    return (
        <>
         <div className="modal modal-sheet position-static d-block bg-body-secondary "  tabindex="-1" role="dialog" id="modalSignin">
  <div className="modal-dialog "  role="document">
    <div className="modal-content rounded-4 shadow" >
      <div className="modal-header p-5 pb-4 border-bottom-0">
        <h1 className="fw-bold mb-0 fs-2">Reset password</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body p-5 pt-0">
        <form className="">
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Enter new password</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Re-Enter new password</label>
          </div>
          
          <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">submit</button>
          <small className="text-body-secondary">Please set your new password here...</small>
          <hr className="my-4"/> 
        </form>
      </div>
    </div>
  </div>
</div>
        </>
    )
}



export default ResetP;