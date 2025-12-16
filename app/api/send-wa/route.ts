import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { phone } = await req.json();

    if (!phone || typeof phone !== "string" || !phone.trim()) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 }
      );
    }

    // Get env vars (safe on server)
    const endpoint = process.env.WA_ENDPOINT;
    const username = process.env.USERNAME_API;
    const password = process.env.PASSWORD_API;

    if (!endpoint || !username || !password) {
      console.error("Missing server environment variables");
      return NextResponse.json(
        { error: "Server misconfigured" },
        { status: 500 }
      );
    }

    const token = Buffer.from(`${username}:${password}`).toString("base64");
    const cleanPhone = phone.replace(/^0/, "62");
    const waJid = `${cleanPhone}@s.whatsapp.net`;
    const replyId = `NJC${cleanPhone}`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${token}`,
      },
      body: JSON.stringify({
        phone: waJid,
        link: "https://resipos.vercel.app/resi/P2021304810014",
        caption:
          "Terima kasih telah bertransaksi di toko kami, paket Anda telah diproses/dikirim.\nAnda bisa melakukan pengecekan paket anda melalui link berikut:",
        reply_message_id: "NJC81230192255",
        is_forwarded: false,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();

      return NextResponse.json(
        {
          code: errorData.code ?? "API_ERROR",
          message: errorData.message ?? "Unknown error",
        },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
