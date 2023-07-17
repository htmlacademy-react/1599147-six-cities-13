export const AuthStatus = {
  Auth:'AUTH',
  NoAuth: 'NOAUTH'
} as const ;
export type AuthStatusType = typeof AuthStatus[keyof typeof AuthStatus]
