const GithubUserScreen = {
    userProfile: document.querySelector('main'),

    userRender(user) {
        this.userProfile.innerHTML = `
            <div class="main-content">
                <div class="user-info">
                    <img src="${user.photo}" class="user-photo" alt="Github User Photo">
                    <h1 class="user-name">${user.name ?? ''}</h1>
                    <a href="https://www.github.com/${user.login}" target="_blank" class="user-name-profile-name">${user.login ?? ''}</a>
                    <p class="user-bio">${user.bio ?? ''}</p>
                </div>
    
                <div class="user-container">
                    <div class="user-repositories">
                        <span>Repos</span>
                        <span class="repositories">${user.repos ?? ''}</span>
                    </div>
                    <div class="user-followers">
                        <span>Followers</span>
                        <span class="followers">${user.followers ?? ''}</span>
                    </div>
                    <div class="user-following">
                        <span>Following</span>
                        <span class="following">${user.following ?? ''}</span>
                    </div>
                </div>
            </div>
    
            <div class="user-pronouns">
                <div class="user-location"><i class="ph ph-map-pin"></i> <span class="location">${user.location ?? ''}</span></div> 
                <div class="user-location"><i class="ph ph-buildings"></i> <span class="company">${user.company ?? 'Not Available'}</span></div> 
            </div>`
    }
}

export { GithubUserScreen } 