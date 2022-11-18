import styled from 'styled-components'
import SidebarStart from './SidebarStart';
import SidebarEnd from './SidebarEnd';

const SidebarStyled = styled.div`
  /* width: var(--sidebar-width); */
  height: 100%;
  background-color: var(--header-bg);
  border-right: var(--line-color) solid 1px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 767.5px) {
    display: none;
  }
`

const Sidebar = props => {
  return (
    <SidebarStyled>
      <SidebarStart/>
      <SidebarEnd/>
    </SidebarStyled>
  );
}

export default Sidebar