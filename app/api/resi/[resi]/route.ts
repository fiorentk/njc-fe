import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import type { ResiData, ResiProgress } from "@/app/resi/[resi]/types";
import produkMapping from "@/app/data/produk_mapping.json";

type ProdukMappingEntry = (typeof produkMapping)[number];

const RESPONSE_JSON_PATH = "/home/angga/project/njc/response.json";

const SHIPPING_STATES = new Set([
  "PENDING",
  "INLOCATION",
  "inBag",
  "INVEHICLE",
  "ON PROCESS",
  "DELIVERYRUNSHEET",
]);

function mapCurrentState(rawState: string): ResiData["data"]["current_state"] {
  const normalized = rawState?.toUpperCase() ?? "";
  if (normalized === "DELIVERED") return "Delivered";
  if (normalized === "PICK UP") return "Pick Up";
  if (SHIPPING_STATES.has(normalized)) return "Shipping";
  return "Shipping";
}

function isDelivered(rawState: string): boolean {
  return (rawState ?? "").toUpperCase() === "DELIVERED";
}

function resolveServiceName(
  connoteService: string,
  mapping: ProdukMappingEntry[]
): string {
  const found = mapping.find((entry) => entry.code === connoteService);
  return found?.service_name ?? connoteService;
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ resi: string }> }
) {
  try {
    const { resi } = await params;

    // ============================================================
    // TODO: Replace this dummy-data block with the real API call.
    //
    // const realRes = await fetch(
    //   `${env.RESI_API_URL}/${resi}`,
    //   { headers: { "x-api-key": env.RESI_API_KEY } }
    // );
    // const api = await realRes.json();
    // ============================================================
    const raw = await readFile(RESPONSE_JSON_PATH, "utf-8");
    const api = JSON.parse(raw);
    // ============================================================

    const service = resolveServiceName(api.connote_service, produkMapping);
    const details: string = api.koli?.[0]?.koli_description ?? "";

    const progress: ResiProgress[] = (api.connote_history ?? []).map(
      (entry: { date: string; content: string }) => ({
        timestamp: entry.date,
        progress_state: entry.content,
      })
    );

    let connoteStamp = "";
    const assetUrl = process.env["ASSET_URL"];
    const nokprkValue: string | undefined = api.connote_customfield?.nokprk;

    if (assetUrl && nokprkValue) {
      try {
        const assetRes = await fetch(`${assetUrl}/api/public/asset-lookup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "stamp", code: nokprkValue }),
        });

        if (assetRes.ok) {
          const assetData: { asset_url?: string } = await assetRes.json();
          connoteStamp = assetData.asset_url ?? "";
        }
      } catch {} // eslint-disable-line no-empty
    }

    const data: ResiData["data"] = {
      connote: api.connote_code ?? "",
      connote_created_date: api.created_at ?? "",
      sla: parseInt(api.connote_customfield?.final_swp, 10) || 0,
      service,
      sender: api.connote_sender_name ?? "",
      origin_address: api.connote_sender_address ?? "",
      recipient: api.connote_receiver_name ?? "",
      destination_address: api.connote_receiver_address ?? "",
      details,
      connote_stamp: connoteStamp,
      current_state: mapCurrentState(api.connote_state),
      current_office: isDelivered(api.connote_state)
        ? "Sudah Terkirim"
        : (api.current_location?.name ?? ""),
      origin_office: api.connote_customfield?.location_name ?? "",
      destination_office: api.connote_customfield?.destination_location ?? "",
      connote_progress: progress,
      nokprk: nokprkValue ?? "",
    };

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
