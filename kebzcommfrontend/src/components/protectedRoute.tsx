import { Navigate, Outlet } from 'react-router-dom'


const PrivateRoutes = () => {
    return (
        localStorage.token && sessionStorage.userId? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoutes