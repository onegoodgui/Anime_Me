import styled from 'styled-components'

const HomepageStyle = styled.main`

width: 90%;

display: flex;
flex-direction: column;
align-self: center;
align-items: center;

margin: 0 auto;

main{

    width: 100%;
    margin-top: 200px;

    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
}

`

const MainFeature = styled.div`

height: ${props => props.height}px;
min-height: 20vh;
max-height: 500px;

width: ${props => props.height*0.6198}px;

position: relative;
background-color: lightblue;

z-index: 1;

`

const DoorHide = styled.div`

height: ${props => props.height}px;
min-height: 20vh;
max-height: 500px;

width: ${props => props.height*0.6198}px;

position: absolute;
top: 0;
right: 100%;

background: rgb(246,181,3);
background: linear-gradient(0deg, rgba(246,181,3,1) 0%, rgba(247,192,5,1) 100%);

z-index: 3;

`

const AnimeMeButton = styled.button`

all: unset;

max-width: 200px;
width: 40%;
height: 50px;

margin-top: 50px;

border: 1px solid #C226A6;
border-radius: 25px;
background-color: #FF60E2;

text-align: center;

-webkit-box-shadow: 0px 0px 12px 0px #C226A6; 
box-shadow: 0px 0px 12px 0px #C226A6;

cursor: pointer;
`

const AnimePoster = styled.img`

position: absolute;
top: 0;
right: 0;
height: 100%;
width: 100%;

`

const AnimeTitle = styled.p`

font-size: 30px;
align-self: center;

color: ${props => props.color};
transition: all 1s linear;

padding-top: 50px;

`

export {HomepageStyle, MainFeature, DoorHide, AnimeMeButton, AnimePoster, AnimeTitle}