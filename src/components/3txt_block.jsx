export const Block_txt = ({TitleText, titleTag, lorem, lortag, read, readTag}) => {
    const Title = titleTag || "h1";
    const Lorem = lortag || "p";
    const Read = readTag || "span"

    return(
        <>
        <Title>{TitleText}</Title>
        <Lorem>{lorem}</Lorem>
        <Read>{read}</Read>
        </>
    )
}