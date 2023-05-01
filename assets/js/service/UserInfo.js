const GithubUserInfo = {
    photo: '',
    name: '',
    login: '',
    bio: '',
    repos: '',
    followers: '',
    following: '',
    company: '',
    location: '',

    setUserInfo(githubUser) {
        this.photo = githubUser.avatar_url,
        this.name = githubUser.name,
        this.login = githubUser.login,
        this.bio = githubUser.bio,
        this.repos = githubUser.public_repos,
        this.followers = githubUser.followers,
        this.following = githubUser.following,
        this.company = githubUser.company,
        this.location = githubUser.location
    }
}

export { GithubUserInfo }