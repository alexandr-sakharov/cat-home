import { useQuery, useQueryClient } from '@tanstack/react-query'
import catRepository from "@/repository/CatRepository";

const scope = 'taskAdd'

enum QueryKey {
    pet = 'pet',
}

const ViewingPetQueries = (id: string): any => {
    const queryClient = useQueryClient()
    // Запросы
    const petQuery = useQuery({
        queryKey: [scope, QueryKey.pet],
        queryFn: async (): Promise<any> => await catRepository.getPet(id),
    })

    return { petQuery }
}

export default ViewingPetQueries
