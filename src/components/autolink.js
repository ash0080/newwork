/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
const AutoLink = (props) => {
    const { url, text, style } = props
    return (
        <>
            {/^\/(?!\/)/.test(url) ? <Link sx={style} to={url}>{text || props.children}</Link> : <a class={props.class} sx={style} href={url} target="_blank" rel="noreferrer" >{text || props.children}</a>}
        </>
    )
}


export default AutoLink