
const dict = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_machines: "Machines",
    nav_wipes: "Wet Wipes",
    nav_contact: "Contact",
    cta_machines: "View machines",
    cta_contact: "Contact",
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
    wipes_title: "Lid applicator — wet wipes",
    wipes_name: "Wet Wipes Lid Applicator",
    w1: "Power supply: 380V, 50Hz, three‑phase",
    w2: "Power: ~12 kW",
    w3: "Design speed: 110 packs/min",
    w4: "Production speed: 70–90 packs/min",
    w5: "Lid size: height 40–110 mm; width ≤80 mm; length ≤120 mm",
    w6: "Label size: width ≤60 mm; diameter ≤300 mm",
    w7: "Positioning accuracy: ±1 mm; scrap < 1%",
  }
};

document.addEventListener('DOMContentLoaded', ()=>{
  const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();

  // Language toggle
  const btnBG = document.getElementById('btn-bg');
  const btnEN = document.getElementById('btn-en');
  function setLang(lang){
    btnBG.classList.toggle('active', lang==='bg');
    btnEN.classList.toggle('active', lang==='en');
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-t]').forEach(el => {
      const key = el.getAttribute('data-t');
      if (lang==='en' && dict.en[key]) el.textContent = dict.en[key];
      if (lang==='bg') window.location.reload(); // reset to original BG text
    });
  }
  btnBG.addEventListener('click', ()=>setLang('bg'));
  btnEN.addEventListener('click', ()=>setLang('en'));

  // Animated slogans
  const slogansBG = [
    "Технологии за надеждно производство",
    "Инженерни решения за всяка индустрия",
    "Машини с прецизност и висока ефективност",
    "От идея до индустрия",
    "Сигурност, качество, иновации"
  ];
  const slogansEN = [
    "Technologies for reliable production",
    "Engineering solutions for every industry",
    "Precision machines with high efficiency",
    "From idea to industry",
    "Safety, quality, innovation"
  ];
  const sloganEl = document.getElementById('slogan');
  let i = 1;
  setInterval(()=>{
    if (!sloganEl) return;
    sloganEl.style.opacity = 0;
    setTimeout(()=>{
      const isEN = document.documentElement.lang === 'en';
      const arr = isEN ? slogansEN : slogansBG;
      sloganEl.textContent = arr[i % arr.length];
      i++;
      sloganEl.style.opacity = 1;
    }, 450);
  }, 3200);
});
