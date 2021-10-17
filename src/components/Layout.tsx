import React from 'react'
import { Card, Container } from 'react-bootstrap'
import BtnRoute from './BtnRoute'
import './Card.css'


const Home: React.FC = () => {
  return (
    <>
      <Card className='container'>
        <Card.Body>
          <Card.Title as='h1'>Istari Vision</Card.Title>
          <Card.Text as='h3'>Delegation Manager</Card.Text>
          <Card.Text as='h6'>
            Delegate your EGLD token and earn up to 11.91% per year!
          </Card.Text>
          <Card.Text as='p'>Please select your login method:</Card.Text>
        <Container >
          <BtnRoute add='wallet'/>
          <BtnRoute add='maiar'/>
          {/* <BtnRoute add='dashboard'/> */}
        </Container>
        </Card.Body>
      </Card>
    </>
  )
}

export default Home
