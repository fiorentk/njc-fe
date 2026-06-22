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