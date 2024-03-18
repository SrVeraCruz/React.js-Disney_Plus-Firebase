import "./details.scss"
import db from "../../Firebase"
import { useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import { ref, onValue } from "firebase/database";

const Details = () => {
  const { id } = useParams();
  const [detailsData,setDetailsData] = useState(null);

  useEffect(() => {
    const moviesRef = ref(db,"movies");
    onValue(moviesRef, (snapshot) => {
      const datas = snapshot.val();
      if (datas) {
        const movie = Object.values(datas).find((data) => data.id == id);
        if (movie) {
          setDetailsData(movie);
        } else {
          console.log("Movie not found in database.");
        }
      } else {
        console.log("No data available in database.");
      }
    })
  }, [id])

  return (
    <div className="details">
      <div className="backgroundImg">
        {detailsData && (
          <img src={detailsData.backgroundImg} alt={detailsData.title} />
        )}
      </div>
      <div className="imgTitle">
        {detailsData && (
          <img src={detailsData.titleImg} alt={detailsData.title} />
        )}   
      </div>
      <div className="contentMeta">
        <div className="controls">
          <button className="player">
            <img src="/images/play-icon-black.png" alt="player-control" />
            <span>Play</span>
          </button>
          <button className="player trailer">
            <img src="/images/play-icon-white.png" alt="player-control" />
            <span>Trailer</span>
          </button>
          <div className="addList">
            <span></span>
            <span></span>
          </div>
          <div className="addList groupWatch">
            <img src="/images/group-icon.png" alt="group-icon" />
          </div>
        </div>
        <div className="subtitle">
        {detailsData && (
          <p>{detailsData.subTitle}</p>
        )}
        </div>
        <div className="description">
        {detailsData && (
          <p>{detailsData.description}</p>
        )} 
        </div>
      </div>
    </div>
  )
}

export default Details