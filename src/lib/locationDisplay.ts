export interface LocationLike {
  city: string;
  state: string;
  isPatnaArea?: boolean;
}

export function isBiharLocation(location: LocationLike): boolean {
  return Boolean(location.isPatnaArea || location.state === "Bihar");
}

export function getLocationKeyword(location: LocationLike): string {
  if (location.isPatnaArea) return `${location.city}, Patna`;
  return `${location.city}, ${location.state}`;
}

export function getFullLocation(location: LocationLike): string {
  if (location.isPatnaArea) return `${location.city}, Patna, Bihar`;
  return `${location.city}, ${location.state}, India`;
}

export function getFormContext(location: LocationLike): string {
  if (location.isPatnaArea) return `${location.city}, Patna, Bihar`;
  return `${location.city}, ${location.state}`;
}
