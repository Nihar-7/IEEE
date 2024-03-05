import React from 'react';


const ReviewerPresentation = () => {
    return (
        <>
         <div className="container my-5">
                <div className="p-5 text-center bg-body-tertiary rounded-3">
                    <h1 className="text-body-emphasis">Presentation Screening</h1>
                    <div className="form-floating my-3">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                        <label for="floatingTextarea2">Comments</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="number" className="form-control" id="floatingMarks2" />
                        <label for="floatingMarks2">Marks</label>



                    </div>

                    <div className="form-floating my-3 d-flex">
                
                        <div className="my-3">
                            <div className="form-check">
                                <label className="form-check-label " for="rec2">Recommend</label>
                                <input id="rec2" name="paymentMethod" type="radio" className="form-check-input" required="" />
                            </div>
                            <div className="form-check">
                                <label className="form-check-label mx-5" for="notrec2">Not Recommend</label>
                                <input id="notrec2" name="paymentMethod" type="radio" className="form-check-input" required="" />
                            </div>
                        </div>
                     </div>
                            <div className="m-5 d-flex justify-content-center">
                        <button type='submit' className='btn btn-secondary w-50'>submit</button>
                        </div>
                    </div>
                </div>
        
        </>
    );
}


export default ReviewerPresentation;