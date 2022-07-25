import styled from 'styled-components'

const JapaneseDoor = styled.img`

width: 100%;
height:100%;

position: absolute;
right: ${props => props.right};
top: 0;

z-index: 2;

transition: all 2s ease-out;

`

export {JapaneseDoor}