import React from 'react'
import { Global } from '@emotion/react'
export default props =>
(<Global
    styles={theme => ({
        body: {
        },
        '*': {
            fontFamily: theme.fonts.body,
            boxSizing: 'border-box'
        },
        p: {
            lineHeight: 1.75,
            letterSpacing: 1.1,
            marginBlockStart: 0,
            marginBlockEnd: 0,
        },
        ul: {
            listStyleType: 'none',
            // margin: 0,
            padding: 0,
            'li': {
                '>*:before': {
                    content: '"*"',
                    paddingRight: 4
                }
            }
        },
        body: {
            margin: 0,
            background: theme.colors.primaryDark
        },
        'a': {
            color: theme.colors.textActive,
            textDecoration: 'none',
        },
        'nav a': {
            color: theme.colors.textRevert,
            ":active": {
                color: theme.colors.textActive
            }
        }
    })}
/>)