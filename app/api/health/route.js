export async function GET() {
  return new Response(
    JSON.stringify({
      status: "ok",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      version: "1.0.0",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
}
