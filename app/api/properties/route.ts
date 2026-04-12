// app/api/properties/route.ts
export async function GET() {
  const res = await fetch(
    "https://uninfectious-emilia-unmarshaled.ngrok-free.dev/project/real_estate/propreties.php",
    {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    }
  );

  const data = await res.json();
  return Response.json(data);
}