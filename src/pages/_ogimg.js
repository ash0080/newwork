/** @jsx jsx */
import React from "react"
import { jsx, Flex } from 'theme-ui'
import GlobalStyle from '../components/global'
import logo from '../images/logo.svg'

const OgImgTemplate = () => {
    const pageContext = {
        title: '强迫症福音, 这个APP, 可以升级你所有的单词书, 迅速扩展3-5倍单词量并记得更牢'
    }
    return (
        <Flex sx={{ bg: 'white', justifyContent: 'center', p: '2rem', width: '100%', height: '100vh' }}>
            <GlobalStyle />
            <Flex sx={{
                flexDirection: 'column',
                position: 'relative',
                width: '100%',
                height: '100%',
                borderTopLeftRadius: '2rem',
                borderTopRightRadius: '2rem',
                border: theme => `solid 4px ${theme.colors.primaryDark}`,
                p: '2rem',
                boxShadow: theme => `1rem 1rem ${theme.colors.primaryDark}`
            }}>
                <div sx={{ flexGrow: 1 }}>
                    <h1 sx={{ color: 'primaryDark', fontSize: '4rem' }}>{pageContext.title}</h1>
                </div>
                <div >
                    <p sx={{ color: 'primaryDark', lineHeight: 1, fontSize: '2rem' }}>{`http://newwork.cc/blog/${pageContext.slug}`}</p>
                    <div sx={{
                        bg: 'primaryDark',
                        position: 'absolute',
                        width: '6rem', height: '6rem',
                        right: '3rem',
                        bottom: '2rem',
                    }}>
                        <img sx={{
                            width: '100%',
                            height: '100%'
                        }} src={logo} alt="logo" />
                    </div>
                </div>
            </Flex>
        </Flex >
    )
};

export default OgImgTemplate