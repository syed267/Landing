import './Navbar.css';


function Navbar() {
  return (
<header>
       <nav>
    <a href="#" class="logo">Time<span>flow</span></a>
    <div class="nav-links">
      <a href="#latest">Latest</a>
      <a href="#topics">Topics</a>
      <a href="#newsletter">Newsletter</a>
      <a href="#">About</a>
    </div>
    <button class="btn">Get Now</button>
  </nav>
  </header>

  );
}

export default Navbar;