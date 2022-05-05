import { useState, useEffect } from "react"
import styled from "styled-components"


const StyledButton = styled.button`
  width: 220px;
  height: 50px;
  display: block;
  border-radius: 25px;
  background: #D12386;
  border: 0;
  position: relative;
  overflow: hidden;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: Averta Std PE;
  cursor: pointer;
  letter-spacing: 0.1rem;
  & > span {
    position: relative;
    z-index: 10;
  }
  &.mouseover::after {
    content:'';
    position: absolute;
    z-index: 2;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    top: -30px;
    left: -30px;
    background: #a83159;
    transform: scale(0);
    animation: 500ms ease-out forwards mouseover;
    @keyframes mouseover {
    from {
        transform: scale(0); 
        transform: translate(10px, 20px);
      }
      to {
        transform: scale(1);
        transform: translate(-20px, -30px);
      }
    } 
  }
  &.mouseout::after {
    content:'';
    position: absolute;
    z-index: 2;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    top: -30px;
    left: -30px;
    background: #a83159;
    transform: scale(1);
    animation: 500ms ease-out forwards mouseout;
    @keyframes mouseout {
      from {
        transform: scale(1);
        transform: translate(-20px, -30px);
      }
      to {
        transform: scale(0); 
        transform: translate(10px, 20px);
        width: 0;
        height: 0;
      }
    } 
  }
`

const Button = props => {

  useEffect(() => {
    const target = document.getElementById('button')
    target.addEventListener('mouseover', e => {
      target.classList.add('mouseover')
      target.classList.remove('mouseout')
    })
    return target.addEventListener('mouseover', e => {
      target.classList.add('mouseover')
      target.classList.remove('mouseout')
    })
  })

  useEffect(() => {
    const target = document.getElementById('button')
    target.addEventListener('mouseout', e => {
      target.classList.remove('mouseover')
      target.classList.add('mouseout')
    })
    return target.addEventListener('mouseout', e => {
      target.classList.remove('mouseover')
      target.classList.add('mouseout')
    })
  })

  return (
    <StyledButton id="button" type="button" {...props}>
      <span>{props.children}</span>
    </StyledButton>
  )
}

export default Button;