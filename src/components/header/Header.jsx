import { auth, googleProvider } from "../../Firebase"
import { signInWithRedirect } from 'firebase/auth';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../../features/user/userSlice";

import "./header.scss"

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  
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
          dispatch(setSignOutState())
          navigate("/")
        })
        .catch((err) => {alert(err.message)})
    } else if(!userName) {
      await signInWithRedirect(auth,googleProvider)
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
          <div className="wrap">
            <div className="nav-menu">
              <a href="#">
                <img src="/images/home-icon.svg" alt="HOME"/>
                <span>HOME</span>
              </a>
              <a href="#">
                <img src="/images/search-icon.svg" alt="search"/>
                <span>SEARCH</span>
              </a>
              <a href="#">
                <img src="/images/watchlist-icon.svg" alt="watchlist"/>
                <span>WATCHLIST</span>
              </a>
              <a href="#">
                <img src="/images/original-icon.svg" alt="originals"/>
                <span>ORIGINALS</span>
              </a>
              <a href="#">
                <img src="/images/movie-icon.svg" alt="movies"/>
                <span>MOVIES</span>
              </a>
              <a href="#">
                <img src="/images/series-icon.svg" alt="series"/>
                <span>SERIES</span>
              </a>
            </div>
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
