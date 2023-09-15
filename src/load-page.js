import { populateSidebar } from './populate-sidebar.js';
import { listAllItems } from './load-task-list.js';
import { startStorage } from './store-projects.js';

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

    const appTitle = document.createElement('h1');
    appTitle.classList.add('app-title');
    appTitle.textContent = 'keyDown';

    topRibbon.appendChild(appTitle)
    parent.appendChild(topRibbon);
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
    createWorkArea(mainDiv);
    
    startStorage();
    listAllItems();
    populateSidebar();
}

export {
    loadPage,
};