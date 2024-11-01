import {Form, useActionData, Navigate} from 'react-router-dom';
import {z} from 'zod';
import supabase from '../supabase';
import styles from './Login.module.css';

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
    
    if (data) {
        return <Navigate to='/' replace />
    }

    return (
        <div className={styles.formContainer}>
            <Form className={styles.form} action="/login" method="POST">
                <label className={styles.label}>
                    Your Email Address
                    <input className={styles.input} name="username" type="email" placeholder="bingusbongusbungus@buttmail.gov" autoComplete="email" required/>
                </label>
                <label className={styles.label}>
                    Password 
                    <input className={styles.input} name="password" type="password" placeholder="PasswordPassword123" autoComplete="password" required/>
                </label>
                <button className={styles.button} type="submit">Log in</button>
            </Form>
        </div>
    );
};

export default Login;