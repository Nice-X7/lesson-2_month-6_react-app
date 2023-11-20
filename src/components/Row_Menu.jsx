import Menu1 from "../assets/row-box1.png";
import Menu2 from "../assets/row-box2.png";
import Menu3 from "../assets/row-box3.png";
import Menu4 from "../assets/row-box4.png";
import { Text } from "./text_for_menu-box";

export const Menu = () => {
  const text = [
    "Birthday",
    "Anniversary",
    "Valentine's Day",
    "Christmas",
    "See More ›",
  ];
  const classMenu = { Menu: "image" };

  return (
    <div className="row-menu">
      <div className="image10">
        <img src={Menu1} />

        <Text main={"h2"} mainText={text[0]} tagsee={"p"} seeMore={text[4]} />
      </div>

      <div className={classMenu.Menu}>
        <img src={Menu2} />

        <Text main={"h2"} mainText={text[1]} tagsee={"p"} seeMore={text[4]} />
      </div>

      <div className={classMenu.Menu}>
        <img src={Menu3} />

        <Text main={"h2"} mainText={text[2]} tagsee={"p"} seeMore={text[4]} />
      </div>

      <div className={classMenu.Menu}>
        <img src={Menu4} />

        <Text main={"h2"} mainText={text[3]} tagsee={"p"} seeMore={text[4]} />
      </div>
    </div>
  );
};
