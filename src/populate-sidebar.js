import { showTaskModalOnClick } from './load-task-modal.js';
import { showNewProjectModalOnClick } from './new-project-modal.js';
import { listAllItems } from './load-task-list.js';
import { projectNav } from './store-projects.js';

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
    const projectTabDiv = document.querySelector('.project-tabs');

    if (projectTabDiv.hasChildNodes()) {
        while (projectTabDiv.firstChild) {
            projectTabDiv.removeChild(projectTabDiv.firstChild);
        }
    }

    for (let i = 0; i < localStorage.length; i++) {
        createProjectTabs(localStorage.key(i), projectTabDiv);
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