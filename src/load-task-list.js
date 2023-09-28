import { showTaskModalOnClick } from './load-task-modal.js';
import { projectNav } from './store-projects.js';

function showListItem (task, taskTitle, taskDueDate, parent, project) {
    const listItem = document.createElement('div');
    listItem.classList.add('task-list-item');
    listItem.setAttribute('id', project.indexOf(task));

    const itemTitle = document.createElement('span');
    itemTitle.textContent = taskTitle;

    const itemDueDate = document.createElement('span');
    itemDueDate.textContent = taskDueDate;

    listItem.appendChild(itemTitle);
    listItem.appendChild(itemDueDate);

    showTaskModalOnClick(listItem);

    parent.appendChild(listItem);
}

function listAllItems (project = projectNav.activeProject) {
    const parent = document.querySelector('.task-display');

    if (parent.hasChildNodes()) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    const parsedProject = JSON.parse(localStorage.getItem(project));
    parsedProject.forEach(item => showListItem(item, item.title, item.dueDate, parent, parsedProject));
}

export {
    listAllItems,
}

