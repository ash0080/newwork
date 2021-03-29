/** @jsx jsx */
import React from 'react'
import { jsx, Flex } from 'theme-ui'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import AutoLink from '../components/autolink'
import GlobalStyle from '../components/global'

const NotFoundPage = (props) => {
  const maxWidth = props.maxWidth || 960
  return (
    <Flex sx={{ bg: 'gray', flexDirection: 'column', minHeight: '100vh', alignItems: 'center' }} id='outer-container'>
      <GlobalStyle />
      <section sx={{ height: '100%', width: '100%', maxWidth: 1200, display: 'flex', flexDirection: 'column' }} >
        <header sx={{ display: 'flex', p: '0 .5rem', height: 75, alignItems: 'center', justifyContent: 'space-between' }}>
          <AutoLink url='/'>
            <StaticImage sx={{ img: { filter: 'invert(100%)' } }} loading="lazy" placeholder="blurred" formats={['auto', 'png']} blurredOptions={{ width: 60, toFormat: 'png' }} alt="logo" src="../images/logo.svg"></StaticImage>
          </AutoLink>
        </header>
      </section>
      <section
        id='page-wrap'
        sx={{
          maxWidth,
          mt: ['2rem', '4rem'],
          mb: '6rem',
          p: '0 1rem',
          color: "#232129",
          display: 'flex',
          flexDirection: ['column', 'row'],
          justifyContent: 'center',
          flexGrow: 1
        }}>
        <main sx={{
          flex: 99999,
          maxWidth: 660,
          mr: [0, 0, '5rem'],
          mb: '3rem'
        }}>
          <h1 sx={{ marginBlockEnd: '.5em', marginBlockStart: 0, fontSize: [72] }}>Oops!</h1>
          <h3 sx={{ marginBlockStart: 0, fontSize: [32] }}>We can't seem to find the page you're looking for.</h3>
          <p sx={{ pb: '2rem' }}>Error code: 404</p>
          <Link to="/">Back to home</Link>
        </main>
        <aside
          sx={{
            minWidth: 300,
            flex: 1,
            flexBasis: 'sidebar',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
          <StaticImage sx={{}} width={300} loading="lazy" placeholder="blurred" formats={['auto', 'jpg']} blurredOptions={{ width: 60, toFormat: 'jpg' }} alt="logo" src="../images/404.jpg"></StaticImage>
          <div sx={{ textAlign: 'center' }}>
            <p>
              <small>“Film” (1965)</small>
            </p>
            <p>
              <small>A silent short starring Buster Keaton and scripted by Samuel Beckett.</small>
            </p>
            {/* <p>
              <small>by Delicious Design League</small>
            </p> */}
          </div>
        </aside>
      </section>
    </Flex>
  )
}

export default NotFoundPage
