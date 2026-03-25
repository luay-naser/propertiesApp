import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://uninfectious-emilia-unmarshaled.ngrok-free.dev/project/real_estate/propreties.php"
    );

    const text = await res.text();

    console.log("RAW RESPONSE:");
    console.log(text);

    return new NextResponse(text, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error: any) {
    console.log("SERVER ERROR:", error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
