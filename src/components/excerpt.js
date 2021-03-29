/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { jsx, Themed } from 'theme-ui'

const Excerpt = (props) => {
    let { text = '', lines = 1, link, more = '阅读更多', color } = props
    text = text.trim()
    const limit = props.limit || false
    const regex = new RegExp(`^(?:[^\r\n]*(?:\r\n?|\n|$)){0,${lines}}`)
    let matched = text.match(regex)
    // console.log(text)
    // console.log(matched)

    if (matched && matched[0])
        matched = matched[0].slice(0, limit)
    if (link) {
        return (
            <div>
                <Link sx={{ color }} to={link}>
                    <Themed.p sx={props.style}>{`${matched} ...`}</Themed.p>
                    {more && <p sx={{ float: 'right' }}>{more}</p>}
                </Link>
            </div>
        )
    } else {
        return (
            <div sx={{ color }}>
                <Themed.p sx={props.style}>{`${matched} ...`}</Themed.p>
                {more && <p sx={{ float: 'right' }}>{more}</p>}
            </div>
        )
    }
}

export default Excerpt