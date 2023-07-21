export const AppRoute = {
  Root:'/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
  Any: '*'
} as const ;

export type AppRouteType = typeof AppRoute[keyof typeof AppRoute]
