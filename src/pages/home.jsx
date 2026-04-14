import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import '../App.css';
import { TbAccessPoint } from 'react-icons/tb';

function Home() {
  const levels = [
    { i: <TbAccessPoint />, l: 'L1', d: 'First year — foundations & core modules' },
    { i: <TbAccessPoint />, l: 'L2', d: 'Second year — deepening fundamentals'},
    { i: <TbAccessPoint />, l: 'L3', d: 'Third year — applied specialisations'},
    { i: <TbAccessPoint />, l: 'M1', d: 'Master 1 — research & advanced topics' },
    { i: <TbAccessPoint />, l: 'M2', d: 'Master 2 — thesis & final projects'},
  ];

  return (
    <>
      <Navbar />

      <div className="hero">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          supnum institute
        </div>
        <h1>welcome back to <span>PEP</span></h1>
        <p>No stress—only focus.
Stay calm, trust your preparation, and give your best.
Exams are not the end of the journey, but a step toward success.</p>
        <div className="hero-btns">
          <button className="btn-primary">login now</button>
          <button className="btn-ghost">learn more</button>
        </div>
      </div>

      <div className="section">
        <div className="section-label">academic path</div>
        <div className="section-title">choose your level</div>
        <div className="levels-grid">
          {levels.map((level, index) => (
            <div className="level-card" key={index}>
              <div className="card-icon">{level.i}</div>
              <div className="card-level">{level.l}</div>
              <div className="card-desc">{level.d}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
