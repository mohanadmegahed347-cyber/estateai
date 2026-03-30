import Anthropic from '@anthropic-ai/sdk'
import { NextResponse } from 'next/server'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { bedrooms, bathrooms, sqft, features, neighborhood, price } = body

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: `Write a compelling real estate listing description for this property:
          - Bedrooms: ${bedrooms}
          - Bathrooms: ${bathrooms}
          - Square feet: ${sqft}
          - Special features: ${features}
          - Neighborhood: ${neighborhood}
          - Price: $${price}
          
          Make it warm, vivid, and under 150 words. Focus on lifestyle not just specs.
          Do not include the price in the description.`
        }
      ]
    })

    const description = message.content[0].type === 'text' ? message.content[0].text : ''
    return NextResponse.json({ description })

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Failed to generate description' }, { status: 500 })
  }
}