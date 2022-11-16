import styled from 'styled-components'
import Sidebar from '../sidebar/Sidebar';
import EmptyBoard from '../EmptyBoard';

const MainStyled = styled.main`
  flex-grow: 1;
  display: flex;
  align-items: center;
`

const Main = props => {
  return (
    <MainStyled>
       <Sidebar/>
        <EmptyBoard/>
    </MainStyled>
  );
}

export default Main