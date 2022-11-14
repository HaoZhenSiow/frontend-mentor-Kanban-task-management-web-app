import styled from 'styled-components'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--header-padding-inline);
  background-color: var(--header-bg);
  height: var(--header-height);
`

const Header = props => {
  
  return (
    <HeaderStyled>
      <HeaderLeft/>
      <HeaderRight/>
    </HeaderStyled>
  );
}

export default Header