// import getAll from "./products/getAll.js"; // <-- Ось цей імпорт вам потрібен
// import getById from "./products/getById.js";
// import update from "./products/update.js";
import del from "./products/delete.js";

const productsOperations = {
  // getAll: async () => {
  //   const data = await getAll(); 
  //   console.log("Дані, прочитані з диска через getAll():", data);
  //   return data;
  // },
//  getById: async (id) => {
//     try {
//       const data = await getById(id);
//       console.log(`[app.js][productsOperations.getById] Дані отримані з getById:`, data);
//       return data;
//     } catch (error) {
//       console.error(`[app.js][productsOperations.getById] Помилка під час отримання даних:`, error.message);
//       throw error;
//     }
//   },
  // update: async (id, updateInfo) => {
  //   try {
  //      const result = await update(id, updateInfo); 
  //    console.log(`[app.js][productsOperations.update] Дані отримані після оновлення для ID ${id}:`, result);
  //     return result;
  //   } catch (error) {
  //     console.error(`[app.js][productsOperations.getById] Помилка під час отримання даних:`, error.message);
  //     throw error;
  //   }
  // }
  del: async (id) => {
    try {
       const result = await del(id); 
     console.log(`[app.js][productsOperations.update] Дані отримані після оновлення для ID ${id}:`, result);
      return result;
    } catch (error) {
      console.error(`[app.js][productsOperations.getById] Помилка під час отримання даних:`, error.message);
      throw error;
    }
  }
};

// 3. Запускаємо логіку.
// (async () => {
//   try {
//     const products = await productsOperations.getAll();
//     console.log("Продукти, отримані через productsOperations.getAll():", products);
//   } catch (error) {
//     console.error("Помилка:", error.message);
//   }
// })();

// (async () => {
//   try {
//     const id = "3";
//     const oneProduct = await productsOperations.getById(id);
//     console.log("[app.js][Головний блок] *** УСПІХ! *** Отримано один продукт:", oneProduct);
//   } catch (error) {
//     console.error("[app.js][Головний блок] *** ПОМИЛКА! *** Не вдалося отримати продукт:", error.message);
//   }
// })();

// (async () => {
//   try {
//     const id = "1";
//      const updateData = { title: "Нова назва книги від оновлення" }
//     const oneProduct = await productsOperations.update(id, updateData);
//     console.log("[app.js][Головний блок] *** УСПІХ! *** Отримано один продукт:", oneProduct);
//   } catch (error) {
//     console.error("[app.js][Головний блок] *** ПОМИЛКА! *** Не вдалося отримати продукт:", error.message);
//   }
// })();

(async () => {
  try {
    const id = "1";
    const oneProduct = await productsOperations.del(id);
    console.log("[app.js][Головний блок] *** УСПІХ! *** Отримано один продукт:", oneProduct);
  } catch (error) {
    console.error("[app.js][Головний блок] *** ПОМИЛКА! *** Не вдалося отримати продукт:", error.message);
  }
})();

import express from "express";
import products from "./products/products.json" with { type: "json" };
import cors from "cors";
const PORT = process.env.PORT || 4000

const app = express()
app.use(cors())

// Це middleware дозволяє Express парсити JSON-тіло запитів
// app.use(express.json());

app.get("/", (req, res, next) => {
  console.log("first middleware")
  res.send("<h>Головна сторінка</h>")
  // next()
})

app.get("/about", (req, res, next) => {
  console.log("second middleware")
  res.send("<h1>Про нас сторінка</h1>")
  // next()
})

app.get("/products", (req, res) => {
  res.json(products)
})

app.use((_, res) => {
  res.send("Not found")
})

// app.post("/products", (req, res) => {
//   const newProduct = req.body;
//   products.push(newProduct);
//   console.log("Новий продукт додано:", newProduct);
//   res.json({ message: "Продукт успішно додано", product: newProduct, allProducts: products });
// });

app.listen(PORT, () => {
  console.log(`listen ${PORT}`)
})