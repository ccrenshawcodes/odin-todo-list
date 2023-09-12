import { showTaskModalOnClick } from './load-task-modal.js';
import { projectContainer, deleteTask } from './store-projects.js';

function showListItem (task, taskTitle, parent, project) {
    const listItem = document.createElement('div');
    listItem.classList.add('task-list-item');
    listItem.setAttribute('id', project.indexOf(task));
    listItem.textContent = taskTitle;

    showTaskModalOnClick(listItem);

    parent.appendChild(listItem);
}

function listAllItems (project = 'defaultProject') {
    const parent = document.querySelector('.work-area');

    if (parent.hasChildNodes()) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    projectContainer[project].forEach(item => showListItem(item, item.title, parent, projectContainer[project]));
}

export {
    listAllItems,
}


/* so I need to:
1. populate task list items - DONE
2. give them names based on the title attribute - DONE
3. attach event listeners to them that will
4. open the task modal, populated with
5. the appropriate task info pre-populated */

//abbey recommends doing localstorage reading before
//proceeding with this part.

