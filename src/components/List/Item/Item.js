import { ItemContainer } from "./style/style"
import { Draggable } from "react-beautiful-dnd"


export default function Item({children, draggableId, index, image}){


    return(
        <Draggable draggableId={draggableId} index={index} key={index}>
            {(provided) => (
                <ItemContainer {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <img src={image}></img>
                    <div>
                        {children}
                    </div>
                </ItemContainer>
            )}
        </Draggable>
    )
}