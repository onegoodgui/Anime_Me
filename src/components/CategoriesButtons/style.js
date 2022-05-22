import styled from "styled-components";

const ButtonsContainer = styled.div`

width: ${props => props.diameter}px;
height: ${props => props.diameter}px;
border-radius: ${props => props.diameter/2}px;

background-color: white;

position: absolute;
right: 65%;
top: 15%;

padding: 15px;

z-index: 5;

`

const Top = styled.div`

height: 50%;
width: 100%;
display: flex;

justify-content: center;
align-items: flex-start;
`

const Bottom = styled.div`

height: 50%;
width: 100%;
display:flex;
justify-content: space-between;
`

const Button = styled.button`

all: unset;

width: ${props => props.diameter}px;
height: ${props => props.diameter}px;
border-radius: ${props => props.diameter/2}px;

background-color: lightblue;

`

export {ButtonsContainer, Button, Top, Bottom}