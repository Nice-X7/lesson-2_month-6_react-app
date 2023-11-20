import React from "react"
import { Button } from "./Button";

export const Gift = ({titleTag, titleText, paragraphTag, text, img}) => {
    const classname2 = {
        Findgift: "Find_Gift_Now"
    }
    const Title = titleTag || "h1";
    const Paragraph = paragraphTag || "p"
    const Image = img || "img"
    return(
        <div className="Gift">
            <div className="text_for_image1">
                <Title>
                    {titleText}
                </Title>
                <Paragraph>
                    {text}
                </Paragraph>
                <Button text={"FIND GIFT NOW"} classname={classname2.Findgift} />
            </div>
            <div className="image1">
                <img src={Image} />
            </div>
        </div>
    )
}
