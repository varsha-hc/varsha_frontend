import Card from 'react-bootstrap/Card';

import React from 'react'

const ImageCard = ({image}) => {
  return (

    <Card>
      <Card.Img varient="top" src={image}></Card.Img>
  </Card>
  )
}

export default ImageCard
