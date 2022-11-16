import styled from "styled-components"

const ButtonStyled = styled.button`
    color: var(--white);
    background-color: var(--purple);
    width: 174px;
    height: 48px;
    border: none;
    border-radius: 24px;
    font-size: var(--heading-m-fs);
    font-weight: 700;
    line-height: var(--heading-m-lh);
    margin-top: 25px;
    cursor: pointer;
    &:hover {
      background-color: var(--purple-hover);
    }
  `

export default function Button({ children, className }) {
  return (
    <>
      <ButtonStyled className={className}>{children}</ButtonStyled>
    </>
  )
}
