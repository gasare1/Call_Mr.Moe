import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Redirect } from 'react-router'
export default function AdminConsole({authorized}) {
    
    if (!authorized){
        return <Redirect to='/admin'/>
    }else if (authorized){
        return <Redirect to='/console'/>
    }
    return (
        <div id="console">
            Hello Welcome to the admin console
        </div>
    )
}
