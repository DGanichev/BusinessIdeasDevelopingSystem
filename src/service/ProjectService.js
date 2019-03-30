class ProjectService {
    getMyProjects() {
        return new Promise(resolve => {
            resolve([
                {
                    name: 'Project 1',
                    description: 'Description of project 1'
                },
                {
                    name: 'Project 2',
                    description: 'Description of project 1'
                },

                {
                    name: 'Project 3',
                    description: 'Description of project 1'
                },

                {
                    name: 'Project 4',
                    description: 'Description of project 1'
                }
            ]);
        });
    }

    getProjectsInvitedTo() {
        return new Promise(resolve => {
            resolve([
                {
                    name: 'Project 1',
                    description: 'Description of project 1'
                },
                {
                    name: 'Project 2',
                    description: 'Description of project 1'
                },
                {
                    name: 'Project 3',
                    description: 'Description of project 1'
                },
            ]);
        });
    }
}

export default new ProjectService();
