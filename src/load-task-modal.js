import { storeTask, projectNav } from "./store-projects";
import { listAllItems } from "./load-task-list";

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

function createTaskFromValues () {
    const title = document.querySelector('.task-title').value;
    const description = document.querySelector('.task-description').value;
    const dueDate = document.querySelector('.task-due-date').value;
    const priority = document.querySelector('#Priority').value;
    const project = document.querySelector('#task-project-dropdown').value;

    storeTask(title, description, dueDate, priority, project);
}

function hideModal () {
    const modal = document.querySelector('.task-modal-background');
    modal.style.display = 'none';

    document.querySelector('.task-title').value = '';
    document.querySelector('.task-description').value = '';
    document.querySelector('.task-due-date').value = '';
    document.querySelector('#Priority').value = 'low';
    document.querySelector('#task-project-dropdown').value = '';
}

function prefillTaskModal (button) {
    if (button.classList.contains('task-list-item')) {
        const project = JSON.parse(localStorage.getItem(projectNav.activeProject));
        const taskID = button.id;

        const currentTask = project[taskID];
        document.querySelector('.task-title').value = currentTask.title;
        document.querySelector('.task-description').value = currentTask.description;
        document.querySelector('.task-due-date').value = currentTask.dueDate;
        document.querySelector('#Priority').value = currentTask.priority;
    }
}

function addButtonFunctions () {
    const okButton = document.querySelector('.task-ok-button');
    okButton.addEventListener('click', () => {
        createTaskFromValues();
        hideModal();
        listAllItems();
    })
    
    const closeButton = document.querySelector('.task-close-button');
    closeButton.addEventListener('click', hideModal);
}

function showTaskModalOnClick (button) { 
    button.addEventListener('click', () => {
        prefillTaskModal(button);
        updateProjectDropdown();
        addButtonFunctions();
        const modal = document.querySelector('.task-modal-background');
        modal.style.display = 'block';
    });
};

export {
    showTaskModalOnClick,
}


/* add:
* require certain fields to be filled before ok can be pressed
* add labels for fields
* fix "ok" button when editing a task - this will require some thought about storage
*/