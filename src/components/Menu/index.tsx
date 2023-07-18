import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export default function Menu() {
    return (
        <header className={styles.header}>
            <Logo />
            <nav>
                <ul className={styles.header__nav}>
                    <li>
                        <a href="/">Como fazer</a>
                        /
                    </li>
                    <li>
                        <a href="/">Ofertas</a>
                        /
                    </li>
                    <li>
                        <a href="/">Depoimentos</a>
                        /
                    </li>
                    <li>
                        <a href="/">Vídeos</a>
                        /
                    </li>
                    <li>
                        <a href="/">Meu carrinho</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
