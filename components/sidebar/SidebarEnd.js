import styled from 'styled-components'
import DarkmodeToggle from './DarkmodeToggle';

const SidebarEndStyled = styled.div``

const SidebarEnd = props => {
  return (
    <SidebarEndStyled>
      <DarkmodeToggle/>
      <p>hide sidebar</p>
    </SidebarEndStyled>
  );
}

export default SidebarEnd