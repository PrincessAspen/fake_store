import {Form, useActionData} from 'react-router-dom';
import {useEffect} from 'react'
import {z} from 'zod';
import supabase from '../supabase';
import {useAuth} from '../AuthContext'

const LoginSchema = z.object({
    email: z.string().email('invalid-email').transform(email => email.toLowerCase()),
    password: z.string().min(8, 'password-too-short'),
});

export const action = async ({request}) => {
    const formData = await request.formData();
    const result = await LoginSchema.safeParseAsync({
        email: formData.get('username'),
        password: formData.get('password'),
    });
    
    if (!result.success) {
        console.error(result.error);
        return null
    }

    const { email, password } = result.data;

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if(error) {
        console.error( error );
    }
    return data;
}

const Login = () => {
    const data = useActionData();
    const { setUser, setSession } = useAuth();
    console.log(data);

    useEffect(() => {
        if (data?.user && data?.session) {
            setUser(data.user);
            setSession(data.session);
        }
    }, [data, setUser, setSession])

    return (
    <Form action="/login" method="POST">
        <label>
            Your Email Address
            <input name="username" type="email" placeholder="somekindofemail@butt.com" autoComplete="email" required/>
        </label>
        <label>
            Password 
            <input name="password" type="password" placeholder="thepassword" autoComplete="password" required/>
        </label>
        <button type="submit">Log in</button>
    </Form>
    );
};

export default Login;