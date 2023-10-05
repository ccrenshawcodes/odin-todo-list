import { storeNewTask, projectNav } from "./store-projects";
import { listAllItems } from "./load-task-list";

let currentTask = {
    _activeTask: 0,

    get taskID () {
        return this._activeTask;
    },

    set taskID (task) {
        return this._activeTask = task;
    }
}

function getTaskValues () {
    const title = document.querySelector('.task-title').value;
    const description = document.querySelector('.task-description').value;
    const dueDate = document.querySelector('.task-due-date').value;
    const priority = document.querySelector('#Priority').value;
    const project = document.querySelector('#task-project-dropdown').value;
    
    let taskStatus;
    const status = document.querySelector('.status-toggle');
    if (status.checked === true) {
        taskStatus = 'closed';
    } else if (status.checked === false) {
        taskStatus = 'open';
    }

    return {
        title,
        description,
        dueDate,
        priority,
        project,
        taskStatus,
    }
    
}

function updateProjectDropdown () {
    const dropdown = document.querySelector('#task-project-dropdown');

    if (dropdown.hasChildNodes()) {
        while (dropdown.firstChild) {
            dropdown.removeChild(dropdown.firstChild);
        }
    }

    for (let i = 0; i < localStorage.length; i++) {
        const projectOption = document.createElement('option');
        projectOption.textContent = localStorage.key(i);

        dropdown.appendChild(projectOption);
    }
}

function hideModal () {
    const modal = document.querySelector('.task-modal-background');
    modal.style.display = 'none';

    document.querySelector('.task-title').value = '';
    document.querySelector('.task-description').value = '';
    document.querySelector('.task-due-date').value = '';
    document.querySelector('#Priority').value = 'low';
    document.querySelector('#task-project-dropdown').value = '';
    document.querySelector('.status-toggle').checked = false;

    const button = document.querySelector('.task-ok-button');
    if (button.classList.contains('edit-save-button')) {
        button.classList.remove('edit-save-button');
    }
}

function prefillTaskModal (button) {
    const project = JSON.parse(localStorage.getItem(projectNav.activeProject));
    currentTask.taskID = button.parentElement.id;

    const thisTask = project[currentTask.taskID];
    document.querySelector('.task-title').value = thisTask.title;
    document.querySelector('.task-description').value = thisTask.description;
    document.querySelector('.task-due-date').value = thisTask.dueDate;
    document.querySelector('#Priority').value = thisTask.priority;

    if (thisTask.status === 'closed') {
        document.querySelector('.status-toggle').checked = true;
    } else {
        document.querySelector('.status-toggle').checked = false;
    }

    const okButton = document.querySelector('.task-ok-button');
    okButton.classList.add('edit-save-button');
}

function updateTask (position) {
        storeNewTask(getTaskValues().title, getTaskValues().description, getTaskValues().dueDate, getTaskValues().priority, getTaskValues().taskStatus, getTaskValues().project, position);
        listAllItems();
        hideModal();
}

function addButtonFunctions () {
    const okButton = document.querySelector('.task-ok-button');
    okButton.addEventListener('click', () => {
        if (okButton.classList.contains('edit-save-button') === false) {
            storeNewTask(getTaskValues().title, getTaskValues().description, getTaskValues().dueDate, getTaskValues().priority, getTaskValues().taskStatus, getTaskValues().project, null);
            listAllItems();
            hideModal();
        } else {
            updateTask(currentTask.taskID);
        }
    })
    
    const closeButton = document.querySelector('.task-close-button');
    closeButton.addEventListener('click', hideModal);
}

function showTaskModalOnClick (button) { 
    button.addEventListener('click', () => {
        if (button.classList.contains('list-task-title')) {
            prefillTaskModal(button);
        }
        updateProjectDropdown();
        const modal = document.querySelector('.task-modal-background');
        modal.style.display = 'block';
    });
};

export {
    showTaskModalOnClick,
    addButtonFunctions,
}


/* add:
* require certain fields to be filled before ok can be pressed
* which project is displayed in the project dropdown
* moving tasks across projects
*/