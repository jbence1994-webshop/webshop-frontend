import type { FC } from "react";

const Badge: FC<BadgeProps> = ({
  textStyle = "text-bg-primary",
  noMargin = false,
  content,
}) => {
  return (
    <p
      className={`badge rounded-pill px-3 py-2 fs-6 ${textStyle} ${noMargin ? "mb-0" : ""}`}
    >
      {content}
    </p>
  );
};

export default Badge;
