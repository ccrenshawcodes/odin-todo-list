import { listAllItems } from './load-task-list.js';
import { addButtonFunctions, showTaskModalOnClick } from './load-task-modal.js';
import { showNewProjectModalOnClick } from './new-project-modal.js';
import { getAndPopulateProjects } from './populate-sidebar.js';

function loadPage () {
    getAndPopulateProjects();
    const newTaskButton = document.querySelector('.new-task');
    const newProjectButton = document.querySelector('.new-project');
    showTaskModalOnClick(newTaskButton);
    addButtonFunctions();
    showNewProjectModalOnClick(newProjectButton);
    listAllItems();
}

export {
    loadPage,
};