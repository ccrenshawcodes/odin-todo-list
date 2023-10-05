import { showTaskModalOnClick } from './load-task-modal.js';
import { deleteTask, projectNav } from './store-projects.js';

function showListItem (task, taskTitle, taskDueDate, parent, project) {
    const listItem = document.createElement('div');
    listItem.classList.add('task-list-item');
    listItem.setAttribute('id', project.indexOf(task));

    const itemTitle = document.createElement('h4');
    itemTitle.classList.add('list-task-title');
    itemTitle.textContent = taskTitle;

    const itemDueDate = document.createElement('h4');
    itemDueDate.textContent = taskDueDate;

    const deleteTaskButton = document.createElement('span');
    deleteTaskButton.classList.add('delete-task-button');
    deleteTaskButton.textContent = 'X';

    listItem.appendChild(itemTitle);
    listItem.appendChild(itemDueDate);
    listItem.appendChild(deleteTaskButton);

    showTaskModalOnClick(itemTitle);
    deleteATask(deleteTaskButton);

    parent.appendChild(listItem);
}

function deleteATask (button) {
    button.addEventListener('click', (e) => {
        deleteTask(e.target.parentElement.id, projectNav.activeProject);
        listAllItems();
    })
}

function listAllItems (project = projectNav.activeProject) {
    const currentProjectIndicator = document.querySelector('.current-project');
    currentProjectIndicator.textContent = projectNav.activeProject;

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
    parsedProject.forEach(item => showListItem(item, item.title, item.dueDate, determineStatus(item.status), parsedProject));
}

export {
    listAllItems,
}

