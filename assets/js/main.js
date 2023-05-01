const searchGithubUser = document.querySelector('.github-search button')

searchGithubUser.addEventListener('click', (e) => {
    e.preventDefault()

    const githubUser = document.querySelector('#github-user').value

    getUserProfile(githubUser)
})

async function githubUser(username) {
    const url = `https://api.github.com/users/${username}`

    return await fetch(url)
        .then((response) => response.json())
}

const getUserProfile = (username) => {
    githubUser(username)
        .then((userData) => {
            let userInfo = `
            <div class="main-content">
                <div class="user-info">
                    <img src="${userData.avatar_url}" class="user-photo" alt="Github User Photo">
                    <h1 class="user-name">${userData.name ?? ''}</h1>
                    <a href="https://www.github.com/${userData.login}" target="_blank" class="user-name-profile-name">${userData.login ?? ''}</a>
                    <p class="user-bio">${userData.bio ?? ''}</p>
                </div>

                <div class="user-container">
                    <div class="user-repositories">
                        <span>Repos</span>
                        <span class="repositories">${userData.public_repos ?? ''}</span>
                    </div>
                    <div class="user-followers">
                        <span>Followers</span>
                        <span class="followers">${userData.followers ?? ''}</span>
                    </div>
                    <div class="user-following">
                        <span>Following</span>
                        <span class="following">${userData.following ?? ''}</span>
                    </div>
                </div>
            </div>

            <div class="user-pronouns">
                <div class="user-location"><i class="ph ph-map-pin"></i> <span class="location">${userData.location ?? ''}</span></div> 
                <div class="user-location"><i class="ph ph-buildings"></i> <span class="company">${userData.company ?? 'Not Available'}</span></div> 
            </div>`

        document.querySelector('main').innerHTML = userInfo
    })
}