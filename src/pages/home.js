import React, { useState } from 'react'
import "./home.css"
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from './Search.js';




function Home() {

   const [myStyle, setMyStyle] = useState({
    color:'black',
    backgroundColor:'white'
    
  })
  const [btntext, setBtnText] = useState("Enable Dark Mode")
  
   const toggleStyle = ()=>{
    if(myStyle.color == 'black'){
      setMyStyle({
        
          color:'white',
          backgroundColor:'black'
          
        
      })
      setBtnText("Enable Light Mode")
    }
    else{
      setMyStyle(  {
        color:'black',
        backgroundColor:'white'
        
      })
      setBtnText("Enable Dark Mode");
    }
  }
 
  return (
    <div className='home' style={myStyle}>
        <div className="home_header" >
            <div className="home_headerleft">
            <button onClick={toggleStyle} type='button'className='btn btn-primary'>{btntext}</button>
            </div>
            <div className="home_headerright">
                <p>Gmail</p>
                <p>Images</p>
                <AppsIcon/>
                <AccountCircleIcon/>
                
            </div>
        </div>
        <div className="home_body">
<img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" srcset="" />        <div className="home-inputContainer">
          <Search/>
        </div>
        </div>

    </div>
  )
}

export default Home