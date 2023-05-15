import FormInput from "./FormInput";

const Contact = ()=>{
    const contents: string[] = ['first name', 'last name', 'email', 'comments'];
    
    return (
    <form>
        <div>
            {
            contents.map((item, i)=> 
                <FormInput 
                    type={i === contents.length - 1 ? 'textarea' : 'text'} 
                    name={item} 
                />)
            }   
        </div>
    </form>
    );
}

export default Contact;