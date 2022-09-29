import { goto } from "$app/navigation";
import type { GeoType } from "../types";
import { GeoTypes } from "../types";

export const selectGeography = (params: URLSearchParams, g: { geoType: GeoType; geoCode: string }) => {
  const newer = new URLSearchParams(params);
  newer.set(g.geoType.toLowerCase(), g.geoCode);
  gotoParams(newer);
};

export const deselectGeography = (params: URLSearchParams) => {
  const newer = new URLSearchParams(params);
  for (const param of GeoTypes) {
    newer.delete(param);
  }
  gotoParams(newer);
};

const gotoParams = (newer: URLSearchParams) => {
  goto(`?${newer.toString()}`, { keepfocus: true, replaceState: false, noscroll: true });
};
