import {Menu} from "./Row_Menu"

export const Section = ({tagForTitle, textForTitle, tagForText, text}) => {
    const TitleTag = tagForTitle || "h2";
    const TextTag =  tagForText || "p"

    return (
        <section>
            <div className="section">
                <TitleTag>
                    {textForTitle}
                </TitleTag>

                <TextTag>
                    {text}
                </TextTag>

                <Menu />
            </div>
        </section>
    )
}