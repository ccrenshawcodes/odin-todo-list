import { listAllItems } from './load-task-list.js';
import { projectNav, deleteProject } from './store-projects.js';

function createProjectTabs (project, parent) {
    const projectTab = document.createElement('div');
    projectTab.classList.add('project-tab');

    const projectTabText = document.createElement('h4');
    projectTabText.textContent = project;

    const deleteProjectButton = document.createElement('span');
    deleteProjectButton.classList.add('delete-project-button');
    deleteProjectButton.textContent = 'X';

    projectTabText.addEventListener('click', () => {
        let projectName = projectTabText.textContent;
        projectNav.activeProject = projectName; 
        //the above is redundant bc the next line does it for us...
        //but I like having it here haha
        listAllItems(projectName);
    })

    projectTab.appendChild(projectTabText);
    projectTab.appendChild(deleteProjectButton);
    deleteProjectOnClick(deleteProjectButton);

    parent.appendChild(projectTab);
}

function deleteProjectOnClick (button) {
    button.addEventListener('click', (e) => {
        const projectName = e.target.parentElement.firstChild.textContent;
        deleteProject(projectName);
        getAndPopulateProjects();
    })
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