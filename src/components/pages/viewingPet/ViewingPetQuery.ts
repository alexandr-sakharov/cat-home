import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import catRepository from "@/repository/CatRepository";
import bookingRepository from "@/repository/BookingRepository";


enum QueryKey {
    pet = 'pet',
    bookingPet = 'bookingPet',
}

const ViewingPetQueries = (id: string): any => {
    const queryClient = useQueryClient()
    // Запросы
    const bookingPetQuery = useQuery({
        queryKey: [QueryKey.bookingPet],
        queryFn: async (): Promise<any> => await bookingRepository.getBookingCat(id),
    })
    const petQuery = useQuery({
        queryKey: [QueryKey.pet],
        queryFn: async (): Promise<any> => await catRepository.getPet(id),
    })

    const mutations = {
        setBookingPet: useMutation({
            mutationFn: async (id: any): Promise<any> => await bookingRepository.setBooking(id),
            onSuccess: () => {
                void queryClient.invalidateQueries([QueryKey.pet])
            }
        }),
    }

    return { petQuery, mutations, bookingPetQuery }
}

export default ViewingPetQueries
