import { projectContainer } from './store-projects.js';

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
    projectTab.classList.add(project);
    projectTab.textContent = project;

    parent.appendChild(projectTab);
}

function getAndPopulateProjects () {
    const projectTabDiv = document.querySelector('.project-tabs');
    for (const entry in projectContainer) {
        createProjectTabs(entry, projectTabDiv);
    }
}

function createActionBtns (parent) {
    const newTaskBtn = document.createElement('button');
    newTaskBtn.classList.add('new-task');
    newTaskBtn.textContent = 'new task';

    const newProjectBtn = document.createElement('button');
    newProjectBtn.classList.add('new-project');
    newProjectBtn.textContent = 'new project';

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
};