import Navbar from "../components/Navbar";

export default function Incorporation() {

    return (
        <>
            <style>{`
        :root {
          --navy: #0a1628; --navy2: #0f2038; --gold: #c9a227; --gold2: #e6c65c;
          --ink: #eaf0f8; --mut: #9fb0c8; --card: #122238; --line: rgba(201,162,39,.25);
          --ok: #3ec98e; --white: #ffffff;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; background: var(--navy); color: var(--ink); line-height: 1.7; }
        a { color: inherit; text-decoration: none; }
        .container { width: min(1180px, 92%); margin: auto; }

        /* NAV */
        header { position: sticky; top: 0; z-index: 50; background: rgba(10,22,40,.92); backdrop-filter: blur(10px); border-bottom: 1px solid var(--line); }
        .nav { display: flex; align-items: center; justify-content: space-between; height: 72px; }
        .logo { display: flex; align-items: center; gap: 10px; font-size: 1.3rem; font-weight: 700; letter-spacing: .5px; }
        .logo .leaf { color: var(--gold); }
        .logo small { display: block; font-size: .62rem; font-weight: 400; color: var(--mut); letter-spacing: 2px; text-transform: uppercase; }
        nav ul { display: flex; gap: 26px; list-style: none; align-items: center; }
        nav a { font-size: .92rem; color: var(--mut); transition: .2s; }
        nav a:hover, nav a.active { color: var(--gold2); }
        .btn { display: inline-block; background: linear-gradient(135deg,var(--gold),#a8831a); color: #0a1628; font-weight: 700; padding: 11px 26px; border-radius: 8px; transition: .25s; border: none; cursor: pointer; font-size: .95rem; }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201,162,39,.35); }
        .burger { display: none; font-size: 1.6rem; background: none; border: none; color: var(--gold); cursor: pointer; }

        /* PAGE HERO */
        .page-hero { padding: 90px 0 60px; text-align: center; background: radial-gradient(ellipse at 50% 0%, rgba(201,162,39,.14), transparent 55%), linear-gradient(180deg,#0c1a30,#0a1628); border-bottom: 1px solid rgba(255,255,255,.05); }
        .page-hero h1 { font-size: clamp(1.8rem,4vw,2.8rem); margin: 18px 0 14px; }
        .page-hero p { max-width: 720px; margin: auto; color: var(--mut); }
        .crumb { font-size: .8rem; color: var(--mut); letter-spacing: 1px; }
        .crumb a { color: var(--gold2); }

        /* SECTIONS */
        section { padding: 80px 0; }

        /* TWO-COL */
        .two-col { display: grid; grid-template-columns: 1.15fr .85fr; gap: 50px; align-items: start; }
        .block h2 { font-size: 1.7rem; margin-bottom: 18px; }
        .block h2 em { color: var(--gold2); font-style: normal; }
        .block p { color: var(--mut); margin-bottom: 16px; }
        .analogy { background: linear-gradient(135deg,rgba(201,162,39,.12),rgba(201,162,39,.04)); border-left: 3px solid var(--gold); padding: 20px 24px; border-radius: 0 12px 12px 0; margin: 24px 0; }
        .analogy b { color: var(--gold2); }
        .factbox { background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 30px; }
        .factbox h3 { color: var(--gold2); margin-bottom: 18px; font-size: 1.1rem; }
        .factbox ul { list-style: none; }
        .factbox li { padding: 10px 0; border-bottom: 1px dashed rgba(255,255,255,.08); font-size: .93rem; color: var(--mut); display: flex; gap: 10px; }
        .factbox li::before { content: "◆"; color: var(--gold); font-size: .7rem; margin-top: 4px; flex-shrink: 0; }
        .factbox li:last-child { border: none; }
        .factbox li b { color: var(--ink); }

        /* CTA BAND */
        .cta { background: linear-gradient(135deg,#132743,#0e1e35); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); text-align: center; }
        .cta h2 { font-size: clamp(1.5rem,3vw,2.1rem); margin-bottom: 14px; }

        /* FOOTER */
        footer { background: #071120; padding: 60px 0 30px; border-top: 1px solid var(--line); }
        .f-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 44px; }
        .f-grid h5 { color: var(--gold2); font-size: .85rem; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 16px; }
        .f-grid ul { list-style: none; }
        .f-grid li { margin-bottom: 10px; }
        .f-grid a, .f-grid p { font-size: .88rem; color: var(--mut); }
        .f-grid a:hover { color: var(--gold2); }
        .copy { text-align: center; font-size: .8rem; color: #5c6b82; padding-top: 24px; border-top: 1px solid rgba(255,255,255,.06); }
        .disclaimer { font-size: .78rem; color: #5c6b82; max-width: 900px; margin: 0 auto 24px; text-align: center; }

        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr; }
          .f-grid { grid-template-columns: 1fr 1fr; }
          nav ul { display: none; position: absolute; top: 72px; left: 0; right: 0; background: var(--navy2); flex-direction: column; padding: 24px; gap: 18px; border-bottom: 1px solid var(--line); }
          nav ul.open { display: flex; }
          .burger { display: block; }
        }
        @media (max-width: 560px) {
          .f-grid { grid-template-columns: 1fr; }
        }
      `}</style>

            <Navbar activePath="/incorporation" />

            <section className="page-hero">
                <div className="container">
                    <p className="crumb"><a href="/">Home</a> / Incorporation</p>
                    <h1>🏢 Incorporation Services</h1>
                    <p>The very first brick. We build your company, LLP or fund vehicle on land that regulators will like later.</p>
                </div>
            </section>

            <section>
                <div className="container two-col">
                    <div className="block">
                        <h2>What we <em>do</em></h2>
                        <p>Before any fund or licence exists, there must be a &quot;thing&quot; that owns it — a company or LLP. If you build it wrong, every future SEBI and IFSCA form becomes painful.</p>
                        <div className="analogy">
                            🍼 <b>Toddler version:</b> Incorporation is like preparing the nursery <em>before</em> the baby comes home. Right room, right crib, right name on the door. FinLeaf builds the nursery.
                        </div>
                        <p><b>Who needs this:</b> anyone dreaming of an AIF, PMS, AMC, GIFT City fund or a company that will one day do an IPO.</p>
                        <p><b>What&apos;s included:</b></p>
                        <div className="factbox">
                            <ul>
                                <li><b>Structure choice:</b> Private Ltd vs LLP vs Trust — picked for your exact regulator.</li>
                                <li><b>Name &amp; incorporation:</b> SPICe+ filings, MoA/AoA drafting, PAN, TAN, GST.</li>
                                <li><b>Regulator-ready drafting:</b> shares, voting, exit and transfer clauses built in from day one.</li>
                                <li><b>Bank, auditor &amp; founders&apos; agreement:</b> the whole starter kit.</li>
                                <li><b>Foreign investors:</b> FDI structuring and FEMA alignment.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="factbox">
                        <h3>⏱️ Typical Journey</h3>
                        <ul>
                            <li><b>Week 1:</b> structure plan + name approval</li>
                            <li><b>Week 2:</b> incorporation + PAN/TAN</li>
                            <li><b>Week 3–4:</b> bank account, tax registrations, statutory registers</li>
                            <li><b>Output:</b> a clean, licence-ready entity</li>
                        </ul>
                        <br />
                        <h3>❓ Quick FAQs</h3>
                        <ul>
                            <li><b>Can I change structure later?</b> Yes, but it costs time and money. Choose right first — that&apos;s our job.</li>
                            <li><b>Do fund vehicles need a Trust?</b> Most Indian AIFs sit inside a Trust; many GIFT City funds use an LLC. We match the vehicle to the regulator.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="cta">
                <div className="container">
                    <h2>Start on the right brick.</h2>
                    <a className="btn" href="/contact">Plan My Structure</a>
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
