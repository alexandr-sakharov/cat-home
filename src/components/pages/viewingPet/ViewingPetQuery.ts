import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import catRepository from "@/repository/CatRepository";
import bookingRepository from "@/repository/BookingRepository";
import donateRepository from "@/repository/DonateRepository";


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
                void queryClient.invalidateQueries([QueryKey.bookingPet])
            }
        }),
        addDonate: useMutation({
            mutationFn: async (donateData): Promise<any> => await donateRepository.addDonate(donateData),
            onSuccess: () => {
                void queryClient.invalidateQueries([QueryKey.pet])
                void queryClient.invalidateQueries([QueryKey.bookingPet])
            }
        }),
    }

    return { petQuery, mutations, bookingPetQuery }
}

export default ViewingPetQueries
