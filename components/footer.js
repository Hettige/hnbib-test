(function () {
  'use strict';
  var R = window.siteRoot || './';
  var el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <a class="nav-logo" href="${R}index.html">
        <img src="${R}assets/images/logo/hnb-inv-logo.webp" alt="HNB Investment Bank" height="32" style="filter:brightness(0) invert(1)">
      </a>
      <p>No. 53 Srimath Anagarika Dharmapala Mawatha, Colombo 03, Sri Lanka.<br>Regulated by the Securities &amp; Exchange Commission of Sri Lanka.</p>
    </div>
    <div>
      <h5>Services</h5>
      <ul>
        <li><a href="${R}hnb-stockbrokers.html">HNB Stockbrokers</a></li>
        <li><a href="${R}hnb-securities.html">HNB Securities</a></li>
        <li><a href="${R}corporate-finance.html">Corporate Finance</a></li>
        <li><a href="${R}lanka-ventures-lvl.html">Lanka Ventures</a></li>
      </ul>
    </div>
    <div>
      <h5>Fixed Income</h5>
      <ul>
        <li><a href="${R}hnb-securities/repo.html">Repurchase Agreements</a></li>
        <li><a href="${R}hnb-securities/tbill.html">Treasury Bills</a></li>
        <li><a href="${R}hnb-securities/repo/calculator.html">Rate Calculator</a></li>
        <li><a href="${R}hnb-securities.html">T-Bond Market</a></li>
      </ul>
    </div>
    <div>
      <h5>Company</h5>
      <ul>
        <li><a href="${R}about-us.html">About Us</a></li>
        <li><a href="${R}investor-relations.html">Investor Relations</a></li>
        <li><a href="${R}news.html">News &amp; Insights</a></li>
        <li><a href="${R}careers.html">Careers</a></li>
      </ul>
    </div>
    <div>
      <h5>Legal</h5>
      <ul>
        <li><a href="${R}privacy-policy.html">Privacy Policy</a></li>
        <li><a href="${R}terms-and-conditions.html">Terms &amp; Conditions</a></li>
        <li><a href="${R}contact-us.html">Contact Us</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bar">
    <div style="max-width:var(--content-w);margin:0 auto;padding:0 var(--sp-m) var(--sp-m);display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px">
      <span>&copy; 2026 HNB Investment Bank Limited. All rights reserved.</span>
      <span>SEC Licensed &middot; CSE Full Member &middot; CBSL Primary Dealer</span>
    </div>
  </div>
</footer>`;
})();
