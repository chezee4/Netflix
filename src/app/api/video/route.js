export { GET } from 'next-video/request-handler'
import fs from 'fs'
import path from 'path'

export function handler(req, res) {
  const {
    query: { video },
  } = req

  const filePath = path.join(process.cwd(), 'videos', `${video}.json`)

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: 'Ошибка чтения файла' })
    }

    res.status(200).json(JSON.parse(data))
  })
}
