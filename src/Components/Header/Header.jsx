import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='lg:flex justify-between items-center py-5 border-b-2 w-11/12 mx-auto'>
            <h1 className='text-5xl text-gray-700 font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;