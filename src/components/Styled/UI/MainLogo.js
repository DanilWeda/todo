import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.svg`
  width: 55px;
  height: 55px;
  margin-top: 50px;
`

const Logo = () => {
  return (
    <StyledLogo
      width='54'
      height='54'
      viewBox='0 0 54 54'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <circle cx='27' cy='27' r='27' fill='#C9EEFF' />
      <rect x='7' y='13' width='30' height='7' fill='white' />
      <rect x='7' y='24' width='38' height='7' fill='white' />
      <rect x='7' y='35' width='38' height='7' fill='white' />>
    </StyledLogo>
  )
}

export default Logo