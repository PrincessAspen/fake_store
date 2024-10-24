import {Form} from 'react-router-dom';
import {z} from 'zod';

const RegistrationSchema = z.object({
    username: z.string().email('invalid-email').transform(email => email.toLowerCase()),
    password: z.string().min(8, 'password-too-short'),
});

export const action = async ({request}) => {
    const formData = await request.formData();
    const result = await RegistrationSchema.safeParseAsync({    
        username: formData.get('username'),
        password: formData.get('password')
    });

    // if(!result.success) {
    //     console.error(result.error);
    //     return null;
    // }

    // const { email, password } = result.data;
    // console.log(email, password)
    // console.log("TO BE CONTINUED")
    return ('');
}

const Registration = () => {
    return (
    <Form action="/registration" method="POST">
        <label>
            Your Email Address
            <input name="username" type="email" placeholder="somekindofemail@butt.com" autoComplete="email" required/>
        </label>
        <label>
            Password 
            <input name="password" type="password" placeholder="thepassword" autoComplete="password" required/>
        </label>
        <button type="submit">Button</button>
    </Form>
    );
};

export default Registration;