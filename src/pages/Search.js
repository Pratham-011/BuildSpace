import React, { useState } from 'react'
import"./Search.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import { Button } from '@mui/material';


function Search() {
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
    <form className='search'>
      <div className="search_input" style={myStyle}>
      <SearchOutlinedIcon className='searchicon'/>
          <input  type='text' placeholder='Search Google or type a URL'/>
      <MicOutlinedIcon className='icon'/>
   

        
      </div>
      <div className="search_buttons">
        <Button type='submit' variant='outlined'>Google Search</Button>
      
        <Button type='submit' variant='outlined'>I am feeling lucky</Button>

      </div>

    </form>
  )
}

export default Search