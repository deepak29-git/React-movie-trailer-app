import { useEffect, useState } from "react"; 
import axios from "../Components/axios";
import '../Components/Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const baseUrl="https://image.tmdb.org/t/p/original"

function Row({fetchUrl,title,isLargerRow}){
    
    const [movies,setMovies]=useState([])
    const [trailerUrl,setTrailerUrl]=useState("")
    
    
    useEffect(()=>{
        async function apiCall(){
            let response= await axios.get(fetchUrl)
            setMovies(response.data.results)
        }
        apiCall()
    },[fetchUrl])
    
    const opts={
        height:'390',
        width:'100%',
        playerVars:{
            autoplay:1,
        }, 
    };

  
  
    function clickHandler(movie){
        if(trailerUrl){
            setTrailerUrl("")
        }else{
            movieTrailer(movie?.title || movie?.name || movie?.original_title)
            .then((url)=>{
                const getVideoId=url.split("").slice(32).join("")
                setTrailerUrl(getVideoId)
            }).catch(error=>{
                alert(error)
            })
        }
    }

    return(

        <div className="row">
            <h2 className="row_title">{title}</h2>
            <div className="row_container">
            {
                movies.map(movie=>{
                    
                  
                        
                      return  <img onClick={()=>clickHandler(movie)} className={`row_poster ${isLargerRow && `row_poster_larger`}` } key={movie.id} src={`${baseUrl}${isLargerRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                      
                    
                    })
                }
                </div>
            
                {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
                
          
              
    )
}
export default Row;