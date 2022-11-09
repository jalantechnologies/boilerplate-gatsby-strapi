import React from 'react'

const BlogPost = ({ pageContext }) => {
  const { title } = pageContext
  return <div>{title}</div>
}

export default BlogPost
