// Outputs: /builtwith.json
import Layouts from '../layouts'

export async function GET() {
  return new Response(
    JSON.stringify({
      name: 'Astro',
      body: Layouts,
    }),
  )
}
