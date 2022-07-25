import styled from 'styled-components'
import alternateScroll from '../../images/alternateScroll.svg'

const DescriptionScroll = styled.div`

position: absolute;
left: 350px;
top: 0;

width: 400px;
height: 600px;

background-image:url(${alternateScroll});
background-size: contain;
background-repeat: no-repeat;

display: flex:
align-items: center;
justify-content: center;

visibility:${props => props.visibility};
`
const DescriptionContainer = styled.div`

width: 75%;
height: 52%;
margin-left:10px;
margin-top: 80px;
align-self: center;

display: flex;
flex-direction: column;

span{
    align-self: center;
    margin-bottom: 20px;
}

p{
    overflow-y: scroll;
    overflow-wrap: break-word;
    line-height: 20px;

    ::-webkit-scrollbar {
        width: 7px;
      }
      
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #C19967;
        border-radius: 3px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    
}

`

export {DescriptionScroll, DescriptionContainer}