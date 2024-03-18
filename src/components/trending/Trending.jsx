import "../recommends/recommends.scss"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectTrending } from "../../features/movie/movieSlice"

const Trending = () => {
  const movies = useSelector(selectTrending);

  return (
    <div className='globalWrap'>
      <h4>Trending</h4>
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

export default Trending
