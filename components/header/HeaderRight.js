import styled from 'styled-components'
import Image from 'next/image';
import Button from '../Button';

const HeaderRightStyled = styled.div`
  button.add-task-mobile {
    width: 48px;
    height: 32px;
    margin: 0;
  }

  .add-task {
    display: none;
    margin-top: 0;
  }

  .vertical-ellipsis {
    width: 3.69px;
    height: 16px;
    margin-left: 16px;
  }

  @media (min-width: 768px) {
    button.add-task-mobile {
      display: none;
    }

    .add-task {
      display: inline;
    }
  }
`

const HeaderRight = props => {
  return (
    <HeaderRightStyled>
      <Button className='add-task-mobile'>
        <Image
          src='/assets/icon-add-task-mobile.svg'
          alt='add task'
          width='12'
          height='12'
        />
      </Button>
      <Button className='add-task'>+ Add New Task</Button>
      <Image
        className='vertical-ellipsis'
        src='/assets/icon-vertical-ellipsis.svg'
        alt='vertical ellipsis'
        width='4'
        height='16'
      />
    </HeaderRightStyled>
  );
}

export default HeaderRight