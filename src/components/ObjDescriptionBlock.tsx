import { FC } from "react";

interface ObjDescriptionBlockProps {
  children: string,
  caption: string,
  img: string,
  side: string
}

const ObjDescriptionBlock: FC<ObjDescriptionBlockProps> = ({ children, caption, img, side }) => {
  return ( 
    <div className={"obj-description" + ' obj-description_' + side}>
      <img src={img} alt="obj image"/>
      <div className="obj-description__text">
        <h3>{caption}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}
 
export default ObjDescriptionBlock;