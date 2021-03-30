/** @jsx jsx */
import React from 'react'
import { jsx, Flex } from 'theme-ui'
// import { Link } from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer sx={{ bg: 'primaryDark', p: '2rem 1rem 3rem', display: 'flex', justifyContent: 'center' }}>
            <section sx={{ maxWidth: 960, width: '100%', display: 'flex', flexDirection: ['column', 'row'], position: 'relative' }}>
                <Flex sx={{ width: '100%', alignItems: 'center', justifyContent: "center" }}>
                    <p sx={{ textAlign: 'center', color: 'textRevert' }}>© 2020-{year} NEWWORK.CC all rights reserved.</p>
                </Flex>
                {/* <Flex sx={{ position: ['relative', 'absolute'], height: '54px', width: '100%', alignItems: 'center', justifyContent: ['center', 'flex-end'] }}>
                    <StaticImage alt='meng' placeholder="blurred" blurredOptions={{ width: 60, toFormat: 'png' }} formats={['auto', 'png']} src="../images/yume.svg" style={{ alignItems: 'flex-end' }}></StaticImage>
                </Flex> */}
            </section>
        </footer >
    )
}

export default Footer