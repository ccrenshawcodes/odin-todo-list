import { createNewProject, projectContainer } from "./store-projects";
import { getAndPopulateProjects } from "./populate-sidebar";

function populateNewProjectModalHeader (parent) {
    const modalHeader = document.createElement('h3');
    modalHeader.classList.add('project-modal-header');
    modalHeader.textContent = 'Name Your New Project:'

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('project-close-button');
    closeBtn.textContent = 'X';
    closeBtn.addEventListener('click', hideModalOnClick);

    parent.appendChild(modalHeader);
    parent.appendChild(closeBtn);
}

function createNewProjectInput (parent) {
    const newProjectInput = document.createElement('input');
    newProjectInput.classList.add('project-title');
    newProjectInput.setAttribute('placeholder', 'Plan Italy Trip');

    parent.appendChild(newProjectInput);
}

function makeOkButton (parent) {
    const okButton = document.createElement('button');
    okButton.classList.add('ok-button');
    okButton.textContent = 'Create';

    okButton.addEventListener('click', () => {
        const title = document.querySelector('.project-title').value;
        hideModalOnClick();
        createNewProject(title);
        getAndPopulateProjects();
    })

    parent.appendChild(okButton);
}

function hideModalOnClick () {
    const modal = document.querySelector('.project-modal-background');
    modal.style.display = 'none';

    document.querySelector('.project-title').value = '';
}

function loadNewProjectModal () {
    const mainDiv = document.querySelector('.content');

    const modalBackground = document.createElement('div');
    modalBackground.classList.add('project-modal-background');

    const newProjectModal = document.createElement('div');
    newProjectModal.classList.add('new-project-modal');

    const projectModalHeader = document.createElement('div');
    projectModalHeader.classList.add('project-modal-header');

    populateNewProjectModalHeader(projectModalHeader);

    newProjectModal.appendChild(projectModalHeader);

    createNewProjectInput(newProjectModal);
    makeOkButton(newProjectModal);

    modalBackground.appendChild(newProjectModal);

    mainDiv.appendChild(modalBackground);
}

function showNewProjectModalOnClick (button) {
    button.addEventListener('click', () => {
        loadNewProjectModal();
        const modal = document.querySelector('.project-modal-background');
        modal.style.display = 'block';
    });
};

export {
    showNewProjectModalOnClick,
}