import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import catRepository from "@/repository/CatRepository";
import likeRepository from "@/repository/LikeRepository";
import roleRepository from "@/repository/RoleRepository";

enum QueryKey {
    catList = 'catList',
    role = 'role',
}

const ViewingCatsPageQueries = (): any => {
    const queryClient = useQueryClient()
    // Запросы
    const catListQuery = useQuery({
        queryKey: [QueryKey.catList],
        queryFn: async (): Promise<any> => await catRepository.getPetsList(),
    })
    const roleListQuery = useQuery({
        queryKey: [QueryKey.role],
        queryFn: async (): Promise<any> => await roleRepository.getRoleList(),
    })

    // мутации
    const mutations = {

        addPet: useMutation({
            mutationFn: async (petData: any): Promise<any> => await catRepository.addPet(petData),
            onSuccess: () => {
                void queryClient.invalidateQueries([QueryKey.catList])
            }
        }),

        deletePet: useMutation({
            mutationFn: async (id: string): Promise<any> => await catRepository.deletePet(id),
            onSuccess: () => {
                void queryClient.invalidateQueries([QueryKey.catList])
            }
        }),

        updatePet: useMutation({
            mutationFn: async (petData: string): Promise<any> => await catRepository.updatePet(petData),
            onSuccess: () => {
                void queryClient.invalidateQueries([QueryKey.catList])
            }
        }),

        likePet: useMutation({
            mutationFn: async (id: string): Promise<any> => await likeRepository.addLike(id),
            onSuccess: () => {
                void queryClient.invalidateQueries([QueryKey.catList])
            }
        }),

    }

    return { mutations, catListQuery, roleListQuery }
}

export default ViewingCatsPageQueries
