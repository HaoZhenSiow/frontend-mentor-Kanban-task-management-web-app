import styled from 'styled-components'

const BoardListStyled = styled.ul`
  padding: 0;
  padding-right: 20px;
  font-size: 15px;
  line-height: 18.9px;
  font-weight: 700;

  p {
    padding: var(--header-padding-inline);
    padding-top: 14px;
    padding-bottom: 15px;
    margin: 0;
    border-radius: 0 45px 45px 0;
    cursor: pointer;

    &::before {
      content: '';
      width: 16px;
      height: 16px;
      display: inline-block;
      mask-size: cover;
      mask: url('/assets/icon-board.svg');
      margin-right: 12px;
      position: relative;
      top: 2px;
      background-color: var(--medium-grey);
    }

    &:hover:not(p:last-child) {
      background-color: var(--purple);
      color: var(--white);
    }

    &:hover::before{
      background-color: var(--white);
    }

    &:last-child {
      color: var(--purple);
      &:hover {
        color: var(--purple-hover);
        &::before {
          background-color: var(--purple-hover);
        }
      }
    }
  }
`

const BoardList = props => {
  return (
    <BoardListStyled>
      <p>Platform Launch</p>
      <p>Marketing Plan</p>
      <p>Roadmap</p>
      <p>+ Create New Board</p>
    </BoardListStyled>
  );
}

export default BoardList