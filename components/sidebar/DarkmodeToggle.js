import styled from 'styled-components'
import Image from 'next/image';

const DarkmodeToggleStyled = styled.div`
  display: flex;
  place-content: center;
  background-color: var(--light-grey);
  margin-inline: 13px;
  padding-block: 14px;

  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    margin-inline: 23.67px;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--purple);
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 2px;
    bottom: 3px;
    background-color: var(--white);
    -webkit-transition: .4s;
    transition: .4s;
  }

  /* input:checked + .slider {
    background-color: #2196F3;
  } */

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    transform: translateX(20px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`

const DarkmodeToggle = props => {
  return (
    <DarkmodeToggleStyled>
      <Image 
        className='logo' 
        src='/assets/icon-light-theme.svg'
        alt='logo' 
        width='18' 
        height='18'/>
      <label class="switch">
        <input type="checkbox"/>
        <span class="slider round"></span>
      </label>
      <Image 
        className='logo' 
        src='/assets/icon-dark-theme.svg'
        alt='logo' 
        width='15' 
        height='15'/>
    </DarkmodeToggleStyled>
  );
}

export default DarkmodeToggle