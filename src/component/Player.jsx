import { Col } from "react-bootstrap"
import { useSelector } from "react-redux"


const Player = () => {

    const songActive = useSelector((state) => {
        return state.main.isActive
    })
    return (
        <div class="position-fixed bottom-0 container-fluid bg-dark p-3 text-white">
            <div class="row h-100">
            <div class="col">
                <div
                class="row h-100 flex-grow-1 justify-content-start"
                >
                    {songActive.map((song)=> {
                        return (
                            <Col xs={2} key={song.id}>
                                <div className="d-flex">
                                    <div className="me-2">
                                    <img src={song.album.cover_small} alt="cover"/>
                                    </div>
                                    <div className="d-flex flex-column ">
                                            <h6>{song.title}</h6>
                                            <h6>{song.artist.name}</h6>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                <div class="col-3" style={{marginLeft: '10em'}}>
                    <div class="d-flex justify-content-around align-items-center">
                    <a href="/">
                        <img src="shuffle.png" alt="shuffle" style={{width: '2em'}}/>
                    </a>
                    <a href="/">
                        <img src="prev.png" alt="prev" style={{width: '2em'}}/>
                    </a>
                    <a href="/">
                        <img src="play.png" alt="play" style={{width: '2em'}}/>
                    </a>
                    <a href="/#">
                        <img src="next.png" alt="next" style={{width: '2em'}}/>
                    </a>
                    <a href="/">
                        <img src="repeat.png" alt="repeat" style={{width: '2em'}}/>
                    </a>
                    </div>
                    <div class="progress mt-3" style={{height: '0.5em'}}>
                    <div role="progressbar" ></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </div>


    )
}
export default Player