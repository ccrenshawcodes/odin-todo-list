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
    const openSection = document.querySelector('.open-tasks');
    const closedSection = document.querySelector('.closed-tasks');

    function determineStatus (taskStatus) {
        if (taskStatus === 'open') {
            return openSection;
        } else if (taskStatus === 'closed') {
            return closedSection;
        }
    }

    function clearExistingTasks (parent) {
        if (parent.hasChildNodes()) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
    }
    clearExistingTasks(openSection);
    clearExistingTasks(closedSection);

    const parsedProject = JSON.parse(localStorage.getItem(project));
    console.table(parsedProject);
    parsedProject.forEach(item => showListItem(item, item.title, item.dueDate, determineStatus(item.status), parsedProject));
}

export {
    listAllItems,
}

