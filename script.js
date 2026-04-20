// --- CONFIG ---
const projects = [
  {
    name: 'Kumusha Wallet',
    description: 'Regional remittance + trade finance for Southern Africa. Pure Java 17 backend, zero dependencies. 3-factor auth: App + Agent + Admin.',
    tags: ['Java 17', 'Remote', 'Fintech', 'Security'],
    link: 'https://github.com/brixmavu/kumusha-wallet',
    demo: 'https://kumusha-wallet.onrender.com'
  },
  {
    name: 'Zen Stack v1.1',
    description: '12 zero-dependency JS/Java modules. HTTP, WebSockets, SSE, EdDSA auth, queues. 125KB total. Runs on Termux. See tutorial.',
    tags: ['Java', 'Node.js', 'Zero-Dep', 'Termux'],
    link: 'https://gitlab.com/brixtonmavu/zen-stack',
    demo: 'https://mellow-flan-4e1799.netlify.app'
  },
  {
    name: 'Maths Dojo',
    description: 'Interactive mathematics platform. Vanilla JS, <50KB, free forever. Proves ability to ship polished UX without frameworks.',
    tags: ['JavaScript', 'Education', 'Performance', 'UX'],
    link: 'https://github.com/brixmavu/maths-dojo',
    demo: 'https://admirable-seahorse-8c8614.netlify.app/'
  }
];

function generateProjectCard(project) {
  const projectCard = document.createElement('div');
  projectCard.className = 'project-card';
  projectCard.innerHTML = `
    <div class="project-image">${project.name}</div>
    <div class="project-content">
      <h3 class="project-title">${project.name}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
    <div class="project-footer">
      <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link"><span class="icon icon-github"></span> Code</a>
      ${project.demo ? `<a href="${project.demo}" ${project.demo.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} class="project-link" style="color:#3b82f6;">Live Demo →</a>` : ''}
    </div>
  `;
  return projectCard;
}

function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;
  projectsGrid.innerHTML = '';
  projects.forEach(p => projectsGrid.appendChild(generateProjectCard(p)));
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
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
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