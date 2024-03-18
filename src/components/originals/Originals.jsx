import "../recommends/recommends.scss"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectOriginals } from "../../features/movie/movieSlice"

const Originals = () => {
  const movies = useSelector(selectOriginals);

  return (
    <div className='globalWrap'>
      <h4>Originals</h4>
      <div className="content">
        {movies && movies.map((movie, key) => (
          <div className="wrap" key={key}>
            <Link to={"/details/"+movie.id}>
              <img src={movie.cardImg} alt={movie.title} />
            </Link>
          </div>  
        ))}
      </div>
    </div>
  )
}

export default Originals
