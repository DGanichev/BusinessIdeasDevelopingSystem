class ProjectService {
    getMyProjects() {
        return new Promise(resolve => {
            resolve([
                {
                    id: '82f2fd62-3906-4d24-9edc-06a1765ac538',
                    name: 'Project 1',
                    description: 'Some description of project 1',
                    date: '05/10/2018',
                    users: 5,
                    positions: [
                        {
                            name: 'Java Developer',
                            skills: [
                                {
                                    skill: "Java OOP",
                                    level: "6"
                                },
                                {
                                    skill: "Java Design Patterns",
                                    level: "6"
                                }
                            ]
                        },
                        {
                            name: 'React Developer',
                            skills: [
                                {
                                    skill: "JavaScript fundamentals",
                                    level: "6"
                                },
                                {
                                    skill: "React fundamentals",
                                    level: "7"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '3cbd6dda-d28c-4842-9b16-ce7e6602da83',
                    name: 'Project 2',
                    description: 'Some description of project 2',
                    date: '05/11/2018',
                    users: 3,
                    positions: [
                        {
                            name: 'PHP Developer',
                            skills: [
                                {
                                    skill: "PHP fundamentals",
                                    level: "6"
                                }
                            ]
                        }, {
                            name: 'React developer',
                            skills: [
                                {
                                    skill: "JavaScript fundamentals",
                                    level: "6"
                                },
                                {
                                    skill: "React fundamentals",
                                    level: "7"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '9d581a63-0c82-4de1-be9a-c3d209e041fc',
                    name: 'Project 3',
                    description: 'Some description of project 3',
                    date: '01/01/2019',
                    users: 10,
                    positions: [
                        {
                            name: 'Java Spring Developer',
                            skills: [
                                {
                                    skill: "Spring framework",
                                    level: "7"
                                },
                                {
                                    skill: "Java Design Patterns",
                                    level: "6"
                                },
                                {
                                    skill: "Algorithms",
                                    level: "5"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '7ec15fec-7faf-46f3-85b3-5c8bc3a7df51',
                    name: 'Project 4',
                    description: 'Some description of project 4',
                    date: '05/10/2018',
                    users: 7,
                    positions: [
                        {
                            name: 'Java Developer',
                            skills: [
                                {
                                    skill: "Java OOP",
                                    level: "6"
                                },
                                {
                                    skill: "Java Design Patterns",
                                    level: "6"
                                }
                            ]
                        }, {
                            name: 'React developer',
                            skills: [
                                {
                                    skill: "JavaScript fundamentals",
                                    level: "6"
                                },
                                {
                                    skill: "React fundamentals",
                                    level: "7"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '450d91a0-0a5b-4934-b9e5-446efa034335',
                    name: 'Project 5',
                    description: 'Some description of project 5',
                    date: '25/04/2017',
                    users: 2,
                    positions: [
                        {
                            name: 'Java Developer',
                            skills: [
                                {
                                    skill: "Java OOP",
                                    level: "6"
                                },
                                {
                                    skill: "Java Design Patterns",
                                    level: "6"
                                }
                            ]
                        }, {
                            name: 'React developer',
                            skills: [
                                {
                                    skill: "JavaScript fundamentals",
                                    level: "6"
                                },
                                {
                                    skill: "React fundamentals",
                                    level: "7"
                                }
                            ]
                        }
                    ]
                }
            ]);
        });
    }

    getProjectsInvitedTo() {
        return new Promise(resolve => {
            resolve([
                {
                    id: 'b9610d97-923c-4445-908e-88198ef59a07',
                    name: 'Project 1',
                    description: 'Some description of project 1',
                    date: '25/03/2019',
                    users: 2,
                    positions: [
                        {
                            name: 'Project Manager',
                            skills: [
                                {
                                    skill: "Working with clients",
                                    level: "6"
                                },
                                {
                                    skill: "Team work",
                                    level: "8"
                                }
                            ]
                        }, {
                            name: 'AngularJS developer',
                            skills: [
                                {
                                    skill: "JavaScript fundamentals",
                                    level: "6"
                                },
                                {
                                    skill: "AngularJS fundamentals",
                                    level: "7"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '3e9f0aaa-3848-4afd-8cd7-1eb71edd3b9b',
                    name: 'Project 2',
                    description: 'Some description of project 2',
                    date: '30/06/2018',
                    users: 8,
                    positions: [
                        {
                            name: 'Java Developer',
                            skills: [
                                {
                                    skill: "Java OOP",
                                    level: "6"
                                },
                                {
                                    skill: "Java Design Patterns",
                                    level: "6"
                                }
                            ]
                        }, {
                            name: 'React developer',
                            skills: [
                                {
                                    skill: "JavaScript fundamentals",
                                    level: "6"
                                },
                                {
                                    skill: "React fundamentals",
                                    level: "7"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'a834a2f7-5352-4b4a-a266-f421f1b309b7',
                    name: 'Project 3',
                    description: 'Some description of project 3',
                    date: '02/02/2016',
                    users: 2,
                    positions: [
                        {
                            name: 'Java Developer',
                            skills: [
                                {
                                    skill: "Java OOP",
                                    level: "6"
                                },
                                {
                                    skill: "Java Design Patterns",
                                    level: "6"
                                }
                            ]
                        }, {
                            name: 'React developer',
                            skills: [
                                {
                                    skill: "JavaScript fundamentals",
                                    level: "6"
                                },
                                {
                                    skill: "React fundamentals",
                                    level: "7"
                                }
                            ]
                        }
                    ]
                },
            ]);
        });
    }
}

export default new ProjectService();
