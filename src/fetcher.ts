const SERVER_BASE_URL = 'https://f845-219-240-45-11.ngrok-free.app'

class ApiError extends Error {
  status: number
  constructor(status: number, message?: string) {
    super(message)
    this.status = status
  }
}

const filterError = async (res: Response) => {
  // return if res is ok
  if (res.ok) return res
  // check if body exists
  let jsonBody: Envelope
  try {
    jsonBody = await res.json()
  } catch (e) {
    // 1) json body doesn't exist
    // NOTE(gogo): consider sending the error to bugsnag
    throw new ApiError(res.status)
  }
  // 2) json body does exist
  throw new ApiError(jsonBody.status, jsonBody.msg || undefined)
}

interface Envelope<T = unknown> {
  status: number
  data?: T
  msg?: string
}

const chainJsonParser = (res: Response) => res.json()
const chainErrorFilter = (res: Response) => filterError(res)

export const getRequest = async (path: string, options?: RequestInit) => {
  return fetch(`${SERVER_BASE_URL}${path}`, {
    method: 'GET',
    credentials: 'include',
    ...options,
  })
    .then(chainErrorFilter)
    .then(chainJsonParser)
}

export const postRequest = async <T>(
  path: string,
  payload?: object,
): Promise<Envelope<T>> => {
  return fetch(`${SERVER_BASE_URL}${path}`, {
    body: JSON.stringify(payload),
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
    .then(chainErrorFilter)
    .then(chainJsonParser)
}

export const postFormRequest = async <T>(
  path: string,
  body: FormData,
): Promise<Envelope<T>> => {
  return fetch(`${SERVER_BASE_URL}${path}`, {
    body,
    method: 'POST',
    // NOTE(gogo): 'Content-Type' header should be managed by browser when using form data
    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects#sect4
    headers: {},
    credentials: 'include',
  })
    .then(chainErrorFilter)
    .then(chainJsonParser)
}

export const putRequest = async <T>(
  path: string,
  payload: object,
): Promise<Envelope<T>> => {
  return fetch(`${SERVER_BASE_URL}${path}`, {
    body: JSON.stringify(payload),
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
    .then(chainErrorFilter)
    .then(chainJsonParser)
}

export const putFormRequest = async <T>(
  path: string,
  body: FormData,
): Promise<Envelope<T>> => {
  return fetch(`${SERVER_BASE_URL}${path}`, {
    body,
    method: 'PUT',
    // NOTE(gogo): 'Content-Type' header should be managed by browser when using form data
    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects#sect4
    headers: {},
    credentials: 'include',
  })
    .then(chainErrorFilter)
    .then(chainJsonParser)
}

export const deleteRequest = async (path: string, payload?: object) => {
  return fetch(`${SERVER_BASE_URL}${path}`, {
    body: JSON.stringify(payload),
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
    .then(chainErrorFilter)
    .then(chainJsonParser)
}
