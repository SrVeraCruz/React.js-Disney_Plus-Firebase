import "./login.scss"

const Login = () => {
  return (
    <div className='login'>
      <div className="content">
        <div className="bg-image"></div>
        <div className="cta">
          <div className="cta-img">
            <img src="/images/cta-logo-one.svg" alt="logo"/>
          </div>
          <a href="#">GET ALL THERE</a>
          <p>
            Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/03/24, the price of Disney+ and The Disney Bundle will increade by $1.
          </p>
          <div className="cta-img">
            <img src="/images/cta-logo-two.png" alt="logo"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
