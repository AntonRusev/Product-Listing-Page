import style from './Footer.module.scss';
export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.linksHolder}>
                <a href="javascript:void(0)">T&C</a>
                <a href="javascript:void(0)">Privacy Policy</a>
                <a href="javascript:void(0)">Contact Us</a>
            </div>
        </footer>
    );
};