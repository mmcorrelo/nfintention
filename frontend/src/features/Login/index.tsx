import Button from '../../shared/components/Button';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slogan}>
        <div className={styles.content}>
          <h1>Collaborate, manage projects, and reach new productivity peaks.</h1>
          <div className={styles.subtitle}>
            <span>The world's first NFT projects management tool.</span>
          </div>
        </div>
      </div>
      <div className={styles.background}></div>
    </div >
  );
};


export default Login;