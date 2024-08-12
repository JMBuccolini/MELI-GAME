import Main from "@/components/Main";
import ProtectedRoute from '@/components/ProtectedRoute'

export default function HomePage(){
    return (
        <ProtectedRoute>
            <Main/>
        </ProtectedRoute>
    )
}