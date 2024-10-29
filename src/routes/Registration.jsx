import {Form} from 'react-router-dom';
import {z} from 'zod';
import supabase from '../supabase';
import styles from './Registration.module.css';

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
        <div className={styles.formContainer}>
          <Form className={styles.form} action="/registration" method="POST">
            <label className={styles.label}>
              Enter your email address
              <input name="username" type="email" placeholder="bingusbongusbungus@buttmail.gov" autoComplete="email" required className={styles.input} />
            </label>
            <label className={styles.label}>
              Choose a secure password
              <input name="password" type="password" placeholder="SuperSecurePassword321" autoComplete="password" required className={styles.input} />
            </label>
            <button type="submit" className={styles.button}>Register</button>
          </Form>
        </div>
      );
};

export default Registration;