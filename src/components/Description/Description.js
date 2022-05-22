import { DescriptionContainer, DescriptionScroll } from "./style";
import Scroll from '../../images/Scroll.svg'
import alternateScroll from '../../images/alternateScroll.svg'

export function Description({children, visibility}){



    return(
        <DescriptionScroll src={alternateScroll} visibility={visibility}>
             <DescriptionContainer>
                 <span>Description</span>
                 <p>{children}</p>
             </DescriptionContainer>
        </DescriptionScroll>
    )
}