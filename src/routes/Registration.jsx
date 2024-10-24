import {Form} from 'react-router-dom';
import {z} from 'zod';
import supabase from '../supabase';

const RegistrationSchema = z.object({
    email: z.string().email('invalid-email').transform(email => email.toLowerCase()),
    password: z.string().min(8, 'password-too-short'),
});

export const action = async ({request}) => {
    const formData = await request.formData();
    const result = await RegistrationSchema.safeParseAsync({
        email: formData.get('username'),
        password: formData.get('password'),
    });
    
    if (!result.success) {
        console.error(result.error);
        return null
    }

    const { email, password } = result.data;

    const { data, error } = await supabase.auth.signUp({
        email,
        password
    })

    console.log( data, error )
    return null
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
        <button type="submit">Register</button>
    </Form>
    );
};

export default Registration;