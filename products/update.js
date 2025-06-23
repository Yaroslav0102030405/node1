// products/getById.js

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "products.json"); 

const update = async (id, updateInfo) => {
  // Лог: вхід у функцію getById
  console.log(`  [getById.js] Функція викликана з ID: '${id}' (тип: ${typeof id})`);
  console.log(`  [getById.js] Розрахований шлях до JSON-файлу: ${filePath}`);

  try {
    const data = await fs.readFile(filePath, "utf8");
    const products = JSON.parse(data);
    
    // if (products.length > 0) {
    //   console.log(`  [getById.js] Приклад ID першого продукту в JSON: '${products[0].id}' (тип: ${typeof products[0].id})`);
    // }

    const idx = products.findIndex((item) => item.id === id); 
    if (idx === -1) {
      throw new Error(`Product ${id} not found`); 
    }
    products[idx] = {...products[idx], ...updateInfo}
    const productsString = JSON.stringify(products, null, 2)
    await fs.writeFile(filePath, productsString)
    return products[idx]

  } catch (error) {
    // Лог: помилка у catch блоці getById
    console.error(`  [getById.js] !!! КРИТИЧНА ПОМИЛКА !!! У блоці catch getById:`, error.message);
    throw error; // Перекидаємо помилку, щоб її побачив app.js
  }
};

export default update;