function populateNewProjectModalHeader (parent) {
    const modalHeader = document.createElement('h3');
    modalHeader.classList.add('project-modal-header');
    modalHeader.textContent = 'Name Your New Project:'

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('project-close-button');
    closeBtn.textContent = 'X';

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

    parent.appendChild(okButton);
}

function showNewProjectModalOnClick () {
    const newProjectButton = document.querySelector('.new-project');
    const modal = document.querySelector('.project-modal-background');
    newProjectButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });
};

function hideModalOnCloseClick () {
    const closeBtn = document.querySelector('.project-close-button');
    const modal = document.querySelector('.project-modal-background');

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    })
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

    showNewProjectModalOnClick();
    hideModalOnCloseClick();
}

export {
    loadNewProjectModal,
}