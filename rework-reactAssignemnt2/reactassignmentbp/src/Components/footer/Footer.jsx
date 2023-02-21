import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div>
<div class="footer">
  <p>This is Footer</p>
  <ul class="footer-links">
    <li>
      <a href="/about/">About</a>
    </li>
    <li>
      <a href="/privacy-policy/">Privacy Policy</a>
    </li>
    <li>
      <a href="/disclaimer/">Disclaimer</a>
    </li>
 </ul>
 <p data-testid="footerbrand" class="text-center copy">Copyright &copy; deepak</p>
</div>
    </div>
  )
}
