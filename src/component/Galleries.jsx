import { useState, useEffect} from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Spinner from "react-bootstrap/Spinner"
import { useDispatch, useSelector} from 'react-redux'
import { addToPlaylistAction, toggleFavoriteAction } from '../redux/actions'

const Galleries = (props) => {

    const [songs, setSong] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const favourites = useSelector((state)=> state.liked.likedSongs)
  

    const fetchSongs = () => {
        fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q='+ props.title)
        .then((response) => {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error('errore nella fetch')
            }
        })
        .then((data) => {
            console.log(data)
            setSong(data.data)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        fetchSongs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleLikeClick = (song) => {
        dispatch(toggleFavoriteAction(song));
    };

    return (
       <Container>
        <Row>
            {isLoading ? ( <Spinner animation="border" variant="danger" className="ms-auto me-auto "></Spinner>) : (songs.slice(0,4).map((song) => {
                const isFav = favourites.some((favSong) => favSong.id === song.id);
                return (
                    <Col key={song.id} style={{cursor: 'pointer'}}>
                    <div className='d-flex flex-column align-items-center text-center' onClick={() => {
                        dispatch(addToPlaylistAction(song))
                    }}>
                        <img src={song.album.cover} alt='song-album'/>
                        <p className='mt-2 mb-0'>Track: <span>{song.title}</span></p>
                        <p>Artist:<span>{song.artist.name}</span></p>
                    </div>
                     <Button variant='outline-light' className='border-0' onClick={() => {
                            handleLikeClick(song);
                        }}>  <i className={`bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                     </Button>
                    </Col>
                )
            }))}

        </Row>
     </Container>
    )
}

export default Galleries