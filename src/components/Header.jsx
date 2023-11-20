import { Logo } from "./Logo";
import { Button } from "./Button";

export const Header = () => {
    const text = ["Home", "About Us", "Services", "Blogs"]
    const classname1 = {
        buttonClass: "header_button",
    }
    return(
        <div className="Header">
            <Logo />
            <ul className="Menu">
                {
                    text.map((txt) => (
                        <li className="Menu_Words">
                            {txt}
                        </li>
                    ))
                }
            </ul>
                <Button text={"GIFT FINDER"} classname={classname1.buttonClass} />
        </div>
    )
}

