import React from 'react'
import './Buttons.css'
import { useHistory } from 'react-router-dom'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Wallet: React.FC = () => {
  const history = useHistory()
  const handleSubmit = (e: any) => {
    e.preventDefault()
    history.push('/dashboard')
  }

  // useEffect(() => {
  //   window.location.href = 'https://testnet-wallet.elrond.com/unlock/keystore/'
  //   if (history.action === 'POP') {
  //     history.goBack()
  //   }
  // }, [])

  return (
    <Card>
      <Card.Header as='h1'>Access your Wallet</Card.Header>
      <Card.Subtitle>Choose how you wish to access your wallet.</Card.Subtitle>
      <Container style={{ justifyContent: 'space-evenly', padding: '20px' }}>
        <NavLink to='/wallet'>
          <Card.Text>Keystore</Card.Text>
        </NavLink>
        <NavLink to='/maiar'>
          <Card.Text>Maiar</Card.Text>
        </NavLink>
      </Container>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control type='file' accept='.json' />
        </Form.Group>
        <Form.Group>
          <Form.Control type='password' required placeholder='Password' />
        </Form.Group>

        <Container>
          <Row>
            <Button size='sm' type='submit'>
              Access Wallet
            </Button>

            <Button
              size='sm'
              variant='link'
              style={{ textDecoration: 'none' }}
              onClick={() => {
                history.push('./')
              }}>
              Close Wallet
            </Button>
          </Row>
        </Container>
      </Form>
    </Card>
  )
}

export default Wallet
