import { createAndAddTask, projectContainer } from "./store-projects";
import { listAllItems } from "./load-task-list";

function populateTaskModalHeader (parent) {
    const taskTitle = document.createElement('input');
    taskTitle.classList.add('task-title');
    taskTitle.setAttribute('placeholder', 'Type your title here...');

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-button');
    closeBtn.textContent = 'X';
    closeBtn.addEventListener('click', hideModal);

    parent.appendChild(taskTitle);
    parent.appendChild(closeBtn);
}

function populateTaskModalMainContent (parent) {
    const taskDescription = document.createElement('textarea');
    taskDescription.classList.add('task-description');
    taskDescription.setAttribute('placeholder', "What's this task about?");

    const statusToggleLabel = document.createElement('p');
    statusToggleLabel.textContent = 'Closed?';
    statusToggleLabel.classList.add('status-label');
    const taskStatusToggle = document.createElement('input');
    taskStatusToggle.setAttribute('type', 'checkbox');
    taskStatusToggle.classList.add('status-toggle');


    parent.appendChild(taskDescription);
    parent.appendChild(statusToggleLabel);
    parent.appendChild(taskStatusToggle);
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

function createProjectDropdown (parent) {
    const dropdown = document.createElement('select');
    dropdown.classList.add('task-project');

    for (const project in projectContainer) {
        const projectOption = document.createElement('option');
        projectOption.classList.add(`${project}`);
        projectOption.textContent = project;
        
        dropdown.appendChild(projectOption);
    }

    parent.appendChild(dropdown);
}

function populateTaskModalFooter (parent) {
    const okButton = document.createElement('button');
    okButton.classList.add('ok-button');
    okButton.textContent = 'OK';
    okButton.addEventListener('click', () => {
        createTaskFromValues();
        hideModal();
        listAllItems();
    })

    parent.appendChild(okButton);
}

function createTaskFromValues () {
    const title = document.querySelector('.task-title').value;
    const description = document.querySelector('.task-description').value;
    const dueDate = document.querySelector('.task-due-date').value;
    const priority = document.querySelector('.task-priority').value;
    const project = document.querySelector('.task-project').value;

    createAndAddTask(title, description, dueDate, priority, projectContainer[project]);
}

function hideModal () {
    const modal = document.querySelector('.task-modal-background');
    modal.style.display = 'none';

    document.querySelector('.task-title').value = '';
    document.querySelector('.task-description').value = '';
    document.querySelector('.task-due-date').value = '';
    document.querySelector('.task-priority').value = '';
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
    createProjectDropdown(taskModalSidebar);
    populateTaskModalFooter(taskModalFooter);

    taskModal.appendChild(taskModalHeader);
    taskModal.appendChild(mainTaskModalContent);
    taskModal.appendChild(taskModalSidebar);
    taskModal.appendChild(taskModalFooter);

    modalBackground.appendChild(taskModal);

    mainDiv.appendChild(modalBackground);
}

function showTaskModalOnClick (button) { 
    button.addEventListener('click', () => {
        loadTaskModal();
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
* add project field
* add new task on "ok" click
* add open/closed field 
* write logic to pre-fill fields when an existing task is clicked
*/