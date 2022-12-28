import BaseRepository from "./BaseRepository";


enum Routes {
  login = '/login',
  register = '/register',
}

const baseUrl = '/'

class AuthRepository extends BaseRepository {
  public login = async (loginRequest: any): Promise<any | undefined> => {
    return await this.post<any, any>(Routes.login, loginRequest)
  }
  public register = async (registerRequest: any): Promise<any | undefined> => {
    return await this.post<any, any>(Routes.register, registerRequest)
  }
}

const authRepository = new AuthRepository(baseUrl)

export default authRepository
