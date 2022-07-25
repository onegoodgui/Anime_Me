import styled from 'styled-components'

const ItemContainer = styled.li`

width: 90%;
min-height: 100px;
position: relative;
background-color: lightblue;

border-radius: 5px;

margin: 0 auto;

img{
    position: absolute;
    width: 100%;
    border-radius: 5px;
    height: -webkit-fill-available;
    object-fit: cover;
    background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73));
}

div{
    position: absolute;

    width: 100%;
    height: 100%;

    border-radius: 5px;
    background-color: transparent;
    background: linear-gradient(to top left, transparent 0%, black 120%);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    padding: 5px;
    span{
        -webkit-text-stroke: 0.1px #FBFF03;
        color: #FBFF03;
    }
    
}
`

export {ItemContainer}