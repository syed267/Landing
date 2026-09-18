import React from "react";
import "./Home.css";
import AMC from '../images/AMC.avif';
import safety from '../images/safety.avif';
import MRL from '../images/MRL.avif';
import cabin from '../images/cabin.avif';

function Home() {

  const topics = [
  "Passenger Lifts",
  "Home Elevators", 
  "Hospital Lifts",
  "Freight",
  "Escalators",
  "Safety & EN81",
  "Modernization",
  "AMC Tips",
  "Vastu for Lifts"
];

 const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log("Newsletter signup:", email);
    alert(`Thanks! We'll send insights to ${email}`);
    e.target.reset();
  };
  return (
    <>
      <section className="hero">
  <div className="hero1">
    <span className="badge">✦ New lift insight every Monday</span>

    <h1>
      Lifts that <em>rise</em>, stories that elevate.
    </h1>

    <p>
      Elevate Journal is a blog about elevator technology, cabin design,
      safety codes, maintenance and the art of moving people better.
    </p>

    <div className="hero-cta">
      <a href="#latest" className="btn">
        Start reading
      </a>
      <a href="#newsletter" className="btn ghost">
        Join the newsletter
      </a>
    </div>
  </div>

  <div className="hero-card">
    <img src={safety} className="hero-img" alt="Elevate lift" />
    <span className="tag">Featured • Safety</span>
    <h3>How we test every lift twice before handover</h3>
    <p>
      First for safety, then for silence. A short essay on why double-testing 
      is non-negotiable for EN81 compliance.
    </p>
    <p className="meta">Sep 15, 2026 · 6 min read</p>
  </div>
</section>

{/* LATEST POSTS */}
<section className="latest">
  <div className="section-head">
    <h2>Latest lift insights</h2>
  </div>

  <div className="grid">

    {/* POST 1 */}
    <article className="post">
      <div className="thumb">
       <img src={MRL} className="hero-img" alt="Elevate lift" />

      </div>
      <div className="post-body">
        <span className="tag">Elevator Tech</span>
        <h3>The quiet rise of gearless MRL lifts</h3>
        <p>Why machine-room-less design is winning in 2026.</p>
        <p className="meta">Sep 12, 2026 · 8 min</p>
      </div>
    </article>

    {/* POST 2 */}
    <article className="post">
      <div className="thumb">
      <img src={cabin} className="hero-img" alt="Elevate lift" />
      </div>
      <div className="post-body">
        <span className="tag">Cabin Design</span>
        <h3>Minimalist cabins aren't empty, it's intentional</h3>
        <p>What a blank SS cabin taught me about visual hierarchy.</p>
        <p className="meta">Sep 8, 2026 · 5 min</p>
      </div>
    </article>

    {/* POST 3 */}
    <article className="post">
      <div className="thumb">
      <img src={AMC} className="hero-img" alt="Elevate lift" />
      </div>
      <div className="post-body">
        <span className="tag">Safety Codes</span>
        <h3>Your AMC is a lie (fix it)</h3>
        <p>Maintenance checklists that actually prevent breakdowns.</p>
        <p className="meta">Sep 2, 2026 · 7 min</p>
      </div>
    </article>

  </div>
</section>

<section className="topics-exact">
  <div className="topics-exact-head">
    <h2>Browse topics <span className="slash">/</span></h2>
    <span className="count">9 CATEGORIES</span>
  </div>

  <div className="topics-exact-list">
    {topics.map((name, i) => (
      <span key={name} className="topic-item">
        {name}
        {i < topics.length - 1 && <span className="sep">·</span>}
      </span>
    ))}
  </div>

  <div className="topics-exact-divider"></div>

  <div className="topics-exact-bullets">
    <p><span>•</span> Covers definitions, capacity planning, codes, and machine-room vs MRL choices for each building type.</p>
    <p><span>•</span> Use this section to understand safety devices, inspections, EN81 references, and real incident learnings.</p>
    <p><span>•</span> Includes upgrades, energy saving, service contracts, AMC scope, and Vastu alignment for lift placement.</p>
  </div>
</section>

{/* NEWSLETTER */}
<section className="newsletter">
  <div className="news">
    <h2>One email a week. Zero breakdown spam.</h2>
    <p>Get the best lift maintenance tip plus 3 new projects worth your attention.</p>
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="you@example.com" required />
      <button className="btn" type="submit">Join us</button>
    </form>
  </div>
</section>
    </>
  );
}

export default Home;