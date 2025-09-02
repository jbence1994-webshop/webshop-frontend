import { useEffect, useState } from "react";

import type { Category } from "@components/products/category";
import { getCategories } from "@components/products/category.service";

export function CategoriesDataHook() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const initializeCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    initializeCategories();
  }, []);

  return { categories };
}
