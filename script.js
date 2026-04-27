// --- CONFIG ---
const projects = [
  {
    name: 'Vista High Java',
    description: 'Zero-dependency Java 21 curriculum for Termux. Teaches `javac` + HttpServer on $50 Android phones. Kuningaz: from the kin, for the kin. Dedicated to Vista High Class of 2006.',
    tags: ['Java 21', 'HttpServer', 'Termux', 'Zero Deps', 'Education'],
    link: 'https://gitlab.com/kuningaz1/vista-high-java',
    demo: 'https://venerable-tiramisu-c6048f.netlify.app',
    featured: true
  },
  {
    name: 'Kumusha Wallet',
    description: 'Regional remittance + trade finance for Southern Africa. Pure Java 21 backend, zero dependencies. 3-factor auth: App + Agent + Admin. Demo — Local Backend via Cloudflare Tunnel.',
    tags: ['Java 21', 'Fintech', 'Security', 'Demo', '2G-Certified'],
    link: 'https://github.com/brixmavu/kumusha-wallet-ui',
    demo: 'https://tranquil-speculoos-caa2fa.netlify.app'
  },
  {
    name: 'Zen Stack v1.1',
    description: '12 zero-dependency JS/Java modules. HTTP, WebSockets, SSE, EdDSA auth, queues. 125KB total. Runs on 2GB RAM Termux. If it won\'t run in Epworth, it doesn\'t ship.',
    tags: ['Java 21', 'Node.js', 'Zero-Dep', 'Termux', '2GB RAM'],
    link: 'https://gitlab.com/brixtonmavu/zen-stack',
    demo: 'https://mellow-flan-4e1799.netlify.app'
  },
  {
    name: '53 Functions',
    description: 'TDD JavaScript functions. Node + microtest. Basic functions for the kin. No demo — pure source. Proves test discipline and zero-dep fundamentals.',
    tags: ['Node.js', 'TDD', 'Microtest', 'JavaScript', 'Source Only'],
    link: 'https://gitlab.com/brixtonmavu/53-functions-java-script',
    demo: null
  },
  {
    name: 'Maths Dojo',
    description: 'Interactive mathematics platform. Vanilla JS, <50KB, free forever. Proves ability to ship polished UX without frameworks. Runs on calculators.',
    tags: ['Vanilla JS', 'Education', 'Performance', 'UX', '<50KB'],
    link: 'https://github.com/brixmavu/maths-dojo',
    demo: 'https://admirable-seahorse-8c8614.netlify.app/'
  }
];

function generateProjectCard(project) {
  const projectCard = document.createElement('div');
  projectCard.className = 'project-card';
  
  // Kuningaz tag for featured
  const kuningazBadge = project.featured ? `<span class="tag" style="background:#ffd700;color:#000;">Kuningaz</span>` : '';
  
  projectCard.innerHTML = `
    <div class="project-content">
      <h3 class="project-title">${project.name}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">
        ${kuningazBadge}
        ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
    <div class="project-footer">
      <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
        <span class="icon icon-gitlab"></span> Source
      </a>
      ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link" style="color:#3b82f6;">Live →</a>` : '<span class="project-link" style="color:#666;">Source Only</span>'}
    </div>
  `;
  return projectCard;
}

function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;
  projectsGrid.innerHTML = '';
  // Sort: featured first
  const sorted = [...projects].sort((a,b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  sorted.forEach(p => projectsGrid.appendChild(generateProjectCard(p)));
}

// Contact form — mailto for GitHub Pages
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    const messageEl = document.getElementById('form-message');
    
    if (!name || !email || !message) {
      messageEl.textContent = "All fields required.";
      messageEl.style.color = '#f85149';
      messageEl.style.display = 'block';
      return;
    }
    
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}\n\n— Sent from kuningaz portfolio`);
    window.location.href = `mailto:brixtonmavu@gmail.com?subject=${subject}&body=${body}`;
    
    messageEl.textContent = "Opening your email client...";
    messageEl.style.color = '#2ea043';
    messageEl.style.display = 'block';
    this.reset();
    setTimeout(() => messageEl.style.display = 'none', 4000);
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
});