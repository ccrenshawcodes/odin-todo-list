//import { projectContainer, createAndAddTask, deleteTask, toggleTaskCompletedStatus } from './store-projects.js';

function populateTaskModalHeader (parent) {
    const taskTitle = document.createElement('input');
    taskTitle.classList.add('task-title');
    taskTitle.setAttribute('placeholder', 'Type your title here...');

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-button');
    closeBtn.textContent = 'X';

    parent.appendChild(taskTitle);
    parent.appendChild(closeBtn);
}

function populateTaskModalMainContent (parent) {
    const taskDescription = document.createElement('textarea');
    taskDescription.classList.add('task-description');
    taskDescription.setAttribute('placeholder', "What's this task about?");

    const taskNotes = document.createElement('textarea');
    taskNotes.classList.add('task-notes');

    parent.appendChild(taskDescription);
    parent.appendChild(taskNotes);
}

function loadTaskModalSidebarContent (parent) {
    const dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');
    dueDate.classList.add('task-due-date');

    parent.appendChild(dueDate);
}

function createPriorityDropdown (parent) {
    const dropdown = document.createElement('select');
    dropdown.classList.add('task-priority');

    const lowPriority = document.createElement('option');
    lowPriority.classList.add('low-priority');
    lowPriority.textContent = 'Low';

    const normalPriority = document.createElement('option');
    normalPriority.classList.add('normal-priority');
    normalPriority.textContent = 'Normal';

    const highPriority = document.createElement('option');
    highPriority.classList.add('high-priority');
    highPriority.textContent = 'High';

    dropdown.appendChild(lowPriority);
    dropdown.appendChild(normalPriority);
    dropdown.appendChild(highPriority);

    parent.appendChild(dropdown);
}

function populateTaskModalFooter (parent) {
    const okButton = document.createElement('button');
    okButton.classList.add('ok-button');
    okButton.textContent = 'Create';

    parent.appendChild(okButton);
}

function showTaskModalOnClick () {
    const newTaskButton = document.querySelector('.new-task');
    const modal = document.querySelector('.task-modal-background');
    newTaskButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });
};

function hideModalOnCloseClick () {
    const closeBtn = document.querySelector('.close-button');
    const modal = document.querySelector('.task-modal-background');

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    })
}

function loadTaskModal () {
    const mainDiv = document.querySelector('.content');

    const modalBackground = document.createElement('div');
    modalBackground.classList.add('task-modal-background');

    const taskModal = document.createElement('div');
    taskModal.classList.add('task-modal');

    const taskModalHeader = document.createElement('div');
    taskModalHeader.classList.add('task-modal-header');

    const mainTaskModalContent = document.createElement('div');
    mainTaskModalContent.classList.add('task-main-content');

    const taskModalSidebar = document.createElement('div');
    taskModalSidebar.classList.add('task-sidebar');

    const taskModalFooter = document.createElement('div');
    taskModalFooter.classList.add('task-modal-footer');

    populateTaskModalHeader(taskModalHeader);
    populateTaskModalMainContent(mainTaskModalContent);
    loadTaskModalSidebarContent(taskModalSidebar);
    createPriorityDropdown(taskModalSidebar);
    populateTaskModalFooter(taskModalFooter);

    taskModal.appendChild(taskModalHeader);
    taskModal.appendChild(mainTaskModalContent);
    taskModal.appendChild(taskModalSidebar);
    taskModal.appendChild(taskModalFooter);

    modalBackground.appendChild(taskModal);

    mainDiv.appendChild(modalBackground);

    showTaskModalOnClick();
    hideModalOnCloseClick();
}

export {
    loadTaskModal,
}


/* add:
* require certain fields to be filled before ok can be pressed
* add labels for fields
* add project field
* add new task on "ok" click
* add open/closed field 
* write logic to pre-fill fields when an existing task is clicked
*/