class ProjectService {
    getMyProjects() {
        return new Promise(resolve => {
            resolve([
                {
                    name: 'Project 1',
                    description: 'Some description of project 1',
                    date: '05/10/2018',
                    users: 5
                },
                {
                    name: 'Project 2',
                    description: 'Some description of project 2',
                    date: '05/11/2018',
                    users: 3
                },
                {
                    name: 'Project 3',
                    description: 'Some description of project 3',
                    date: '01/01/2019',
                    users: 10
                },
                {
                    name: 'Project 4',
                    description: 'Some description of project 4',
                    date: '05/10/2018',
                    users: 7
                },
                {
                    name: 'Project 5',
                    description: 'Some description of project 5',
                    date: '25/04/2017',
                    users: 2
                }
            ]);
        });
    }

    getProjectsInvitedTo() {
        return new Promise(resolve => {
            resolve([
                {
                    name: 'Project 1',
                    description: 'Some description of project 1',
                    date: '25/03/2019',
                    users: 2
                },
                {
                    name: 'Project 2',
                    description: 'Some description of project 2',
                    date: '30/06/2018',
                    users: 8
                },
                {
                    name: 'Project 3',
                    description: 'Some description of project 3',
                    date: '02/02/2016',
                    users: 2
                },
            ]);
        });
    }
}

export default new ProjectService();
