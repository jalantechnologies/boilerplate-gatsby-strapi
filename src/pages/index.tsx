import * as React from 'react'
import { navigate } from 'gatsby'

declare type IndexPageProps = {
  data: any
}

const IndexPage: React.FC<IndexPageProps> = () => {
  React.useEffect(()=>{
    navigate('/home')
  },[])
  return null;
}

export default IndexPage
