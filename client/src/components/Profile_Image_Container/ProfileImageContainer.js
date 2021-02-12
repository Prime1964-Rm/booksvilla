import React, { useState } from 'react';
import './ProfileImageContainer.scss'

const ProfileImageContainer = ({ url,firstname,lastName,className,style }) => {
    
    // const firstNameSliced= FirstName.slice(0,1)
    const NameInitials =  firstname.slice(0,1) + lastName.slice(0,1)
    const [avatarBgColor,setAvatarBgColor] = useState('red') 

    return (
        <div className={`profileImage ` + className} 
        style={{
            backgroundColor:avatarBgColor,
            cursor:'pointer',
            ...style
        }}
        
        >
            {
                (url) ?
                    <img src={url} />
                    :
                    <div className="profileText">
                        {NameInitials} 
                    </div>
            }
            {
                (url)?""
                :
                <input type="color" style={{
                    cursor:"pointer",
                    opacity:"0",
                    position:"absolute",
                }}
                onChange={(e)=>{
                        setAvatarBgColor(e.target.value)
                }}
                />
            }
        </div>
    );
}

export default ProfileImageContainer;