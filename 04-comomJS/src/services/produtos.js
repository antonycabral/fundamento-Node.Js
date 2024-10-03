module.exports = {getFullName, getProductLabel, productType}

async function  getFullName(codeId, productName) {
    console.log("carrinho de compras: ")
    console.log("produto: " + codeId + "--" + productName)
}

async function getProductLabel(productName) {
    console.log("produto " + productName);
}

const productType = {
    versio: "digital",
    tax: "x1"
};