import AssinaturaNewsletter from '../../components/AssinaturaNewsletter';
import Menu from '../../components/Menu';
import styles from './HomePage.module.scss';

export default function index() {
  return (
    <main className={styles.main}>
        <Menu />
        <AssinaturaNewsletter />
    </main>
  )
}
