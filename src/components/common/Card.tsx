import { Fragment, type ReactElement } from "react";

interface Props {
  title: string;
  image: string;
  imageAlt: string;
  contents: KeyValuePair<number, string>[];
  elements: ReactElement[];
}

const Card = ({ title, image, imageAlt, contents, elements }: Props) => {
  const photoUploadName: string = "photo-upload";

  return (
    <div className="card mt-3 mb-3">
      <label htmlFor={photoUploadName}>
        <img
          src={image}
          alt={imageAlt}
          className="card-img-top"
          style={{
            width: "200px",
            height: "200px",
            display: "block",
            margin: "0 auto",
            objectFit: "contain",
          }}
        />
      </label>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {contents.map((content) => (
          <p className="card-text" key={content.key}>
            {content.value}
          </p>
        ))}
        {elements &&
          elements.map((element, index) => (
            <Fragment key={index}>{element}</Fragment>
          ))}
      </div>
    </div>
  );
};

export default Card;
