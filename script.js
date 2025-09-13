
const dict = {
  en: {
    nav_about: "About",
    nav_machines: "Machines",
    nav_contact: "Contact",
    hero_title: "Innovative industrial solutions",
    hero_sub: "Professional machines for cigarette lines and food packaging.",
    about_title: "About Us",
    about_text: "Godmode Trade Ltd is a specialized company engaged in the trade of industrial machinery for various industries. We provide high‑quality solutions that meet the highest standards of reliability and efficiency.",
    machines_title: "Machines",
    m1a: "Capacity up to ~8,000 cigs/min*",
    m1b: "Formats: Regular, Slim, Super Slim*",
    m1c: "Integration with packing line",
    m1d: "*Indicative; depends on configuration.",
    m2a: "Vertical Form‑Fill‑Seal (VFFS)",
    m2b: "Suitable for snacks, coffee and powders; MAP options",
    m2c: "Hygienic design and high uptime",
    m3a: "Accurate dosing for powder products",
    m3b: "Fast changeover and easy cleaning",
    m3c: "Works inline with VFFS",
    contact_title: "Contact",
    phone: "Phone / WhatsApp:"
  }
};
document.getElementById('year').textContent = new Date().getFullYear();
const btnBG = document.getElementById('btn-bg');
const btnEN = document.getElementById('btn-en');
function setLang(lang){
  btnBG.classList.toggle('active', lang==='bg');
  btnEN.classList.toggle('active', lang==='en');
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (lang==='en' && dict.en[key]) el.textContent = dict.en[key];
  });
  window.scrollTo({top:0, behavior:'smooth'});
}
btnBG.addEventListener('click', ()=>setLang('bg'));
btnEN.addEventListener('click', ()=>setLang('en'));
