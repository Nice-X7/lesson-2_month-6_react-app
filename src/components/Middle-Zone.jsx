import { Button } from "./Button";
import { Text } from "./text_for_menu-box";

export const MiddleContent = () => {
  const classForButtons = {
    black: "black",
    orange: "orange",
  };

  return (
    <div className="middle">
      <div className="middletext">
        <Text
          main={"h3"}
          mainText="Ready to get started?"
          seeMore="Sign up or contact us"
          tagsee={"p"}
        />
      </div>

      <div className="two_buttons">
        <Button text="FIND GIFT NOW" classname={classForButtons.black} />

        <Button text="HOW IT WORKS" classname={classForButtons.orange} />
      </div>
    </div>
  );
};
