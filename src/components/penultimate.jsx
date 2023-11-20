import { Text } from "./text_for_penultimate";
import {Block_txt} from "./3txt_block"
import End from "../assets/EndPhoto.png";

export const Penultimate = () => {
  const Title_text = {
    title: "Database to find the gifts for your girlfriend",
    title2: "How Artificial Intelligence read your mind to find the best gift",
    lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
    read: "Read More"
  }

  return (
    <>
      <div className="penultimate">
        <Text
          tagB={"h1"}
          bigText="Our Best Blogs Ever"
          smallTag={"p"}
          smallText="“Try our blog to find the best tips and tricks to select your gift”"
        />
      </div>

      <div className="content_penultimate">
        <img src={End} />


        <div className="end_">
          <span className="Doe">
            Mr. John Doe
          </span>

            <Text
              tagB={"h1"}
              smallTag={"p"}
              bigText="The best way to wish your wife"
              smallText="Read More"
            />
        </div>

      </div>

      <div className="two_blocks">
       <div className="block">
          <Block_txt 
          titleTag={"h1"}
          lortag={"p"}
          readTag={"span"}
          TitleText={Title_text.title}
          lorem={Title_text.lorem}
          read={Title_text.read}
          />
        </div>

        <div className="block">
        <Block_txt 
          titleTag={"h1"}
          lortag={"p"}
          readTag={"span"}
          TitleText={Title_text.title2}
          lorem={Title_text.lorem}
          read={Title_text.read}
          />
        </div>
      </div>


    </>
  );
};
