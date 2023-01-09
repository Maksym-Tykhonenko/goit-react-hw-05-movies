import { Outlet } from 'react-router-dom';

import { Conteiner, Header, Link } from './Layout.styled'

export const Layout =()=>{
    return (
        <Conteiner>
            <Header>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/movies'>Movies</Link>
                </nav>
            </Header>
            <Outlet />
        </Conteiner>
    );
}