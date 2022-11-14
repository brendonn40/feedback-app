import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/shared/Button'
import Card from '../components/shared/Card'
const AboutPage = () => {
  return (
    <Card className="about">
      <h1>About this project</h1>
      <p>This is a react app to leave feedback for a product or service</p>
      <p>Version :1.0.0</p>

      <Link to="/">
      <Button version={"secondary"}>
      Back to home

      </Button>
      </Link>
    </Card>
  )
}

export default AboutPage