import logo from '../images/vector/default-monochrome-black.svg'

export default function Header({headerLink}) {
    const imgStyle = {
        width: "30%"
      };
      const buttonStyle = {
          height: "10%"
      }
    return (
        <header className='d-flex align-items-center justify-content-center'>
            <img className='img-responsive m-4' style={imgStyle} src={logo} alt='doomatic logo' />
            <a href={`${headerLink}`} className="btn btn-info" style={buttonStyle} role="button">{headerLink === '/' ? 'Go Home' : 'View Stats'}</a>
        </header>
    )
}