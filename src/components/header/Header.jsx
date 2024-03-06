import { auth, googleProvider } from "../../Firebase"
import { signInWithPopup } from 'firebase/auth';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../../features/user/userSlice";

import "./header.scss"
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto= useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) =>{
      if(user) {
        setUser(user)
        navigate("/home")
      }
    })
  }, [userName])

  const handleAuthGoogle = async() => {
    if(userName) {
      auth.signOut()
        .then(() => {
          dispatch(setSignOutState)
          navigate("/")
        })
        .catch((err) => {alert(err.message)})
    } else if(!userName) {
      await signInWithPopup(auth,googleProvider)
        .then((res) => {setUser(res.user)})
        .catch((err) => {alert(err.message)}) 
    }
  }

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })  
    )
  }

  return (
    <div className='header'>
      <div className="log-img">
        <img src="/images/logo.svg" alt="logo" />
      </div>

      {!userName 
        ?<a href="#" className="btn" onClick={handleAuthGoogle} >LOGIN</a> 
        :<>
          <div className="nav-menu">
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME"/>
              <span>HOME</span>
            </a>
            <a href="/search">
              <img src="/images/search-icon.svg" alt="search"/>
              <span>SEARCH</span>
            </a>
            <a href="/watchlist">
              <img src="/images/watchlist-icon.svg" alt="watchlist"/>
              <span>WATCHLIST</span>
            </a>
            <a href="/originals">
              <img src="/images/original-icon.svg" alt="originals"/>
              <span>ORIGINALS</span>
            </a>
            <a href="/movies">
              <img src="/images/movie-icon.svg" alt="movies"/>
              <span>MOVIES</span>
            </a>
            <a href="/series">
              <img src="/images/series-icon.svg" alt="series"/>
              <span>SERIES</span>
            </a>
          </div>
          <div className="signOut">
            <img src={userPhoto} alt={userName} className="userImg" />
            <div className="dropDown">
              <span onClick={handleAuthGoogle} >Sign out</span>
            </div>
          </div>
        </>
      }  
    </div>
  )
}

export default Header
