import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar"> 
        <div className="logo">
          <img src="logo.svg" alt=""/>
          <span>Tushar-Admin</span>
        </div>
      <div className="icons"> 
        <img src="/search.svg" alt="" className="icon"/>
        <img src="/app.svg" alt="" className="icon"/>
        <img src="/expand.svg" alt="" className="icon"/>
        <div className="notification">
        <img src="/notifications.svg" alt="" className="icon"/>
        <span>1</span>
      </div>
      <div className="user">
        <img src="https://e0.pxfuel.com/wallpapers/932/376/desktop-wallpaper-stylish-boys-cool-d-profile-pics-for-facebook-whatsapp-pretty-boys.jpg" alt="" />
        <span>Tushar</span>
      </div>
      </div>

</div>
  )
}

export default Navbar