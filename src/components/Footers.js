import './Footers.css';


function Footers() {
  return (
  <footer className="footer">
  <div className="footer-inner">
    
    <div className="footer-top">
      <div className="footer-brand">
        <h3>Elevate Journal</h3>
        <p>Lifts that rise, stories that elevate. Weekly insights on elevator technology, cabin design, safety codes and maintenance.</p>
      </div>

      <div className="footer-col">
        <h4>Topics</h4>
        <span>Passenger Lifts</span>
        <span>Home Elevators</span>
        <span>Hospital Lifts</span>
        <span>Freight & Escalators</span>
        <span>Safety & EN81</span>
      </div>

      <div className="footer-col">
        <h4>Company</h4>
        <span>Latest</span>
        <span>About</span>
        <span>Newsletter</span>
        <span>Contact</span>
      </div>

      <div className="footer-col">
        <h4>Connect</h4>
        <span>Instagram</span>
        <span>LinkedIn</span>
        <span>YouTube</span>
        <span>you@example.com</span>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2026 Elevate Journal. All rights reserved.</p>
      <p>Made for lift engineers, architects & facility teams.</p>
    </div>

  </div>
</footer>

  );
}

export default Footers;