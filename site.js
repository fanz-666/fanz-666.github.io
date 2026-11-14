/* Personal content and bilingual controls. Theme interactions live in assets/js/custom-scripts.js. */
const translations = {
  en: {
    skip:'Skip to content', navigation:'Primary navigation', profileLabel:'Profile',
    navAbout:'About Me', navNews:'News', navPublications:'Publications', navHonors:'Honors and Awards', navEducation:'Education',
    position:'Master’s Student at Liaoning Technical University', incoming:'Incoming PhD Student at DUT · September 2027',
    sidebarTopics:'Stereo Matching · Multimodal Learning · Unified & Generative Models · Vision–Language–Action',
    aboutTitle:'About Me', introGreeting:'Hi! I am ',
    introCurrent:', a master’s student at Liaoning Technical University. ',
    introPhdPrefix:'I expect to begin my ', introPhdDegree:'PhD at Dalian University of Technology', introPhdSuffix:' in September 2027.',
    researchIntro:'My research focuses on stereo matching and multimodal learning. Recently, I have also become interested in unified models, generative models, and vision–language–action (VLA):',
    stereoTitle:'Stereo Matching', stereoText:'Correspondence estimation and depth perception from stereo image pairs.',
    multimodalTitle:'Multimodal Learning', multimodalText:'Learning from complementary information across different modalities.',
    modelsTitle:'Unified & Generative Models', modelsText:'Exploring unified modeling and generative approaches to visual understanding.',
    vlaTitle:'Vision–Language–Action', vlaText:'Interested in models that connect visual perception, language, and action.',
    contactInvitation:'Feel free to reach out for research discussions.', emailLabel:'Email', wechatLabel:'WeChat',
    newsTitle:'News', newsPaper:'is published in IEEE Transactions on Circuits and Systems for Video Technology (TCSVT).',
    newsNational:'Awarded the National Scholarship.', newsEntrance:'Awarded the First-Class Postgraduate Entrance Scholarship.',
    publicationsTitle:'Publications', allPublications:'All', corePublications:'Key Contributor',
    paperLink:'Paper', codeLink:'Code', correspondingNote:'† Corresponding author.',
    honorsTitle:'Honors and Awards', nationalScholarship:'National Scholarship', entranceScholarship:'First-Class Postgraduate Entrance Scholarship',
    educationTitle:'Education', dut:'Dalian University of Technology', lntu:'Liaoning Technical University',
    educationSeparator:': ', phdDate:'2027.09 (expected)', phdDegree:' · PhD studies (incoming).', mastersDate:'2024.09 – Present', mastersDegree:' · Master’s studies in Computer Science and Technology (admitted through recommendation).', bachelorsDate:'2020.09–2024.06', bachelorsDegree:' · Bachelor’s degree in Computer Science and Technology.',
    lastUpdated:'Last updated: November 2026', templateCredit:'Template adapted under the MIT license',
    showMore:'Show More', showLess:'Show Less', wechatTitle:'Connect on WeChat', wechatHint:'Scan this QR code to add me on WeChat.',
    description:'Fan Zhang (张藩), Liaoning Technical University. Stereo matching and multimodal learning; incoming PhD student at Dalian University of Technology in September 2027.'
  },
  'zh-CN': {
    skip:'跳至正文', navigation:'主导航', profileLabel:'个人简介',
    navAbout:'关于我', navNews:'新闻动态', navPublications:'出版物', navHonors:'荣誉与奖励', navEducation:'教育经历',
    position:'辽宁工程技术大学硕士研究生', incoming:'预计 2027 年 9 月赴大连理工大学攻读博士',
    sidebarTopics:'立体匹配 · 多模态学习 · 统一模型与生成模型 · 视觉–语言–行动（VLA）',
    aboutTitle:'关于我', introGreeting:'你好！我是 ',
    introCurrent:'，目前在辽宁工程技术大学攻读硕士学位，',
    introPhdPrefix:'预计于 2027 年 9 月赴', introPhdDegree:'大连理工大学攻读博士学位', introPhdSuffix:'。',
    researchIntro:'我的研究方向是立体匹配与多模态学习。近期，我还对统一模型、生成模型以及视觉–语言–行动（Vision–Language–Action，VLA）感兴趣：',
    stereoTitle:'立体匹配', stereoText:'研究双目图像间的对应关系与深度感知。',
    multimodalTitle:'多模态学习', multimodalText:'关注不同模态之间的信息互补与联合学习。',
    modelsTitle:'统一模型与生成模型', modelsText:'探索统一建模与生成方法在视觉理解中的应用。',
    vlaTitle:'视觉–语言–行动（VLA）', vlaText:'关注连接视觉感知、语言理解与行动的模型。',
    contactInvitation:'欢迎交流研究问题。', emailLabel:'邮箱', wechatLabel:'微信',
    newsTitle:'新闻动态', newsPaper:'发表于 IEEE Transactions on Circuits and Systems for Video Technology（TCSVT）。',
    newsNational:'获得研究生国家奖学金。', newsEntrance:'获得研究生入学一等奖学金。',
    publicationsTitle:'出版物', allPublications:'全部', corePublications:'主要贡献',
    paperLink:'论文', codeLink:'代码', correspondingNote:'† 通信作者。',
    honorsTitle:'荣誉与奖励', nationalScholarship:'研究生国家奖学金', entranceScholarship:'研究生入学一等奖学金',
    educationTitle:'教育经历', dut:'大连理工大学', lntu:'辽宁工程技术大学',
    educationSeparator:'：', phdDate:'2027.09（预计）', phdDegree:'博士（即将入学）。', mastersDate:'2024.09 至今', mastersDegree:'计算机科学与技术硕士（推免入学）。', bachelorsDate:'2020.09–2024.06', bachelorsDegree:'计算机科学与技术学士。',
    lastUpdated:'最近更新：2026 年 11 月', templateCredit:'模板依据 MIT 许可修改',
    showMore:'展开更多', showLess:'收起', wechatTitle:'添加微信', wechatHint:'扫描二维码添加我的微信。',
    description:'张藩（Fan Zhang），辽宁工程技术大学硕士研究生，研究方向为立体匹配与多模态学习，预计 2027 年 9 月赴大连理工大学攻读博士。'
  }
};
const languageButton = document.querySelector('.language-toggle');
const newsContent = document.querySelector('#newsContent');
const newsButton = document.querySelector('#newsToggleBtn');
function syncNewsButton() {
  const expanded = newsContent.classList.contains('expanded');
  newsButton.setAttribute('aria-expanded', String(expanded));
  const copy = translations[document.documentElement.lang] || translations.en;
  newsButton.querySelector('span').textContent = expanded ? copy.showLess : copy.showMore;
}
function setLanguage(language) {
  const selected = Object.hasOwn(translations, language) ? language : 'en';
  const copy = translations[selected];
  document.documentElement.lang = selected;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    if (Object.hasOwn(copy, element.dataset.i18n)) element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => element.setAttribute('aria-label', copy[element.dataset.i18nAria]));
  document.querySelector('meta[name="description"]').content = copy.description;
  languageButton.textContent = selected === 'zh-CN' ? 'English' : '中文';
  languageButton.setAttribute('aria-label', selected === 'zh-CN' ? 'Switch to English' : '切换为中文');
  languageButton.lang = selected === 'zh-CN' ? 'en' : 'zh-CN';
  syncNewsButton();
  requestAnimationFrame(() => {
    document.querySelectorAll('.seg-control').forEach(control => {
      const active = control.querySelector('.seg-btn.active');
      if (active && typeof moveSegIndicator === 'function') moveSegIndicator(control, active);
    });
  });
  try { localStorage.setItem('homepage-language', selected); } catch { /* Optional browser preference. */ }
}
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('homepage-language') || 'en'; } catch {}
setLanguage(savedLanguage);
languageButton.hidden = false;
languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'zh-CN' : 'en'));
document.querySelector('#year').textContent = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', () => {
  newsButton.addEventListener('click', syncNewsButton);
  // Short final sections cannot always reach the upstream scroll-spy threshold.
  let wasAtBottom = false;
  window.addEventListener('scroll', () => requestAnimationFrame(() => {
    const atBottom = window.scrollY > 0 && document.documentElement.scrollHeight - window.innerHeight - window.scrollY <= 2;
    if (!atBottom && !wasAtBottom) return;
    const links = [...document.querySelectorAll('.site-nav__link')];
    let active = atBottom ? links[links.length - 1] : links[0];
    if (!atBottom) for (const link of links) {
      if (document.getElementById(link.hash.slice(1)).getBoundingClientRect().top <= 80) active = link;
    }
    links.forEach(link => link.classList.toggle('nav-active', link === active));
    wasAtBottom = atBottom;
  }), { passive: true });
});

const wechatDialog = document.querySelector('#wechatDialog');
document.querySelectorAll('.wechat-button').forEach(button => button.addEventListener('click', () => wechatDialog.showModal()));
document.querySelector('#bibtexButton').addEventListener('click', () => document.querySelector('#bibtexDialog').showModal());
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('[data-close-dialog]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
});
