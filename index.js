// console.log("Hello")

// import user from "./user.js"
// console.log(user)

// // const fs = require("fs").promises
// import { promises as fs } from "node:fs";

// // прочитати файл
// const readFile = async(fileName) => {
//     try {
//         // прочитати
//    const data = await fs.readFile(fileName, "utf8")
//    const newData = `${data}\nІ ні слова про мед`
//    await fs.writeFile(fileName, newData)
//    console.log(data)
//     } catch(error) {
//     console.log(error.message)
//     }
// }

// readFile("read.tsx")

// // переписати повністю файл
// const readFile2 = async(fileName) => {
//     try {
//    const data = await fs.readFile(fileName, "utf8")
//    const newData = `${data}\nІ ні слова про мед`
//    await fs.writeFile(fileName, newData)
//    console.log(data)
//     } catch(error) {
//     console.log(error.message)
//     }
// }

// readFile2("read.tsx")

// // lдодавти в файл нову строку
// const readFile3 = async(fileName) => {
//     try {
//         const addText = "\nНова строка"
//    await fs.appendFile(fileName, addText)
//    console.log(addText)
//     } catch(error) {
//     console.log(error.message)
//     }
// }

// readFile3("read.tsx")