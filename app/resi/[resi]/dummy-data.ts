export interface ResiProgress {
  timestamp: string;
  progress_state: string;
}

export interface ResiData {
  success: boolean;
  data: {
    connote: string;
    connote_created_date: string;
    sla: number;
    service: string;
    sender: string;
    origin_address: string;
    recipient: string;
    destination_address: string;
    details: string;
    connote_stamp: string;
    is_umkm: boolean;
    umkm_name: string;
    umkm_logo: string;
    current_state: "Pick Up" | "Shipping" | "Delivered";
    current_office: string;
    origin_office: string;
    destination_office: string;
    connote_progress: ResiProgress[];
  };
}

const dummyResi: ResiData = {
  success: true,
  data: {
    connote: "NJC001234567890",
    connote_created_date: "2025-06-20T09:15:00Z",
    sla: 3,
    service: "Reguler",
    sender: "Budi Santoso",
    origin_address:
      "Jl. Merdeka No. 45, RT 03/RW 07, Kel. Gambir, Kec. Gambir, Jakarta Pusat, DKI Jakarta 10110",
    recipient: "Siti Nurhaliza",
    destination_address:
      "Jl. Asia Afrika No. 120, RT 02/RW 05, Kel. Cidurian, Kec. Coblong, Bandung, Jawa Barat 40135",
    details: "Totebag Special Edition",
    connote_stamp: "/stamp.png",
    is_umkm: true,
    umkm_name: "Toko UMKM Bersama Abadi",
    umkm_logo: "/posaja-logo.png",
    current_state: "Shipping",
    current_office: "Kantor Pos Bandung Pusat",
    origin_office: "Kantor Pos Jakarta Pusat",
    destination_office: "Kantor Pos Bandung Timur",
    connote_progress: [
      {
        timestamp: "2025-06-20T09:15:00Z",
        progress_state: "Paket diterima di Kantor Pos Jakarta Pusat",
      },
      {
        timestamp: "2025-06-20T11:30:00Z",
        progress_state: "Paket sedang disortir di Jakarta Pusat",
      },
      {
        timestamp: "2025-06-20T18:45:00Z",
        progress_state: "Paket dalam perjalanan dari Jakarta ke Bandung",
      },
      {
        timestamp: "2025-06-21T08:20:00Z",
        progress_state: "Paket tiba di Kantor Pos Bandung Pusat",
      },
      {
        timestamp: "2025-06-21T10:00:00Z",
        progress_state: "Paket sedang disortir di Bandung Pusat",
      },
      {
        timestamp: "2025-06-21T14:30:00Z",
        progress_state: "Paket dikirim ke Kantor Pos Bandung Timur",
      },
    ],
  },
};

export function getDummyResi(_resiId: string): ResiData {
  return dummyResi;
}
