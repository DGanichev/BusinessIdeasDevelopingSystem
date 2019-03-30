class UserService {

    getLoggedInUser() {
        return {
            email: 'user@email.com',
            username: 'user'
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
