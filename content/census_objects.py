#!/usr/bin/env python

"""
Class definitions and factories for census content objects
"""

from dataclasses import dataclass
import json
from pathlib import Path

# ====================================================== CONFIG ====================================================== #


# dictionary of known unit plurals
UNIT_PLURALS = {
    "household": "households",
    "dwelling": "dwellings",
    "family": "families",
    "person": "people",
    "communal establishment": "communal establishments",
    "": "",
}


# ==================================================== CLASSES ======================================================= #


@dataclass
class CensusCategory:
    """A category as found in content.json."""

    name: str
    slug: str
    code: str
    legend_str_1: str
    legend_str_2: str
    legend_str_3: str
    _classification_code: str = ""
    _category_code: str = ""

    def is_valid(self) -> bool:
        """Return False if public properties are blank strings."""
        is_valid = True

        for prop, value in vars(self).items():
            if isinstance(value, str) and not prop.startswith("_") and value == "":
                print(f"** Blank property {prop} found in variable {self.name} **")
                is_valid = False

        return is_valid

    def to_jsonable(self) -> dict:
        """Category in json-friendly form."""
        return {
            "name": self.name,
            "slug": self.slug,
            "code": self.code,
            "legend_str_1": self.legend_str_1,
            "legend_str_2": self.legend_str_2,
            "legend_str_3": self.legend_str_3,
        }
@dataclass
class CensusClassification:
    """A classification as found in content.json."""

    code: str
    slug: str
    desc: str
    choropleth_default: bool
    dot_density_default: bool
    categories: list[CensusCategory]
    comparison_2011_data_available: bool = False
    _variable_code: str = ""

    def gather_categories(self, category_list: list[CensusCategory]) -> None:
        """
        Append all categories with matching classification code to self.
        """
        self.categories = [c for c in category_list if c._classification_code == self.code]

    def is_valid(self) -> bool:
        """
        Return False if public properties are blank strings, categories is empty list, or any categories are not valid
        """
        is_valid = True

        for prop, value in vars(self).items():
            if isinstance(value, str) and not prop.startswith("_") and value == "":
                print(f"** Blank property {prop} found in classification {self.code} **")
                is_valid = False

        if len(self.categories) == 0:
            print(f"** Classification {self.code} has no categories **")
            is_valid = False

        for c in self.categories:
            if not c.is_valid():
                is_valid = False

        return is_valid

    def to_jsonable(self):
        """Classification json-friendly form w. optional properties."""
        output_params = {
            "code": self.code,
            "slug": self.slug,
            "desc": self.desc
        }

        if self.choropleth_default:
            output_params["choropleth_default"] = self.choropleth_default

        if self.dot_density_default:
            output_params["dot_density_default"] = self.dot_density_default

        if self.comparison_2011_data_available:
            output_params["comparison_2011_data_available"] = self.comparison_2011_data_available

        output_params["categories"] = [c.to_jsonable() for c in self.categories]

        return output_params


@dataclass
class CensusVariable:
    """A variable as found in content.json."""

    name: str
    code: str
    slug: str
    desc: str
    units: str
    classifications: list[CensusClassification]
    _topic_code: str = ""

    def gather_classifications(self, classification_list: list[CensusClassification]) -> None:
        """
        Append all classifications with matching variable code to self. We need these to be ordered from less
        categories to more categories.
        """
        unsorted_classifications = [c for c in classification_list if c._variable_code == self.code]
        sorted_classifications = sorted(unsorted_classifications, key=lambda c: len(c.categories))
        self.classifications = sorted_classifications

    def make_legend_strings(self) -> None:
        """
        Make first-attempt at legend strings for all categories in all classifications
        (intention is these are then manually reviewed / edited)
        """
        for cl in self.classifications:
            for c in cl.categories:
                c.legend_str_1 = f"of {UNIT_PLURALS[self.units.lower()]} in {{location}}"
                c.legend_str_2 = "are"
                c.legend_str_3 = c.name.lower()

    def is_valid(self) -> bool:
        """
        Return False if public properties are blank strings, classifications is empty list, there is no choropleth
        default classification set, or any classifications are not valid.
        """
        is_valid = True

        for prop, value in vars(self).items():
            if isinstance(value, str) and not prop.startswith("_") and value == "":
                print(f"** Blank property {prop} found in variable {self.name} **")
                is_valid = False

        if len(self.classifications) == 0:
            print(f"** Variable {self.name} has no classifications **")
            is_valid = False

        if not any(getattr(c, "choropleth_default", False) == True for c in self.classifications):
           print(f"** Variable {self.name} has no choropleth default classification **")
           is_valid = False

        for c in self.classifications:
            if not c.is_valid():
                is_valid = False

        return is_valid

    def to_jsonable(self):
        """Variable in json-friendly form."""
        return {
            "name": self.name,
            "code": self.code,
            "slug": self.slug,
            "desc": self.desc,
            "units": self.units,
            "classifications": [c.to_jsonable() for c in self.classifications],
        }


