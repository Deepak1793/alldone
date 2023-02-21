import React from 'react'

export default function Card() {
  return (
    <div>
        <div class="container-fluid bg-light rounded-3 mt-3">
        <div class="card-group">
  <div class="card">
    <img src="Images/Images/loan1.gif" class="card-img-top" alt="..."/>
    <div class="card-body">
    <br></br><br></br><br></br>
      <h5 class="card-title">Get an aggrement in principle</h5>
      {/* <p class="card-text" >Get an aggrement in principle</p> */}
      
      <a href="https://www.natwest.com/mortgages.html#steps" target="_blank"  class="btn btn-primary">Know More</a>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="Images/Images/loan2.gif" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">By my first home</h5>
      {/* <p class="card-text"></p> */}
      <a href="https://www.natwest.com/mortgages/first-time-buyers.html" target="_blank"  class="btn btn-primary"> Know More</a>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="Images/Images/loan3.gif" class="card-img-top" alt="..."/>
    <div class="card-body">
    <br></br>
      <h5 class="card-title">Move home</h5>
      {/* <p class="card-text">Move home</p> */}
      <a href="https://www.natwest.com/mortgages/moving-home.html" target="_blank"  class="btn btn-primary"> Know More</a>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
            </div>
    </div>
  )
}
