import React from 'react'
import img1 from 'C:/Users/KEERTHANA/Desktop/fitness-trail/frontend/src/images/ii.jpg'
import img2 from 'C:/Users/KEERTHANA/Desktop/fitness-trail/frontend/src/images/ii1.jpg'
import img3 from 'C:/Users/KEERTHANA/Desktop/fitness-trail/frontend/src/images/ii2.jpg'
import image2 from 'C:/Users/KEERTHANA/Desktop/fitness-trail/frontend/src/images/carosal4.jpg'


export default function About() {
  return (
    <div>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="container text-center">
  <div class="row align-items-start">
    <div class="col-md-6">
      <h1>Why Us</h1>
   We understand what you need to achieve your health and fitness goals. We offer a sustainable programme which incorporates food & fitness you love - all whilst getting the body you love too!

A custom plan bespoke to you and your goals
Achievable for all fitness levels
Quick & easy meal plans tailored to your diet
Support for all your body struggles
We have started where you are today!
    </div>
    <div class="col-md-6">
    <img src={image2}  style={{ height: '200px', marginTop: '50px' }}  alt=""/>

    </div>
    
  </div>
</div>
    

<h1 className='traine'>Our Trainers</h1>

<div>
<article className="flow">
 
 
 <div className="team">
   <ul className="auto-grid">
     <li>
       <a
         href="https://swop.link/cool"
         target="_blank"
         rel="noopener noreferrer"
         className="profile"
       >
         <h2 className="profile__name">Anita Simmons</h2>
         <p>Founder</p>
         <img
           alt="Anita Simmons"
           src="https://source.unsplash.com/BhcutpohYwg/800x800"
         />
       </a>
     </li>
     <li>
       <a
         href="https://swop.link/cool"
         target="_blank"
         rel="noopener noreferrer"
         className="profile"
       >
         <h2 className="profile__name">Anita Simmons</h2>
         <p>Founder</p>
         <img
           alt="Anita Simmons"
           src="https://source.unsplash.com/BhcutpohYwg/800x800"
         />
       </a>
     </li>
     <li>
       <a
         href="https://swop.link/cool"
         target="_blank"
         rel="noopener noreferrer"
         className="profile"
       >
         <h2 className="profile__name">Anita Simmons</h2>
         <p>Founder</p>
         <img
           alt="Anita Simmons"
           src="https://source.unsplash.com/BhcutpohYwg/800x800"
         />
       </a>
     </li>
     <li>
       <a
         href="https://swop.link/cool"
         target="_blank"
         rel="noopener noreferrer"
         className="profile"
       >
         <h2 className="profile__name">Celina Harris</h2>
         <p>Creative Director</p>
         <img
           alt="Profile shot for Celina Harris"
           src="https://source.unsplash.com/j5KAuRrYX7g/800x800"
         />
       </a>
     </li>
     <li>
       <a
         href="https://swop.link/cool"
         target="_blank"
         rel="noopener noreferrer"
         className="profile"
       >
         <h2 className="profile__name">Ruby Morris</h2>
         <p>Technical Lead</p>
         <img
           alt="Profile shot for Ruby Morris"
           src="https://source.unsplash.com/pQyIutdScOY/800x800"
         />
       </a>
     </li>
     <li>
       <a
         href="https://swop.link/cool"
         target="_blank"
         rel="noopener noreferrer"
         className="profile"
       >
         <h2 className="profile__name">Nicholas Castro</h2>
         <p>Designer</p>
         <img
           alt="Profile shot for Nicholas Castro"
           src="https://source.unsplash.com/55JRsxcAiWE/800x800"
         />
       </a>
     </li>
     <li>
       <a
         href="https://swop.link/cool"
         target="_blank"
         rel="noopener noreferrer"
         className="profile"
       >
         <h2 className="profile__name">Marc Dixon</h2>
         <p>Developer</p>
         <img
           alt="Profile shot for Marc Dixon"
           src="https://source.unsplash.com/5wn6DeAEcmE/800x800"
         />
       </a>
     </li>
     <li>
       <a
         href="https://swop.link/cool"
         target="_blank"
         rel="noopener noreferrer"
         className="profile"
       >
         <h2 className="profile__name">Chad Chadson</h2>
         <p>Intern</p>
         <img
           alt="Profile shot for Chad Chadson"
           src="https://source.unsplash.com/7jCYw6a2Wao/800x800"
         />
       </a>
     </li>
   </ul>
 </div>
</article>
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


