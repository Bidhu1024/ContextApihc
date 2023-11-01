import React,{useContext, useState} from 'react'
import UserContext from '../context/userContext'
const Profile = () => {
    const {user} = useContext(UserContext)
  if(!user) return <div>please login</div>
  return(
    <div>
        <h1>Welcome {user.name}</h1>
    </div>
  )
}

export default Profile