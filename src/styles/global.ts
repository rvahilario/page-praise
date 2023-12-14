import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray800',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
    maxWidth: '90rem',
    margin: '0 auto',
    overflow: 'hidden',
  },

  'body[style]': {
    margin: '0px auto !important',
    position: 'static !important',
    padding: 0,
  },
})
