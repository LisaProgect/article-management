interface IUseAuthStatus {
	isAuth: boolean
}

export const useAuth = (): IUseAuthStatus => {
	return {
		isAuth: true,
	}
}