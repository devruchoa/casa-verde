import styles from './InputEmail.module.scss'; 
import { ReactComponent as Mail } from 'assets/mail.svg';

export default function InputEmail() {
  return (
    <div className={styles.container}>
      <Mail className={styles.container__icone} />
      <input type="email" name="" id="" placeholder='Insira seu e-mail' required />
      <button type="submit">Assinar newsletter</button>
    </div>
  )
}
