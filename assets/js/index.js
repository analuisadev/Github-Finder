import { getGithubUser } from './service/Github-user-api.js'
import { GithubUserInfo } from './service/UserInfo.js'
import { GithubUserScreen } from './GithubUserPreview.js'

export async function getUserProfile(username) {
    const userResponse = await getGithubUser(username)

    GithubUserInfo.setUserInfo(userResponse)

    GithubUserScreen.userRender(GithubUserInfo)
}