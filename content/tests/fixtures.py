from census_objects import (
    CensusCategory,
    CensusClassification,
    CensusVariable,
    CensusTopic,
    CensusTopicGroup,
)
from filter_atlas_content import RichContentSpecRow


def get_test_category(**kwargs) -> CensusCategory:
    return CensusCategory(
        name=kwargs.get("name", "test_name"),
        slug=kwargs.get("slug", "test_slug"),
        code=kwargs.get("code", "test_code"),
        legend_str_1=kwargs.get("legend_str_1", "test_legend_str_1"),
        legend_str_2=kwargs.get("legend_str_2", "test_legend_str_2"),
        legend_str_3=kwargs.get("legend_str_3", "test_legend_str_3"),
        _classification_code=kwargs.get("_classification_code", "test_classification_code"),
        _category_code=kwargs.get("_category_code", 1),
    )


def get_test_classification(**kwargs) -> CensusClassification:
    return CensusClassification(
        code=kwargs.get("code", "test_code"),
        slug=kwargs.get("slug", "test_slug"),
        desc=kwargs.get("desc", "test_desc"),
        choropleth_default=kwargs.get("choropleth_default", False),
        dot_density_default=kwargs.get("dot_density_default", False),
        comparison_2011_data_available=kwargs.get("comparison_2011_data_available", False),
        categories=kwargs.get("categories", []),
        _variable_code=kwargs.get("_variable_code", "test_variable_code"),
    )


def get_test_variable(**kwargs) -> CensusVariable:
    return CensusVariable(
        name=kwargs.get("name", "test_name"),
        code=kwargs.get("code", "test_code"),
        slug=kwargs.get("slug", "test_slug"),
        desc=kwargs.get("desc", "test_desc"),
        units=kwargs.get("units", "person"),
        classifications=kwargs.get("classifications", []),
        _topic_code=kwargs.get("_topic_code", "test_topic_code"),
    )


def get_test_topic(**kwargs) -> CensusTopic:
    return CensusTopic(
        name=kwargs.get("name", "test_name"),
        slug=kwargs.get("slug", "test_slug"),
        desc=kwargs.get("desc", "test_desc"),
        variables=kwargs.get("variables", []),
        _code=kwargs.get("_code", "test_code"),
    )


def get_test_topic_grouping(**kwargs) -> CensusTopicGroup:
    return CensusTopicGroup(
        name=kwargs.get("name", "test_name"),
        slug=kwargs.get("slug", "test_slug"),
        desc=kwargs.get("desc", "test_desc"),
        topics=kwargs.get("topics", []),
        _topic_names=kwargs.get("to_topic_namesics", []),
    )


def get_test_spec_row(**kwargs) -> RichContentSpecRow:
    return RichContentSpecRow(
        dataset=kwargs.get("dataset", "test_dataset"),
        dataset_classification=kwargs.get("dataset_classification", "test_dataset_classification"),
        additional_atlas_classifications=kwargs.get("additional_atlas_classifications", []),
        choropleth_default_classification=kwargs.get("choropleth_default_classification", False),
        dot_density_default_classification=kwargs.get("dot_density_default_classification", False),
        comparison_2011=kwargs.get("comparison_2011", False)
    )