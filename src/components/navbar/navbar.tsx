import { useNavigate } from 'react-router';
import { BackArrow, NavbarContainer, NavbarTitle } from './navbar.styles';
import './navbar.styles'
import backArrow from '../../assets/images/backArrow.svg';
import logo from '../../assets/images/Navbar.svg';


export const Navbar = () => {
    var navigate = useNavigate();

    const previousPage = () => { // Navigate to previous page
        navigate(-1);
    }

    return (
        <NavbarContainer className="Navbar p-sticky d-flex justify-content-center sticky-top">

            <nav className="navbar navbar-expand-lg navbar-light navbar-text-center w-100 justify-content-between">
                <div className="d-flex h-100">
                    <BackArrow src={backArrow} alt="back arrow" className="back-arrow" onClick={previousPage} />
                </div>
                <div className="d-flex h-100">
                    <a className="navbar-brand" href="/">
                        <NavbarTitle src={logo} alt="logo" className="d-inline-block align-text-top navTitle" />

                    </a>
                </div>
                <div></div>

            </nav>

        </NavbarContainer>
    )
}
