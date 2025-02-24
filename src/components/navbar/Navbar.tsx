import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-cyan-600 text-white'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">Farmacia</Link>

                    <div className='flex gap-4'>
                        Categoria
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar