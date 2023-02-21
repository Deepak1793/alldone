// import React from 'react'

// export default function Question() {
//   return (

//     <div>


// <section>
//   <h3 class="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
//   <p class="text-center mb-5">
//   Common questions about getting a mortgage with us
//   </p>

//   <div class="row">
//     <div class="col-md-6 col-lg-4 mb-4">
//       <h6 class="mb-3 text-primary"><i class="far fa-paper-plane text-primary pe-2"></i>Am I eligible for mortgage?</h6>
//       <p>
//         <strong><u>Absolutely!</u></strong> To apply for a mortgage with NatWest International:

// you must be over 18 years old
// the maximum age for repayment is 65 years old. Where a mortgage extends beyond this age, you should be able to demonstrate continued ability to service the loan by way of pension or alternative means.
// the property you want to purchase must be in Jersey, Guernsey, Gibraltar or the Isle of Man
// you must be resident in Jersey, Guernsey, Gibraltar or the Isle of Man.
// It's unlikely that we'll be able to lend to you if you've ever been declared bankrupt, have had court judgements against you, had your property seized, defaulted on a mortgage, or had to organise a repayment plan with your creditors.
// Security and buildings insurance are required when you take out a mortgage with us.
//       </p>
//     </div>

//     <div class="col-md-6 col-lg-4 mb-4">
//       <h6 class="mb-3 text-primary"><i class="fas fa-pen-alt text-primary pe-2"></i> Do I need to be employed to apply for mortgage?</h6>
//       <p>
//         <strong><u>Yes, its required</u></strong> You’ll need to be employed or self-employed to qualify for a mortgage. This will help to make sure you can manage your mortgage repayments in the future.</p>
//     </div>

//     <div class="col-md-6 col-lg-4 mb-4">
//       <h6 class="mb-3 text-primary"><i class="fas fa-user text-primary pe-2"></i>How much I can borrow and for how longer</h6>
//       <p>
//       We can help you to work out how much you can borrow by looking at your household expenditure and any additional financial commitments such as loans, overdrafts, credit and store cards, hire purchase agreements and maintenance payments. Our mortgage calculator will give you an indication of how much you could borrow, or get in touch to arrange an appointment with a mortgage arranger.
//       </p>
//     </div>

//     <div class="col-md-6 col-lg-4 mb-4">
//       <h6 class="mb-3 text-primary"><i class="fas fa-rocket text-primary pe-2"></i> A simple
//         question?</h6>
//       <p>
//         Yes. Go to the billing section of your dashboard and update your payment information.
//       </p>
//     </div>

//     <div class="col-md-6 col-lg-4 mb-4">
//       <h6 class="mb-3 text-primary"><i class="fas fa-home text-primary pe-2"></i> A simple
//         question?</h6>
//       <p><strong><u>Unfortunately no</u>.</strong> We do not issue full or partial refunds for any
//         reason.</p>
//     </div>

//     <div class="col-md-6 col-lg-4 mb-4">
//       <h6 class="mb-3 text-primary"><i class="fas fa-book-open text-primary pe-2"></i> Another
//         question that is longer than usual</h6>
//       <p>
//         Of course! We’re happy to offer a free plan to anyone who wants to try our service.
//       </p>
//     </div>
//   </div>
// </section>

//     </div>

//   )
// }

///////////////////////////////////////////////


import React from 'react'
import './Question.css';

export default function
  () {
  return (
    <div>
      <h2 className='myclass' >Common  frequently asked questions about getting a mortgage with NatWest</h2>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Am I eligible for mortgage?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>To apply for a mortgage with NatWest International:
              </strong> you must be over 18 years old
              the maximum age for repayment is 65 years old. Where a mortgage extends beyond this age, you should be able to demonstrate continued ability to service the loan by way of pension or alternative means.
              the property you want to purchase must be in Jersey, Guernsey, Gibraltar or the Isle of Man
              you must be resident in Jersey, Guernsey, Gibraltar or the Isle of Man.

              It's unlikely that we'll be able to lend to you if you've ever been declared bankrupt, have had court judgements against you, had your property seized, defaulted on a mortgage, or had to organise a repayment plan with your creditors.

              Security and buildings insurance are required when you take out a mortgage with us.

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Do I need to be employed to apply for a mortgage?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>Yes, its required</strong> You’ll need to be employed or self-employed to qualify for a mortgage. This will help to make sure you can manage your mortgage repayments in the future.

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              How much can I borrow and for how long?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              We can help you to work out how much you can borrow by looking at your household expenditure and any additional financial commitments such as loans, overdrafts, credit and store cards, hire purchase agreements and maintenance payments.

              Where other costs may I have when  taking out a mortgage?
              It's important you add up all the costs involved in a mortgage, not just the interest rate. You may need to budget for a valuation fee, search fees, land registry fees and legal costs, as well as stamp duty on properties over a certain amount. Your mortgage arranger can give you more information on fees that you may need to pay.

              We expect you to take out buildings insurance to cover damage or rebuilding costs if needed. You may also decide to take out contents insurance along with sickness cover, unemployment cover and life cover.
            </div>
          </div>
        </div>
      </div>


      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
              Can the product fee be added to my mortgage?
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Yes the fee can be added to your mortgage but remember that, with the product fee added to the mortgage, you still cannot exceed the maximum loan to value and you'll pay interest on the fee. We also have a range of mortgages with no product fees.

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Can I get a mortgage offer before I find my property?
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Our Agreement in Principle letter tells you whether we could potentially lend you the amount you want to borrow.

              Your Mortgage Arranger can usually provide an Agreement in Principle letter after your first appointment. We'll just need some personal information from you to help with our decision. Here's a handy list of the documents that we'll need to see.

              Important information

              Please note, an Agreement in Principle letter is not an offer of a loan Please note, an Agreement in Principle letter is not an offer of a loan
              Requesting an Agreement in Principle does not mean that you are committing to apply for a mortgage with us
              Information provided will not be used for any marketing purposes
              Lending criteria, terms and conditions apply
              It's unlikely that we'll be able to lend to you if you have ever been declared bankrupt, have had county court judgements against you, your property seized, defaulted on your mortgage, or had to organise a repayment plan with your creditors.


            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              When will I know if my mortgage application has been successful?
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              When we’ve received all the required documentation and are happy with both the credit reference agency checks and the valuation report we'll make our decision on your application.

              If your application is approved we'll then send you the mortgage offer documents to read through and sign. We'll also send a copy to your Advocate.

              Read our guide to home buying for more information on the different stages of the process.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
