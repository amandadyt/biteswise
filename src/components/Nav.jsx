import usericon from './images/usericon.png'

const Nav = () => {
    return (
        <nav className="fixed w-full bg-gray-100 text-black px-8 md:px-16 lg:px-24 font-poppins">
            <div className="container py-6 flex justify-center md:justify-between items-center">
                <div className="text-2xl font-bold px-8 relative w-1/3 h-full flex flex-col ">BitesWise</div>
                     <nav className="relative w-1/3 h-full flex justify-between space-x-25">
                     <a href="#beranda" className="hover:font-bold">Beranda</a>
                     <a href="#artikel" className="hover:font-bold">Artikel</a>
                     <a href="#katalog" className="hover:font-bold">Katalog</a>
                     </nav>
                 <div className="relative w-1/3 h-full flex flex-col items-end">
                    <button className='flex items-center justify-center'>
                        <img src={usericon} className='h-7 w-7 mr-2' />
                        <p className='text-sm'>Hi, [Username Pengguna]!</p>
                    </button>
                 </div>
                </div>
        </nav>
    )
}

export default Nav;