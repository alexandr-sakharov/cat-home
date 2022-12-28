import axios from 'axios'
import config from '../data/config.json'

enum ResponseCode {
  OK = 'OK',
  ERR = 'ERR',
  UNAUTH = 'UNAUTH',
  FORBIDDEN = 'FORBIDDEN',
}

enum ResponseCodeStatus {
  UNAUTH = 401,
  FORBIDDEN = 403
}

interface JsonResponse<Type> {
  code: ResponseCode
  data: Type
  message: string
}

const extractDataFromResponse = <ResponseType>(data: JsonResponse<ResponseType>): ResponseType | undefined => {
  if (data.code === ResponseCode.ERR) {
    throw new Error(data.message)
  } else if (data.code === ResponseCode.FORBIDDEN) {
    console.log('FORBIDDEN')
  } else if (data.code === ResponseCode.UNAUTH) {
    console.log('UNAUTH')
  } else return data.data
}

/**
 * @throws {Error}
 */
const checkResponseError = (error: any): void => {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === ResponseCodeStatus.UNAUTH) {
      console.log('UNAUTH')
    } else if (error.response?.status === ResponseCodeStatus.FORBIDDEN) {
      console.log('FORBIDDEN')
    }
  }
}

const constructUrl = (relativeUrl: string): string => String(config.serverBaseUrl) + '/' + relativeUrl

/**
 * @throws {Error}
 */
async function get<ResponseType>(relativeUrl: string): Promise<ResponseType | undefined> {
  try {
    const { data } = await axios.get<JsonResponse<ResponseType>>(
      constructUrl(relativeUrl),
      { withCredentials: true }
    )
    return extractDataFromResponse(data)
  } catch (error) {
    checkResponseError(error)
    throw error
  }
}

async function post<RequestBodyType, ResponseType>(relativeUrl: string, body: RequestBodyType): Promise<ResponseType | undefined> {
  try {
    const { data } = await axios.post<JsonResponse<ResponseType>>(
      constructUrl(relativeUrl),
      body,
      { withCredentials: true }
    )
    return extractDataFromResponse(data)
  } catch (error) {
    checkResponseError(error)
    throw error
  }
}
async function put<RequestBodyType, ResponseType>(relativeUrl: string, body: RequestBodyType): Promise<ResponseType | undefined> {
  try {
    const { data } = await axios.put<JsonResponse<ResponseType>>(
      constructUrl(relativeUrl),
      body,
      { withCredentials: true }
    )
    return extractDataFromResponse(data)
  } catch (error) {
    checkResponseError(error)
    throw error
  }
}

async function del<ResponseType>(relativeUrl: string): Promise<ResponseType | undefined> {
  try {
    const { data } = await axios.delete<JsonResponse<ResponseType>>(
      constructUrl(relativeUrl),
      { withCredentials: true }
    )
    return extractDataFromResponse(data)
  } catch (error) {
    checkResponseError(error)
  }
}

export default { get, post, del, put }
