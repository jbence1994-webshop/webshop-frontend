import { useEffect, useState } from "react";

import { getCategories } from "@services/categoriesService";

import type { Category } from "@models/category";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    (async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <aside className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12">
      <div className="position-sticky mt-3" style={{ top: "1rem" }}>
        <div className="list-group">
          {categories.map(({ id, name }, index) => (
            <button
              key={id}
              type="button"
              className={
                "list-group-item list-group-item-action d-flex justify-content-between align-items-center" +
                (selectedIndex === index ? " active" : "")
              }
              onClick={() => setSelectedIndex(index)}
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
