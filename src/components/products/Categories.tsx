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
    <aside className="col-3">
      <div className="mt-3 mb-3 p-0 position-sticky" style={{ top: "1rem" }}>
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
