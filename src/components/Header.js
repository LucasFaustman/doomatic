import logo from '../images/vector/default-monochrome-black.svg'

export default function Header() {
    return (
        <header>
            <img className='logo-header m-3 mb-5' src={logo} alt='doomatic logo' />
        </header>
    )
}