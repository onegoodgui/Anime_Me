import { List } from "../../components/List/List";
import { DoorHide, HomepageStyle, MainFeature, AnimeMeButton, AnimePoster, AnimeTitle } from "./style/style";
import Item from "../../components/List/Item/Item";
import japaneseDoor from '../../images/japaneseDoor.svg'
import { Description } from "../../components/Description/Description";
import drumRoll from '../../audios/drum_roll.mp3'
import { Button, ButtonGroup, Slider } from "@mui/material";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import {v4 as uuid} from 'uuid'
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { JapaneseDoor } from "../../components/JapaneseDoor/style";
import useAuth from "../../hooks/useAuth";


export default function Homepage(){

    const [columns, setColumns] = useState({
        watching: {items: [], title:'Watching', status:'watching'},
        to_watch:{items: [], title:'To Watch', status: 'to_watch'},
        watched: {items: [], title:'Watched', status:'watched'}
        });
    const [score, setScore] = useState(0);
    const [randomAnime, setRandomAnime] = useState([]);
    const [openDoor, setOpenDoor] = useState(false);
    const {auth} = useAuth();

    useEffect(() => {

        async function getAnimeList(){
            try{
                const result = await api.getAnimeList(auth);
                const animeList = result.data;
                const a = animeList.map((anime) => {
                    const {id, dbId, animeGenres, images, ...animeData} = anime;
                    const [genres] = [animeGenres.map(genre => genre.genre.name)];
                    const [image] = [images.map(image => image.large)]
                    return columns[anime.status].items.push({id: dbId.toString(),...animeData, genres, image})
                })

                setColumns({...columns});
                return
            }
            catch(error){
                console.log(error)
            }
        }
        getAnimeList()

    }
    ,[])

    console.log(columns);

    async function DragHandler(result, columns, setColumns){
        console.log(result);
        const {source, destination} = result;

        try{
            const statusData = {animeId: result.draggableId, status: result.destination.droppableId}
            await api.updateAnimeStatus(auth, statusData)
        }
        catch(error){
            console.log(error);
        }

        if(source.droppableId !== destination.droppableId){

            const sourceColumn = columns[source.droppableId];
            const destinationColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destinationItems = [...destinationColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destinationItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]:{
                    ...destinationColumn,
                    items: destinationItems
                }
            })
        }
        else{

            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]:{
                    ...column,
                    items: copiedItems
                }
            })
        }
    }


    async function getRandomAnime(){

            if(openDoor){
                setOpenDoor(false);
                await new Promise(resolve => setTimeout(resolve, 2000));
                
            }
            try{
    
                const result = await api.getAnimes(auth, score);
                setRandomAnime(result.data);
    
                drumRollSound();
    

                setTimeout(() => {
                    setOpenDoor(true);
                },4000)
                console.log(result.data);

            }
            catch(error){
                console.log(error)
            }
        }
    

    function drumRollSound(){
        const audio = new Audio(drumRoll);
        audio.play();
    }

    async function addAnime(category, anime){
        setOpenDoor(false);
        const column = columns[category];
        const items = [...column.items]
        console.log(items);
        setColumns(
            {
                ...columns,
                [category]:{
                    ...column,
                    items:[
                        ...items,
                        {
                            id: anime.id.toString(),
                            averageScore: anime.averageScore,
                            description: anime.description,
                            genres:[...anime.genres],
                            image: anime.coverImage.large,
                            title: anime.title.english,
                            status: category 
                        }
                    ]
                }
            }
        )
        await api.addAnime(auth, category, anime);
        return
    }

    return(
        <HomepageStyle>
            <main>
                <MainFeature height={500}>
                    <ButtonGroup 
                        size="large"
                        variant="contained" 
                        orientation="vertical" 
                        color="secondary" 
                        sx={{
                            position:'absolute', 
                            right:'400px', 
                            top: '150px', 
                            zIndex:'5',
                            display: openDoor ? 'inherit' : 'none',
                            transition: 'all 1s linear'

                        }}
                    >
                        <Button 
                            size="large"
                            onClick={() => {addAnime('watching', randomAnime)}}  
                            sx={{
                                width:'150px',
                                height: '50px',
                                color: openDoor ? '#FFF' : 'transparent',
                            }}
                        >
                            Watching
                        </Button>

                        <Button 
                            size="large"
                            onClick={() => {addAnime('to_watch', randomAnime)}}  
                            sx={{
                                width:'150px',
                                height: '50px',
                                color: openDoor ? '#FFF' : 'transparent',
                            }}
                        >
                            To Watch
                        </Button>

                        <Button
                            onClick={() => {addAnime('watched', randomAnime)}}  
                            size="large" 
                            sx={{
                                width:'150px',
                                height: '50px',
                                color: openDoor ? '#FFF' : 'transparent',

                            }}
                        >
                            Watched
                        </Button>
                    </ButtonGroup>

                    <DoorHide height={500}/>
                    <JapaneseDoor right={openDoor ? '100%' : '0'} src={japaneseDoor}/>
                    <AnimePoster src={randomAnime.length === 0 ? '' : randomAnime.coverImage.large}/>

                    <Description visibility={openDoor ? 'inherit': 'hidden'}>
                        {randomAnime.description}
                    </Description>
                </MainFeature>


                <AnimeTitle color={openDoor ? '#000': 'transparent'}>{randomAnime.length == 0 ? '' : randomAnime.title.english}</AnimeTitle>
                <span style={{marginTop: '50px'}}>Anime Score: {score}</span>
                <Slider
                    aria-label="Score"
                    defaultValue={0}
                    step={1}
                    min={0}
                    max={100}
                    color='secondary'
                    onChange={(e) => setScore(e.target.value)}
                    size='big'
                    sx={{
                        width: '500px',
                        height: '10px',
                        marginTop: '20px',
                        '& .MuiSlider-thumb':{
                            backgroundColor:'#FFFFFF',
                            border: '2px solid #9c27b0',
                            height: '30px',
                            width:'30px'
                        }
                    }}
                    valueLabelDisplay="auto"
                />
                <AnimeMeButton onClick={getRandomAnime}>Anime Me!</AnimeMeButton>

                <div style={{display: 'flex', justifyContent:'space-between', width: '100%', padding:'50px 0px'}}>
                    <DragDropContext onDragEnd={(result) => DragHandler(result, columns, setColumns)}>
                        {Object.entries(columns).map(([id, column], colIndex) => {
                            
                            return(
                                <Droppable droppableId={id}>
                                    { (provided) => (
                                        <List title={column.title} {...provided.droppableProps} ref={provided.innerRef}>
                                            {column.items.map((item, index) => {
                                                return(
                                                    <Item key={item.id} draggableId={item.id} index={index} image={[item.image]}>
                                                        {<span>score: {item.averageScore}</span>}
                                                        {<span>{item.title}</span>}
                                                    </Item>)}
                                                )
                                            }
                                        </List>
                                    )}
                                </Droppable>
                            )
                        })}
                    </DragDropContext>
                </div>
            </main>

        </HomepageStyle>
        
    )
}