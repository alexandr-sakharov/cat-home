import { useQuery } from '@tanstack/react-query'
import catRepository from "@/repository/CatRepository";


enum QueryKey {
    pet = 'pet',
}

const ViewingPetQueries = (id: string): any => {
    // Запросы
    const petQuery = useQuery({
        queryKey: [QueryKey.pet],
        queryFn: async (): Promise<any> => await catRepository.getPet(id),
    })

    return { petQuery }
}

export default ViewingPetQueries
