import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import QRCode from 'qrcode'
import { Button, Card } from 'react-bootstrap'
import './Card.css'
import {
  walletConnectBridge,
  network,
} from '../configs/config'

import {
  ProxyProvider,
  WalletConnectProvider,
} from '@elrondnetwork/erdjs/out'



const Maiar: React.FC = () => {
  const history = useHistory()
  const [qrSvg, setQrSvg] = useState('')
  const [wcUri, setWcUri] = useState('')

  // const urlParams = new URLSearchParams(window.location.search);
  // const isFromMobile = urlParams.get('mobileplatform') === 'true';

  const svgQr: any = {
    dangerouslySetInnerHTML: {
      __html: qrSvg,
    },
    style: {
      width: '15rem',
      height: '15rem',
    },
  }
  const buildQrCode = () => {
    ;(async () => {
      if (wcUri) {
        const svg = await QRCode.toString(wcUri, { type: 'svg' })
        setQrSvg(svg)
      }
    })()
  }

  const proxy = new ProxyProvider(network.gatewayAddress)

  const handleOnLogin = () => {
    history.push('/dashboard')
  }

  const handleOnLogout = () => {}

  const walletConnectInit = async () => {
    const walletConnect = new WalletConnectProvider(
      proxy,
      walletConnectBridge,
      {
        onClientLogin: handleOnLogin,
        onClientLogout: handleOnLogout,
      }
    )
    const walletConnectUri = await walletConnect.login()

    setWcUri(walletConnectUri)
  }

  buildQrCode()

  useEffect(() => {
    walletConnectInit()
  }, [])

  return (
    <Card>
      <Card.Body>
        <Card.Text {...svgQr} />
        <Card.Title as='h3'>Connect Maiar</Card.Title>
        <Card.Text>Scan the QR code using Maiar</Card.Text>
        <Button
          size='sm'
          variant='link'
          style={{ textDecoration: 'none' }}
          onClick={() => {
            history.push('./')
          }}>
          Close Wallet
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Maiar
