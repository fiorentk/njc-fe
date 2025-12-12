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
        message: `Terima kasih telah bertransaksi di toko kami, paket kamu telah diproses/dikirim.\nAnda bisa melakukan pengecekan paket anda melalui link berikut:\nhttps://resipos.vercel.app/resi/P2021304810014`,
        reply_message_id: replyId,
        is_forwarded: false,
      }),
    });

    if (!res.ok) {
      console.error("WhatsApp API error:", await res.text());
      return NextResponse.json(
        { error: "Failed to send WhatsApp message" },
        { status: 500 }
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
