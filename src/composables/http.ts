import axios, { AxiosResponse } from 'axios'
import { useAppState } from './appState'

interface Http {
  post: (url: string, data: Record<string, unknown>) => Promise<AxiosResponse>;
  get: (url: string) => Promise<AxiosResponse>;
}

const http = (initialToken?: string): Http => ({
  async post (url, data) {
    const token = initialToken || (await useAppState.token())

    const formData = new FormData()
    for (const key in data) {
      if (Array.isArray(data[key])) {
        for (const e of data[key] as Array<string>) {
          formData.append(`${key}[]`, e as string)
        }
      } else {
        formData.append(key, data[key] as string)
      }
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
  },

  async get (url) {
    const token = initialToken || (await useAppState.token())

    return axios({
      method: 'get',
      url: url,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
})

export { http }
