/**
 * CarLinx API proxy helper
 * All API calls are routed through this module — never direct from components.
 * Backend: vtl-platform-api (unchanged schema)
 */

const API_BASE = import.meta.env.VTL_API_URL ?? 'https://api.vtl-platform.com';

export interface Vehicle {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  body_type?: string;
  colour?: string;
  engine_size?: string;
  doors?: number;
  location: string;
  images: string[];
  description?: string;
  seller_name?: string;
  seller_phone?: string;
  created_at: string;
}

export interface VehicleSearchParams {
  make?: string;
  model?: string;
  min_price?: number;
  max_price?: number;
  max_mileage?: number;
  fuel?: string;
  transmission?: string;
  year_from?: number;
  body_type?: string;
  location?: string;
  radius?: number;
  sort?: string;
  page?: number;
  limit?: number;
}

export interface VehicleListResponse {
  vehicles: Vehicle[];
  total: number;
  page: number;
  limit: number;
}

/**
 * Fetch a paginated, filtered list of vehicles
 */
export async function getVehicles(
  params: VehicleSearchParams = {},
  fetchFn: typeof fetch = fetch
): Promise<VehicleListResponse> {
  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== '' && value !== null) {
      query.set(key, String(value));
    }
  }

  const url = `${API_BASE}/api/vehicles?${query.toString()}`;

  try {
    const res = await fetchFn(url, {
      headers: { 'Accept': 'application/json' },
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      throw new Error(`API error ${res.status}: ${res.statusText}`);
    }

    return await res.json() as VehicleListResponse;
  } catch (err) {
    console.error('[CarLinx API] getVehicles failed:', err);
    // Return empty shell — UI handles gracefully
    return { vehicles: [], total: 0, page: 1, limit: 24 };
  }
}

/**
 * Fetch a single vehicle by ID
 */
export async function getVehicleById(
  id: string,
  fetchFn: typeof fetch = fetch
): Promise<Vehicle | null> {
  const url = `${API_BASE}/api/vehicle/${encodeURIComponent(id)}`;

  try {
    const res = await fetchFn(url, {
      headers: { 'Accept': 'application/json' },
      signal: AbortSignal.timeout(8000),
    });

    if (res.status === 404) return null;

    if (!res.ok) {
      throw new Error(`API error ${res.status}: ${res.statusText}`);
    }

    return await res.json() as Vehicle;
  } catch (err) {
    console.error(`[CarLinx API] getVehicleById(${id}) failed:`, err);
    return null;
  }
}

/**
 * Format price as GBP string
 */
export function formatPrice(p: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency', currency: 'GBP', maximumFractionDigits: 0,
  }).format(p);
}

/**
 * Format mileage with comma separator
 */
export function formatMileage(m: number): string {
  return new Intl.NumberFormat('en-GB').format(m);
}
