import styled from 'styled-components'

const HeaderContainer = styled.header`

height: 120px;
width: 100%;

background-color: #FF9900;

position:absolute;
top:0;

display: ${props => props.display};
align-items: center;
justify-content: center;

`

export {HeaderContainer}