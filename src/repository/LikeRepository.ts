import BaseRepository from "./BaseRepository";


enum Routes {
  list = '/',
  id = '/{id}',
}

const baseUrl = 'like'

class LikeRepository extends BaseRepository {
  public getLikeList = async (): Promise<any> => {
    return await this.get<any>(Routes.list)
  }
  public addLike = async (id: string): Promise<any> => {
    return await this.post<any, any>(Routes.id.replace('{id}', id), {})
  }
  public deleteLike = async (id: string): Promise<any> => {
    return await this.delete<any>(Routes.id.replace('{id}', id))
  }
}

const likeRepository = new LikeRepository(baseUrl)

export default likeRepository
