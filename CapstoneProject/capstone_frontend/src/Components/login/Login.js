
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import MuiAlert from '@mui/material/Alert';
import { IconButton, InputAdornment, Snackbar, Stack } from '@mui/material';
import { toast } from 'react-toastify';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const theme = createTheme();

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Login() {

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
    const handleClick = () => { }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: values => {
            // console.log("submit");
            fetch("http://localhost:8762/api/v1/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {

                    console.log(data);
                    console.log(values.status);

                    if (localStorage !== "") {

                        localStorage.setItem("token", JSON.stringify(data))
                        localStorage.setItem("user", JSON.stringify(data.email))

                        toast.success("User Logged In Successfully !!")
                        navigate("/dashboard")
                    }
                }).catch((error) => {
                    console.log(error);
                    toast.error("You have entered an invalid username or password !!")
                });

        },
        validationSchema: yup.object().shape({
            email: yup.string()
                .email("Invalid email address")
                .matches(/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/, "Your email must be a valid email ex:abc@gmail.com")
                .required("Email cannot be left blank"),
            password: yup.string()
                .required("Password cannot be left blank")
                .matches(/^(?=.*[0-9])(?=.*[!@#%$^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/, "Password should contain atleast one speacial, numeric characters and 8-16 characters.")
        })
    })
    return (
        <div className='py-5 mt-5' data-testid = "div">
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={false}
                        md={7}
                        sx={{
                            backgroundImage: 'url(Images/Images/Images4.png)',
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
                                Sign in
                            </Typography>
                            <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    variant="outlined" size="small"
                                    onChange={formik.handleChange} onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoFocus
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
                                <br /><br />
                                {/* <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                /> */}
                                <Stack spacing={2} sx={{ width: '100%' }}>
                                    <Button
                                        sx={{ mt: 3, mb: 2 }}
                                        type="submit"
                                        variant="contained"
                                        style={{
                                            backgroundColor: "#42145F"
                                        }}
                                        onClick={handleClick}>
                                        Sign In
                                    </Button>
                                    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={3000} onClose={handleClose}>
                                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                            You have entered an invalid username or password !
                                        </Alert>
                                    </Snackbar>
                                </Stack>
                                <Grid container>
                                    <Grid item>
                                        <Link href="/register" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
            <div style={{ marginBottom: '5em' }}></div>
        </div>
    );
}