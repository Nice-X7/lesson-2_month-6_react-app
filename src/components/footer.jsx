import Logo from "../assets/orange-logo.svg"
import Instagram from "../assets/instagram.svg"
import Facebook from "../assets/facebook.svg"
import Pinterest from "../assets/pinterest.svg"
import YouTube from "../assets/youtube.svg"
import Twitter from "../assets/twitter.svg"

export const Footer = () => {
    const Apps = [Facebook, Twitter, Instagram, YouTube, Pinterest]

    return (
        <>
        <div className="footer_menu">
            <ul>
                <li><b>Home</b></li>
                <li><b>About</b></li>
                <li><img src={Logo} /></li>
                <li><b>Service</b></li>
                <li><b>Blog</b></li>
            </ul>
        </div>

        <div className="logo_row">
            <ul>
                {Apps.map((logo) => (
                    <li><img src={logo} /></li>
                ))}
            </ul>

            <div className="endText">© 2010 — 2020 Privacy — Terms</div>
        </div>
        </>
    )
}