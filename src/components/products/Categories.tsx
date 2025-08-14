import type { Category } from "@models/category";

interface Props {
  data: Category[];
}

const Categories = ({ data }: Props) => {
  return (
    <aside className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12">
      <div className="position-sticky mt-3" style={{ top: "1rem" }}>
        <div className="list-group">
          {data.map(({ id: categoryId, name }) => (
            <button
              key={categoryId}
              type="button"
              className={
                "list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              }
            >
              <span>{name}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Categories;
