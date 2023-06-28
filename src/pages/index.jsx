import Head from 'next/head'
import { Center, Heading, Icon, Img } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'
import RouteButton from 'components/RouteButton'
import reactImg from '@images/react.svg'
import Section from 'components/Section'
import Navbar from 'containers/Navbar'
import Hero from 'containers/Hero'
import OperateSection from 'containers/OperateSection'
import Services from 'containers/Services'
import Reason from 'containers/Reason'
import Reviews from 'containers/Reviews'
import CTA from 'containers/CTA'
import Footer from 'containers/Footer'

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome page</title>
      </Head>
      <Navbar />
      <Hero />
      <OperateSection />
      <Services />
      <Reason />
      <Reviews />
      <CTA />
      <Footer />
    </>
  )
}

export default Home
