import styled from 'styled-components'
import fluid from '../utils/fluid';

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--header-padding-inline);
  background-color: white;
  height: var(--header-height);
`

const Header = props => {
  
  return (
    <HeaderStyled>
      <div>left</div>
      <div>right</div>
    </HeaderStyled>
  );
}

export default Header