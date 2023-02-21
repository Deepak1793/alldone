import React, { useState } from 'react';
import './Calc.css'

const Calc = () => {
	const [loanAmount, setLoanAmount] = useState('');
	const [loanAmountError, setLoanAmountError] = useState("");
	const [interestRate, setInterestRate] = useState('');
	const [interestRateError, setInterestRateError] = useState("");
	const [loanTerm, setLoanTerm] = useState('');
	const [loanTermError, setLoanTermError] = useState("");
	const [monthlyPayment, setMonthlyPayment] = useState();

	const validateLoanAmount = () => {
		if (loanAmount <= 0) {
			setLoanAmountError("Please enter a valid loan amount");
			return false;
		} else {
			setLoanAmountError("");
			return true;
		}
	};


	const validateInterestRate = () => {
		if (interestRate < 0 || interestRate > 100) {
			setInterestRateError("Please enter a valid interest rate (0-100)");
			return false;
		} else {
			setInterestRateError("");
			return true;
		}
	};

	const validateLoanTerm = () => {
		if (loanTerm <= 0) {
			setLoanTermError("Please enter a valid loan term");
			return false;
		} else {
			setLoanTermError("");
			return true;
		}
	};

	const calculatePayment = () => {
		if (validateLoanAmount() && validateInterestRate() && validateLoanTerm()) {
			const r = interestRate / 100 / 12;
			const n = loanTerm * 12;
			const p = loanAmount;
			setMonthlyPayment((p * r * (1 + r) ** n) / ((1 + r) ** n - 1));
		}
	};

	const resetForm = () => {
		setLoanAmount("")
		setInterestRate("")
		setLoanTerm("")
		setMonthlyPayment("")
		setLoanAmountError("")
		setInterestRateError("")
		setLoanTermError("")
	};

	return (

		<div className='container'>
			<div className="loan-calculator">
				<h2 class= "myclass" >EMI Calculator</h2>
				<div>
					<label>Loan Amount:</label>
					<input type="number" value={loanAmount} onChange={e => setLoanAmount(e.target.value)} onClick={() => setLoanAmount('')} />
					<div className="error">{loanAmountError}</div>
				</div>
				<div>
					<label>Interest Rate:</label>
					<input type="number" value={interestRate} onChange={e => setInterestRate(e.target.value)} on Click={() => setInterestRate('')} />
					<div className="error">{interestRateError}</div>
				</div>
				<div>
					<label>Loan Term :</label>
					<input type="number" value={loanTerm} onChange={e => setLoanTerm(e.target.value)} onClick={() => setLoanTerm('')} />
					<div className="error">{loanTermError}</div>
				</div>
				<button onClick={calculatePayment}>Calculate Payment</button>
				<input id='reset' type="button" value="Reset Form" onClick={() => resetForm()} />
				<div className='lower'>
					<div>
						<h4>Monthly Payment:</h4>
						<p><i class="fa-solid fa-indian-rupee-sign"></i>{monthlyPayment ? monthlyPayment.toFixed(2) : ''}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Calc;






