import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
  }, []);

  const handleCTAClick = () => {
    window.open("https://pages.razorpay.com/pl_O4RbvDz7we10PA/view", '_blank');
  };

  return (
    <>
      <style>{`
        :root {
          --navy: #0A2540;
          --electric: #00C2FF;
          --orange: #FF6B00;
          --white: #FFFFFF;
          --light-bg: #F4F8FF;
          --text-muted: #6B7C93;
          --border: rgba(0,194,255,0.15);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--white);
          color: var(--navy);
          overflow-x: hidden;
        }

        /* ── NAVBAR ── */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: rgba(10,37,64,0.95);
          backdrop-filter: blur(12px);
          padding: 14px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(0,194,255,0.2);
        }
        .logo {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 1.2rem;
          color: var(--white);
          letter-spacing: -0.5px;
        }
        .logo span { color: var(--electric); }
        .nav-cta {
          background: var(--orange);
          color: white;
          border: none;
          padding: 9px 22px;
          border-radius: 50px;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }
        .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255,107,0,0.5); }

        /* ── HERO ── */
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, #0A2540 0%, #0D3060 50%, #0A2540 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 120px 24px 80px;
          position: relative;
          overflow: hidden;
        }

        /* Animated background grid */
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,194,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,194,255,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridMove 20s linear infinite;
        }
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }

        /* Glowing orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.25;
          animation: float 8s ease-in-out infinite;
        }
        .orb-1 { width: 500px; height: 500px; background: var(--electric); top: -200px; right: -100px; animation-delay: 0s; }
        .orb-2 { width: 400px; height: 400px; background: #FF6B00; bottom: -150px; left: -100px; animation-delay: 3s; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }

        .hero-content { position: relative; z-index: 2; max-width: 820px; }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0,194,255,0.1);
          border: 1px solid rgba(0,194,255,0.3);
          color: var(--electric);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 32px;
          animation: fadeDown 0.8s ease both;
        }
        .hero-badge::before { content: '🔥'; }

        .hero-headline {
          font-family: 'Poppins', sans-serif;
          font-weight: 900;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          color: var(--white);
          line-height: 1.12;
          margin-bottom: 20px;
          animation: fadeDown 0.8s 0.1s ease both;
        }
        .hero-headline .accent { color: var(--electric); }
        .hero-headline .orange { color: var(--orange); }

        .hero-sub {
          font-size: clamp(0.95rem, 2vw, 1.15rem);
          color: rgba(255,255,255,0.72);
          max-width: 600px;
          margin: 0 auto 40px;
          line-height: 1.7;
          animation: fadeDown 0.8s 0.2s ease both;
        }

        .cta-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          animation: fadeDown 0.8s 0.3s ease both;
        }

        .cta-btn {
          display: inline-block;
          background: var(--orange);
          color: white;
          text-decoration: none;
          padding: 18px 48px;
          border-radius: 60px;
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 1.15rem;
          letter-spacing: 0.3px;
          cursor: pointer;
          border: none;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 32px rgba(255,107,0,0.45);
        }
        .cta-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(255,255,255,0.15), transparent);
        }
        .cta-btn:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 16px 48px rgba(255,107,0,0.6); }
        .cta-btn:active { transform: translateY(0); }

        .micro-trust {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.5px;
        }
        .micro-trust span { color: #00C2FF; font-weight: 600; }

        /* Stats bar */
        .stats-bar {
          margin-top: 60px;
          display: flex;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
          animation: fadeDown 0.8s 0.4s ease both;
        }
        .stat-item { text-align: center; }
        .stat-num {
          font-family: 'Poppins', sans-serif;
          font-weight: 900;
          font-size: 2rem;
          color: var(--white);
        }
        .stat-num .accent { color: var(--electric); }
        .stat-label { font-size: 0.78rem; color: rgba(255,255,255,0.5); letter-spacing: 0.5px; }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── PAIN SECTION ── */
        .pain-section {
          background: var(--light-bg);
          padding: 90px 24px;
          text-align: center;
        }
        .section-tag {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--electric);
          margin-bottom: 12px;
          display: block;
        }
        .section-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          color: var(--navy);
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .pain-sub {
          color: var(--text-muted);
          font-size: 1rem;
          margin-bottom: 48px;
        }

        .pain-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          max-width: 900px;
          margin: 0 auto 48px;
        }
        .pain-card {
          background: white;
          border: 1.5px solid var(--border);
          border-radius: 16px;
          padding: 28px 24px;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }
        .pain-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,194,255,0.12);
          border-color: rgba(0,194,255,0.4);
        }
        .pain-icon { font-size: 1.8rem; margin-bottom: 12px; }
        .pain-card p { font-size: 0.95rem; color: var(--navy); line-height: 1.5; font-weight: 500; }

        .pain-conclusion {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.2rem;
          color: var(--navy);
          background: white;
          border-left: 4px solid var(--electric);
          padding: 18px 28px;
          border-radius: 12px;
          max-width: 600px;
          margin: 0 auto;
          text-align: left;
        }
        .pain-conclusion span { color: var(--orange); }

        /* ── SOLUTION ── */
        .solution-section {
          background: var(--navy);
          padding: 90px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .solution-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(0,194,255,0.08) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .solution-section .section-title { color: white; }
        .solution-section .section-tag { color: var(--electric); }

        .solution-cards {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
          max-width: 900px;
          margin: 48px auto 32px;
          position: relative;
          z-index: 2;
        }
        .sol-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(0,194,255,0.2);
          border-radius: 20px;
          padding: 36px 28px;
          flex: 1;
          min-width: 220px;
          max-width: 260px;
          text-align: left;
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
        }
        .sol-card:hover {
          background: rgba(0,194,255,0.08);
          border-color: var(--electric);
          transform: translateY(-6px);
        }
        .sol-icon { font-size: 2.2rem; margin-bottom: 16px; }
        .sol-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: var(--electric);
          margin-bottom: 8px;
        }
        .sol-desc { font-size: 0.88rem; color: rgba(255,255,255,0.6); line-height: 1.6; }

        .solution-tagline {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 1.05rem;
          color: rgba(255,255,255,0.8);
          max-width: 500px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .solution-tagline em { color: var(--electric); font-style: normal; }

        /* ── OFFER ── */
        .offer-section {
          background: var(--white);
          padding: 90px 24px;
          text-align: center;
        }
        .offer-box {
          max-width: 600px;
          margin: 0 auto;
          background: var(--light-bg);
          border: 2px solid var(--border);
          border-radius: 24px;
          padding: 48px 40px;
          position: relative;
          overflow: hidden;
        }
        .offer-box::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--electric), var(--orange));
        }
        .price-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 32px;
        }
        .price-strike {
          font-size: 1.1rem;
          color: var(--text-muted);
          text-decoration: line-through;
        }
        .price-main {
          font-family: 'Poppins', sans-serif;
          font-weight: 900;
          font-size: 2.8rem;
          color: var(--orange);
        }
        .offer-items { list-style: none; text-align: left; margin-bottom: 32px; }
        .offer-items li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid var(--border);
          font-size: 0.97rem;
          font-weight: 500;
          color: var(--navy);
        }
        .offer-items li:last-child { border-bottom: none; }
        .check { color: #00C07B; font-size: 1.2rem; flex-shrink: 0; }
        .offer-note {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-style: italic;
          margin-top: 8px;
        }

        /* ── URGENCY ── */
        .urgency-section {
          background: #FFF4EC;
          padding: 80px 24px;
          text-align: center;
          border-top: 3px solid #FFD4B2;
        }
        .urgency-section .section-title { color: var(--navy); }
        .filter-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          margin: 36px auto;
          max-width: 480px;
        }
        .filter-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: white;
          padding: 14px 24px;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 500;
          width: 100%;
          border: 1.5px solid #FFD4B2;
          color: #c0392b;
        }
        .filter-item .x { font-size: 1.1rem; color: #c0392b; font-weight: 700; }
        .urgency-cta-text {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--navy);
          margin-bottom: 28px;
        }
        .urgency-cta-text em { color: var(--orange); font-style: normal; }

        /* ── GUARANTEE ── */
        .guarantee-section {
          background: var(--navy);
          padding: 80px 24px;
          text-align: center;
        }
        .guarantee-box {
          max-width: 560px;
          margin: 0 auto;
          background: rgba(255,255,255,0.05);
          border: 1.5px solid rgba(0,194,255,0.25);
          border-radius: 20px;
          padding: 44px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .shield { font-size: 4rem; }
        .guarantee-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--white);
        }
        .guarantee-text { font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.7; }
        .guarantee-text strong { color: var(--electric); }

        /* ── FINAL CTA ── */
        .final-cta-section {
          background: linear-gradient(135deg, #0A2540, #0D3060);
          padding: 90px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .final-cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,194,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,194,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .final-cta-section .section-title { color: white; position: relative; z-index: 2; }
        .final-cta-section .section-tag { position: relative; z-index: 2; }
        .final-cta-section .cta-group { position: relative; z-index: 2; }

        /* ── FOOTER ── */
        footer {
          background: #06182E;
          padding: 24px;
          text-align: center;
          color: rgba(255,255,255,0.35);
          font-size: 0.8rem;
        }

        /* ── PULSE animation on CTA ── */
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(255,107,0,0.5); }
          70% { box-shadow: 0 0 0 18px rgba(255,107,0,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,107,0,0); }
        }
        .cta-btn { animation: pulse-ring 2.5s ease-out infinite; }
        .cta-btn:hover { animation: none; }

        /* Scroll reveal */
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.visible { opacity: 1; transform: translateY(0); }

        @media (max-width: 600px) {
          nav { padding: 12px 20px; }
          .stats-bar { gap: 28px; }
          .offer-box { padding: 32px 24px; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="logo">Growth<span>Edge</span></div>
        <button className="nav-cta" onClick={handleCTAClick}>Book @ ₹9 →</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="hero-content">
          <div className="hero-badge">Top 1% Coaching Framework — India</div>
          <h1 className="hero-headline">
            Make Consistent<br />
            <span className="accent">20 Quality</span> Weight Loss Clients<br />
            In <span className="orange">30 Days</span>
          </h1>
          <p className="hero-sub">
            <span style={{ color: '#A0E7FF' }}>No shortcuts, only a Real & Practical Framework</span> <span style={{ color: '#00C07B', fontWeight: '600' }}>used by Top 1% Health & Wellness Coaches In India</span>
          </p>
          <div className="cta-group" id="cta">
            <button className="cta-btn" onClick={handleCTAClick}>Book Growth Call @ ₹9 →</button>
            <p className="micro-trust"><span>Limited slots</span> &nbsp;•&nbsp; Serious coaches only</p>
          </div>
          <div className="stats-bar">
            <div className="stat-item">
              <div className="stat-num">500<span className="accent">+</span></div>
              <div className="stat-label">Coaches Trained</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">30<span className="accent">K</span></div>
              <div className="stat-label">Clients Closed</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">₹9</div>
              <div className="stat-label">Session Fee</div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="pain-section">
        <span className="section-tag">Pain Points</span>
        <h2 className="section-title reveal">अगर आप ये Face कर रहे हो…</h2>
        <p className="pain-sub reveal">हर coach जो struggle कर रहा है — इन 4 में से एक में है</p>
        <div className="pain-grid">
          <div className="pain-card reveal">
            <div className="pain-icon">📉</div>
            <p>Leads आते हैं पर <strong>convert नहीं होते</strong></p>
          </div>
          <div className="pain-card reveal">
            <div className="pain-icon">📲</div>
            <p>रोज content डाल रहे हो, <strong>results नहीं आ रहे</strong></p>
          </div>
          <div className="pain-card reveal">
            <div className="pain-icon">📞</div>
            <p>Calls होते हैं लेकिन <strong>closing नहीं होती</strong></p>
          </div>
          <div className="pain-card reveal">
            <div className="pain-icon">💸</div>
            <p>Ads चलाए लेकिन <strong>पैसा डूब गया</strong></p>
          </div>
        </div>
        <div className="pain-conclusion reveal">
          तो problem मेहनत में नहीं…<br /><span>"System में है।"</span>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="solution-section">
        <span className="section-tag">Our System</span>
        <h2 className="section-title reveal">हम क्या करते हैं?</h2>
        <div className="solution-cards">
          <div className="sol-card reveal">
            <div className="sol-icon">🎯</div>
            <div className="sol-title">Lead Generation</div>
            <div className="sol-desc">Organic + Paid smart strategy — सही audience तक पहुंचो</div>
          </div>
          <div className="sol-card reveal">
            <div className="sol-icon">🤖</div>
            <div className="sol-title">Appointment Automation</div>
            <div className="sol-desc">Auto booking system जो 24×7 काम करे — आपके बिना</div>
          </div>
          <div className="sol-card reveal">
            <div className="sol-icon">💬</div>
            <div className="sol-title">Sales Scripts</div>
            <div className="sol-desc">High-converting scripts जो objections handle करें automatically</div>
          </div>
        </div>
        <p className="solution-tagline reveal">
          ताकि clients <em>खुद call book करें</em> — आपको chase ना करना पड़े।
        </p>
      </section>

      {/* OFFER */}
      <section className="offer-section">
        <span className="section-tag">The Offer</span>
        <h2 className="section-title reveal">₹9 में आपको क्या मिलेगा?</h2>
        <div className="offer-box reveal">
          <div className="price-badge">
            <span className="price-strike">₹499</span>
            <span className="price-main">₹9</span>
          </div>
          <ul className="offer-items">
            <li><span className="check">✔</span> Personalized Growth Strategy — आपके business के लिए</li>
            <li><span className="check">✔</span> आपके current funnel की detailed analysis</li>
            <li><span className="check">✔</span> Exact next 30-day action plan</li>
            <li><span className="check">✔</span> Live Q&A — आपकी real business problems solve होंगी</li>
          </ul>
          <button className="cta-btn" style={{ width: '100%', fontSize: '1rem' }} onClick={handleCTAClick}>Book Growth Call @ ₹9 →</button>
          <p className="offer-note">यह कोई webinar नहीं है — यह direct strategy session है।</p>
        </div>
      </section>

      {/* URGENCY */}
      <section className="urgency-section">
        <span className="section-tag">Important Notice</span>
        <h2 className="section-title reveal">यह session हर किसी के लिए नहीं है</h2>
        <div className="filter-list">
          <div className="filter-item reveal"><span className="x">✗</span> Timepass करने वालों के लिए नहीं</div>
          <div className="filter-item reveal"><span className="x">✗</span> Free knowledge collectors के लिए नहीं</div>
        </div>
        <p className="urgency-cta-text reveal">यह सिर्फ <em>serious coaches के लिए है</em> जो result चाहते हैं।</p>
        <div className="cta-group">
          <button className="cta-btn reveal" onClick={handleCTAClick}>Book Growth Call @ ₹9 →</button>
          <p className="micro-trust" style={{ color: '#c0392b' }}><span style={{ color: 'var(--orange)' }}>⚠</span> Limited slots available today</p>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="guarantee-section">
        <div className="guarantee-box reveal">
          <div className="shield">🛡️</div>
          <div className="guarantee-title">100% Money-Back Guarantee</div>
          <p className="guarantee-text">
            अगर आपको session में <strong>clarity नहीं मिली</strong> —<br />
            हम आपका <strong>₹9 वापस करेंगे।</strong><br /><br />
            Zero risk. Pure value. आपका कुछ नहीं जाएगा।
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta-section">
        <span className="section-tag">Ready हो?</span>
        <h2 className="section-title" style={{ marginBottom: '12px' }}>अगर आप ready हो consistent clients के लिए…</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '40px', position: 'relative', zIndex: 2 }}>अभी book करो — slots limited हैं</p>
        <div className="cta-group">
          <button className="cta-btn" style={{ fontSize: '1.2rem', padding: '20px 56px' }} onClick={handleCTAClick}>Book Growth Call @ ₹9 →</button>
          <p className="micro-trust"><span>Limited slots</span> &nbsp;•&nbsp; Serious coaches only</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2025 GrowthEdge Digital · All Rights Reserved · Results may vary based on individual effort and commitment.</p>
      </footer>
    </>
  );
};

export default Landing;
