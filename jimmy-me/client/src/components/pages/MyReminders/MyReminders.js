import React from 'react'
import { Button } from "react-bootstrap"
import{ Link } from 'react-router-dom'
import MainPage from '../../MainPage/MainPage';
import './MyReminders.css'

const MyReminders = () => {
  return ( 
  <MainPage title='Hello, Instructor!'>
    <Link to="createnote">
        <Button style={{ marginLeft:10, marginBottom: 6 }} size="lg">
          Reminder
        </Button>
        </Link>
     

</MainPage>
    
  )
}

export default MyReminders;