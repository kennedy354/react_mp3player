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

    return (
        <>
        <h3>colocar um for pra mostrar o array inteiro</h3>
        <div>
            <b>Música:</b> {tracks[4]?.name} <b>Album:</b> {tracks[4]?.albumName} <b>Artista:</b> {tracks[4]?.artistName}
        </div>
        </>
    )
}

export default Player