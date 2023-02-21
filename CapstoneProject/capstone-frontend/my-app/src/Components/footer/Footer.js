
// import React from 'react';
// import "./footer.css"

// export default function Footer(){
//     return (
//     <div class=" myfooter">
//   <footer class="py-2">
//     <ul class="nav justify-content-center border-bottom pb-3 mb-3 ">
//       <li class="nav-item"><a href="#" class="nav-link px-2 text-light ">Home</a></li>
//       <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Features</a></li>
//       <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Pricing</a></li>
//       <li class="nav-item"><a href="#" class="nav-link px-2 text-light">FAQs</a></li>
//       <li class="nav-item"><a href="#" class="nav-link px-2 text-light">About</a></li>
//     </ul>
//     <p class="text-center text-light">&copy; 2022 Natwset, Inc</p>
//   </footer>
// </div>
// )};

import React from 'react'
import { Grid, Typography } from '@mui/material';


export default function Footer() {
    return (
        <div>
            <Grid container sx={{ backgroundColor: '#42145F', padding: '1em' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography sx={{ textAlign: 'center', color: 'white',marginTop: '' }}>
                    Get connected with us on social networks:
                    </Typography>
                </Grid>
            
                            
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ textAlign: 'center', marginTop: '1em'}}>
                <a href="https://www.facebook.com/NatWest/" target="_blank" class=" me-2 btn btn-light" rel="noreferrer">
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a href="https://twitter.com/NatWest/" target="_blank" class=" me-2 btn btn-light" rel="noreferrer">
                                <i class="bi bi-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/natwest/" target="_blank" class=" me-2 btn btn-light" rel="noreferrer">
                                <i class="bi bi-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/natwest" target="_blank"
                                class=" me-2 btn btn-light" rel="noreferrer">
                                <i class="bi bi-linkedin"></i>
                            </a>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography sx={{ textAlign: 'center', color: 'white',marginTop: '2em' }}>
                        © 2022 Copyright: NatWest
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}