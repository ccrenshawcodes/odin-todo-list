//  create and manage Project objects and Task objects

function startStorage () {
    if (localStorage.length <= 0) {
        localStorage.setItem('Default Project', JSON.stringify(new Array()));
    }
}

/* const projectContainer = {
    'Default Project': [
        {
            title: "first task",
            description: "make a trello knockoff",
            dueDate: '2023-07-10',
            priority: 'normal',
            status: 'open',
        },
        {
            title: "second task",
            description: "make the tasks appear",
            dueDate: '2024-02-13',
            priority: 'normal',
            status: 'open',
        },
    ],
}; */

//  project management functions

function createNewProject (projectName) {
    localStorage.setItem(projectName, JSON.stringify(new Array()));
}

function renameProject (oldProjectName, newProjectName) {
    const projectTasks = localStorage.getItem(oldProjectName);
    localStorage.removeItem(oldProjectName);
    localStorage.setItem(newProjectName, projectTasks);
}

function deleteProject (projectName) {
    localStorage.removeItem(projectName);
};

//  task management functions

function storeTask (title, description, dueDate, priority, project) {
    let projectData = JSON.parse(localStorage.getItem(project));
    createAndAddTask(title, description, dueDate, priority, projectData);
    localStorage.setItem(project, JSON.stringify(projectData));
}

function createAndAddTask (title, description, dueDate, priority, project) {
    
    const createTask = () => {
        let status = 'open';
    
        return { title, description, dueDate, priority, status };
    }
    
    project.push(createTask(title, description, dueDate, priority));
}

//  how the heck am I planning to get the index ??
function deleteTask (taskIndex, project) {
    const projectTasks = JSON.parse(localStorage.getItem(project));
    projectTasks.splice(projectTasks[taskIndex], 1, '');
}

function toggleTaskCompletedStatus (taskIndex, project) {
    const projectTasks = JSON.parse(localStorage.getItem(project));
    const task = projectTasks[taskIndex];

    if (task["status"] === 'open') {
        task["status"] = 'closed';
    } else if (task["status"] === 'closed') {
        task["status"] = 'open';
    }
}

let projectNav = {
    _activeProject: 'Default Project',

    get activeProject () {
        return this._activeProject;
    },

    set activeProject (newProject) {
        return this._activeProject = newProject;
    }
}

export {
    startStorage,
    createNewProject,
    renameProject,
    deleteProject,
    storeTask,
    deleteTask,
    toggleTaskCompletedStatus,
    projectNav,
};