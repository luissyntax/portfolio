//Função de abrir e fechar o menu

const menu = document.querySelector(`.menu-closed`);

const toggleMenu = () => {
  if (!menu) return;
  menu.classList.toggle('opened');
};

//Funções de Navegação por Scroll para Destinos Específicos na Página

const smoothScroll = (target) => {
  window.scrollTo({
    top: target,
    behavior: "smooth"
  });
  if (menu.classList.contains('opened')) {
    menu.classList.remove('opened')
  }
};

//Função de renderização das tecnologias

const renderTechs = (originalTech, techs) => {
  originalTech.querySelector('img').src = techs[0].img;
  originalTech.setAttribute('data-key', techs[0].id);

  techs.slice(1).forEach(({ id, img }, index) => {
    const tech = originalTech.cloneNode(true);
    document.querySelector('.tech-grid').append(tech);
    tech.setAttribute('data-key', id);
    tech.querySelector('img').src = img;
  });
};

//Função de renderização dos projetos

const renderProjects = (originalProjects, projects) => {
  originalProjects.querySelector('img').src = projects[0].img;
  originalProjects.querySelector('.desc-project .name-project').textContent = projects[0].title;
  originalProjects.querySelector('.desc-project .detail-project').textContent = projects[0].detail;
  originalProjects.querySelector('.desc-project .tech-project').textContent = projects[0].projectTech;
  originalProjects.setAttribute('data-key', projects[0].id);

  projects.slice(1).forEach(({ id, img, title, detail, projectTech }, index) => {
    const project = originalProjects.cloneNode(true);
    document.querySelector('.projects-grid').append(project);
    project.setAttribute('data-key', id);
    project.querySelector('img').src = img;
    project.querySelector('.desc-project .name-project').textContent = title;
    project.querySelector('.desc-project .detail-project').textContent = detail;
    project.querySelector('.desc-project .tech-project').textContent = projectTech;
  });
};

const originalTech = document.querySelector('.tech-grid .item');
renderTechs(originalTech, techs);

const originalProjects = document.querySelector('.projects-grid .projects-item');
renderProjects(originalProjects, projects);
