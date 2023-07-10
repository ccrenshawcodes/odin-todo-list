//  create and manage Project objects and Task objects

const projectContainer = {
    defaultProject: [
        {
            title: "first task",
            description: "make a trello knockoff",
            dueDate: '7/10',
            priority: 'normal',
            notes: 'this might be hard... but I can do it.',
            status: 'open',
        },
    ],
}

//  project management functions

const createNewProject = (projectName) => {
    projectContainer.projectName = new Array();
};

function renameProject (obj, oldKey, newKey) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
};

function deleteProject (projectName) {
    delete projectContainer[projectName];
};

//  task management functions
function createAndAddTask (title, description, dueDate, priority, project) {
    
    const createTask = () => {
        let status = 'open';
        let notes = '';
    
        return { title, description, dueDate, priority, status, notes };
    }
    
    project.push(createTask(title, description, dueDate, priority));
}

function deleteTask (taskIndex, project) {
    project.splice(project[taskIndex], 1, '');
}

function toggleTaskCompletedStatus (task) {
    if (task["status"] === 'open') {
        task["status"] = 'closed';
    } else if (task["status"] === 'closed') {
        task["status"] = 'open';
    }
}

export {
    projectContainer,
    createNewProject,
    renameProject,
    deleteProject,
    createAndAddTask,
    deleteTask,
    toggleTaskCompletedStatus,
};