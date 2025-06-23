// products/getById.js

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "products.json"); 

const getById = async (id) => {
  // Лог: вхід у функцію getById
  console.log(`  [getById.js] Функція викликана з ID: '${id}' (тип: ${typeof id})`);
  console.log(`  [getById.js] Розрахований шлях до JSON-файлу: ${filePath}`);

  try {
    const data = await fs.readFile(filePath, "utf8");
    const products = JSON.parse(data);
    
    if (products.length > 0) {
      console.log(`  [getById.js] Приклад ID першого продукту в JSON: '${products[0].id}' (тип: ${typeof products[0].id})`);
    }

    const selectProduct = products.find((item) => item.id === id); 

    if (!selectProduct) {
      const errorMessage = `Product with ID '${id}' not found.`;
      // Лог: кидання помилки
      console.error(`  [getById.js] !!! ПОМИЛКА ЛОГІКИ !!! ${errorMessage}`);
      throw new Error(errorMessage); 
    }
    
    return selectProduct;
  } catch (error) {
    // Лог: помилка у catch блоці getById
    console.error(`  [getById.js] !!! КРИТИЧНА ПОМИЛКА !!! У блоці catch getById:`, error.message);
    throw error; // Перекидаємо помилку, щоб її побачив app.js
  }
};

export default getById;