import { NextRequest, NextResponse } from 'next/server'

const AMBEE_API_KEY = process.env.AMBEE_API_KEY || ''
const AMBEE_BASE_URL = 'https://api.ambeedata.com/latest'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const lat = searchParams.get('lat')
    const lon = searchParams.get('lon')

    if (!lat || !lon) {
      return NextResponse.json(
        { error: 'Missing lat or lon parameters' },
        { status: 400 }
      )
    }

    console.log(`[Server] Fetching pollen data for lat: ${lat}, lon: ${lon}`)

    const url = `${AMBEE_BASE_URL}/pollen/by-lat-lng?lat=${lat}&lng=${lon}`
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-api-key': AMBEE_API_KEY,
        'Content-Type': 'application/json',
      },
      // Server-side fetch, no CORS issues
    })

    console.log(`[Server] Ambee API response status: ${response.status}`)

    if (!response.ok) {
      const errorText = await response.text()
      console.warn(`[Server] Ambee API error (client will use fallback):`, errorText)
      return NextResponse.json(
        { error: 'Ambee API failed', details: errorText, status: response.status },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log('[Server] Pollen data retrieved successfully')

    return NextResponse.json(data)
  } catch (error: any) {
    console.error('[Server] Error fetching pollen data:', error)
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    )
  }
}
