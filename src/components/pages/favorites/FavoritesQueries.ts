import { useQuery } from '@tanstack/react-query'
import ratingRepository from "@/repository/RatingRepository";
import likeRepository from "@/repository/LikeRepository";

enum QueryKey {
    favorite = 'favorite',
}

const FavoritesQueries = (): any => {
    // Запросы
    const favoritesQuery = useQuery({
        queryKey: [QueryKey.favorite],
        queryFn: async (): Promise<any> => await likeRepository.getLikeList(),
    })


    return { favoritesQuery }
}

export default FavoritesQueries
