const baseUrl = 'http://localhost:3333'

// export const httpClient = (endpoint: `/${string}`, options?: RequestInit) =>
//   fetch(`${baseUrl}${endpoint}`, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     ...options,
//   })

type ApiResponse<T> = {
  message: string
  data: T
}
export const httpClient = <T = any>(
  endpoint: `/${string}`,
  options?: RequestInit,
) => {
  return new Promise<ApiResponse<T>>((resolve, reject) => {
    fetch(`${baseUrl}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    })
      .then((response) =>
        response.json().then((json) => {
          resolve(json)
        }),
      )
      .catch((err) => {
        reject(err)
      })
  })
}
