import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .container { width: min(1180px, 92%); margin: auto; }

        /* ── BUTTONS ─────────────────────────────── */
        .btn {
          display: inline-flex; align-items: center; gap: 6px;
          background: linear-gradient(135deg, var(--gold) 0%, #b8911e 100%);
          color: #05100e; font-weight: 700; font-size: 0.9rem;
          padding: 10px 22px; border-radius: 10px;
          transition: all 0.25s; border: none; cursor: pointer;
          position: relative; overflow: hidden;
        }
        .btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,0.15),transparent); opacity:0; transition:0.25s; }
        .btn:hover::before { opacity:1; }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(201,162,39,0.4); }

        .btn-ghost {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(201, 162, 39, 0.08);
          border: 1px solid rgba(201, 162, 39, 0.35);
          color: var(--gold2); font-weight: 600; font-size: 0.9rem;
          padding: 10px 22px; border-radius: 10px;
          transition: all 0.25s; cursor: pointer; margin-left: 10px;
        }
        .btn-ghost:hover { background: rgba(201,162,39,0.14); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(201,162,39,0.15); }

        /* ── HERO ────────────────────────────────── */
        .hero {
          position: relative; padding: 120px 0 100px;
          text-align: center; overflow: hidden;
          background: var(--hero-bg);
          transition: background 0.3s ease;
        }
        .orb { position:absolute; border-radius:50%; filter:blur(80px); pointer-events:none; animation:drift 8s ease-in-out infinite alternate; }
        .orb-1 { width:500px;height:500px;background:var(--orb1);top:-150px;left:-100px;animation-delay:0s; }
        .orb-2 { width:400px;height:400px;background:var(--orb2);top:100px;right:-100px;animation-delay:-3s; }
        .orb-3 { width:300px;height:300px;background:var(--orb1);bottom:-50px;left:40%;animation-delay:-5s; }
        @keyframes drift { from{transform:translate(0,0) scale(1)} to{transform:translate(30px,-40px) scale(1.05)} }

        .hero .container { position: relative; z-index: 1; }

        .kicker {
          display: inline-flex; align-items: center; gap: 8px;
          color: var(--gold2); letter-spacing: 2px; text-transform: uppercase;
          font-size: 0.72rem; font-weight: 700;
          border: 1px solid rgba(201,162,39,0.28); background: rgba(201,162,39,0.06);
          padding: 7px 18px; border-radius: 999px; margin-bottom: 28px;
          backdrop-filter: blur(6px);
          transition: border-color 0.3s, background 0.3s;
        }
        .hero h1 { font-size:clamp(2.2rem,5.5vw,3.8rem); font-weight:900; max-width:900px; margin:0 auto 22px; line-height:1.15; letter-spacing:-1.5px; }
        .hero h1 .grad {
          background: linear-gradient(135deg, var(--gold2), var(--gold3));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .hero p { max-width:640px; margin:0 auto 38px; color:var(--mut); font-size:1.08rem; line-height:1.8; }

        /* ── STATS STRIP ─────────────────────────── */
        .stats-wrap { position:relative; z-index:2; margin-top:70px; }
        .stats {
          display: grid; grid-template-columns: repeat(4,1fr);
          border: 1px solid rgba(201,162,39,0.18); border-radius: 18px;
          overflow: hidden; max-width: 900px; margin: 0 auto;
          background: var(--stats-bg); backdrop-filter: blur(20px);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.03), 0 30px 60px rgba(0,0,0,0.3);
          transition: background 0.3s ease;
        }
        .stats div { padding:28px 16px; text-align:center; position:relative; transition:background 0.3s; }
        .stats div:not(:last-child)::after { content:''; position:absolute; right:0;top:20%;bottom:20%; width:1px; background:rgba(201,162,39,0.18); }
        .stats div:hover { background: rgba(201,162,39,0.05); }
        .stats b { display:block; font-size:1.9rem; font-weight:900; background:linear-gradient(135deg,var(--gold2),var(--gold3)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; letter-spacing:-1px; }
        .stats span { font-size:0.78rem; color:var(--mut); letter-spacing:0.3px; }

        /* ── SECTIONS ────────────────────────────── */
        section { padding: 90px 0; }
        .sec-head { text-align:center; max-width:700px; margin:0 auto 60px; }
        .sec-label { display:inline-block; font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:2.5px; color:var(--gold); margin-bottom:14px; }
        .sec-head h2 { font-size:clamp(1.7rem,3.4vw,2.4rem); font-weight:800; letter-spacing:-0.8px; margin-bottom:14px; line-height:1.25; }
        .sec-head h2 em { color:var(--gold2); font-style:normal; }
        .sec-head p { color:var(--mut); font-size:1rem; }

        /* ── SERVICE CARDS ───────────────────────── */
        .services-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .card {
          background: var(--card); border: 1px solid rgba(255,255,255,0.05);
          border-radius: 20px; padding: 34px 30px;
          transition: all 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
          position: relative; overflow: hidden; cursor: pointer;
        }
        [data-theme="light"] .card { border-color: rgba(0,0,0,0.07); box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
        .card::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at 50% 0%,rgba(201,162,39,0.08),transparent 60%); opacity:0; transition:opacity 0.35s; }
        .card:hover::before { opacity:1; }
        .card:hover { transform:translateY(-8px); border-color:rgba(201,162,39,0.35); box-shadow:0 24px 60px rgba(0,0,0,0.4); }
        .card-top { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:18px; }
        .ico-wrap { width:52px;height:52px;border-radius:14px;background:var(--kn-icon-bg);display:flex;align-items:center;justify-content:center;font-size:1.6rem;flex-shrink:0; }
        .card .tag { font-size:0.68rem;font-weight:600;color:var(--gold2);background:rgba(201,162,39,0.08);border:1px solid rgba(201,162,39,0.2);border-radius:999px;padding:4px 11px;white-space:nowrap; }
        .card h3 { font-size:1.08rem;font-weight:700;margin-bottom:10px;color:var(--ink);letter-spacing:-0.2px; }
        .card p { font-size:0.89rem;color:var(--mut);margin-bottom:18px;line-height:1.65; }
        .card .lnk { display:inline-flex;align-items:center;gap:5px;color:var(--gold2);font-weight:600;font-size:0.86rem;transition:gap 0.2s; }
        .card:hover .lnk { gap:10px; }

        /* ── WHY BAND ────────────────────────────── */
        .why-band { background:var(--why-bg); border-top:1px solid var(--line); border-bottom:1px solid var(--line); position:relative; overflow:hidden; padding:90px 0; text-align:center; transition:background 0.3s; }
        .why-band::before { content:''; position:absolute; top:-200px;left:50%;transform:translateX(-50%);width:600px;height:400px;background:radial-gradient(ellipse,rgba(201,162,39,0.08),transparent);pointer-events:none; }
        .why-band h2 { font-size:clamp(1.6rem,3vw,2.3rem);font-weight:800;letter-spacing:-0.8px;margin-bottom:12px; }
        .why-band > .container > p { color:var(--mut);max-width:560px;margin:0 auto 52px;font-size:1rem; }

        .trust-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:20px;text-align:left; }
        .trust-card { background:var(--trust-card-bg);border:1px solid var(--trust-card-border);border-radius:18px;padding:30px 28px;transition:all 0.3s; }
        .trust-card:hover { background:rgba(201,162,39,0.05);border-color:rgba(201,162,39,0.2);transform:translateY(-4px); }
        .trust-ico { font-size:2rem;margin-bottom:16px; }
        .trust-card h4 { font-size:1.02rem;font-weight:700;color:var(--ink);margin-bottom:10px; }
        .trust-card p { font-size:0.88rem;color:var(--mut);line-height:1.65; }

        /* ── STEPS ───────────────────────────────── */
        .steps { display:grid;grid-template-columns:repeat(4,1fr);gap:20px; }
        .step { background:var(--card);border-radius:18px;padding:32px 26px;border:1px solid rgba(255,255,255,0.05);position:relative;overflow:hidden;transition:all 0.3s; }
        [data-theme="light"] .step { border-color:rgba(0,0,0,0.07); box-shadow:0 2px 12px rgba(0,0,0,0.06); }
        .step::after { content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--gold),var(--gold2));border-radius:3px 3px 0 0; }
        .step:hover { transform:translateY(-6px);border-color:rgba(201,162,39,0.25);box-shadow:0 20px 50px rgba(0,0,0,0.3); }
        .step-num { font-size:3rem;font-weight:900;line-height:1;color:transparent;-webkit-text-stroke:2px rgba(201,162,39,0.3);margin-bottom:16px;letter-spacing:-2px; }
        .step h4 { font-size:1rem;font-weight:700;margin-bottom:10px;color:var(--ink); }
        .step p { font-size:0.85rem;color:var(--mut);line-height:1.65; }

        /* ── CTA FINAL ───────────────────────────── */
        .cta-final { position:relative;overflow:hidden;text-align:center;background:var(--cta-bg);border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:100px 0;transition:background 0.3s; }
        .cta-final::before { content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 100%,rgba(201,162,39,0.1),transparent); }
        .cta-final .container { position:relative;z-index:1; }
        .cta-final h2 { font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:900;letter-spacing:-1px;margin-bottom:14px; }
        .cta-final p { color:var(--mut);max-width:520px;margin:0 auto 36px;font-size:1rem; }
        .cta-badge { display:inline-flex;align-items:center;gap:8px;font-size:0.8rem;color:var(--mut);margin-top:18px; }
        .cta-badge .dot { width:6px;height:6px;border-radius:50%;background:var(--ok);display:inline-block; }

        /* ── FOOTER ──────────────────────────────── */
        footer { background:var(--footer-bg);padding:70px 0 32px;border-top:1px solid var(--footer-border);transition:background 0.3s; }
        .f-grid { display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;margin-bottom:48px; }
        .f-brand p { font-size:0.88rem;color:var(--mut);margin-top:16px;line-height:1.75;max-width:280px; }
        .f-col h5 { color:var(--gold2);font-size:0.72rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:18px; }
        .f-col ul { list-style:none; }
        .f-col li { margin-bottom:12px; }
        .f-col a { font-size:0.88rem;color:var(--mut);transition:color 0.2s; }
        .f-col a:hover { color:var(--ink); }
        .f-col p { font-size:0.88rem;color:var(--mut);line-height:1.9; }
        .f-divider { border:none;border-top:1px solid var(--footer-divider);margin-bottom:24px; }
        .f-bottom { display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px; }
        .copy { font-size:0.8rem;color:var(--slate-dim); }
        .disclaimer { font-size:0.76rem;color:var(--slate-dim);max-width:580px;text-align:right; }

        /* ── ANIMATIONS ──────────────────────────── */
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .hero .container > * { animation:fadeUp 0.7s ease both; }
        .hero .container > *:nth-child(1){animation-delay:0.1s}
        .hero .container > *:nth-child(2){animation-delay:0.2s}
        .hero .container > *:nth-child(3){animation-delay:0.3s}
        .hero .container > *:nth-child(4){animation-delay:0.4s}

        .grad-line { height:1px;background:linear-gradient(90deg,transparent,var(--line),transparent); }

        /* ── RESPONSIVE ──────────────────────────── */
        @media (max-width:900px) {
          .services-grid,.trust-grid{grid-template-columns:1fr 1fr}
          .steps{grid-template-columns:1fr 1fr}
          .f-grid{grid-template-columns:1fr 1fr}
          .stats{grid-template-columns:1fr 1fr}
          .f-bottom{flex-direction:column;align-items:flex-start}
          .disclaimer{text-align:left}
        }
        @media (max-width:560px) {
          .services-grid,.trust-grid,.steps,.f-grid{grid-template-columns:1fr}
          .hero{padding:80px 0 70px}
        }
      `}</style>

      <Navbar activePath="/" />

      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="hero">
        <div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" />
        <div className="container">
          <span className="kicker">🌿 One Stop · Capital Markets</span>
          <h1>Every Capital Market Problem.<br /><span className="grad">One Green Door.</span></h1>
          <p>FinLeaf Legal sets up funds, portfolio managers, mutual funds and GIFT City entities — and holds their hand after launch. From your first company paper to your first IPO bell, we are your one-stop solution.</p>
          <div>
            <a className="btn" href="/contact">Start Your Journey ↗</a>
            <a className="btn-ghost" href="#services">Explore Services</a>
          </div>
        </div>
        <div className="container stats-wrap">
          <div className="stats">
            <div><b>6+</b><span>Regulatory Verticals</span></div>
            <div><b>360°</b><span>Incorporation to IPO</span></div>
            <div><b>1</b><span>Expert Team</span></div>
            <div><b>2</b><span>Hubs — Mumbai &amp; GIFT City</span></div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────── */}
      <section id="services">
        <div className="container">
          <div className="sec-head">
            <div className="sec-label">Our Services</div>
            <h2>What We <em>Do</em></h2>
            <p>Six big services. One roof. Think of us as the single doctor who treats the whole body — not six different doctors.</p>
          </div>
          <div className="services-grid">
            {[
              { ico:"🏢", h:"Incorporation", p:"We create your company or LLP the right way — clean structure, clean papers, ready for regulators.", tag:"Day Zero", href:"/incorporation" },
              { ico:"🛡️", h:"Post-Incorporation & Compliance", p:"After birth, everything needs feeding. We handle filings, audits, net-worth checks and secretarial care.", tag:"Ongoing Care", href:"/compliance" },
              { ico:"📦", h:"AIF — Alternative Investment Funds", p:"Cat I, II and III fund registration with SEBI, plus scheme launches, closes and investor reporting.", tag:"SEBI AIF", href:"/aif" },
              { ico:"💼", h:"PMS — Portfolio Management", p:"Licensing, launch and compliance for portfolio managers who run money for ₹50-lakh-plus clients.", tag:"SEBI PMS", href:"/pms" },
              { ico:"🚌", h:"Mutual Fund Setup", p:"Sponsor planning, AMC structuring, SEBI de novo registration — the long road, made short.", tag:"SEBI MF", href:"/mutual-fund" },
              { ico:"🏙️", h:"GIFT City Funds", p:"IFSCA fund management entity setup in GIFT City — Authorised, Non-Retail and Retail FME licences.", tag:"IFSCA FME", href:"/gift-city" },
              { ico:"🔔", h:"IPO Advisory", p:"We prepare you to ring the bell — readiness, structure, intermediary selection and listing discipline.", tag:"SEBI ICDR", href:"/ipo-advisory" },
            ].map(({ ico, h, p, tag, href }) => (
              <div className="card" key={h}>
                <div className="card-top">
                  <div className="ico-wrap">{ico}</div>
                  <span className="tag">{tag}</span>
                </div>
                <h3>{h}</h3>
                <p>{p}</p>
                <a className="lnk" href={href}>Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grad-line" />

      {/* ─── WHY FINLEAF ──────────────────────────────── */}
      <div className="why-band">
        <div className="container">
          <div className="sec-label">Why Us</div>
          <h2>Why people pick <em style={{ color:"var(--gold2)", fontStyle:"normal" }}>FinLeaf</em></h2>
          <p>Because one firm that knows your whole story beats five firms who each know a slice.</p>
          <div className="trust-grid">
            {[
              { ico:"🎯", h:"One Firm, Full Circle", p:"No juggling lawyers, CS firms and consultants. One team, one file, one bill." },
              { ico:"📜", h:"Regulation-First Thinking", p:"We read SEBI and IFSCA circulars daily, so your structure never wakes up outdated." },
              { ico:"🤝", h:"Founder-Friendly Language", p:"We explain every rule in plain words — no jargon walls, no surprise fees." },
            ].map(({ ico, h, p }) => (
              <div className="trust-card" key={h}>
                <div className="trust-ico">{ico}</div>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grad-line" />

      {/* ─── STEPS ────────────────────────────────────── */}
      <section>
        <div className="container">
          <div className="sec-head">
            <div className="sec-label">Our Process</div>
            <h2>How A Project <em>Runs</em></h2>
            <p>Four simple beats. Same for a fund, a PMS or an IPO.</p>
          </div>
          <div className="steps">
            {[
              { n:"01", h:"Listen & Map", p:"We hear your dream, then draw the exact regulatory road map with costs and timelines." },
              { n:"02", h:"Build", p:"Incorporation, documents, capital, people — the machine gets built to spec." },
              { n:"03", h:"Licence", p:"We file with SEBI or IFSCA, answer every query, and walk the licence home." },
              { n:"04", h:"Care & Grow", p:"Ongoing compliance, reporting, new schemes — and when you're ready, the IPO." },
            ].map(({ n, h, p }) => (
              <div className="step" key={n}>
                <div className="step-num">{n}</div>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────── */}
      <div className="cta-final">
        <div className="container">
          <h2>Ready to plant your capital tree? 🌱</h2>
          <p>One conversation is all it takes to know exactly what your structure needs.</p>
          <a className="btn" href="/contact">Book A Free Discovery Call ↗</a>
          <div><span className="cta-badge"><span className="dot" />No commitment · Free 30-min call · Expert advice</span></div>
        </div>
      </div>

      {/* ─── FOOTER ───────────────────────────────────── */}
      <footer>
        <div className="container">
          <div className="f-grid">
            <div className="f-brand">
              <a className="logo" style={{ display:"flex", alignItems:"center", gap:"10px", fontSize:"1.25rem", fontWeight:"800" }} href="/">
                🌿 FinLeaf <span style={{ color:"var(--gold2)" }}>Legal</span>
              </a>
              <p>A one-stop capital markets consultancy — from incorporation to IPO, we walk beside funds, portfolio managers and issuers at every regulatory step.</p>
            </div>
            <div className="f-col">
              <h5>Services</h5>
              <ul>
                <li><a href="/incorporation">Incorporation &amp; Setup</a></li>
                <li><a href="/aif">AIF Registration</a></li>
                <li><a href="/pms">PMS Licensing</a></li>
                <li><a href="/mutual-fund">Mutual Fund Setup</a></li>
              </ul>
            </div>
            <div className="f-col">
              <h5>More</h5>
              <ul>
                <li><a href="/gift-city">GIFT City Funds</a></li>
                <li><a href="/ipo-advisory">IPO Advisory</a></li>
                <li><a href="/compliance">Post-Incorporation Care</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="f-col">
              <h5>Reach Us</h5>
              <p>📧 hello@finleaflegal.com<br />📞 +91-XXXXX-XXXXX<br />📍 Mumbai &amp; GIFT City, India</p>
            </div>
          </div>
          <hr className="f-divider" />
          <div className="f-bottom">
            <p className="copy">© 2026 FinLeaf Legal. All rights reserved.</p>
            <p className="disclaimer">FinLeaf Legal provides regulatory consultancy. Nothing here is investment advice. SEBI &amp; IFSCA thresholds change — confirm with our team before acting.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
