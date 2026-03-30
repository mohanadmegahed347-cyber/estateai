import Replicate from 'replicate'
import { NextResponse } from 'next/server'

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { imageUrl } = body

    const output = await replicate.run(
      "nightmareai/real-esrgan:42fed1c4974146d4d2414e2be2c5277c7fcf05fcc3a73abf41610695738c1d7b",
      {
        input: {
          image: imageUrl,
          scale: 4,
          face_enhance: false
        }
      }
    )

    return NextResponse.json({ enhancedUrl: output })

  } catch (error) {
    console.error('Enhance Error:', error)
    return NextResponse.json({ error: 'Failed to enhance photo' }, { status: 500 })
  }
}
