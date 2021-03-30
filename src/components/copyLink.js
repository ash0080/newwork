/** @jsx jsx */
import React, { useState } from "react"
import { jsx } from 'theme-ui'
import copyTextToClipboard from 'copy-text-to-clipboard';

const CopyLink = (props) => {
    const [copied, setCopied] = useState(false)
    const { url, title } = props
    const copy = () => {
        if (navigator.share) {
            navigator.share({
                url,
                title
            });
            return true;
        } else {
            setCopied(true)
            return copyTextToClipboard(url);
        }
    }

    return (
        <button aria-label="weibo"
            class="react-share__ShareButton"
            onClick={copy}
            sx={{
                bg: 'primaryDark',
                border: 'none',
                cursor: 'pointer',
                height: 32,
                textAlign: 'left',
                flex: 1,
                p: 0,
                m: 0,
                display: 'flex',
                alignItems: 'center',
                borderRadius: 4
            }}
        // style="background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer;"
        >
            <svg viewBox="0 0 64 64" width="32" height="32">
                {/* <rect width="64" height="64" rx="8" ry="8" fill="#CD201F"></rect> */}
                <path d="M24.8 26a6 6 0 000 12h4.8v-2.4h-4.8a3.6 3.6 0 110-7.2h4.8V26h-4.8zm9.6 0v2.4h4.8a3.6 3.6 0 110 7.2h-4.8V38h4.8a6 6 0 000-12h-4.8zM26 30.8v2.4h12v-2.4H26z" fill="white">
                </path>
            </svg>
            <span sx={{ color: 'white', fontWeight: 400, fontSize: '1rem' }}>{copied ? 'Copied' : 'Copy Link'}</span>
        </button>
    )
}

export default CopyLink