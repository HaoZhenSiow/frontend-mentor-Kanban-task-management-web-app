import styled from 'styled-components'
import BoardList from './BoardList';

const SidebarStartStyled = styled.div`
  & > p {
    padding: var(--header-padding-inline);
    padding-right: var(--logo-margin-inline-end);
    width: 152.533px;
    box-sizing: content-box;
    font-size: 12px;
    letter-spacing: 2.4px;
    line-height: 15.12px;
    font-weight: 700;
    margin-top: var(--allboards-mt);
    margin-bottom: 19px;
  }
`

const SidebarStart = props => {
  return (
    <SidebarStartStyled>
      <p>ALL BOARDS (8)</p>
      <BoardList/>
    </SidebarStartStyled>
  );
}

export default SidebarStart