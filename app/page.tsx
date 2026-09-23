import Navbar from "./components/Navbar";

export default function Home() {

  return (
    <>
      <style>{`
        :root {
          --navy: #0a1628;
          --navy2: #0f2038;
          --gold: #c9a227;
          --gold2: #e6c65c;
          --ink: #eaf0f8;
          --mut: #9fb0c8;
          --card: #122238;
          --line: rgba(201, 162, 39, 0.25);
          --ok: #3ec98e;
          --white: #ffffff;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          background: var(--navy);
          color: var(--ink);
          line-height: 1.7;
        }
        a { color: inherit; text-decoration: none; }
        .container { width: min(1180px, 92%); margin: auto; }

        /* NAV */
        header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(10, 22, 40, 0.92);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--line);
        }
        .nav { display: flex; align-items: center; justify-content: space-between; height: 72px; }
        .logo { display: flex; align-items: center; gap: 10px; font-size: 1.3rem; font-weight: 700; letter-spacing: 0.5px; }
        .logo .leaf { color: var(--gold); }
        .logo small { display: block; font-size: 0.62rem; font-weight: 400; color: var(--mut); letter-spacing: 2px; text-transform: uppercase; }
        nav ul { display: flex; gap: 26px; list-style: none; align-items: center; }
        nav a { font-size: 0.92rem; color: var(--mut); transition: 0.2s; }
        nav a:hover, nav a.active { color: var(--gold2); }
        .btn {
          display: inline-block;
          background: linear-gradient(135deg, var(--gold), #a8831a);
          color: #0a1628;
          font-weight: 700;
          padding: 11px 26px;
          border-radius: 8px;
          transition: 0.25s;
          border: none;
          cursor: pointer;
          font-size: 0.95rem;
        }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201, 162, 39, 0.35); }
        .btn-ghost { background: transparent; border: 1px solid var(--gold); color: var(--gold2); margin-left: 12px; }
        .burger { display: none; font-size: 1.6rem; background: none; border: none; color: var(--gold); cursor: pointer; }

        /* HERO */
        .hero {
          position: relative;
          padding: 110px 0 90px;
          text-align: center;
          overflow: hidden;
          background: radial-gradient(ellipse at 50% -20%, rgba(201, 162, 39, 0.18), transparent 60%),
            linear-gradient(180deg, #0c1a30, #0a1628);
        }
        .hero h1 { font-size: clamp(2rem, 5vw, 3.4rem); font-weight: 800; max-width: 900px; margin: 0 auto 20px; }
        .hero h1 span { color: var(--gold2); }
        .hero p { max-width: 720px; margin: 0 auto 34px; color: var(--mut); font-size: 1.12rem; }
        .kicker {
          display: inline-block;
          color: var(--gold);
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: 0.75rem;
          font-weight: 700;
          border: 1px solid var(--line);
          padding: 7px 18px;
          border-radius: 999px;
          margin-bottom: 26px;
        }

        /* STAT STRIP */
        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
          border-radius: 14px;
          overflow: hidden;
          margin: -40px auto 0;
          position: relative;
          z-index: 2;
          max-width: 980px;
        }
        .stats div { background: var(--navy2); padding: 24px 14px; text-align: center; }
        .stats b { display: block; font-size: 1.6rem; color: var(--gold2); }
        .stats span { font-size: 0.8rem; color: var(--mut); }

        /* SECTIONS */
        section { padding: 80px 0; }
        .sec-head { text-align: center; max-width: 760px; margin: 0 auto 54px; }
        .sec-head h2 { font-size: clamp(1.6rem, 3.4vw, 2.3rem); margin-bottom: 14px; }
        .sec-head h2 em { color: var(--gold2); font-style: normal; }
        .sec-head p { color: var(--mut); }

        /* SERVICE GRID */
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
        .card {
          background: var(--card);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 32px 28px;
          transition: 0.3s;
          position: relative;
        }
        .card:hover { transform: translateY(-6px); border-color: var(--gold); box-shadow: 0 18px 40px rgba(0, 0, 0, 0.4); }
        .card .ico { font-size: 1.9rem; margin-bottom: 16px; }
        .card h3 { font-size: 1.15rem; margin-bottom: 10px; color: var(--white); }
        .card p { font-size: 0.92rem; color: var(--mut); margin-bottom: 16px; }
        .card .tag { display: inline-block; font-size: 0.72rem; color: var(--gold2); border: 1px solid var(--line); border-radius: 999px; padding: 4px 12px; }
        .card .lnk { display: inline-block; margin-top: 14px; color: var(--gold2); font-weight: 600; font-size: 0.9rem; }

        /* CTA BAND */
        .cta {
          background: linear-gradient(135deg, #132743, #0e1e35);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          text-align: center;
        }
        .cta h2 { font-size: clamp(1.5rem, 3vw, 2.1rem); margin-bottom: 14px; }
        .cta p { color: var(--mut); margin-bottom: 30px; max-width: 600px; margin-inline: auto; }

        /* TRUST */
        .trust-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .trust { display: flex; gap: 16px; align-items: flex-start; }
        .trust .ico { font-size: 1.6rem; }
        .trust h4 { color: var(--white); margin-bottom: 6px; }
        .trust p { font-size: 0.88rem; color: var(--mut); }

        /* STEPS */
        .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; }
        .step { background: var(--card); border-radius: 14px; padding: 28px 24px; border-top: 3px solid var(--gold); }
        .step .num { font-size: 2rem; font-weight: 800; color: var(--gold); opacity: 0.85; }
        .step h4 { margin: 8px 0 8px; font-size: 1.02rem; }
        .step p { font-size: 0.86rem; color: var(--mut); }

        /* FOOTER */
        footer { background: #071120; padding: 60px 0 30px; border-top: 1px solid var(--line); }
        .f-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 44px; }
        .f-grid h5 { color: var(--gold2); font-size: 0.85rem; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 16px; }
        .f-grid ul { list-style: none; }
        .f-grid li { margin-bottom: 10px; }
        .f-grid a, .f-grid p { font-size: 0.88rem; color: var(--mut); }
        .f-grid a:hover { color: var(--gold2); }
        .copy { text-align: center; font-size: 0.8rem; color: #5c6b82; padding-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.06); }
        .disclaimer { font-size: 0.78rem; color: #5c6b82; max-width: 900px; margin: 0 auto 24px; text-align: center; }

        @media (max-width: 900px) {
          .grid, .trust-grid { grid-template-columns: 1fr 1fr; }
          .steps { grid-template-columns: 1fr 1fr; }
          .f-grid { grid-template-columns: 1fr 1fr; }
          .stats { grid-template-columns: 1fr 1fr; }
          nav ul {
            display: none;
            position: absolute;
            top: 72px;
            left: 0;
            right: 0;
            background: var(--navy2);
            flex-direction: column;
            padding: 24px;
            gap: 18px;
            border-bottom: 1px solid var(--line);
          }
          nav ul.open { display: flex; }
          .burger { display: block; }
          .btn-ghost { margin-left: 0; margin-top: 10px; }
        }
        @media (max-width: 560px) {
          .grid, .trust-grid, .steps, .f-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <Navbar activePath="/" />

      <section className="hero">
        <div className="container">
          <span className="kicker">🌿 One Stop · Capital Markets</span>
          <h1>
            Every Capital Market Problem.<br />
            <span>One Green Door.</span>
          </h1>
          <p>
            FinLeaf Legal sets up funds, portfolio managers, mutual funds and GIFT City entities — and holds their hand after launch.
            From your first company paper to your first IPO bell, we are your one-stop solution.
          </p>
          <a className="btn" href="/contact">Start Your Journey</a>
          <a className="btn btn-ghost" href="#services">Explore Services</a>
        </div>
        <div className="container">
          <div className="stats">
            <div><b>6+</b><span>Regulatory Verticals</span></div>
            <div><b>360°</b><span>Incorporation to IPO</span></div>
            <div><b>1</b><span>Dedicated Expert Team</span></div>
            <div><b>2</b><span>Hubs — Mumbai &amp; GIFT City</span></div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <div className="sec-head">
            <h2>What We <em>Do</em></h2>
            <p>Six big services. One roof. Think of us as the single doctor who treats the whole body — not six different doctors.</p>
          </div>
          <div className="grid">
            <div className="card">
              <div className="ico">🏢</div>
              <h3>Incorporation</h3>
              <p>We create your company or LLP the right way — clean structure, clean papers, ready for regulators.</p>
              <span className="tag">Day Zero</span><br />
              <a className="lnk" href="/incorporation">Learn more →</a>
            </div>
            <div className="card">
              <div className="ico">🛡️</div>
              <h3>Post-Incorporation &amp; Compliance</h3>
              <p>After birth, everything needs feeding. We handle filings, audits, net-worth checks and secretarial care.</p>
              <span className="tag">Ongoing Care</span><br />
              <a className="lnk" href="/compliance">Learn more →</a>
            </div>
            <div className="card">
              <div className="ico">📦</div>
              <h3>AIF — Alternative Investment Funds</h3>
              <p>Cat I, II and III fund registration with SEBI, plus scheme launches, closes and investor reporting.</p>
              <span className="tag">SEBI AIF Regulations</span><br />
              <a className="lnk" href="/aif">Learn more →</a>
            </div>
            <div className="card">
              <div className="ico">💼</div>
              <h3>PMS — Portfolio Management Services</h3>
              <p>Licensing, launch and compliance for portfolio managers who run money for ₹50-lakh-plus clients.</p>
              <span className="tag">SEBI PMS Regulations</span><br />
              <a className="lnk" href="/pms">Learn more →</a>
            </div>
            <div className="card">
              <div className="ico">🚌</div>
              <h3>Mutual Fund Setup</h3>
              <p>Sponsor planning, AMC structuring, SEBI de novo registration — the long road, made short.</p>
              <span className="tag">SEBI MF Regulations</span><br />
              <a className="lnk" href="/mutual-fund">Learn more →</a>
            </div>
            <div className="card">
              <div className="ico">🏙️</div>
              <h3>GIFT City Funds</h3>
              <p>IFSCA fund management entity setup in GIFT City — Authorised, Non-Retail and Retail FME licences.</p>
              <span className="tag">IFSCA FME Regulations</span><br />
              <a className="lnk" href="/gift-city">Learn more →</a>
            </div>
            <div className="card">
              <div className="ico">🔔</div>
              <h3>IPO Advisory</h3>
              <p>We prepare you to ring the bell — readiness, structure, intermediary selection and listing discipline.</p>
              <span className="tag">SEBI ICDR</span><br />
              <a className="lnk" href="/ipo-advisory">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Why people pick FinLeaf</h2>
          <p style={{ marginBottom: "40px" }}>
            Because one firm that knows your whole story beats five firms who each know a slice.
          </p>
          <div className="trust-grid">
            <div className="trust">
              <div className="ico">🎯</div>
              <div>
                <h4>One Firm, Full Circle</h4>
                <p>No juggling lawyers, CS firms and consultants. One team, one file, one bill.</p>
              </div>
            </div>
            <div className="trust">
              <div className="ico">📜</div>
              <div>
                <h4>Regulation-First Thinking</h4>
                <p>We read SEBI and IFSCA circulars daily, so your structure never wakes up outdated.</p>
              </div>
            </div>
            <div className="trust">
              <div className="ico">🤝</div>
              <div>
                <h4>Founder-Friendly Language</h4>
                <p>We explain every rule in plain words — no jargon walls, no surprise fees.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="sec-head">
            <h2>How A Project <em>Runs</em></h2>
            <p>Four simple beats. Same for a fund, a PMS or an IPO.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="num">1</div>
              <h4>Listen &amp; Map</h4>
              <p>We hear your dream, then draw the exact regulatory road map with costs and timelines.</p>
            </div>
            <div className="step">
              <div className="num">2</div>
              <h4>Build</h4>
              <p>Incorporation, documents, capital, people — the machine gets built to spec.</p>
            </div>
            <div className="step">
              <div className="num">3</div>
              <h4>Licence</h4>
              <p>We file with SEBI or IFSCA, answer every query, and walk the licence home.</p>
            </div>
            <div className="step">
              <div className="num">4</div>
              <h4>Care &amp; Grow</h4>
              <p>Ongoing compliance, reporting, new schemes — and when you&apos;re ready, the IPO.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to plant your capital tree? 🌱</h2>
          <p>One conversation is all it takes to know exactly what your structure needs.</p>
          <a className="btn" href="/contact">Book A Free Discovery Call</a>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="f-grid">
            <div>
              <a className="logo" href="/">
                🌿 FinLeaf <span className="leaf">Legal</span>
              </a>
              <p style={{ marginTop: "14px" }}>
                A one-stop capital markets consultancy — from incorporation to IPO, we walk beside funds, portfolio managers and issuers at every regulatory step.
              </p>
            </div>
            <div>
              <h5>Services</h5>
              <ul>
                <li><a href="/incorporation">Incorporation &amp; Setup</a></li>
                <li><a href="/aif">AIF Registration</a></li>
                <li><a href="/pms">PMS Licensing</a></li>
                <li><a href="/mutual-fund">Mutual Fund Setup</a></li>
              </ul>
            </div>
            <div>
              <h5>More</h5>
              <ul>
                <li><a href="/gift-city">GIFT City Funds</a></li>
                <li><a href="/ipo-advisory">IPO Advisory</a></li>
                <li><a href="/compliance">Post-Incorporation Care</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5>Reach Us</h5>
              <p>📧 hello@finleaflegal.com<br />📞 +91-XXXXX-XXXXX<br />📍 India · GIFT City · Mumbai</p>
            </div>
          </div>
          <p className="disclaimer">
            Disclaimer: FinLeaf Legal provides regulatory consultancy and advisory services. Nothing on this website is investment advice or a guarantee of returns.
            SEBI, IFSCA and other regulator names belong to their respective authorities. Regulatory thresholds change from time to time — always confirm current requirements with our team before acting.
          </p>
          <p className="copy">© 2026 FinLeaf Legal. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
