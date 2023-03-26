function Header() {
    return ( 
        <>
        <header>
  <div className="logo-img">
    
      <img src="img/logologo-img.png" alt="" />
    
  </div>
  <div className="input-center">
    <div className="menu">
      Menus <img src="img/right-chevron (1) 1.png" alt="" />
    </div>
    <div className="ql-input">
      <input type="text" placeholder="Search books here" />
      <img src="img/search (2) 1.png" alt="" />
    </div>
  </div>
  <div className="header-right">
    <div className="icon2">
    <i className="fa-solid fa-magnifying-glass"></i>
      <i className="fa-regular fa-heart" data-heart="0" />
      <i className="fa-solid fa-cart-shopping" data-shopping="9" />
      <img className="imguser" src="img/khunglong.jpg" alt="" />
      <div className="tt-user">
        <div className="nameUser">Brian</div>
        <div className="email-user">briancorner@mail.com</div>
      </div>
      <img className="img-header" src="img/right-chevron (1) 1.png" alt="" />
    </div>
  </div>
</header>

        </>
     );
}

export default Header;