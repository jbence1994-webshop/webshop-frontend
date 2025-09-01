import { useEffect, useState } from "react";

import { getCategories } from "@services/category.service";

import type { Category } from "@models/category";

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
