import BaseRepository from "./BaseRepository";


enum Routes {
  list = '/',
  pet = '/{id}',
}

const baseUrl = 'cats'

class CatRepository extends BaseRepository {
  public getPetsList = async (): Promise<any> => {
    return await this.get<any>(Routes.list)
  }
  public addPet = async (petData: any): Promise<any> => {
    return await this.post<any, any>(Routes.list, petData)
  }
  public getPet = async (id: string): Promise<any> => {
    return await this.get<any>(Routes.pet.replace('{id}', id))
  }
  public deletePet = async (id: string): Promise<any> => {
    return await this.delete<any>(Routes.pet.replace('{id}', id))
  }
  public updatePet = async (petData: any): Promise<any> => {
    return await this.put<any, any>(Routes.pet.replace('{id}', petData.id), petData)
  }
}

const catRepository = new CatRepository(baseUrl)

export default catRepository
