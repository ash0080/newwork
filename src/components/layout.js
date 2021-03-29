/** @jsx jsx */
import React from 'react'
import Header from './header'
import Footer from './footer'
import { jsx, Flex, Themed } from 'theme-ui'
import GlobalStyle from './global'
// import '@fontsource/zhi-mang-xing/chinese-simplified.css'

const Layout = (props) => {
    const maxWidth = props.maxWidth || 960
    return (
        <Flex sx={{ bg: 'white', flexDirection: 'column', minHeight: '100vh' }} id='outer-container'>
            <GlobalStyle />
            <Header />
            <main
                id='page-wrap'
                sx={{
                    color: "#232129",
                    display: 'flex',
                    justifyContent: 'center',
                    flexGrow: 1
                }}>
                <section sx={{ p: '4rem 0', m: '0 1rem', maxWidth }} >
                    <p sx={{ color: "textActive" }}>{props.title}</p>
                    {props.slogan && <Themed.h1 sx={{ width: '75%' }}>{props.slogan}</Themed.h1>}
                    {props.children}
                </section>
            </main>
            <Footer />
        </Flex >
    )
}

export default Layout