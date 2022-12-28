import requestAdapter from "../adapter/RequestAdapter";


class BaseRepository {
  protected baseUrl = ''

  constructor (baseUrl: string) {
    this.baseUrl = baseUrl
  }

  get = async <ResponseType>(relativeUrl: string): Promise<ResponseType> => {
    const data = await requestAdapter.get<ResponseType>(this.baseUrl + relativeUrl)
    return data as ResponseType
  }

  post = async <RequestBodyType, ResponseType>(relativeUrl: string, body: RequestBodyType): Promise<ResponseType> => {
    const data = await requestAdapter.post<RequestBodyType, ResponseType>(this.baseUrl + relativeUrl, body)
    return data as ResponseType
  }

  put = async <RequestBodyType, ResponseType>(relativeUrl: string, body: RequestBodyType): Promise<ResponseType> => {
    const data = await requestAdapter.put<RequestBodyType, ResponseType>(this.baseUrl + relativeUrl, body)
    return data as ResponseType
  }

  delete = async <ResponseType>(relativeUrl: string): Promise<ResponseType> => {
    try {
      const data = await requestAdapter.del<ResponseType>(this.baseUrl + relativeUrl)
      return data as ResponseType
    } catch (error) {
      throw new Error()
    }
  }
}

export default BaseRepository
