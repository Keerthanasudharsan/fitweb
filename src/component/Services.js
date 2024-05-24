import React from 'react'
import image4 from 'C:/Users/KEERTHANA/Desktop/fitness-trail/frontend/src/component/images/images/Screen.png'
import { NavLink } from 'react-router-dom'

export default function Services() {
  return (
    <div>
      <img src={image4} style={{height:'400px', width:"100%"}} alt=""/>
      <h2 className='offer'>OUR OFFERS</h2>
      <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
      <img src="https://themes.muffingroup.com/be/gym2/wp-content/uploads/2018/05/home_gym2_pic1.png" alt=""/>
      
      <h5>well Equpments</h5>
    </div>
    <div class="col">
      <img src='https://themes.muffingroup.com/be/gym2/wp-content/uploads/2018/05/home_gym2_pic2.png' alt=''/>
      <h5>Diet Chart</h5>
    </div>
    <div class="col">
      <img src='https://themes.muffingroup.com/be/gym2/wp-content/uploads/2018/05/home_gym2_pic3.png' alt=''/>
      <h5>Cardio</h5>
    </div>
    <div class="col">
      <img src="https://themes.muffingroup.com/be/gym2/wp-content/uploads/2018/05/home_gym2_pic4.png" alt=""/>
      <h5>Health Checkup</h5>
    </div>
  </div>
</div>
<div class="container text-center mt-5">
  <h3>Check out pricing plans</h3>
  <div class="row align-items-start">
    <div class="col">
    <div class="card border-success mb-3" style={{maxwidth: '18rem'}}>
  <div class="card-header bg-transparent border-success">BEGINNER PACK</div>
  <div class="card-body text-success">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-footer bg-transparent border-success"><NavLink to={'/booking'}>Book Now</NavLink></div>
</div>
    </div>
    <div class="col">
    <div class="card border-success mb-3" style={{maxwidth: '18rem'}}>
  <div class="card-header bg-transparent border-success">POWER PACK</div>
  <div class="card-body text-success">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-footer bg-transparent border-success"><NavLink to={'/booking'}>Book Now</NavLink></div>
</div>
    </div>
    <div class="col">
    <div class="card border-success mb-3" style={{maxwidth: '18rem'}}>
  <div class="card-header bg-transparent border-success">BODY
BUILDER</div>
  <div class="card-body text-success">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-footer bg-transparent border-success"><NavLink to={'/booking'}>Book Now</NavLink></div>
</div>
    </div>
  </div>
</div>

<div className='footer'>
  <div className='list' >  
  <h3> Services we offer</h3>
  <ul >
    <li>Online class</li>
    <li>Offline class</li>
    <li>Personaml trainer</li>
  </ul>
<a href='https://www.instagram.com/'><img src='https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg' alt='' style={{height:20,width:20}}/>Instagram</a>
<a href='https://www.facebook.com/'><img src='https://www.facebook.com/images/fb_icon_325x325.png' alt='' style={{height:20,width:20}}/>FaceBook</a>
<a href='https://www.instagram.com/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553' alt='' style={{height:20,width:20}}/>Twitter</a>
</div>

<div className='address' >
<h3 > Reach Us</h3>
<p>Coimbatore:3/1,Athipalayam,Coimbatore,641110</p>

</div>

</div>

    </div>
  )
}
