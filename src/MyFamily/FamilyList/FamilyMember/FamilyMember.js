import React from 'react'
import { Avatar } from '@material-ui/core';
import './FamilyMember.css'
import CakeIcon from '@material-ui/icons/Cake';

function FamilyMember({ profilePic, name, relation}) {
    return (
        <div className="familyMember">
           
            <div className="familyMember__top">
                <Avatar src={profilePic} />
                <h4>{name}</h4>
            </div>
            <div className="familyMember__bottom">
                
                <p>{relation}</p>
                <span><CakeIcon></CakeIcon>{new Date().toDateString()}</span>
            </div>
  
        </div>
    )
}

export default FamilyMember
