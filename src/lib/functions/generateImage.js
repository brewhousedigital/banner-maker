import fs from 'fs'
import { createCanvas, loadImage }  from 'canvas'

export const generateImage = () => {
  const width = 1200
  const height = 630

  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')

  context.fillStyle = '#000'
  context.fillRect(0, 0, width, height)

  context.font = 'bold 70pt Menlo'
  context.textAlign = 'center'
  context.textBaseline = 'top'
  context.fillStyle = '#3574d4'

  const text = 'Hello, World!'

  context.fillStyle = '#fff'
  context.fillText(text, 600, 170)


  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync('./test.png', buffer)
}
