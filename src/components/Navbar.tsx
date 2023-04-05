import uniqid from 'uniqid';

interface NavLinkProps {
    link: string;
}

interface NavbarProps {
    links: string[];
}

const NavLink = ({link}: NavLinkProps)=>{
    return(
        <li className="nav-link">
            <a href="#">
                {link}
            </a>
        </li>
    )
}

const NavLinks = ({links}: NavbarProps)=>{
    
    return (
        <ul id="nav-links">
            {links.map((link)=>{
                const id = uniqid();
                return (<NavLink  link = {link} key={id}/>)
}           )}
        </ul>
    );
}

const Navbar = ({links}: NavbarProps) => {
    return (
      <div id="nav-bar">
        <NavLinks links={links} />
      </div>
    );
};

export default Navbar;