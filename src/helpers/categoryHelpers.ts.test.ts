import type { Variable, VariableData, Category } from "../types";
import { formatPercentage, formatTemplateString } from "./categoryHelpers";

describe("formatPercentage", () => {
  test("rounds percentage to nearest single decimal place and returns as string - single decimal place input", () => {
    expect(formatPercentage(10.1)).toEqual("10.1");
  });
  test("rounds percentage to nearest single decimal place and returns as string - no decimal place input", () => {
    expect(formatPercentage(10)).toEqual("10.0");
  });
  test("rounds percentage to nearest single decimal place and returns as string - multiple decimal place input", () => {
    expect(formatPercentage(10.58098340980878)).toEqual("10.6");
  });
});

describe("formatTemplateString", () => {
  const testCategory: Category = {
    name: "testCat",
    slug: "test-cat",
    code: "testCatCode",
    desc: "",
    category_h_pt2: "",
    category_h_pt3: "",
    cat_location_summary_pt2: "",
  };
  const testVariable: Variable = {
    name: "testVar",
    slug: "test-var",
    code: "testVarCode",
    desc: "",
    units: "testUnits",
    categories: [],
    total: {
      name: "testTotal",
      slug: "test-total",
      code: "testTotalCode",
    },
  };
  const testLocation = "testLocation";

  test("formats {variable_name}", () => {
    expect(formatTemplateString(testVariable, testCategory, testLocation, "{variable_name} in a sentence")).toEqual(
      "testVar in a sentence",
    );
  });
  test("formats {category_name}", () => {
    expect(formatTemplateString(testVariable, testCategory, testLocation, "{category_name} in a sentence")).toEqual(
      "testCat in a sentence",
    );
  });
  test("formats {category_unit}", () => {
    expect(formatTemplateString(testVariable, testCategory, testLocation, "{category_unit} in a sentence")).toEqual(
      "testUnits in a sentence",
    );
  });
  test("formats {location}", () => {
    expect(formatTemplateString(testVariable, testCategory, testLocation, "{location} in a sentence")).toEqual(
      "testLocation in a sentence",
    );
  });
  test("formats all in same string", () => {
    expect(
      formatTemplateString(
        testVariable,
        testCategory,
        testLocation,
        "{variable_name}, {category_name}, {category_unit}, {location} in a sentence",
      ),
    ).toEqual("testVar, testCat, testUnits, testLocation in a sentence");
  });
  test("formats all occurences in string", () => {
    expect(
      formatTemplateString(
        testVariable,
        testCategory,
        testLocation,
        "{variable_name}, {variable_name}, {category_name}, {category_name} in a sentence",
      ),
    ).toEqual("testVar, testVar, testCat, testCat in a sentence");
  });
});
