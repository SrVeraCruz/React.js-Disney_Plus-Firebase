import "./header.scss"

const Header = () => {
  return (
    <div className='header'>
      <div className="log-img">
        <img src="/images/logo.svg" alt="logo" />
      </div>
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
      <a href="#" className="btn" >LOGIN</a>
    </div>
  )
}

export default Header
