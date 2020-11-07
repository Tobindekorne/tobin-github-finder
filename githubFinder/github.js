class Github {
    constructor() {
        this.client_id = '779abe69af125829428a';
        // this.client_secret = '58902c2979e21b5cde2862e72e7a0eef7832a477';
        this.client_secret = 'c4538a009d8f8fef4682d4d3e30d87db37ea1905';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}