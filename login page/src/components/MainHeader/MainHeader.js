import classes from "./MainHeader.module.css"
import Nav from "./Nav"
const MainHeader = (props)=>{
    return(
        <header className={classes['main-header']}>
        <h1>A login Page</h1>
        <Nav isLoggedIn={props.isAuthenticated} onLogout = {props.onLogout}/>
        </header>
    )
}
export default MainHeader