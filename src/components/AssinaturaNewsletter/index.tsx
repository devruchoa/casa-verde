import styles from './AssinaturaNewsletter.module.scss';
import InputEmail from './InputEmail';

export default function AssinaturaNewsletter() {
  return (
    <div className={styles.container}>
      <h4>Sua casa com as</h4>
      <h2>melhores plantas</h2>
      <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
      <InputEmail />
    </div>
  )
}
