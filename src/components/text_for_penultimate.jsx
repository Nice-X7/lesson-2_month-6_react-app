export const Text = ({ bigText, tagB, smallText, smallTag }) => {
  const Tag = tagB || "h1";
  const TagS = smallTag || "p";

  return (
    <>
      <Tag>{bigText}</Tag>
      <TagS>{smallText}</TagS>
    </>
  );
};
