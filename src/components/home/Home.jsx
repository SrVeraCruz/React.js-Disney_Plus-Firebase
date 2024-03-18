import "./home.scss"
import ImgSlider from "../imgSlider/ImgSlider"
import Viewers from "../viewers/Viewers"
import Recommends from "../recommends/Recommends"
import NewDisney from "../newDisney/NewDisney"
import Originals from "../originals/Originals"
import Trending from "../trending/Trending"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import db from "../../Firebase"
import { setMovies } from "../../features/movie/movieSlice"
import { selectUserName } from "../../features/user/userSlice"
import { ref, onValue } from "firebase/database";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];
  
  const fetchData = () => {
    const moviesRef = ref(db,"movies");
    onValue(moviesRef, (snapshot) => {
      const datas = snapshot.val();
      datas.forEach((data) => {
        switch(data.type) {
          case "recommend":
            recommends = [...recommends, data] 
            break;
          case "new":
            newDisneys = [...newDisneys, data] 
            break;
          case "original":
            originals = [...originals, data] 
            break;
          case "trending":
            trendings = [...trendings, data] 
            break;
        }
      })
      dispatch(setMovies({
        recommended: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trendings,
      }))
    })
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