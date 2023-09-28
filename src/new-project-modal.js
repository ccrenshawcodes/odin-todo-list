import { createNewProject } from "./store-projects";
import { getAndPopulateProjects } from "./populate-sidebar";

function addButtonFunctions () {
    const okButton = document.querySelector('.project-ok-button');
    okButton.addEventListener('click', () => {
        const title = document.querySelector('.project-title').value;
        hideModalOnClick();
        createNewProject(title);
        getAndPopulateProjects();
    })

    const closeButton = document.querySelector('.project-close-button');
    closeButton.addEventListener('click', hideModalOnClick);
}

function hideModalOnClick () {
    const modal = document.querySelector('.project-modal-background');
    modal.style.display = 'none';
    document.querySelector('.project-title').value = '';
}

function showNewProjectModalOnClick (button) {
    button.addEventListener('click', () => {
        addButtonFunctions();
        const modal = document.querySelector('.project-modal-background');
        modal.style.display = 'block';
    });
};

export {
    showNewProjectModalOnClick,
}