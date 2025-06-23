 import { promises as fs } from "node:fs"; // Імпортуємо fs.promises для роботи з файлами
import path from "node:path"; // Імпортуємо path для роботи зі шляхами
import { fileURLToPath } from "node:url"; // Імпортуємо для отримання __dirname

 const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "products.json")


const del = async(id) => {
try {
 const data = await fs.readFile(filePath, "utf8");
    const products = JSON.parse(data);

const idx = products.findIndex((item) => item.id === id); 
    if (idx === -1) {
      throw new Error(`Product ${id} not found`); 
    }
     const [deletedProduct] = products.splice(idx, 1); 
     const updatedProductsString = JSON.stringify(products, null, 2);
    // Записуємо цей JSON-рядок назад у файл products.json
    await fs.writeFile(filePath, updatedProductsString, "utf8");
    console.log(`  [delete.js] Оновлений список продуктів успішно записано у файл.`); // Лог про успішний запис

    // 7. Повертаємо об'єкт видаленого продукту
    return deletedProduct;

    // return delProduct
} catch(error) {

}
}

export default del