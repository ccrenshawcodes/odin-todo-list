import { listAllItems } from './load-task-list.js';
import { showTaskModalOnClick } from './load-task-modal.js';
import { startStorage } from './store-projects.js';
import { showNewProjectModalOnClick } from './new-project-modal.js';
import { getAndPopulateProjects } from './populate-sidebar.js';

function loadPage () {
    const newTaskButton = document.querySelector('.new-task');
    const newProjectButton = document.querySelector('.new-project');
    showTaskModalOnClick(newTaskButton);
    showNewProjectModalOnClick(newProjectButton);

    getAndPopulateProjects();
    startStorage();
    listAllItems();

}

export {
    loadPage,
};