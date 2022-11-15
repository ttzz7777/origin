import React, { Component } from 'react'
import { useSearchParams } from 'react-router-dom'

const About = () => {
  const [params] = useSearchParams()

  const id = params.get('id')

  const name = params.get('name')

  return (
    <div>
      about:得到的参数id值为{id},name值为{name}
    </div>
  )
}

export default About
