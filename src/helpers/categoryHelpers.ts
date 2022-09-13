import { englandAndWales } from "./spatialHelper";
import { GeoTypes, type Variable, type Category, type VariableGroup } from "../types";
import { unCapitalizeFirstLetter } from "../util/stringUtil";

export const getCategoryInfo = (categoryCode: string, variableGroups: VariableGroup[]) => {
  const allVariables = variableGroups.flatMap((vg) => vg.variables.map((v) => ({ variableGroup: vg, variable: v })));
  const allClassifications = allVariables.flatMap((v) =>
    v.variable.classifications.map((c) => ({ variableGroup: v.variableGroup, variable: v, classification: c })),
  );
  const allCategories = allClassifications.flatMap((c) =>
    c.classification.categories.map((cat) => ({
      variableGroup: c.variableGroup,
      variable: c.variable,
      classification: c,
      category: cat,
    })),
  );
  const match = allCategories.find((c) => c.category.code === categoryCode);

  return {
    variableGroup: match.variableGroup,
    variable: match.variable.variable,
    category: match.category,
  };
};

export function getSelectedGeography(pageUrl) {
  const urlParams = new URLSearchParams(pageUrl.search);
  for (const g of GeoTypes) {
    if (urlParams.has(g)) {
      return {
        geoType: g,
        geoCode: urlParams.get(g),
      };
    }
  }
  return { geoType: englandAndWales.meta.geotype, geoCode: englandAndWales.meta.code };
}

export const formatPercentage = (percentage: number) => {
  return (Math.round(percentage * 10) / 10).toFixed(1);
};

export const formatTemplateString = (variable: Variable, category: Category, location: string, templateStr: string) => {
  const stringReplaceMap = {
    "{variable_name}": unCapitalizeFirstLetter(variable.name),
    "{category_name}": unCapitalizeFirstLetter(category.name),
    "{category_unit}": unCapitalizeFirstLetter(variable.units),
    "{location}": location,
  };
  Object.entries(stringReplaceMap).forEach(([strToReplace, replacementStr]) => {
    templateStr = templateStr.replace(new RegExp(strToReplace, "g"), replacementStr);
  });
  return templateStr;
};
