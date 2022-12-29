import BaseRepository from "./BaseRepository";


enum Routes {
  list = '/',
  id = '/{id}',
  cat = '/cat/{id}',
}

const baseUrl = 'booking'

class BookingRepository extends BaseRepository {
  public getBooking= async (): Promise<any> => {
    return await this.get<any>(Routes.list)
  }
  public setBooking= async (id: string): Promise<any> => {
    return await this.post<any, any>(Routes.list, { catId: id })
  }
  public getBookingUser = async (id: string): Promise<any> => {
    return await this.get<any>(Routes.id.replace('{id}', id))
  }
  public getBookingCat = async (id: string): Promise<any> => {
    return await this.get<any>(Routes.cat.replace('{id}', id))
  }
  public deleteBooking = async (id: string): Promise<any> => {
    return await this.delete<any>(Routes.id.replace('{id}', id))
  }
  public updateBooking = async (id: string): Promise<any> => {
    return await this.put<any, any>(Routes.id.replace('{id}', id), {})
  }
}

const bookingRepository = new BookingRepository(baseUrl)

export default bookingRepository
