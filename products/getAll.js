import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "products.json"); 

const getAll = async () => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const products = JSON.parse(data);
    
    return products;
  } catch (error) {
    console.error("Помилка в products/getAll.js:", error.message); 
    throw error; 
  }
};

export default getAll;