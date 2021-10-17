import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface ButtonProps {
  add:string;
}

const BtnRoute:React.FC<ButtonProps> = ({add}) => {
 
  return (
      <Link to={`/${add}`}>
        <Button size='sm'>{add}</Button>
      </Link>
  )
}

export default BtnRoute
