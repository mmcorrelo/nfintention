import styles from './MainFooter.module.scss'

const MainFooter = () => {
    const year: number = new Date().getFullYear();

    return (
        <footer className={styles.container}>
            <div className={styles.content}>
                <span>{year} Miguel Correlo</span>
            </div>
        </footer>
    );
};

export default MainFooter;