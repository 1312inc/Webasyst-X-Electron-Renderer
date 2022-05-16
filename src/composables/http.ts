import axios, { AxiosResponse } from 'axios'
import { useAppState } from './appState'

interface Http {
  post: (url: string, data: Record<string, unknown>) => Promise<AxiosResponse>
}

const http = (initialToken?: string): Http => ({

  async post (url, data) {
    const token = initialToken || await useAppState.token()

    const formData = new FormData()
    for (const key in data) {
      formData.append(key, data[key] as string)
    }

    return axios({
      method: 'post',
      url: url,
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  }
})

export { http }
