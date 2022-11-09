import React from 'react'
import { Helmet } from 'react-helmet'

const HomePage = ({ pageContext }) => {
  const { title, imageUrl } = pageContext
  console.log(pageContext)
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <link rel="icon" href={imageUrl}></link>
      </Helmet>
      {title}
    </div>
  )
}

export default HomePage
