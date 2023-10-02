//  create and manage Project objects and Task objects

function startStorage () {
    if (localStorage.length <= 0) {
        localStorage.setItem('Default Project', JSON.stringify(new Array()));
    }
}

/* 
    format:
    localstorage = {
        'default project': 
        [
            {
                title: 'first task',
                description: 'just showing how it works',
                dueDate: '2023-09-30',
                priority: 'normal',
                status: 'open'
            },
        ],
    }

    new Projects are added to localStorage as k/v pairs,
    where the name of the Project is the key,
    and a stringified Array is the value;
    The Array will contain objects representing Tasks with
    title, description, dueDate, priority and status attributes.
*/

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

function storeTask (title, description, dueDate, priority, status, project) {
    let projectData = JSON.parse(localStorage.getItem(project));
    createAndAddTask(title, description, dueDate, priority, status, projectData);
    localStorage.setItem(project, JSON.stringify(projectData));
}

function createAndAddTask (title, description, dueDate, priority, status, project) {
    
    const createTask = () => {
        return { title, description, dueDate, priority, status };
    }
    
    project.push(createTask(title, description, dueDate, priority, status));
}

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