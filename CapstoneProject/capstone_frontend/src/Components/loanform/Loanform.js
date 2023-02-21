import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link, useNavigate } from "react-router-dom";
import {Grid, IconButton, InputAdornment, Snackbar, Stack } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import { Token, Visibility, VisibilityOff } from '@mui/icons-material';
import { toast } from 'react-toastify';

const theme = createTheme();
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function Loanform() {

    //copy and paste protection
    const handleChange = (e) => {
        e.preventDefault();
      };

      //password toggle
    const [values, setValues] = React.useState({
        showPassword: false
    });
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {}
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            dob: "",
            address: "",
            city: "",
            property: "",
            profession: "",
            income: "",
            phone: "",
            password: "",
            confirmpassword: ""
        },
        onSubmit: values => {
            // console.log(values);
            fetch("http://localhost:8762/api/v1/users/register", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    console.log(data.message)
                    if (data.token !== null) {
                        toast.success("User Registered Successfully !!")
                        navigate("/login")
                        
                    }
                    
                }).catch((error)=>{
                    console.log(error);
                    toast.error("User Already Registered  !!")
                });
        },
        validationSchema: yup.object().shape({
            firstname: yup.string()
                .required("Can't be left blank")
                .matches(/^[a-zA-Z]([ 0-9a-zA-Z]){2,}$/,  "Your first name must be more than 2 characters and should not start with a number"),
            lastname: yup.string()
                .required("Can't be left blank")
                .matches(/^[a-zA-Z]([ 0-9a-zA-Z]){2,}$/,  "Your last name must be more than 2 characters and should not start with a number"),
            email: yup.string()
                .required("Can't be left blank")
                .matches(/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/,"Your email must be a valid email ex:abc@gmail.com"),
            address: yup.string()
                .required("Can't be left blank")
                .max('30'),
            city: yup.string()
            .matches(/^[a-zA-Z]([ 0-9a-zA-Z]){2,}$/,  "City must be more than 2 characters and should not start with a number"),
            phone: yup.string()
            . matches(/^[6789]([0-9]){9}$/,"Your phone number must be 10 digit long & should start with 6,7,8 or 9")
                .required("Can't be left blank"),
                account: yup.string()
                .min(8)
                .required("Can't be left blank"),
            password: yup.string()
                .matches(/^(?=.*[0-9])(?=.*[!@#%$^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,"Password should contain atleast one speacial, numeric characters and 8-16 characters.")
                .required("Can't be left blank"),
            confirmpassword: yup.string()
                .required("Can't be left blank")
                .test("confirmpassword", "Password and Confirm password should be same", function (cpass) {
                    if (this.parent.password === cpass) {
                        return true;
                    }
                    return false;
                })
        })
    })
  return (
    <div className='py-5 mt-5 mb-5'data-testid = "div">
    <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={false}
                md={7}
                sx={{
                    backgroundImage: 'url(Images/Images/loan1.gif)',
                    backgroundRepeat: 'no-repeat',
                    
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: '60%',
                        
                        backgroundPosition: 'center',
                        

                }}
            />
            <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Home Loan Application
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                        variant="outlined" size="small"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname}
                            margin="normal"
                            required
                            fullWidth
                           
                            id="firstname"
                            type="text"
                            label="First Name"
                            name="firstname"
                            autoFocus
                        />
                        {formik.errors.firstname && formik.touched.firstname ? <span className='text-danger'>{formik.errors.firstname}</span> : null}
                        <TextField
                         variant="outlined" size="small"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname}
                            margin="normal"
                            required
                            fullWidth
                            type="text"
                            id="lastname"
                            label="Last Name"
                            name="lastname"
                        />
                        {formik.errors.lastname && formik.touched.lastname ? <span className='text-danger'>{formik.errors.lastname}</span> : null}
                        <TextField
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address}
                            margin="normal"
                            required
                            fullWidth
                            type="text"
                            id="address"
                            label="Address"
                            name="address"
                        />
                        {formik.errors.address && formik.touched.address ? <span className='text-danger'>{formik.errors.address}</span> : null}
                        <TextField
                         variant="outlined" size="small"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city}
                            margin="normal"
                            
                            fullWidth
                            type="text"
                            id="city"
                            label="City"
                            name="city"
                        />
                        {formik.errors.city && formik.touched.city ? <span className='text-danger'>{formik.errors.city}</span> : null}
                        <TextField
                         variant="outlined" size="small"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}
                            margin="normal"
                            required
                            fullWidth
                            type="number"
                            id="phone"
                            label="Phone"
                            name="phone"
                        />
                        {formik.errors.phone && formik.touched.phone ? <span className='text-danger'>{formik.errors.phone}</span> : null}
                        <TextField
                         variant="outlined" size="small"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.account}
                            margin="normal"
                            required
                            fullWidth
                            type="number"
                            id="account"
                            label="Account"
                            name="account"
                        />
                        {formik.errors.account && formik.touched.account ? <span className='text-danger'>{formik.errors.account}</span> : null}
                        <TextField
                         variant="outlined" size="small"
                            onChange={formik.handleChange} onBlur={formik.handleBlur}
                            value={formik.values.email}
                            margin="normal"
                            required
                            fullWidth
                            type="email"
                            id="email"
                            label="Email Address"
                            name="email"
                           
                           
                        />
                        {formik.errors.email && formik.touched.email ? <span className='text-danger'>{formik.errors.email}</span> : null}
                        <TextField
                         variant="outlined" size="small"
                            onChange={formik.handleChange} onBlur={formik.handleBlur}
                            value={formik.values.password}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type={values.showPassword ? 'text' : 'password'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            id="password"
                            onCopy={handleChange}
                            onPaste={handleChange}
                        />
                        {formik.errors.password && formik.touched.password ? <span className='text-danger'>{formik.errors.password}</span> : null}
                        <TextField
                         variant="outlined" size="small"
                            onChange={formik.handleChange} onBlur={formik.handleBlur}
                            value={formik.values.confirmpassword}
                            margin="normal"
                            required
                            fullWidth
                            name="confirmpassword"
                            label="Confirm Password"
                            type="password"
                            id="confirmpassword"
                            onCopy={handleChange}
                            onPaste={handleChange}
                        />
                        {formik.errors.confirmpassword && formik.touched.confirmpassword ? <span className='text-danger'>{formik.errors.confirmpassword}</span> : null}
                        <Typography>
                        * Required fields
                    </Typography>
                    <Stack spacing={2} sx={{ width: '100%' }}>
                            <Button
                                sx={{ mt: 3, mb: 2 }}
                                type="submit"
                                variant="contained"
                                style={{
                                    backgroundColor:"#42145F"
                                }}
                                onClick={handleClick}>
                                Sign Up
                            </Button>
                            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={3000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                User already registered please signin with your credentials
                                </Alert>
                            </Snackbar>
                        </Stack>
                        <Grid container>
                        <Grid item>
                            <Link to="/login" variant="body2">
                                {"Already have an account? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </ThemeProvider>
    <div style={{marginBottom:'8em'}}></div>
</div>
)
}

