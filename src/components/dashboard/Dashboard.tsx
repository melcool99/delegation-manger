import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card, Container } from 'react-bootstrap'

const Index = () => {
  const url = `https://testnet-api.elrond.com/accounts/`

  const [accountInfo, setAccountInfo] = useState<any>({
    address: '',
    balance: '',
    txCount: '',
    shard: '',
  })

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url)
        const data = response.data[0]
        setAccountInfo({ ...data })
      } catch (err) {
        console.error(err)
      }
    }
    getData()
  }, [])

  return (
    <div>
      <Button size='sm'>Close</Button>
      <div>
        <h3>Delegation Manager</h3>
        <p>{accountInfo.address}</p>
      </div>
      <h1> Istari Vision</h1>
      <Card>
        <Container fluid>
          <Card.Header>
            <Card.Text as='h6'>
              Contract address:
              erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqrhlllls062tu4
            </Card.Text>
          </Card.Header>
        </Container>
        <Container fluid>
          <Card>
            <Card.Body>
              Balance:
              <Card.Text> {accountInfo.balance} Egld</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Card>
      <Card>
        <Card.Header>
          <Card.Text as='h4'>My Stake:</Card.Text>
        </Card.Header>
        <Card.Body>
          <Card.Text as='h6'>No stake yet</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Index
