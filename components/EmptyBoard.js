import Button from "./Button"
import styled from "styled-components"

const EmptyBoardStyled = styled.div`
  text-align: center;
`

export default function EmptyBoard() {
  return (
  <EmptyBoardStyled>
    <h1>This board is empty. Create a new column to started</h1>
      <Button>+ Add New Column</Button>
  </EmptyBoardStyled>)
}