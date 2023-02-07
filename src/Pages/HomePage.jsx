import { Link,Outlet } from "react-router-dom"

function HomePage(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/musica">Player</Link></li>
                    <li><Link to="/playlist">Playlist</Link></li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}
export default HomePage