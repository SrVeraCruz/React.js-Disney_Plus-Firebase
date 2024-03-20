import "./home.scss"
import ImgSlider from "../imgSlider/ImgSlider"
import Viewers from "../viewers/Viewers"
import Recommends from "../recommends/Recommends"
import NewDisney from "../newDisney/NewDisney"
import Originals from "../originals/Originals"
import Trending from "../trending/Trending"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import db from "../../Firebase"
import { setMovies } from "../../features/movie/movieSlice"
import { selectUserName } from "../../features/user/userSlice"
import { ref, get } from "firebase/database";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  
  useEffect(()=> {
    if(!userName) {
      navigate("/");
    }
  },[]);
  
  const fetchData = async () => {
    const moviesRef = ref(db,"movies");
    const snapshot = await get(moviesRef);
    const datas = snapshot.val();

    if(datas) {
      let recommends = [];
      let newDisneys = [];
      let originals = [];
      let trendings = [];

      Object.values(datas).forEach((movie) => {
        switch(movie.type) {
          case "recommend":
            recommends = [...recommends, movie] 
            break;
          case "new":
            newDisneys = [...newDisneys, movie] 
            break;
          case "original":
            originals = [...originals, movie] 
            break;
          case "trending":
            trendings = [...trendings, movie] 
            break;
        }
        dispatch(setMovies({
          recommended: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trendings,
        }))
      })
    } else {
      console.log("No such file in dataBase");
    }
  }

  useEffect(() => {
    fetchData();
  }, [userName])

  return (
    <main className='home'>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </main>
  )
}

export default Home