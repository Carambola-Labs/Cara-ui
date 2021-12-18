import type { NextPage } from 'next'
import { Navbar, Content, Footer } from '@components/common';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}

export default Home
