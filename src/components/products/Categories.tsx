import { useEffect, useState } from "react";

import { getCategories } from "@services/categoriesService";

import type { Category } from "@models/category";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

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
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={
                "list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              }
            >
              <span>{c.name}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Categories;
