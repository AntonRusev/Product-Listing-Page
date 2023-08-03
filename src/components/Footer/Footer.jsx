import style from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.linksHolder}>
                <a href="https://www.google.com" onClick={(e) => e.preventDefault()}>T&C</a>
                <a href="https://www.google.com" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
                <a href="https://www.google.com" onClick={(e) => e.preventDefault()}>Contact Us</a>
            </div>
        </footer>
    );
};