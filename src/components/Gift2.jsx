import React from "react";
import { Button } from "./Button";

export const Gift_2 = ({TitleTag, TitleText, partext, parTag, img}) => {
    const Title = TitleTag || "h1";
    const Paragraph = parTag || "p";
    const Image = img || "img"
    const Buttonclass = {
        button3: "button3"
    }
    return(
        <div className="Gift_2">
            <div className="image2">
                <img src={Image} />
            </div>

            <div className="text_for_image2">
                <Title>
                    {TitleText}
                </Title>

                <Paragraph>
                    {partext}
                </Paragraph>

                <Button classname={Buttonclass.button3} text={"LEARN MORE"}/>
            </div>
        </div>
    )
}