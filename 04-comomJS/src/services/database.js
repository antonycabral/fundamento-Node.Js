export const connection = {connectToDatabase, disconnectDataBase}

async function connectToDatabase(dataName) {
    console.log("se conectando ao banco: " + dataName);
}

export async function disconnectDataBase() {
    //logica disconect
    console.log("desconectando")
}

