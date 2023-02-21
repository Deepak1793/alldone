import React from 'react'
import { Card, CardMedia, CssBaseline, Grid, Container, CardContent, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./payments.css"


export default function Payments() {
    const theme = createTheme();
    return (
        <div>
            <div class="p-5 mb-4 bg-light rounded-3 mt-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold text-pr myfont">How do I send money abroad?</h1>
                    <p class="col-md-8 fs-4 myfont" >Making an international payment using the mobile app or online banking is just as secure as it is to make one in branch. You can make a payment to a new or an existing payee, quickly and easily, in the comfort of your home. Criteria apply.
                    </p>
                </div>
            </div>

            <div class="container-fluid col-xxl-10 px-5 py-2">
    <div class="row  align-items-center g-5 py-2">
        <div class="col-10 col-sm-8 col-lg-6">
            <img src="Images/Images/Payments1.jpg" class="d-block mx-lg-auto img-fluid" alt="" width="500" height="500"
                loading="lazy"/>
        </div>
        <div class="col-lg-6">
            <h1 class="display-5 bold lh-2 mb-3 myfont"> Integrate Natwest wallet with a few clicks</h1>
            <div class="lead myfont">
                Highest Success Rates
Enjoy up to 20% higher success rates<br></br>
Faster Settlement time
Get paid on a T+1 settlement schedule<br></br>
Wide user base
Reach Over 30 Crore PayPal users around the world<br></br>
No additional charges
Transactions will be charged as per rates defined by PayPal</div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">

            </div>
        </div>
    </div>
</div>
<ThemeProvider theme={theme}>
<CssBaseline />
<Container sx={{ paddingTop: '2em', paddingBottom: '2em', backgroundColor:'#F8F9FA'}} maxWidth="xl">

    <Typography variant="h4" component="div"  sx={{ mb: 3, textAlign:"center", textDecoration:"underline",fontFamily:"Segoe UI"}}>
    Natwestpay is the best way to go international
    </Typography>
    <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardMedia
                    component="img"
                    image="Images/Images/Payments2.jpg"
                    alt="random"
                    
                />
                <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily:"Segoe UI"}}>
          Support for major currencies
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontFamily:"Segoe UI"}}>
          Accept payments from more than 100 currencies from around the world.
          </Typography>
        </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardMedia
                    component="img"
                    image="Images/Images/Payments4.jpg"
                    alt="random"
                />
                <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily:"Segoe UI"}}>
          Real-time currency conversion
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontFamily:"Segoe UI"}} >
          Get foreign currencies converted to Indian Rupees at the time of the transactions.
          </Typography>
        </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardMedia
                    component="img"
                    image="Images/Images/Payments3.jpg"
                    alt="random"
                />
                <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily:"Segoe UI"}}>
          Competitive Pricing
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontFamily:"Segoe UI"}}>
          We charge a Platform fee of 3%* plus taxes on every transaction. That’s it.
          </Typography>
        </CardContent>
            </Card>
        </Grid>
    </Grid>
</Container>
</ThemeProvider>

<div class="container-fluid col-xxl-10 px-5 py-2 ">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-2">
        <div class="col-10 col-sm-8 col-lg-6">
            <img src="Images/Images/Payments5.png" class="d-block mx-lg-auto img-fluid" alt="" width="500" height="500"
                loading="lazy"/>
        </div>
        <div class="col-lg-6">
            <h1 class="display-5 bold lh-2 mb-3 myfont"> Who might use our FX service?</h1>
            <p class="lead myfont">Businesses or organisations that:<br></br>

Import or export<br></br>

Have foreign currency accounts<br></br>

Send or receive international payments<br></br>

Are part of an international group or subsidiary of a foreign entity<br></br>

Are looking at acquisitions overseas<br></br>
</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">

            </div>
        </div>
    </div>
</div>
        </div>


    )
}
