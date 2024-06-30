export default function validation(values){
    const errors ={};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if(values.name == ""){
        errors.name = 'Name is required'
    }
    if(values.email == ""){
        errors.email = 'Email is required'
    }else if(!emailPattern.test(values.email)){
        errors.email = 'Email is not valid'
    }

    if(values.subject == ""){
        errors.subject = 'subject is required'
    }
    if(values.message == ""){
        errors.message = 'Message is required'
    }


    return errors

}