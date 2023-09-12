import { projectContainer, projectNav } from './store-projects.js';
import { showTaskModalOnClick } from './load-task-modal.js';
import { showNewProjectModalOnClick } from './new-project-modal.js';
import { listAllItems } from './load-task-list.js';

function createSidebarDivs (parent) {
    const projectTabDiv = document.createElement('div');
    projectTabDiv.classList.add('project-tabs');

    const actionBtnsDiv = document.createElement('div');
    actionBtnsDiv.classList.add('action-buttons');

    parent.appendChild(projectTabDiv);
    parent.appendChild(actionBtnsDiv);
}

function createProjectTabs (project, parent) {
    const projectTab = document.createElement('span');
    projectTab.classList.add('project-tab');
    //projectTab.classList.add(`${project}`); 
    // ^ that one is a problem when there's a space etc. in the title
    projectTab.textContent = project;

    projectTab.addEventListener('click', () => {
        projectNav.activeProject = project;
        listAllItems(project);
        console.log(projectNav.activeProject);
    })

    parent.appendChild(projectTab);
}

function getAndPopulateProjects () {
    const projectTabDiv = document.querySelector('.project-tabs');

    if (projectTabDiv.hasChildNodes()) {
        while (projectTabDiv.firstChild) {
            projectTabDiv.removeChild(projectTabDiv.firstChild);
        }
    }

    for (const entry in projectContainer) {
        createProjectTabs(entry, projectTabDiv);
    }
}

function createActionBtns (parent) {
    const newTaskBtn = document.createElement('button');
    newTaskBtn.classList.add('new-task');
    newTaskBtn.textContent = 'new task';
    showTaskModalOnClick(newTaskBtn);

    const newProjectBtn = document.createElement('button');
    newProjectBtn.classList.add('new-project');
    newProjectBtn.textContent = 'new project';
    showNewProjectModalOnClick(newProjectBtn);

    parent.appendChild(newTaskBtn);
    parent.appendChild(newProjectBtn);
}

function populateSidebar () {
    const sidebar = document.querySelector('.sidebar');
    createSidebarDivs(sidebar);

    getAndPopulateProjects();
    const actionButtonsDiv = document.querySelector('.action-buttons');
    createActionBtns(actionButtonsDiv);
}

export {
    populateSidebar,
    getAndPopulateProjects,
};