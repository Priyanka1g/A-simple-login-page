import classes from "./Button.module.css"
const Button = (props)=>{
    return(
        <button 
        type={props.type|| 'button'}
        className={`${props.className} ${classes.button}`}
        disabled={props.disabled}
        >
        {props.children}
        </button>
    )
}
export default Button