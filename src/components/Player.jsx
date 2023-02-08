import { useRef, useState, useEffect } from "react"
import napster from "../services/napster"

function Player({ song }) {

    const [isPlaying, setIsPlaying] = useState(false)
    const [tracks, setTracks] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const music = useRef()
    const key = "ZTVhYTU3MWEtZjRhNy00MmRmLWJiZDAtNjQwNTAwN2E0ODhi"

    useEffect(() => {
        getMusics()
    }, [])

    useEffect(() => {
        console.log(tracks)
    }, [tracks])

    const getMusics = async () => {
        let musics = await napster.get(`top?apikey=${key}`).then(r => r)
        setTracks(musics.data.tracks)
    }

    const loadSong = url => {
        music.current.src = tracks[currentIndex]?.previewURL
        play()
    }

    const play = () => {
        music.current.play()
        setIsPlaying(true)
    }

    const pause = () => {
        music.current.pause()
        setIsPlaying(false)
    }

    const next = () => {
        setCurrentIndex(i => i > 19 ?  0 : i + 1)
        loadSong(tracks[currentIndex]?.previewURL)
    }

    const prev = () => {
        setCurrentIndex(i => i < 0 ?  19 : i - 1)
        loadSong(tracks[currentIndex]?.previewURL)
    }
/*
    function bagaceira(link){
        music.current.src = link
        if (isPlaying==true){
            pause()
        }
        else if(isPlaying==false){
            play()
        }
    }
*/
    return (
        <div>
            {isPlaying ? (
                <h2>Música: {tracks[currentIndex]?.name}</h2>
            ) : (
                <h2>A música está parada</h2>
            )}

            {isPlaying ? (<h3>Album: {tracks[currentIndex]?.albumName}</h3>) : (<></>)}
            {isPlaying ? (<h3>Artista: {tracks[currentIndex]?.artistName}</h3>) : (<></>)}

            <audio ref={music} src={tracks[currentIndex]?.music || "https://listen.hs.llnwd.net/g2/prvw/4/2/4/9/8/911189424.mp3"}></audio>
            
            <button onClick={ prev }><h4>{"<<"}</h4></button>

            <button onClick={ isPlaying ? pause : play}>
                <h4>{ isPlaying ? "pause" : "play"}</h4>
            </button>

            <button onClick={ next }><h4>{">>"}</h4></button>
        </div>
    )
}

export default Player