import React from 'react'
import FamilyMember from './FamilyMember/FamilyMember'
import './FamilyList.css'
function FamilyList() {
    return (
        <div className="familyList">
            <FamilyMember profilePic="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
                name="Ria"
                relation="Mother"
                dob="July 17, 2000 11:13:00" />

                <FamilyMember profilePic="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                name="Rahul"
                relation="Father"
                dob="August 30, 1980 11:13:00" />

                <FamilyMember profilePic="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
                name="Niyati"
                relation="Cousin"
                dob="June 3, 1988 1:03:00" />

                <FamilyMember profilePic="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
                name="Naina"
                relation="Sister"
                dob="July 20, 2012 11:13:00" />

                <FamilyMember profilePic="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                name="Stefan"
                relation="Brother"
                dob="August 20, 2012 11:13:00" />
        </div>
    )
}

export default FamilyList
