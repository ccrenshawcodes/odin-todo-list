import { projectContainer, deleteTask } from './store-projects.js';

function showListItem (taskTitle, parent) {
    const listItem = document.createElement('div');
    listItem.classList.add('task-list-item');
    listItem.textContent = taskTitle;
    parent.appendChild(listItem);
}

function listAllItems (project = projectContainer.defaultProject) {
    const parent = document.querySelector('.work-area');

    if (parent.hasChildNodes()) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    project.forEach(item => showListItem(item.title, parent));
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

