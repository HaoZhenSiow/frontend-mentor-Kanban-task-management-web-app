import styled from 'styled-components'
import Image from 'next/image'

const HeaderLeftStyled = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  .logo {
    margin-inline-end: var(--logo-margin-inline-end); //81.47 112.47
  }

  .vertical-line {
      background-color: var(--light-line);
      height: 100%;
      width: 1px;
      display: none;
      margin-inline-end: 32px;
    }

  @media (min-width: 768px) {
    .logo {
      width: 152.53px;
      height: 25.22px;
    }

    .vertical-line {
      display: block;
    }

  }
`

const HeaderLeft = props => {
  return (
    <HeaderLeftStyled>
      <Image 
        className='logo' 
        src='/assets/logo-mobile.svg' 
        srcset='/assets/logo-mobile.svg 24w, /assets/logo-dark.svg' 
        sizes='(min-width: 768px) 152.53px, 24px' 
        alt='logo' 
        width='24' 
        height='25'/>
      <div className='vertical-line'></div>
      <h1>Platform Launch</h1>
      <Image 
        src='/assets/icon-chevron-down.svg'
        alt='chevon down'
        width='8'
        height='4'/>
    </HeaderLeftStyled>
  );
}

export default HeaderLeft