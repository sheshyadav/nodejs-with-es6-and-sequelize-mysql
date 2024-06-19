const Message = {
    "404":"Page Not Found!",
    "PasswordReset":"Hi :name your current age is :age !",
    "PasswordSent":"We have emailed your password reset link!",
    "PasswordToken":"This password reset token is invalid.",
    "PasswordUser":"We can't find a user with that email address."
};

export default function message(index=null, input={}){
    if(Message[index]){
        let message =  Message[index];
        Object.entries(input).forEach(entry =>{
            const [key, value] = entry;
            message = message.replace(`:${key}`, value);
        });
        return message;
    }else{ return null; }
}