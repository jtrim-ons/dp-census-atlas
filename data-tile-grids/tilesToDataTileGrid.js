import { tileToBBOX } from "@mapbox/tilebelt";
import { readFileSync, writeFileSync } from "fs";

if (process.argv.length < 3) {
  throw "Please supply a JSON file of tiles to convert.";
}

const tileJSONfn = process.argv[2];
const quadTiles = JSON.parse(readFileSync(tileJSONfn));
const quadBBoxes = {};

for (const key in quadTiles) {
  quadBBoxes[key] = quadTiles[key].map((tile) => {
    const tilename = tile.map((x) => x.toString()).join("-");
    const bboxRaw = tileToBBOX(tile);
    return {
      tilename: tilename,
      bbox: { east: bboxRaw[2], north: bboxRaw[3], west: bboxRaw[0], south: bboxRaw[1] },
    };
  });
}

const tileJSONfnNoEx = tileJSONfn.split(".")[0];
writeFileSync(`${tileJSONfnNoEx}DataTileGrid.json`, JSON.stringify(quadBBoxes));