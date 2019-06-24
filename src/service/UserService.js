class UserService {

    getLoggedInUser() {
        return {
            email: 'user@email.com',
            username: 'user',
            firstName: 'Georgi',
            lastName: 'Georgiev',
            mobileNum: '999999999',
            description: 'Some description',
            skills: [
                {
                    name: 'JAVA',
                    value: '5'
                },
                {
                    name: 'C#',
                    value: '6'
                }
            ]
        };
    }

    login(data) {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    register(data) {
        return new Promise((resolve, reject) => {
            resolve();
        })
    }
}

export default new UserService();
