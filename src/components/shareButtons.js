/** @jsx jsx */
import React from "react"
import { jsx, Flex } from 'theme-ui'
import {
    FacebookShareButton,
    FacebookIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WeiboShareButton,
    WeiboIcon
} from "react-share";
import { DoubanIcon, DoubanShareButton } from './customShare'
import CopyLink from './copyLink'

const ShareButtons = (props) => {
    const { post } = props
    const url = `https://newwork.cc/blog/${post.slug}`
    const title = `${post.title} | NEWWORK.CC`
    const image = `https://newwork.cc/og/${post.slug}.jpg`
    return (
        <Flex sx={{
            p: '1rem 0 2rem 0',
            'button:not(:last-child)': {
                mr: '3px'
            }
        }}>
            <FacebookShareButton
                url={url}
                quote
            >
                <FacebookIcon size={32} borderRadius={8} round={false} />
            </FacebookShareButton>
            <TwitterShareButton
                url={url}
                title={title}
                via={post.description}
            >
                <TwitterIcon size={32} borderRadius={8} round={false} />
            </TwitterShareButton>
            <TelegramShareButton
                url={url}
                title={title}
            >
                <TelegramIcon size={32} borderRadius={8} round={false} />
            </TelegramShareButton>
            <DoubanShareButton
                url={url}
                title={title}
                image={image}
            >
                <DoubanIcon size={32} borderRadius={8} round={false} />
            </DoubanShareButton>
            <WeiboShareButton
                url={url}
                title={title}
                image={image}
            >
                <WeiboIcon size={32} borderRadius={8} round={false} />
            </WeiboShareButton>
            <CopyLink url={url} title={title} />
        </Flex >
    )
}

export default ShareButtons