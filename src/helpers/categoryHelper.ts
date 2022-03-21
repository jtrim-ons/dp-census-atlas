import topics from "../data/content";
import type { Variable, Category } from "../types";
import { unCapitalizeFirstLetter } from "../util/stringUtil"

export const getCodesForCategory = (
  topicSlug: string,
  variableSlug: string,
  classificationSlug: string,
  categorySlug: string,
) => {
  let topic = topics.find((t) => t.slug === topicSlug);
  let variable = topic.variables.find((v) => v.slug === variableSlug);
  let classification = {
    name: "Default",
    desc: "Default classification",
    categories: variable.categories,
  };
  let category = variable.categories.find((c) => c.slug === categorySlug);

  return {
    totalCode: variable.total.code,
    categoryCode: category.code,
    categoryCodes: variable.categories.map((c) => c.code),
  };
};

export const getCategoryInfo = (categoryCode: string) => {
  let allVariables = topics.flatMap((t) => t.variables.map((v) => ({ topic: t, variable: v })));
  let allCategories = allVariables.flatMap((v) =>
    v.variable.categories.map((c) => ({ topic: v.topic, category: c, variable: v })),
  );
  let match = allCategories.find((c) => c.category.code === categoryCode);

  return {
    topic: match.topic,
    variable: match.variable.variable,
    category: match.category,
  };
};

export function getSelectedGeography(pageUrl) {
  //TODO: don't parse manually
  const pageUrlArr = pageUrl.search.split("=");
  const geoCode = pageUrlArr[1];
  const geoType = pageUrlArr[0].slice(1);
  if (geoCode) {
    return { geoType, geoCode };
  } else {
    return { geoType: "ew", geoCode: "K04000001" };
  }
}

export const renderCatHeadString = (
  variable: Variable, 
  category: Category, 
  location: string, 
  templateStr: string
) => { 
  const stringReplaceMap = {
    "{category_name}": unCapitalizeFirstLetter(category.name),
    "{category_unit}": unCapitalizeFirstLetter(variable.units),
    "{location}": location,
    "{variable_name}": unCapitalizeFirstLetter(variable.name),
  }
  for (const [strToReplace, replacementStr] of Object.entries(stringReplaceMap)) {
    templateStr = templateStr.replace(strToReplace, replacementStr)
  }
  return templateStr
}
