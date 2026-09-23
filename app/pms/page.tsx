import Navbar from "../components/Navbar";

export default function PMS() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .container { width: min(1180px,92%); margin:auto; }

        /* ── BUTTONS ────────────────────────────── */
        .btn {
          display:inline-flex; align-items:center; gap:6px;
          background: linear-gradient(135deg,var(--gold) 0%,#b8911e 100%);
          color:#05100e; font-weight:700; font-size:0.9rem;
          padding:10px 22px; border-radius:10px;
          transition:all 0.25s; border:none; cursor:pointer;
          position:relative; overflow:hidden;
        }
        .btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,0.15),transparent); opacity:0; transition:0.25s; }
        .btn:hover::before { opacity:1; }
        .btn:hover { transform:translateY(-2px); box-shadow:0 10px 30px rgba(201,162,39,0.4); }

        /* ── PAGE HERO ──────────────────────────── */
        .page-hero {
          position:relative; padding:100px 0 80px;
          text-align:center; overflow:hidden;
          background: var(--page-hero-bg);
          transition: background 0.3s ease;
        }
        .orb { position:absolute; border-radius:50%; filter:blur(70px); pointer-events:none; animation:drift 9s ease-in-out infinite alternate; }
        .orb-1 { width:400px;height:400px;background:var(--orb1);top:-80px;right:-60px;animation-delay:0s; }
        .orb-2 { width:300px;height:300px;background:var(--orb2);bottom:-40px;left:-50px;animation-delay:-4s; }
        @keyframes drift { from{transform:translate(0,0)} to{transform:translate(25px,-35px)} }
        .page-hero .container { position:relative; z-index:1; }

        .crumb {
          display:inline-flex; align-items:center; gap:8px;
          font-size:0.76rem; font-weight:500; color:var(--mut);
          background:rgba(128,128,128,0.08); border:1px solid rgba(128,128,128,0.14);
          padding:5px 14px; border-radius:999px; margin-bottom:28px;
          transition: background 0.3s, border-color 0.3s;
        }
        .crumb a { color:var(--gold2); }
        .crumb span { color:var(--mut); opacity:0.5; }

        .hero-badge {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(201,162,39,0.08); border:1px solid rgba(201,162,39,0.25);
          color:var(--gold2); font-size:0.72rem; font-weight:700;
          letter-spacing:2px; text-transform:uppercase;
          padding:6px 16px; border-radius:999px; margin-bottom:22px;
        }
        .page-hero h1 { font-size:clamp(2rem,4.5vw,3.2rem); font-weight:900; letter-spacing:-1.5px; line-height:1.15; margin-bottom:18px; }
        .grad { background:linear-gradient(135deg,var(--gold2),var(--gold3)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .page-hero p { max-width:620px; margin:0 auto 36px; color:var(--mut); font-size:1.05rem; line-height:1.8; }

        .hero-stats {
          display:inline-flex; gap:0;
          background:var(--stats-bg); border:1px solid rgba(201,162,39,0.18);
          border-radius:14px; overflow:hidden; backdrop-filter:blur(16px);
          margin-top:12px; transition: background 0.3s ease;
        }
        .hero-stat { padding:16px 28px; text-align:center; position:relative; }
        .hero-stat:not(:last-child)::after { content:''; position:absolute; right:0;top:20%;bottom:20%;width:1px;background:rgba(201,162,39,0.18); }
        .hero-stat b { display:block; font-size:1.3rem; font-weight:900; color:var(--gold2); letter-spacing:-0.5px; }
        .hero-stat span { font-size:0.72rem; color:var(--mut); }

        /* ── MAIN SECTION ───────────────────────── */
        .main-section { padding:90px 0; }
        .two-col { display:grid; grid-template-columns:1.2fr 0.8fr; gap:52px; align-items:start; }

        .block-label { font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:2.5px; color:var(--gold); margin-bottom:12px; }
        .block h2 { font-size:clamp(1.5rem,2.8vw,2rem); font-weight:800; letter-spacing:-0.8px; line-height:1.25; margin-bottom:18px; }
        .block h2 em { color:var(--gold2); font-style:normal; }
        .block > p { color:var(--mut); margin-bottom:16px; font-size:0.97rem; line-height:1.75; }

        .analogy {
          background:var(--analogy-bg);
          border-left:3px solid var(--gold); padding:20px 24px;
          border-radius:0 14px 14px 0; margin:26px 0;
          font-size:0.95rem; color:var(--mut); line-height:1.75;
          transition: background 0.3s;
        }
        .analogy b { color:var(--gold2); }

        /* key numbers grid */
        .key-numbers { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:28px 0; }
        .kn-card {
          background:var(--include-item-bg); border:1px solid var(--include-item-border);
          border-radius:14px; padding:20px 18px; transition:all 0.3s;
        }
        .kn-card:hover { background:rgba(201,162,39,0.05); border-color:rgba(201,162,39,0.2); transform:translateY(-3px); }
        .kn-icon { font-size:1.4rem; margin-bottom:10px; }
        .kn-card b { display:block; font-size:1.5rem; font-weight:900; color:var(--gold2); letter-spacing:-0.5px; margin-bottom:4px; }
        .kn-card span { font-size:0.8rem; color:var(--mut); line-height:1.5; }

        /* RIGHT FACTBOX */
        .factbox {
          background:var(--factbox-bg); border:1px solid rgba(201,162,39,0.18);
          border-radius:20px; padding:32px; backdrop-filter:blur(10px);
          position:sticky; top:90px; transition: background 0.3s ease;
        }
        [data-theme="light"] .factbox { box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
        .factbox-section { margin-bottom:28px; }
        .factbox-section:last-child { margin-bottom:0; }
        .factbox h3 {
          display:flex; align-items:center; gap:8px;
          color:var(--gold2); margin-bottom:18px;
          font-size:0.95rem; font-weight:700;
          padding-bottom:12px; border-bottom:1px solid var(--include-item-border);
        }

        .help-steps { display:flex; flex-direction:column; gap:10px; }
        .help-step {
          display:flex; align-items:flex-start; gap:12px;
          background:var(--include-item-bg); border:1px solid var(--include-item-border);
          border-radius:10px; padding:12px 14px; transition:all 0.25s;
        }
        .help-step:hover { background:rgba(201,162,39,0.05); border-color:rgba(201,162,39,0.18); }
        .help-num { width:24px;height:24px;border-radius:7px;background:var(--kn-icon-bg);border:1px solid rgba(201,162,39,0.2);display:flex;align-items:center;justify-content:center;font-size:0.68rem;font-weight:700;color:var(--gold2);flex-shrink:0; }
        .help-step-text b { color:var(--ink); font-size:0.86rem; display:block; margin-bottom:2px; }
        .help-step-text span { color:var(--mut); font-size:0.82rem; line-height:1.5; }

        .faq-list { display:flex; flex-direction:column; gap:0; }
        .faq-item { padding:13px 0; border-bottom:1px solid var(--include-item-border); font-size:0.87rem; }
        .faq-item:last-child { border-bottom:none; padding-bottom:0; }
        .faq-item b { color:var(--ink); display:block; margin-bottom:4px; }
        .faq-item span { color:var(--mut); line-height:1.6; }

        /* ── CTA ─────────────────────────────────── */
        .cta {
          position:relative; overflow:hidden; text-align:center; padding:90px 0;
          background:var(--cta-bg); border-top:1px solid var(--line); border-bottom:1px solid var(--line);
          transition: background 0.3s ease;
        }
        .cta::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 60% 70% at 50% 110%,rgba(201,162,39,0.08),transparent); }
        .cta .container { position:relative; z-index:1; }
        .cta h2 { font-size:clamp(1.7rem,3vw,2.4rem); font-weight:900; letter-spacing:-1px; margin-bottom:12px; }
        .cta p { color:var(--mut); max-width:480px; margin:0 auto 32px; font-size:0.97rem; }
        .cta-badge { display:inline-flex; align-items:center; gap:8px; font-size:0.8rem; color:var(--mut); margin-top:16px; }
        .cta-badge .dot { width:6px;height:6px;border-radius:50%;background:var(--ok);display:inline-block; }

        /* ── FOOTER ──────────────────────────────── */
        footer { background:var(--footer-bg); padding:70px 0 32px; border-top:1px solid var(--footer-border); transition:background 0.3s; }
        .f-grid { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:48px; margin-bottom:48px; }
        .f-brand p { font-size:0.88rem; color:var(--mut); margin-top:16px; line-height:1.75; max-width:280px; }
        .f-col h5 { color:var(--gold2); font-size:0.72rem; font-weight:700; letter-spacing:2px; text-transform:uppercase; margin-bottom:18px; }
        .f-col ul { list-style:none; }
        .f-col li { margin-bottom:12px; }
        .f-col a { font-size:0.88rem; color:var(--mut); transition:color 0.2s; }
        .f-col a:hover { color:var(--ink); }
        .f-col p { font-size:0.88rem; color:var(--mut); line-height:1.9; }
        .f-divider { border:none; border-top:1px solid var(--footer-divider); margin-bottom:24px; }
        .f-bottom { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; }
        .copy { font-size:0.8rem; color:var(--slate-dim); }
        .disclaimer { font-size:0.76rem; color:var(--slate-dim); max-width:580px; text-align:right; }

        /* ── ANIMATIONS ──────────────────────────── */
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .page-hero .container > * { animation:fadeUp 0.65s ease both; }
        .page-hero .container > *:nth-child(1){animation-delay:0.1s}
        .page-hero .container > *:nth-child(2){animation-delay:0.2s}
        .page-hero .container > *:nth-child(3){animation-delay:0.3s}
        .page-hero .container > *:nth-child(4){animation-delay:0.4s}
        .page-hero .container > *:nth-child(5){animation-delay:0.5s}

        /* ── RESPONSIVE ──────────────────────────── */
        @media (max-width:900px) {
          .two-col { grid-template-columns:1fr; }
          .factbox { position:static; }
          .f-grid { grid-template-columns:1fr 1fr; }
          .f-bottom { flex-direction:column; align-items:flex-start; }
          .disclaimer { text-align:left; }
        }
        @media (max-width:560px) {
          .f-grid { grid-template-columns:1fr; }
          .key-numbers { grid-template-columns:1fr; }
          .hero-stats { flex-direction:column; width:100%; max-width:260px; }
        }
      `}</style>

      <Navbar activePath="/pms" />

      {/* ── PAGE HERO ─────────────────────────── */}
      <section className="page-hero">
        <div className="orb orb-1" /><div className="orb orb-2" />
        <div className="container">
          <div className="crumb"><a href="/">Home</a><span>/</span>PMS Licensing</div>
          <div className="hero-badge">💼 SEBI PMS Regulations</div>
          <h1>Your Own Personal Chef<br /><span className="grad">Needs a SEBI Licence.</span></h1>
          <p>Managing money for others — formally, legally, profitably. We get you the SEBI PMS badge and keep it polished year after year.</p>
          <a className="btn" href="/contact">Start My PMS Licence ↗</a>
          <div>
            <div className="hero-stats">
              <div className="hero-stat"><b>₹5Cr</b><span>Min Net Worth</span></div>
              <div className="hero-stat"><b>₹50L</b><span>Min Ticket Size</span></div>
              <div className="hero-stat"><b>3 Yrs</b><span>Renewal Cycle</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────── */}
      <section className="main-section">
        <div className="container two-col">
          <div className="block">
            <div className="block-label">What We Do</div>
            <h2>PMS Licensing &amp; <em>End-to-End Support</em></h2>
            <p>A PMS is a licence to manage other people&apos;s money stock-by-stock, account-by-account. SEBI guards this door carefully — and for good reason.</p>
            <div className="analogy">
              👨‍🍳 <b>Toddler version:</b> A mutual fund is a big shared lunchbox; everyone gets the same meal. A PMS is your <em>own personal chef</em> who cooks only for you — but the chef needs a licence from the food police (SEBI) before even lighting the stove.
            </div>
            <p style={{ fontSize:"0.88rem", fontWeight:"600", color:"var(--ink)", marginBottom:"14px" }}>Key regulatory thresholds:</p>
            <div className="key-numbers">
              {[
                { ico:"💰", b:"₹5 Crore", t:"Minimum net worth required at all times" },
                { ico:"🎟️", b:"₹50 Lakh", t:"Minimum investment per client" },
                { ico:"🔁", b:"3 Years", t:"Registration renewal cycle" },
                { ico:"👤", b:"Accredited", t:"Investor route unlocks extra product flexibility" },
              ].map(({ ico, b, t }) => (
                <div className="kn-card" key={b}>
                  <div className="kn-icon">{ico}</div>
                  <b>{b}</b>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="factbox">
            <div className="factbox-section">
              <h3>🪜 How We Help</h3>
              <div className="help-steps">
                {[
                  { n:"01", b:"Licence", t:"SEBI PMS application, fit-and-proper prep, net worth planning." },
                  { n:"02", b:"Systems", t:"Audit trails, risk systems, back-office and custodian setup." },
                  { n:"03", b:"Documents", t:"Investment agreements, disclosure documents, client onboarding packs." },
                  { n:"04", b:"After launch", t:"Periodic reporting, audits, renewals, new-product filings." },
                ].map(({ n, b, t }) => (
                  <div className="help-step" key={n}>
                    <div className="help-num">{n}</div>
                    <div className="help-step-text"><b>{b}</b><span>{t}</span></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="factbox-section">
              <h3>❓ Quick FAQs</h3>
              <div className="faq-list">
                {[
                  { q:"PMS vs AIF?", a:"PMS = separate account per client. AIF = one pooled fund. Different licences, different rules." },
                  { q:"Can a PMS accept offshore money?", a:"Within limits under FEMA — we structure it properly." },
                  { q:"How long does licensing take?", a:"Typically 3–6 months from application to SEBI approval, depending on query cycles." },
                ].map(({ q, a }) => (
                  <div className="faq-item" key={q}><b>{q}</b><span>{a}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────── */}
      <div className="cta">
        <div className="container">
          <h2>Ready to become the chef? 👨‍🍳</h2>
          <p>One free call is all it takes to map your PMS journey — structure, capital, timeline.</p>
          <a className="btn" href="/contact">Start My PMS Licence ↗</a>
          <div><span className="cta-badge"><span className="dot" />Free discovery call · No commitment</span></div>
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────── */}
      <footer>
        <div className="container">
          <div className="f-grid">
            <div className="f-brand">
              <a style={{ display:"flex", alignItems:"center", gap:"10px", fontSize:"1.25rem", fontWeight:"800" }} href="/">
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