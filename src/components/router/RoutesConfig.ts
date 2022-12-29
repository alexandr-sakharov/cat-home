import ViewingCatsPage from "../pages/viewingPets/ViewingCatsPage";
import ViewingPet from "@/components/pages/viewingPet/ViewingPet";
import FavoritesPage from "@/components/pages/favorites/FavoritesPage";

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
    component: FavoritesPage
  },
]

export { routes }
