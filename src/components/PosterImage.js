import React from 'react'
import fallbackImg from '../images/noImg.jpg'
const BASE_URL='https://image.tmdb.org/t/p/'
const IMAGE_QUALITY='original'

function PosterImage({path}){
    return <img onError={(e)=>{e.target.onerror = null; e.target.src=fallbackImg}} style={{width:'auto', height:'100%'}}alt="Poster" src={`${BASE_URL}${IMAGE_QUALITY}${path}`}/>
}

export default PosterImage