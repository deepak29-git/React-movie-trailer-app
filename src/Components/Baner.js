import axios from "./axios";
import { useEffect, useState } from "react";
import requests from "./requests";
import './Baner.css'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";


const baseUrl="https://image.tmdb.org/t/p/original"
function Baner(){
    const [movie,setMovie] = useState([])
    const [trailerUrl,setTrailerUrl]=useState("");
    
 
    useEffect(()=>{
        async function fetchData(){
            let response = await axios.get(requests.fetchTrending)
            let randomMovie=Math.floor(Math.random()*response.data.results.length-1)
            setMovie(response.data.results[randomMovie])
        }
        fetchData();
    },[])
    
    function playHandler(movie){
            movieTrailer(movie?.name || movie?.title || movie?.original_title)
            .then(url=>{       
                const getVideoId=url.split("").slice(32).join("")
                setTrailerUrl(getVideoId)
            }).catch(error=>{
                alert(error)
            })

    }

    function stopHandler(){
        setTrailerUrl("")
    }

    const opts={
        height:'300',
        width:'100%',
        playerVars:{
            autoplay:1,
        },
    };

      

    function truncated(str,n){
        return str?.length > n ? str.substr(0,n) + "...." :str;
    }
    return(
        
        <header className="baner" style={{ 
            backgroundImage:`url(${baseUrl}${movie?.backdrop_path})`,
            backgroundSize:"cover",
            backgroundPosition:"center center"
        }}>
            <div className="baner_contents">
            <h1 className="baner_title">{movie?.title || movie?.original_title || movie?.name}</h1>
            
            <div className="baner_buttons">
                <button onClick={()=>playHandler(movie)} className="baner_button">Play</button>
                <button onClick={()=>stopHandler()} className="baner_button">Stop</button> 
            </div>
          
            <p className="baner_overview">{truncated(movie?.overview,150)}</p>
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            <div className="fade_buttons"/>
            </header>
          
    )
}
export default Baner;