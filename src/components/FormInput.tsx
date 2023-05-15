const FormInput = (props: any)=>{
    return (
        <div className="form-input">
            <label htmlFor={props.name}>{props.name}</label>
            {
                props.type === "textarea" ? 
                <textarea id={props.type}></textarea> :
                <input type={props.type} id={props.name}/>
            }
            
        </div>
    );
}

export default FormInput;