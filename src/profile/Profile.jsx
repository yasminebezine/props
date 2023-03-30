import React from 'react'

function Profile({name,job,resume,handleNameFunction,img}) {

  return (
    <div>
        {handleNameFunction}
        <h1 style={{color:'red'}}>{name}</h1>
        <h1 style={{backgroundColor :'blue'}} >{job}</h1>
        <h1>{resume}</h1>
        <img src={img} alt='...' />
            </div>
  )
}

export default Profile