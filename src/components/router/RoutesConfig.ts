import ViewingCatsPage from "../pages/viewingPets/ViewingCatsPage";
import ViewingPet from "@/components/pages/viewingPet/ViewingPet";
import FavoritesPage from "@/components/pages/favorites/FavoritesPage";
import DonationsPage from "@/components/pages/donation/DonationsPage";

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
  {
    path: '/favorites',
    component: FavoritesPage
  },
]

export { routes }
