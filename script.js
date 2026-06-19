/* ─── Terminal Animado ─── */
const lines = [
  { delay: 600,  html: '<div><span class="t-out">▶ verificando sistema operacional...</span></div>' },
  { delay: 1200, html: '<div><span class="t-ok">✓ Windows/macOS/Linux detectado</span></div>' },
  { delay: 1900, html: '<div style="margin-top:.4rem"><span class="t-prompt">$</span> <span class="t-cmd">verificar_email --breach-check</span></div>' },
  { delay: 2600, html: '<div><span class="t-warn">⚠ 2 vazamentos encontrados para exemplo@email.com</span></div>' },
  { delay: 3300, html: '<div><span class="t-out">  → LinkedIn (2021): senha, e-mail</span></div>' },
  { delay: 3700, html: '<div><span class="t-out">  → Serviço XYZ (2023): e-mail, nome</span></div>' },
  { delay: 4400, html: '<div style="margin-top:.4rem"><span class="t-prompt">$</span> <span class="t-cmd">escanear_link "promoção-imperdivel.com"</span></div>' },
  { delay: 5100, html: '<div><span class="t-err">✗ PHISHING DETECTADO — não clique neste link</span></div>' },
  { delay: 5800, html: '<div style="margin-top:.4rem"><span class="t-prompt">$</span> <span class="t-cmd">recomendação --ação</span></div>' },
  { delay: 6400, html: '<div><span class="t-ok">✓ Troque suas senhas. Ative 2FA. Use as ferramentas abaixo.</span></div>' },
];

const output = document.getElementById('terminal-output');
lines.forEach(({ delay, html }) => {
  setTimeout(() => {
    const cursor = output.querySelector('.cursor');
    if (cursor) cursor.remove();
    output.insertAdjacentHTML('beforeend', html);
    const c = document.createElement('span');
    c.className = 'cursor';
    output.appendChild(c);
  }, delay);
});

/* ─── Scroll Reveal ─── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ─── Checklist ─── */
function toggleCheck(el) {
  el.classList.toggle('checked');
}

/* ─── QR Code ─── */
window.addEventListener('DOMContentLoaded', () => {
  const url = window.location.href.split('?')[0] || 'https://cyberguard.extensao.br';
  new QRCode(document.getElementById('qrcode'), {
    text: url,
    width: 156, height: 156,
    colorDark: '#0D1117',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
});