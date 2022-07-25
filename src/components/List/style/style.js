import styled from 'styled-components'

const ListDiv = styled.ul`


width: 30%;
height: 500px;

background-color: #8F0576;
color: #FFF;

display: flex;
flex-direction: column;

border-radius: 10px;
box-shadow: -1px 3px 51px 17px rgba(214,2,129,0.75) inset;

overflow-y: hidden;
    h1{
        padding: 15px 0;
        align-self: center;
    }


`
const ScrollContainer = styled.div`

display: flex;
flex-direction: column;
height: 100%;

overflow-y: scroll;

padding: 10px 0;

gap: 10px;


::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #B20C7C;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #8F0576;
  
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

`
export {ListDiv, ScrollContainer}