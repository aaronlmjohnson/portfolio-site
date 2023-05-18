import FormInput from "./FormInput";
import uniqid from 'uniqid';


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
                        key={uniqid()}
                    />)
                }   
            </div>
        </form>
    </div>
    
    );
}

export default Contact;