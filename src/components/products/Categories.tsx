import type { Category } from "@models/category";

interface Props {
  data: Category[];
  onCategorySelect: (id: number) => void;
}

const Categories = ({ data, onCategorySelect }: Props) => {
  return (
    <div className="position-sticky mt-3" style={{ top: "1rem" }}>
      <div className="list-group">
        <button
          key={-1}
          type="button"
          className={
            "list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          }
          onClick={() => onCategorySelect(-1)}
        >
          <span>All Products</span>
        </button>
        {data.map(({ id: categoryId, name }) => (
          <button
            key={categoryId}
            type="button"
            className={
              "list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            }
            onClick={() => onCategorySelect(categoryId)}
          >
            <span>{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
