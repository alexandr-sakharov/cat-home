import BaseRepository from "./BaseRepository";


enum Routes {
  list = '/',
  id = '',
}

const baseUrl = 'role'

class RoleRepository extends BaseRepository {
  public getRoleList = async (): Promise<any> => {
    return await this.get<any>(Routes.list)
  }
}

const roleRepository = new RoleRepository(baseUrl)

export default roleRepository
