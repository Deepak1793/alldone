import React from 'react'

export default function Offcampus() {
    return (
        <div class="container-fluid bg-light rounded-3 mt-3">
            <div>
                <div class="offcanvas offcanvas-start" id="mySidebar">
                    <div class="offcanvas-header">

                        <h2 class="offcanvas-title" style={{ color: "Purple" }}>Essential Services</h2>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                    </div>

                    <div class="offcanvas-body">
                        <h4 style={{ color: "Violet" }}>EMI Calculator</h4>
                        <h4 style={{ color: "Violet" }}>Loan Application Form</h4>
                        <h4 style={{ color: "Violet" }}>Loan Enquiry</h4>
                        <h4 style={{ color: "Violet" }}>Call me</h4>
                        <button type="button" class="btn btn-secondary">Know More</button>
                        
                    </div>
                </div>
                <a href="#mySidebar" data-bs-toggle="offcanvas" class="btn btn-secondary">Loan Related Services</a>
            </div>
        </div>





    )
}
