import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import catRepository from "@/repository/CatRepository";
import likeRepository from "@/repository/LikeRepository";
import donateRepository from "@/repository/DonateRepository";

enum QueryKey {
    donat = 'donat',
}

const DonationQueries = (): any => {
    // Запросы
    const donationsQuery = useQuery({
        queryKey: [QueryKey.donat],
        queryFn: async (): Promise<any> => await donateRepository.getDonate(),
    })


    return { donationsQuery }
}

export default DonationQueries
