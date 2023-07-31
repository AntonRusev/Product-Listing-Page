import style from './Footer.module.scss';
export const Footer = () => {
    return (
        <footer className={style.footer}>
            <p>T&C</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
        </footer>
    );
};