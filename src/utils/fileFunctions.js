import fileSystem from 'fs'

export function readFile(filePath) {
    try {
        const data = fileSystem.readFileSync(filePath, 'utf-8')
        return JSON.parse(data)

    } catch (error) {
        console.log("ERROR❗❗❗" + error.message)
    }
}

export function writeFile(filePath, content) {
    try {
        fileSystem.writeFileSync(filePath, content)
        return "Successfully writed!✅"
    } catch (error) {
        console.log("ERROR❗❗❗" + error.message)
    }
}