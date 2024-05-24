import React from 'react'
import image1 from 'C:/Users/KEERTHANA/Desktop/fitness-trail/frontend/src/images/best.jpg'
import image2 from 'C:/Users/KEERTHANA/Desktop/fitness-trail/frontend/src/images/image aa.jpg'
import image3 from 'C:/Users/KEERTHANA/Desktop/fitness-trail/frontend/src/images/stock-photo1.jpg'
import image4 from 'C:/Users/KEERTHANA/Desktop/fitness-trail/frontend/src/images/hero.jpg'
import { useState } from 'react'
import { useAuth } from './Auth'

import { NavLink } from 'react-router-dom'
export default function Home() {
  const auth = useAuth()
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[address,setAddress]=useState('')
  const[message,setMessage]=useState(false)
  const[comment,setComment]=useState('')
 
  

  const handleSubmit = (e) => {
    e.preventDefault();
   
     if(name===''&&email===''&&address===''&&comment===''){
      setMessage('enter required fields')
     }else{
     
     }

  }

  const changeName=(e)=>{
   setName(e.target.value)
  }
  const changeEmail=(e)=>{
setEmail(e.target.value)
  }
  const changeAddress=(e)=>{
  setAddress(e.target.value)
  }
  const changeComment=(e)=>{
  setComment(e.target.value)
  }
  return (
    <div>

      <div className='heropage'>
      <img className='im1' src={image1} alt=""/>
      </div>
      <div className="top-right"><h1 className='head'>Golden Gym</h1><span>Get the <br></br>fitness results<br></br> you want </span>{!auth.user &&<NavLink to = "/signup">Signup</NavLink>}</div>
     
      <div class="container text-center">
  <div class="row align-items-start">
    <div class="col-md-12">
     <h1 className='h1'>Our Programs</h1>
     The diverse range of programs, from group exercises, corporate training to personalized training, caters to varying fitness levels and goals. Members get variety and the option of customization as each gym offers a diversity of exercise options and specialized programs, allowing members to choose activities that align with their interests and fitness objectives. Personalized training programs ensure workouts are tailored to individual needs, maximizing results. Participating in group exercises fosters a sense of community among members, providing social support and encouragement, which can be instrumental in maintaining consistency in their fitness journey.
    
     <div className="card mb-3" style={{maxwidth: '540px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={image2} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Personal Training</h5>
        <p class="card-text">Gold's Gym India is known for the competent personal trainers and extraordinary personal training offered by them. The individuals seeking for serious goal-oriented fitness, personalized guidance, motivation, and specialized workout plans, Gold’s Gym India personal training program is for them.</p>
        
      </div>
    </div>
  </div>
</div>
    
<div className="card mb-3" style={{maxwidth: '540px'}}>
  <div class="row g-0">
   
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Group Program</h5>
        <p class="card-text">Gold's Gym India provides a variety of group fitness programs such as dance fitness, yoga, HIIT, and much more tailored to cater to diverse fitness preferences and goals. These group programs offer a supportive environment and a sense of community while engaging participants in fun and effective workouts.</p>
        
      </div>
    </div>
    <div class="col-md-4">
      <img src={image3} class="img-fluid rounded-start" alt="..."/>
    </div>
  </div>
</div>
<button>Free Trail</button>  
   
    </div>
    
    
  </div>
</div>
<h3>contact page</h3>
      



   
  
    
    <div className='contact-page' style={{ backgroundImage:`url(${image4})` }}>
        <form onSubmit={handleSubmit}>
            <label>Name : </label>
      <input type='text' value={name} placeholder='Enter your name' onChange={changeName}/><br></br><br></br>
      <label>Email : </label>
      <input type='email' value={email} placeholder='Enter your Email' onChange={changeEmail}/><br></br><br></br>
      <label>Address :</label>
      <textarea value={address} placeholder='Enter your Address' onChange={changeAddress}/><br></br><br></br>
      <label>Message:</label>
      <textarea value={comment} placeholder='Leave your comment ' onChange={changeComment}/>
      <button type='submit'>submit</button>
      </form>
    </div>

<p>{message}</p>
    
  







    
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
