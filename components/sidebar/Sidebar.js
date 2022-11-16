import styled from 'styled-components'

const SidebarStyled = styled.div`
  background-color: var(--header-bg);
  width: var(--sidebar-width);
  height: 100%;
  border-right: var(--line-color) solid 1px;

  @media (max-width: 767.5px) {
    display: none;
  }
`

const Sidebar = props => {
  return (
    <SidebarStyled>
    </SidebarStyled>
  );
}

export default Sidebar