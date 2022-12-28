import ViewingCatsPage from "../pages/viewingPets/ViewingCatsPage";
import DonationsPage from "@/components/pages/donation/DonationsPage";
import viewingPet from "@/components/pages/viewingPet/ViewingPet";
import ViewingPet from "@/components/pages/viewingPet/ViewingPet";

const routes = [
  {
    path: '/',
    component: ViewingCatsPage
  },
  {
    path: '/cat/:id',
    component: ViewingPet
  },
  {
    path: '/donation',
    component: DonationsPage
  },
]

export { routes }
