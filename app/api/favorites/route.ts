export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch(
    "https://uninfectious-emilia-unmarshaled.ngrok-free.dev/Project/real_estate/get_favorites.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify(body),
    }
  );

  const data = await res.json();

  return Response.json(data);
}