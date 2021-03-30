/** @jsx jsx */
import React, { useState, useContext } from 'react'
import { jsx, Grid, useThemeUI } from 'theme-ui'
// import { Link } from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"
import AutoLink from './autolink'
import { elastic as Menu } from 'react-burger-menu'
import logo from '../images/logo.svg'
// make a new context
const MyContext = React.createContext();

// create the provider
const MyProvider = (props) => {
    const [menuOpenState, setMenuOpenState] = useState(false)
    return (
        <MyContext.Provider value={{
            isMenuOpen: menuOpenState,
            toggleMenu: () => {
                setMenuOpenState(!menuOpenState)
            },
            stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

// create a button that calls a context function to set a new open state when clicked
const Button = () => {
    const ctx = useContext(MyContext)
    return (
        <div sx={{ display: ['block', null, 'none'] }}
            onClick={ctx.toggleMenu}
        // aria-label='Toggle Menu'
        ></div>
    )
}

// create a navigation component that wraps the burger menu
const Navigation = (props) => {
    const context = useThemeUI()
    const { theme } = context
    const ctx = useContext(MyContext)
    var styles = {
        bmBurgerButton: {
            position: 'relative',
            width: '36px',
            height: '30px',
            // background: 'green'
        },
        bmBurgerBars: {
            background: 'white'
        },
        bmCrossButton: {
            transform: 'translateZ(0)',
            width: '36px',
            height: '36px',
            top: "20px",
            rigth: '.5rem',
            display: 'flex',
            justifyContent: 'center',
        },
        bmMenuWrap: {
            position: 'fixed',
            overflow: 'hidden',
            height: '100vh',
            top: 0
        },
        bmMenu: {
            transform: 'translateZ(0)',
            width: '100%',
            paddingTop: '75px',
            // background: 'none !important',
        },
        bmMorphShape: {
            width: '100%',
            fill: theme.colors.primaryDark
        },
        bmItemList: {
            // position: 'absolute',
            top: 0,
            width: '100%',
            left: 'unset',
            display: 'flex',
            flexDirection: 'column',
            color: theme.colors.textRevert,
            padding: '0.8em',
            overflow: 'visiable'
        },
        bmItem: {
            display: 'block'
        },
        // bmOverlay: {
        //     background: 'rgba(0, 0, 0, 0.3)'
        // }
    }
    const crossButton = <>
        <div sx={{ width: '100%', height: '100%' }}>
            <span sx={{ position: 'absolute', top: '-10%', left: 'calc(50% - 3px)', width: '6px', height: '120%', rotate: 45, bg: 'white', transform: 'rotate(45deg)' }}></span>
            <span sx={{ position: 'absolute', top: '-10%', left: 'calc(50% - 3px)', width: '6px', height: '120%', rotate: 45, bg: 'white', transform: 'rotate(-45deg)' }}></span>
        </div>
    </>

    return (
        <Menu
            styles={styles}
            width={180}
            noOverlay
            // customBurgerIcon={false}
            // crossButtonClassName='yes'
            // crossClassName={'what'}
            customCrossIcon={crossButton}
            isOpen={ctx.isMenuOpen}
            pageWrapId={"page-wrap"}
            // outerContainerId={"outer-container"}
            right={true}
            onStateChange={(state) => ctx.stateChangeHandler(state)}
        >
            {props.children}
        </Menu>
    )
}

const links = [
    {
        text: 'HOME',
        url: '/'
    },
    {
        text: 'APP',
        url: 'https://wordfamily.newwork.cc'
    },
    {
        text: 'BLOG',
        url: '/blog'
    },
    {
        text: 'FORUM',
        url: 'https://newwork.flarum.cloud'
    },
]

const Header = () => {
    return (
        <MyProvider>
            <header sx={{ display: 'flex', height: 75, alignItems: 'center', justifyContent: 'space-between', p: '0 .5rem', bg: 'primaryDark' }}>
                <div sx={{ flex: 1 }}>
                    <AutoLink url='/'>
                        <img src={logo} alt="logo" />
                        {/* <StaticImage loading="lazy" placeholder="blurred" formats={['png']} blurredOptions={{ width: 120, toFormat: 'png' }} alt="logo" src="../images/logo.svg"></StaticImage> */}
                    </AutoLink>
                </div>
                <Grid sx={{ flex: 3, display: ['none', null, 'grid'] }} columns={'2fr 1fr'}>
                    <nav sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {links.map(link => (
                            <AutoLink key={link.text} url={link.url} text={link.text} style={{ p: '0 0.6rem' }} />
                        ))}
                    </nav>
                </Grid>
                <Button />
                <Navigation>
                    {links.map(link => (
                        <AutoLink key={link.text} url={link.url} text={link.text} style={{ p: '.5rem 1rem' }} />
                    ))}
                </Navigation>
            </header>
        </MyProvider>
    )
}

export default Header
