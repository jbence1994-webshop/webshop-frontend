interface Props {
  textStyle?: string;
  noMargin?: boolean;
  content: string;
}

const Badge = ({
  textStyle = "text-bg-primary",
  noMargin = false,
  content,
}: Props) => {
  return (
    <p
      className={`badge rounded-pill px-3 py-2 fs-6 ${textStyle} ${noMargin ? "mb-0" : ""}`}
    >
      {content}
    </p>
  );
};

export default Badge;
