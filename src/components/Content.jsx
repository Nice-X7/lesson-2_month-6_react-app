import React from "react";
import {Gift} from "./Gift";
import Image1 from "../assets/photo1.png"
import Image2 from "../assets/photo2.png"
import { Gift_2 } from "./Gift2";

export const Content = () => {
    return (
        <div className="Content">
            <Gift 
                titleTag={"h1"}
                titleText="Find a gift for your wife or girlfriend"
                paragraphTag={"p"}
                text="Struggling to find a gift for your wife or girlfriend?
                No problem!"
                img={Image1}
             />

            <Gift_2
             TitleTag={"h1"}
             TitleText="How we work"
             partext="We've actually already asked hundreds 
             of women what they 
             want, and made a database with the results.
              All you have to do is take our short survey that only takes seconds, and 
             our proprietary algorithm will match you with 
             a few perfect gift options."
             img={Image2}
            />
        </div>
    )
}
