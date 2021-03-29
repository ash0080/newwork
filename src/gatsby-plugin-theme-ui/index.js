export default {
    colors: {
        text: "#333",
        textRevert: '#99adc0',
        textActive: '#0471ff',
        black: '#000000',
        gray: '#F4F3F3',
        white: '#ffffff',
        background: "#fff",
        primary: "#639",
        primaryDark: '#110d47',
        // secondary: "#ff6347",
    },
    fonts: {
        body: '-apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;',
        heading: '-apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;',
        monospace: "Menlo, monospace",
    },
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    breakpoints: [
        '36em', '48em', '62em', '75em',
    ],
    styles: {
        root: {
            // uses the theme values provided above
            fontFamily: 'body',
            fontWeight: 'body',
        },
        h1: {
            fontSize: [32, 48, 64],
            // fontFamily: 'body',
            // fontWeight: 'body',
            color: 'black',
            m: '2rem 0'
        },
        h2: {
            marginBlockStart: 0,
            marginBlockEnd: 0,
            fontSize: 24,
            color: 'black',
            'a': {
                color: 'black'
            }
        },
        h3: {
            fontSize: [36]
        },
        p: {
            marginBlockStart: 0,
            marginBlockEnd: 0,
        },
        a: {
            textDecoration: 'none',
        },
    },
    buttons: {
        round: {
            borderRadius: '9999px !important',
            bg: 'textActive',
            px: '1.5rem',

            '&:hover': {
                bg: 'textActive',
            },
            width: 'fit-content',
            '*': {
                color: 'white',
                marginBlockStart: 0,
                marginBlockEnd: 0,
            }
        },
        menu: {
            color: 'white'
        }
    }
}