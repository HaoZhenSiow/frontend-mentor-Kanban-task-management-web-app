import styled from 'styled-components'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const HeaderLeftStyled = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  .logo {
    margin-inline-end: var(--logo-margin-inline-end); //81.47 112.47
  }

  .vertical-line {
    background-color: var(--line-color);
    height: 100%;
    width: 1px;
    display: none;
    margin-inline-end: 32px;
  }

  h1 {
    color: var(--boardname-color);
    font-size: var(--boardname-fs);
    line-height: var(--boardname-lh);
  }

  .chevron--down {
    margin-inline-start: 8px;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .logo {
      width: 152.53px;
      height: 25.22px;
    }

    .vertical-line {
      display: block;
    }

    .chevron--down {
      display: none;
    }
  }
`

const HeaderLeft = props => {
  let [SRCSET, setSrcset] = useState('/assets/logo-mobile.svg 24w, /assets/logo-dark.svg')
  useEffect(() => {
    let darkmode = matchMedia('(prefers-color-scheme: dark)').matches
    if (darkmode) {setSrcset('/assets/logo-mobile.svg 24w, /assets/logo-light.svg')}
  }, [])
  return (
    <HeaderLeftStyled>
      <Image 
        className='logo' 
        src='/assets/logo-mobile.svg' 
        srcset={SRCSET}
        sizes='(min-width: 768px) 152.53px, 24px' 
        alt='logo' 
        width='24' 
        height='25'/>
      <div className='vertical-line'></div>
      <h1>Platform Launch</h1>
      <Image 
        className='chevron--down'
        src='/assets/icon-chevron-down.svg'
        alt='chevron down'
        width='8'
        height='4'/>
    </HeaderLeftStyled>
  );
}

export default HeaderLeft