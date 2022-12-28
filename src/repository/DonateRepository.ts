import BaseRepository from "./BaseRepository";


enum Routes {
  total = '/amount',
  donate = '/',
}

const baseUrl = 'donate'

class DonateRepository extends BaseRepository {
  public getTotalAmount = async (): Promise<any> => {
    return await this.get<any>(Routes.total)
  }
  public getDonate = async (): Promise<any> => {
    return await this.get<any>(Routes.donate)
  }
  public addDonate = async (donateData: any): Promise<any> => {
    return await this.post<any, any>(Routes.donate, donateData)
  }
}

const donateRepository = new DonateRepository(baseUrl)

export default donateRepository
