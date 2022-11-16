import Button from "./Button"
import styled from "styled-components"

const EmptyBoardStyled = styled.div`
  /* margin-top: var(--emptyboard-mt); */
  
  padding-inline: 2em;
  /* margin-top: var(--emptyboard-mt); */
  padding-inline: 2em;
  text-align: center;
  font-weight: 700;
  font-size: var(--heading-l-fs);
  line-height: var(--heading-l-lh);
  flex-grow: 1;
  font-weight: 700;
  font-size: var(--heading-l-fs);
  line-height: var(--heading-l-lh);
  flex-grow: 1;
`

export default function EmptyBoard() {
  return (
  <EmptyBoardStyled>
    <h1>This board is empty. Create a new column to started</h1>
      <Button>+ Add New Column</Button>
  </EmptyBoardStyled>)
}