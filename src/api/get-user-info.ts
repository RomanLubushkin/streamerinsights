import { UserInfo } from "../types/user-info"
import { TWITCH_CLIENT_ID } from "../utils/contants"

export enum GetUserInfoError {
  UNKNOWN = 1,
  INTERNAL_ERROR,
  UNAUTHORIZED,
}

export function getUserInfo(accessToken: string): Promise<[UserInfo | null, GetUserInfoError | null]> {
  const headers = { Authorization: `Bearer ${accessToken}`, "Client-Id": TWITCH_CLIENT_ID }
  return fetch("https://api.twitch.tv/helix/users", { headers })
    .then(resp => {
      if (resp.status === 400) {
        return [null, GetUserInfoError.INTERNAL_ERROR]
      }
      if (resp.status === 401) {
        return [null, GetUserInfoError.UNAUTHORIZED]
      }
      return resp.json().then(body => {
        if (!body.data || body.data.length !== 1) {
          return [null, GetUserInfoError.INTERNAL_ERROR]
        }

        const info = body.data[0]
        if (!info || !info.id || !info.login || !info.display_name) {
          return [null, GetUserInfoError.INTERNAL_ERROR]
        }

        const result = {
          // always present params
          id: info.id,
          login: info.login,
          displayName: info.display_name,

          // optional
          email: info.email || null,
          displayIcon: info.profile_image_url || info.offline_image_url || null
        }

        return [result, null]
      })
    })
}