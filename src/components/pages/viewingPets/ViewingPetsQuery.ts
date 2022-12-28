import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import catRepository from "@/repository/CatRepository";

const scope = 'taskAdd'

enum QueryKey {
    catList = 'catList',
}

const ViewingCatsPageQueries = (): any => {
    const queryClient = useQueryClient()
    // Запросы
    const catListQuery = useQuery({
        queryKey: [scope, QueryKey.catList],
        queryFn: async (): Promise<any> => await catRepository.getPetsList(),
    })

    // мутации
    const mutations = {

        addPet: useMutation({
            mutationFn: async (petData: any): Promise<any> => await catRepository.addPet(petData),
            onSuccess: () => {
                void queryClient.invalidateQueries([scope, QueryKey.catList])
            }
        }),

        deletePet: useMutation({
            mutationFn: async (id: string): Promise<any> => await catRepository.deletePet(id),
            onSuccess: () => {
                void queryClient.invalidateQueries([scope, QueryKey.catList])
            }
        }),

        updatePet: useMutation({
            mutationFn: async (petData: string): Promise<any> => await catRepository.updatePet(petData),
            onSuccess: () => {
                void queryClient.invalidateQueries([scope, QueryKey.catList])
            }
        }),

    }

    return { mutations, catListQuery }
}

export default ViewingCatsPageQueries
