import { writable } from "svelte/store";
import type { MapState, VizData } from "../types";

/**
 * A Svelte store containing any map state we need to be aware of within the Svelte app.
 * */
export const mapStore = writable<MapState | undefined>(undefined);

/**
 * A Svelte store containing all the data we need in order to show a vizualisation.
 * */
export const vizStore = writable<VizData | undefined>(undefined);

/**
 * A Svelte store ...
 */
export const preventFlyToGeographyStore = writable<string | undefined>(undefined);
