import { useEffect, useRef, useState } from "react"
import ReactHowler from "react-howler"
import { MdShuffle, MdSkipNext, MdSkipPrevious, MdOutlinePlayCircleFilled, MdOutlineRepeat, MdOutlinePauseCircleFilled } from "react-icons/md";
import Song1 from "../../assets/Jogi.mp3";
import Song2 from "../../assets/Main wo chand.mp3";
import Song3 from "../../assets/Kabil hun.mp3";
import formatTime from "../../utils/timeFormatter";



export default function PlayerController(){

    const songs = [
        {
            id: 1,
            name: "Song 1",
            artist: {
                name: "Artist 1",
                image: "https://robohash.org/song1",
            },
            duration: 300,
            url: Song1,
        },
        {
            id: 2,
            name: "Song 2",
            artist: {
                name: "Artist 2",
                image: "https://robohash.org/song2",
            },
            duration: 300,
            url: Song2,
        },
        {
            id: 3,
            name: "Song 3",
            artist: {
                name: "Artist 3",
                image: "https://robohash.org/song3",
            },  
            duration: 300,
            url: Song3,
        },

    ];

    const soundRef = useRef(null);
    const [playerState, setPlayerState] = useState({
        playing: false,
        index: 0,
        seek: 0.0,
        isSeeking: false,
        shuffle: false,
        repeat: false,
        duration: 0,
    });

    function nextSong(){
        if(playerState.shuffle){
            const randomIndex = Math.floor(Math.random() * songs.length);
            setPlayerState({
                ...playerState,
                index:(randomIndex === playerState.index) ? (randomIndex + 1) % songs.length : randomIndex
            })
        }else
            setPlayerState({
                ...playerState,
                index: (playerState.index + 1) % songs.length
            })
    }

    function prevSong(){
        setPlayerState({
            ...playerState,
            index: (playerState.index - 1 + songs.length) % songs.length
        })
    }
    function handleShuffle(){
        setPlayerState({
            ...playerState,
            shuffle: !playerState.shuffle
        })
    }

    function handleSongLoad(){
        setPlayerState({
            ...playerState,
            duration: soundRef.current.duration(),

        })
    }

    function handleSeek(e){
        const value = parseFloat(e.target.value);
        setPlayerState({
            ...playerState,
            seek: value,
        })
        soundRef.current.seek(value);
    }

    useEffect(() => {
        let id;
        if (playerState.playing && !playerState.isSeeking) {
            const updateSeek = () => {
                setPlayerState({
                    ...playerState,
                    seek: soundRef.current.seek(),
                });  
                id = requestAnimationFrame(updateSeek);          
            }
            id = requestAnimationFrame(updateSeek);
            return () => cancelAnimationFrame(id);
        }
        cancelAnimationFrame(id);
    }, [playerState.playing, playerState.isSeeking])

    return (
        <div className="text-white">
            <ReactHowler 
                ref={soundRef}
                src={songs[playerState.index].url}
                playing={playerState.playing}
                onLoad={handleSongLoad}
            />
            <div className="flex justify-center items-center space-x-4 p-4 text-gray-400">
                <button 
                    className="text-xl text-white"
                    onClick={handleShuffle}
                >
                    <MdShuffle />
                </button>
                <button 
                    onClick={prevSong}
                    className="text-2xl"
                >
                    <MdSkipPrevious />
                </button>
                {
                    playerState.playing ? (
                        <button 
                            className="text-4xl text-white"
                            onClick={() => setPlayerState({...playerState, playing: false})}
                        >
                            <MdOutlinePauseCircleFilled />
                        </button>
                    ) : (
                        <button 
                            className="text-4xl text-white"
                            onClick={() => setPlayerState({...playerState, playing: true})}
                        >
                        <MdOutlinePlayCircleFilled />
                    </button>
                    )
                }
                
                <button 
                    className="text-2xl"
                    onClick={nextSong}
                >
                    <MdSkipNext />
                </button>
                <button className="text-xl text-white">
                    <MdOutlineRepeat />
                </button>                
            </div>

            {/* Progress bar ui */}
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 px-4">
                <div className="w-10 text-right">
                    {formatTime(playerState.seek)}
                </div>
                <input 
                    type="range" 
                    className="w-50 bg-gray-800 accent-gray-600"
                    min={"0"}
                    max={playerState.duration || 0}
                    step="0.1"
                    value={playerState.seek}
                    onChange={handleSeek}
                    onMouseDown={() => {setPlayerState({...playerState, isSeeking: true})}}
                    onMouseUp={() => {setPlayerState({...playerState, isSeeking: false})}}
                />
                <div className="w-10 text-right">
                    {formatTime(playerState.duration)}
                </div>
            </div>
        </div>
    )
}