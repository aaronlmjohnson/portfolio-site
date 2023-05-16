import FormInput from "./FormInput";

const Contact = ()=>{
    const contents: string[] = ['first name', 'last name', 'email', 'comments'];
    
    return (
    <div id="contact">
        <h1>Contact</h1>
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
    </div>
    
    );
}

export default Contact;