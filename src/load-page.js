import { populateSidebar } from './populate-sidebar.js';
import { loadTaskModal } from './load-task-modal.js';

function createSidebarDiv (parent) {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    parent.appendChild(sidebar);
}

function createMainDiv (parent) {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-div');
    parent.appendChild(mainDiv);
}

function createTopRibbon (parent) {
    const topRibbon = document.createElement('div');
    topRibbon.classList.add('top-ribbon');
    parent.appendChild(topRibbon);
}

function populateTopRibbon (parent) {
    const appTitle = document.createElement('h1');
    appTitle.classList.add('app-title');
    appTitle.textContent = 'keyDown';

    parent.appendChild(appTitle);
}

function createWorkArea (parent) {
    const workArea = document.createElement('div');
    workArea.classList.add('work-area');
    parent.appendChild(workArea)
}

function loadPage () {
    const page = document.querySelector('.content');
    createSidebarDiv(page);
    createMainDiv(page);

    const mainDiv = document.querySelector('.main-div');
    createTopRibbon(mainDiv);

    const ribbonDiv = document.querySelector('.top-ribbon');
    populateTopRibbon(ribbonDiv);
    createWorkArea(mainDiv);
    populateSidebar();
    
    //showTaskModalOnClick();
    loadTaskModal();
}

export {
    loadPage,
};