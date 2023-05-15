import StringModule from "../StringModule";

const FormInput = (props: any)=>{
    const titleCaseName = StringModule.titleCase(props.name);
    return (
        <div className="form-input">
            <label htmlFor={props.name}>{titleCaseName}</label>
            {
                props.type === "textarea" ? 
                <textarea id={props.type}></textarea> :
                <input type={props.type} id={props.name}/>
            }
            
        </div>
    );
}

export default FormInput;