// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { useForm } from 'react-hook-form';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

// const HomeLoanApplication = () => {
//   const classes = useStyles();
//   const [error, setError] = useState(false);
//   const { register, handleSubmit, errors } = useForm();

//   const onSubmit = (data) => {
//     if (
//       !/^[A-Za-z]{2,}$/.test(data.firstName) ||
//       !/^[A-Za-z]{2,}$/.test(data.lastName)
//     ) {
//       setError(true);
//     } else {
//       setError(false);
//       // send data to server
//     }
//   };

//   return (
//     <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <TextField
//           error={error}
//           helperText={error ? 'Invalid name' : ''}
//           inputRef={register({ required: true })}
//           label="First Name"
//           name="firstName"
//         />
//         <TextField
//           error={error}
//           helperText={error ? 'Invalid name' : ''}
//           inputRef={register({ required: true })}
//           label="Last Name"
//           name="lastName"
//         />
//       </div>
//       <div>
//         <TextField
//           inputRef={register({ required: true })}
//           label="Phone Number"
//           name="phone"
//         />
//         <TextField
//           inputRef={register({ required: true })}
//           label="Email"
//           name="email"
//         />
//       </div>
//       <div>
//         <TextField
//           inputRef={register({ required: true })}
//           label="Property Address"
//           name="propertyAddress"
//         />
//         <TextField
//           inputRef={register({ required: true })}
//           label="Loan Amount"
//           name="loanAmount"
//         />
//       </div>
//       <div>
//         <Button
//           className={classes.button}
//           color="primary"
//           type="submit"
//           variant="contained"
//         >
//           Submit
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default HomeLoanApplication;
