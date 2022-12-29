import { useQuery } from '@tanstack/react-query'
import ratingRepository from "@/repository/RatingRepository";

enum QueryKey {
    donat = 'donat',
}

const DonationQueries = (): any => {
    // Запросы
    const donationsQuery = useQuery({
        queryKey: [QueryKey.donat],
        queryFn: async (): Promise<any> => await ratingRepository.getRatingList(),
    })


    return { donationsQuery }
}

export default DonationQueries
