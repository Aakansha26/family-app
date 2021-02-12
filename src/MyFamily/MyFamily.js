import React from 'react'
import Notifications from '../Notifications/Notifications'
import Sidebar from '../Sidebar/Sidebar'
import FamilyMember from './FamilyMember/FamilyMember'
import './MyFamily.css'

function MyFamily() {
    return (
        <div className="myFamily">
            <Sidebar />
            <div className="inner-div"> 
                <FamilyMember profilePic="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
                name="Naina"
                relation="Sister"
                />

                <FamilyMember profilePic="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                name="Stefan"
                relation="Brother"
                dob="August 20, 2012 11:13:00" />

                <FamilyMember profilePic="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
                name="Ria"
                relation="Mother"
                dob="July 17, 2000 11:13:00" />

                <FamilyMember profilePic="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                name="Rahul"
                relation="Father"
                dob="August 30, 1980 11:13:00" />

            </div>
            <Notifications />
            
        </div>
    )
}

export default MyFamily
