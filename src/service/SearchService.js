class SearchService {
    getSearchResults() {
        return new Promise(resolve => {
            resolve([
                {
                    user_id: '3cbd6dda-d28c-4842-9b16-de7e6602da99',
                    username: 'User_1',
                    projectName: 'Project 1',
                    position: 'Java Developer',
                },
                {
                    user_id: '3cbd6dda-d28c-4148-9b16-de7e6602da99',
                    username: 'User',
                    projectName: 'Project 1',
                    position: 'Java Developer',
                },
                {
                    user_id: '3bbc5dda-d28c-4148-9b16-de7e6602da99',
                    username: 'User_2',
                    projectName: 'Project 1',
                    position: 'React Developer',
                },
            ]);
        });
    }
}

export default new SearchService();
