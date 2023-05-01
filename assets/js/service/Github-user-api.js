import { getUserProfile } from '../index.js'

const searchGithubUser = document.querySelector('.github-search button')

searchGithubUser.addEventListener('click', (e) => {
    e.preventDefault()

    const userName = document.querySelector('#github-user').value

    if (userName.length === 0) {
        return alert('Não consigo pesquisar se eu não tiver um nome de usuário 😢')
    }

    getUserProfile(userName)

    window.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' || e.key === 13) {
            getUserProfile(userName)
        }
    })
})

async function getGithubUser(username) {
    const url = `https://api.github.com/users/${username}`

    return await fetch(url).then((response) => response.json())
}

export { getGithubUser }