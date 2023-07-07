function createSidebarDivs (parent) {
    const projectTabDiv = document.createElement('div');
    projectTabDiv.classList.add('project-tabs');

    const actionBtnsDiv = document.createElement('div');
    actionBtnsDiv.classList.add('action-buttons');

    parent.appendChild(projectTabDiv);
    parent.appendChild(actionBtnsDiv);
}

function createActionBtns (parent) {
    const newTaskBtn = document.createElement('button');
    newTaskBtn.classList.add('new-task');
    newTaskBtn.textContent = 'new task';

    const newProjectBtn = document.createElement('button');
    newProjectBtn.classList.add('new-project');
    newProjectBtn.textContent = 'new project';

    parent.appendChild(newTaskBtn);
    parent.appendChild(newProjectBtn);
}

function populateSidebar () {
    const sidebar = document.querySelector('.sidebar');
    createSidebarDivs(sidebar);

    const actionButtonsDiv = document.querySelector('.action-buttons');
    createActionBtns(actionButtonsDiv);
}

export {
    populateSidebar,
};