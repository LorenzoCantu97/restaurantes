function success (statusCode, data) {
    return {
        message: "success",
        code: statusMsg(statusCode),
        data: data,
        error: null
    }
}

function error (statusCode, error) {
    return {
        message: error.message,
        status: statusMsg(statusCode),
        data: null,
        error: error.name
    }
}

function statusMsg (param) {
    switch (param) {
        case 0:
            return { code: 0, message: "failed", description: "Algo salió mal, intenta nuevamente." }
        case 1:
            return { code: 1, message: "success", description: "Acción con éxito." }
        case 2:
            return { code: 2, message: "exists", description: "Ya existe." }
        case 3:
            return { code: 3, message: "inactive", description: "Acción inactiva." }
        case 4:
            return { code: 4, message: "fruitless", description: "No se encontraron resultados." }
        case 5:
            return { code: 5, message: "unauthorized", description: "Algo salió mal en la autorización, intenta nuevamente." }
        case 6:
            return { code: 6, message: "duplicated", description: "Entrada duplicada." }
        case 7:
            return { code: 7, message: "query", description: "Error en la ejecución de petición a la BD."}
        default:
            return { code: -1,_message: "undefined", description: "Estado indefinido." }
    }
}

module.exports = {
    success,
    error,
    statusMsg
};