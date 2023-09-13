import React from 'react'
import './Home.css'
import facebook from '../../Asserts/Images/facebook.png'
function Home() {
    const loginwith = ()=>{
        window.location.href = 'http://localhost:3000/auth/facebook/callback'
        alert("this works")
      }
      
  return (
  <>
<div className="webmain">

<div className="heading1">
    Facebook Token Generator
</div>

<div className="how">
    How its Works ?
</div>
<div className="points">
<ol>
    <li>It Only Contain Two Steps :-</li>
    <li>
    Click on the Login with Facebook Button Below.
    </li>
    <li>The PopShould Appear Click on Continue</li>
    <li>The Token Should Be In Front Of You</li>
</ol>

</div>
<div className="facebookicon" onClick={loginwith}>

<img src={facebook} alt="" />
<button >Login with facebook</button>
  

</div>

</div>

    
  </>
  )
}

export default Home;