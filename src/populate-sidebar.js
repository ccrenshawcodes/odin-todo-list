import { listAllItems } from './load-task-list.js';
import { projectNav } from './store-projects.js';

function createProjectTabs (project, parent) {
    const projectTab = document.createElement('span');
    projectTab.classList.add('project-tab');
    projectTab.textContent = project;

    projectTab.addEventListener('click', () => {
        let projectName = projectTab.textContent;
        projectNav.activeProject = projectName; 
        //the above is redundant bc the next line does it for us...
        //but I like having it here haha
        listAllItems(projectName);
    })

    parent.appendChild(projectTab);
}

function getAndPopulateProjects () {
    const projectsList = document.querySelector('.projects-list');

    if (projectsList.hasChildNodes()) {
        while (projectsList.firstChild) {
            projectsList.removeChild(projectsList.firstChild);
        }
    }

    for (let i = 0; i < localStorage.length; i++) {
        createProjectTabs(localStorage.key(i), projectsList);
    }
}

export {
    getAndPopulateProjects,
};