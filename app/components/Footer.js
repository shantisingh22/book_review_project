import '../globals.css'; 
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact</a>
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms of Service</a>
                </div>
                <div className="footer-copyright">
                    <p>&copy; 2024 BookReview. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
