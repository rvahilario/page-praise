import { styled } from '@/src/styles'
import loginImage from '@/public/login-bg.png'

export const Container = styled('div', {
  height: '100vh',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$8',
  gap: '14.125rem',

  '& img': {
    display: 'flex',
    height: '37.375rem',
    backgroundSize: 'cover',
    borderRadius: '0.625rem',
  },
})

export const LogoContainer = styled('div', {
  display: 'flex',
  backgroundImage: `url(${loginImage.src})`,
  backgroundSize: 'cover',
  height: '100%',
  width: '37.375rem',
  borderRadius: '0.625rem',
  justifyContent: 'center',
  alignItems: 'center',

  '& img': {
    height: '3.625rem',
  },
})

export const Hero = styled('div', {
  width: '23.25rem',
  padding: '0 $',
  display: 'flex',
  flexDirection: 'column',

  '& h1': {
    fontSize: '$2xl',
    color: '$gray100',
    lineHeight: '$short',
  },

  '& p': {
    marginBottom: '$10',
    fontSize: '$md',
    color: '$gray200',
    lineHeight: '$base',
  },
})
