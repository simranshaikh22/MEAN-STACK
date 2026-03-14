export interface ApiResponse<T> {
  success: boolean;
  data: T;
  count?: number;
}

export interface MandiRate {
  commodity: string;
  market: string;
  modal_price: number;
  min_price: number;
  max_price: number;
}

export interface Disease {
  name: string;
  name_hi?: string;
  name_mr?: string;
  symptoms: string;
  treatment: string;
}