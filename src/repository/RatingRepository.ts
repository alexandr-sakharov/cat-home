import BaseRepository from "./BaseRepository";


enum Routes {
  list = '/',
  id = '/{id}',
}

const baseUrl = 'rating'

class RatingRepository extends BaseRepository {
  public getRatingList = async (): Promise<any> => {
    return await this.get<any>(Routes.list)
  }
  public getRatingPet = async (id: string): Promise<any> => {
    return await this.post<any, any>(Routes.id.replace('{id}', id), {})
  }
}

const ratingRepository = new RatingRepository(baseUrl)

export default RatingRepository