@dataclass
class CensusTopic:
    """A topic as found in content.json."""

    name: str
    slug: str
    desc: str
    variables: list[CensusVariable]
    _code: str = ""

    def gather_variables(self, variable_list: list[CensusVariable]) -> None:
        """Append all variable with matching topic code to self."""
        self.variables = [v for v in variable_list if v._topic_code == self._code]

    def is_valid(self) -> bool:
        """
        Return False if public properties are blank strings, variables is empty list or any variables are not valid.
        """
        is_valid = True

        for prop, value in vars(self).items():
            if isinstance(value, str) and not prop.startswith("_") and value == "":
                print(f"** Blank property {prop} found in topic {self.name} **")
                is_valid = False

        if len(self.variables) == 0:
            print(f"** Topic {self.name} has no variables **")
            is_valid = False

        for v in self.variables:
            if not v.is_valid():
                is_valid = False

        return is_valid

    def to_jsonable(self) -> dict:
        """Topic in json-friendly form."""
        return {
            "name": self.name,
            "slug": self.slug,
            "desc": self.desc,
            "variables": [v.to_jsonable() for v in self.variables],
        }


@dataclass
class CensusTopicGroup:
    """Atlas-specific group of topics."""

    name: str
    slug: str
    desc: str
    topics: list[CensusTopic]
    _topic_names: list[str]

    def gather_topics(self, topic_list: list[CensusTopic]) -> None:
        """Append all topics with listed in self._topic_names."""
        self.topics = [t for t in topic_list if t.name in self._topic_names]

    def is_valid(self) -> bool:
        """
        Return False if there are no topics, topics are repeated, or if any topic is invalid.
        """
        is_valid = True
        if len(self.topics) == 0:
            print(f"** Topic Group {self.name} has no topics **")
            is_valid = False

        if len(set(t.name for t in self.topics)) != len(self.topics):
            print(f"Topic Group {self.name} contains repeated topics - something has gone wrong!")
            is_valid = False

        for t in self.topics:
            if not t.is_valid():
                print(f"Topic Group {self.name} has invalid topics - something has gone wrong!")
                is_valid = False

        return is_valid

    def to_jsonable(self):
        """Topic group in json-friendly form, with topics sorted alphabetically."""
        return {
            "name": self.name,
            "slug": self.slug,
            "desc": self.desc,
            "topics": [t.to_jsonable() for t in sorted(self.topics, key=lambda x: x.name)],
        }


# ================================================ CLASS FACTORIES =================================================== #


def category_from_content_json(content_json: dict) -> CensusCategory:
    """Make CensusCategory from dictionary extracted from a content.json file"""
    return CensusCategory(
        name=content_json["name"],
        code=content_json["code"],
        slug=content_json["slug"],
        legend_str_1=content_json["legend_str_1"],
        legend_str_2=content_json["legend_str_2"],
        legend_str_3=content_json["legend_str_3"],
    )


def classification_from_content_json(content_json: dict) -> CensusClassification:
    """Make CensusClassification from dictionary extracted from a content.json file"""
    return CensusClassification(
        code=content_json["code"],
        slug=content_json["slug"],
        desc=content_json["desc"],
        choropleth_default=content_json.get("choropleth_default", False),
        dot_density_default=content_json.get("dot_density_default", False),
        comparison_2011_data_available=content_json.get("comparison_2011_data_available", False),
        categories=[category_from_content_json(c) for c in content_json["categories"]],
    )

def variable_from_content_json(content_json: dict) -> CensusVariable:
    """Make CensusVariable from dictionary extracted from a content.json file"""
    return CensusVariable(
        name=content_json["name"],
        code=content_json["code"],
        slug=content_json["slug"],
        desc=content_json["desc"],
        units=content_json["units"],
        classifications=[classification_from_content_json(c) for c in content_json["classifications"]],
    )


def topic_from_content_json(content_json: dict) -> CensusTopic:
    """Make CensusTopic dictionary extracted from a content.json file"""
    return CensusTopic(
        name=content_json["name"],
        slug=content_json["slug"],
        desc=content_json["desc"],
        variables=[variable_from_content_json(v) for v in content_json["variables"]],
    )

def topic_grouping_from_content_json(content_json: dict) -> CensusTopic:
    """Make CensusTopicGrouping dictionary extracted from a content.json file"""
    return CensusTopicGroup(
        name=content_json["name"],
        slug=content_json["slug"],
        desc=content_json["desc"],
        topics=[topic_from_content_json(t) for t in content_json["topics"]],
        _topic_names=[],
    )


def load_content(content_file: Path) -> list[CensusTopicGroup]:
    """Load all census objects defined in content_file."""
    with open(content_file, "r") as f:
        raw_content = json.load(f)
    return {
        "meta": raw_content["meta"],
        "content": [topic_grouping_from_content_json(tg) for tg in raw_content["content"]]
    }


def write_content(content: dict, output_fn) -> None:
    output = {
        "meta": content["meta"],
        "content": [tg.to_jsonable() for tg in content["content"]]
    }
    with open(output_fn, "w") as f:
        json.dump(output, f, indent=2)