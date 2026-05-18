(function () {
  'use strict';
  var R = window.siteRoot || './';
  var headerEl = document.getElementById('site-header');
  if (!headerEl) return;

  /* Ticker stays inside #site-header — scrolls away with the page */
  headerEl.innerHTML = `
<div class="ticker-bar" aria-label="Live market data">
  <div class="ticker-track motion-continuous">
    <span><span class="t-lbl">ASPI</span> 22,905.75 <span class="t-up">&#9650; 0.38%</span></span>
    <span><span class="t-lbl">S&amp;P SL20</span> 6,284.24 <span class="t-up">&#9650; 0.27%</span></span>
    <span><span class="t-lbl">T-Bill 91d</span> 7.25%</span>
    <span><span class="t-lbl">T-Bill 182d</span> 7.50%</span>
    <span><span class="t-lbl">T-Bill 364d</span> 7.75%</span>
    <span><span class="t-lbl">T-Bond 2Y</span> 8.25%</span>
    <span><span class="t-lbl">REPO</span> 7.50%</span>
    <span><span class="t-lbl">USD/LKR</span> 302.45</span>
    <span><span class="t-lbl">CSE Turnover</span> LKR 2.85 Bn</span>
    <span><span class="t-lbl">ASPI</span> 22,905.75 <span class="t-up">&#9650; 0.38%</span></span>
    <span><span class="t-lbl">S&amp;P SL20</span> 6,284.24 <span class="t-up">&#9650; 0.27%</span></span>
    <span><span class="t-lbl">T-Bill 91d</span> 7.25%</span>
    <span><span class="t-lbl">T-Bill 182d</span> 7.50%</span>
    <span><span class="t-lbl">T-Bill 364d</span> 7.75%</span>
    <span><span class="t-lbl">T-Bond 2Y</span> 8.25%</span>
    <span><span class="t-lbl">REPO</span> 7.50%</span>
    <span><span class="t-lbl">USD/LKR</span> 302.45</span>
    <span><span class="t-lbl">CSE Turnover</span> LKR 2.85 Bn</span>
  </div>
</div>`;

  /*
   * Nav inserted as a sibling AFTER #site-header (not inside it).
   * position:sticky; top:0 on .site-nav works against the body scroll container,
   * so ticker scrolls away and nav pins at the top for the full page.
   */
  var nav = document.createElement('nav');
  nav.className = 'site-nav';
  nav.setAttribute('aria-label', 'Main navigation');
  nav.innerHTML = `
  <div class="nav-inner">
    <a class="nav-logo" href="${R}index.html">
      <img src="${R}assets/images/logo/hnb-inv-logo.webp" alt="HNB Investment Bank" height="38">
    </a>
    <ul class="nav-links">
      <li class="mob-logo-li">
        <a href="${R}index.html">
          <img src="${R}assets/images/logo/hnb-inv-logo.webp" alt="HNB Investment Bank" height="36">
        </a>
      </li>
      <li><a href="${R}about-us.html">About</a></li>
      <li><a href="${R}hnb-stockbrokers.html">Stockbrokers</a></li>
      <li><a href="${R}hnb-securities.html">Securities</a></li>
      <li><a href="${R}corporate-finance.html">Corporate Finance</a></li>
      <li><a href="${R}lanka-ventures-lvl.html">Lanka Ventures</a></li>
      <li><a href="${R}investor-relations.html">Investors</a></li>
      <li><a href="${R}news.html">News</a></li>
    </ul>
    <a class="btn-primary" href="${R}contact-us.html">Contact</a>
    <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span><span></span></button>
  </div>`;

  headerEl.parentNode.insertBefore(nav, headerEl.nextSibling);
})();
