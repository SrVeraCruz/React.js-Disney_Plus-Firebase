import "./recommends.scss"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectRecommended } from "../../features/movie/movieSlice"

const Recommends = () => {
  const movies = useSelector(selectRecommended)
  
  return (
    <div className="globalWrap">
      <h4>Recommends for You</h4>
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

export default Recommends
