// "source": "Census Atlas Content - V4_4.csv",
// "utc_created_at": "2022-03-28T15:35:55.048890"

export default [
  {
    name: "Education",
    slug: "education",
    desc: "Residents in education and qualifications they hold.",
    variables: [
      {
        name: "Highest level of qualification gained",
        slug: "highest-level-of-qualification-gained",
        code: "QS501EW",
        desc: "Highest qualification gained by residents.",
        units: "People",
        categories: [
          {
            name: "No qualifications",
            slug: "no-qualifications",
            code: "QS501EW0002",
            desc: "People that do not have any qualifications.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Level 1 qualifications",
            slug: "level-1-qualifications",
            code: "QS501EW0003",
            desc: "Level 1 qualifications are GCSE (grades 3 to 1 or grades, D to G), level 1 award, certificate, diploma or NVQ , Welsh Baccalaureate Foundation Diploma.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Level 2 qualifications",
            slug: "level-2-qualifications",
            code: "QS501EW0004",
            desc: "Level 2 qualifications are GCSE (grades 9 to 4 or grades A* to C), O level (grade A to C or pass), level 2 award, certificate or NVQ, Welsh Baccalaureate Diploma.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Level 3 qualifications",
            slug: "level-3-qualifications",
            code: "QS501EW0006",
            desc: "Level 3 qualifications are A level, AS level, level 3 award, certificate, diploma or NVQ, Welsh Baccalaureate, International Baccalaureate.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Level 4 qualifications and above",
            slug: "level-4-qualifications-and-above",
            code: "QS501EW0007",
            desc: "Level 4 qualifications and above are certificate of higher education (CertHE), higher national certificate (HNC), level 4 award, certificate, diploma or NVQ, diploma of higher education (DipHE), higher national diploma (HND), degree, master’s degree or doctorate.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Apprenticeship",
            slug: "apprenticeship",
            code: "QS501EW0005",
            desc: "People who have a Modern Apprenticeship.",
            category_h_pt2: "of {category_unit} in {location} have an",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have an {category_name}.",
          },
          {
            name: "Other qualifications",
            slug: "other-qualifications",
            code: "QS501EW0008",
            desc: "People that have other qualifications not covered by levels 1 to 4.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
        ],
        total: {
          name: "All categories: Highest level of qualification",
          slug: "all-categories-highest-level-of-qualification",
          code: "QS501EW0001",
        },
      },
    ],
  },
  {
    name: "Health",
    slug: "health",
    desc: "General health and caring responsibilities.",
    variables: [
      {
        name: "General health",
        slug: "general-health",
        code: "QS302EW",
        desc: "How people rate their general health.",
        units: "People",
        topic_page_cat_desc:
          "People who think their general health is, very good, good, fair, bad or very bad, by usual residents",
        categories: [
          {
            name: "Very good health",
            slug: "very-good-health",
            code: "QS302EW0002",
            desc: "This is someone’s own opinion that best describes their overall state of health as very good most of the time.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Good health",
            slug: "good-health",
            code: "QS302EW0003",
            desc: "This is someone’s own opinion that best describes their overall state of health as good most of the time.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Fair health",
            slug: "fair-health",
            code: "QS302EW0004",
            desc: "This is someone’s own opinion that best describes their overall state of health as fair most of the time.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Bad health",
            slug: "bad-health",
            code: "QS302EW0005",
            desc: "This is someone’s own opinion that best describes their overall state of health as bad most of the time.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Very bad health",
            slug: "very-bad-health",
            code: "QS302EW0006",
            desc: "This is someone’s own opinion that best describes their overall state of health as very bad most of the time.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
        ],
        total: {
          name: "All categories: General health",
          slug: "all-categories-general-health",
          code: "QS302EW0001",
        },
      },
      {
        name: "Long-term conditions",
        slug: "long-term-conditions",
        code: "QS303EW",
        desc: "How people's health affects their day-to-day activities.",
        units: "People",
        categories: [
          {
            name: "No long-term condition",
            slug: "no-long-term-condition",
            code: "QS303EW0004",
            desc: "Non-disabled people are able to carry out their day-to-day activities without being limited by a physical or mental health condition.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) do not have a long-term health condition.",
          },
          {
            name: "Day-to-day activities limited a little",
            slug: "day-to-day-activities-limited-a-little",
            code: "QS303EW0003",
            desc: "People with a long-term physical or mental health condition (lasting or expected to last 12 months or more) that limits their day-to-day activities a little.",
            category_h_pt2: "of {category_unit} in {location} have their",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have their day to day activities limited a little.",
          },
          {
            name: "Day-to-day activities limited a lot",
            slug: "day-to-day-activities-limited-a-lot",
            code: "QS303EW0002",
            desc: "People with a long-term physical or mental health condition (lasting or expected to last 12 months or more) that limits their day-to-day activities a lot.",
            category_h_pt2: "of {category_unit} in {location} have their",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have their day to day activities limited a lot.",
          },
        ],
        total: {
          name: "All categories: Long-term health problem or disability",
          slug: "all-categories-long-term-health-problem-or-disability",
          code: "QS303EW0001",
        },
      },
      {
        name: "Unpaid care",
        slug: "unpaid-care",
        code: "QS301EW",
        desc: "People who provide unpaid care.",
        units: "People",
        topic_page_cat_desc:
          "This is someone who provides unpaid care or occasional help to someone who is unwell, elderly or unable to manage on their own.",
        categories: [
          {
            name: "Do not provide unpaid care",
            slug: "do-not-provide-unpaid-care",
            code: "QS301EW0002",
            desc: "People who do not provide unpaid help or support to anyone who has a long-term physical or mental health condition or illness, or problems related to old age.",
            category_h_pt2: "of {category_unit} in {location}",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) {category_name}.",
          },
          {
            name: "Provide 1 to 19 hours unpaid care a week",
            slug: "provide-1-to-19-hours-unpaid-care-a-week",
            code: "QS301EW0003",
            desc: "People who provide unpaid help or support to anyone who has a long-term physical or mental health condition or illness, or problems related to old age.",
            category_h_pt2: "of {category_unit} in {location}",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) {category_name}.",
          },
          {
            name: "Provide 20 to 49 hours unpaid care a week",
            slug: "provide-20-to-49-hours-unpaid-care-a-week",
            code: "QS301EW0004",
            desc: "People who provide unpaid help or support to anyone who has a long-term physical or mental health condition or illness, or problems related to old age.",
            category_h_pt2: "of {category_unit} in {location}",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) {category_name}.",
          },
          {
            name: "Provide 50 or more hours unpaid care a week",
            slug: "provide-50-or-more-hours-unpaid-care-a-week",
            code: "QS301EW0005",
            desc: "People who provide unpaid help or support to anyone who has a long-term physical or mental health condition or illness, or problems related to old age.",
            category_h_pt2: "of {category_unit} in {location}",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) {category_name}.",
          },
        ],
        total: {
          name: "All categories: Provision of unpaid care",
          slug: "all-categories-provision-of-unpaid-care",
          code: "QS301EW0001",
        },
      },
    ],
  },
  {
    name: "Housing",
    slug: "housing",
    desc: "Types of homes and the people living in them.",
    variables: [
      {
        name: "Size of household",
        slug: "size-of-household",
        code: "QS406EW",
        desc: "Number of people who usually live together in the same home.",
        units: "Households",
        categories: [
          {
            name: "1 person households",
            slug: "1-person-households",
            code: "QS406EW0002",
            desc: "This is a home with 1 person living on their own.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "2 person households",
            slug: "2-person-households",
            code: "QS406EW0003",
            desc: "This is a home shared by 2 people.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "3 person households",
            slug: "3-person-households",
            code: "QS406EW0004",
            desc: "This is a home shared by 3 people.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "4 person households",
            slug: "4-person-households",
            code: "QS406EW0005",
            desc: "This is a home shared by 4 people.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "5 person households",
            slug: "5-person-households",
            code: "QS406EW0006",
            desc: "This is a home shared by 5 people.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
        ],
        total: {
          name: "All categories: Household size",
          slug: "all-categories-household-size",
          code: "QS406EW0001",
        },
      },
      {
        name: "Type of home",
        slug: "type-of-home",
        code: "QS402EW",
        desc: "Types of homes people live in.",
        units: "Households",
        categories: [
          {
            name: "Whole houses or bungalows",
            slug: "whole-houses-or-bungalows",
            code: "QS402EW0003",
            desc: "This is a property that has not been split into separate flats or other accommodation.",
            category_h_pt2: "of {category_unit} in {location} live in",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) live in {category_name}.",
          },
          {
            name: "Flats, maisonettes or apartments",
            slug: "flats-maisonettes-or-apartments",
            code: "QS402EW0007",
            desc: "This could be in a purpose built block or tenement, part of a converted or shared house (including bedsits), part of another converted building.",
            category_h_pt2: "of {category_unit} in {location} live in",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) live in {category_name}.",
          },
          {
            name: "Caravans or other temporary structures",
            slug: "caravans-or-other-temporary-structures",
            code: "QS402EW0011",
            desc: "This could include camper vans, canal barges, converrted railway carriages,garden building or shed, houseboats, mobile homes, tents, trailers.",
            category_h_pt2: "of {category_unit} in {location} live in",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) live in {category_name}.",
          },
          {
            name: "Shared homes",
            slug: "shared-homes",
            code: "QS402EW0012",
            desc: "A home is shared if the household spaces it contains are ‘part of a converted or shared house or not all rooms are behind closed doors.",
            category_h_pt2: "of {category_unit} in {location} live in",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) live in {category_name}.",
          },
        ],
        total: {
          name: "All categories: Accommodation type",
          slug: "all-categories-accommodation-type",
          code: "QS402EW0001",
        },
      },
      {
        name: "Number of bedrooms",
        slug: "number-of-bedrooms",
        code: "QS411EW",
        desc: "The number of dedicated bedrooms in a home",
        units: "Households",
        categories: [
          {
            name: "No dedicated bedroom",
            slug: "no-dedicated-bedroom",
            code: "QS411EW0002",
            desc: "This type of home a home with no dedicated bedroom such as a bedsit or studio apartment.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "1 bedroom",
            slug: "1-bedroom",
            code: "QS411EW0003",
            desc: "This type of home has 1 dedicated bedroom.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "2 bedrooms",
            slug: "2-bedrooms",
            code: "QS411EW0004",
            desc: "This type of home has 2 dedicated bedrooms.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "3 bedrooms",
            slug: "3-bedrooms",
            code: "QS411EW0005",
            desc: "This type of home has 3 dedicated bedrooms.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "4 bedrooms",
            slug: "4-bedrooms",
            code: "QS411EW0006",
            desc: "This type of home has 4 dedicated bedrooms.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "5 or more bedrooms",
            slug: "5-or-more-bedrooms",
            code: "QS411EW0007",
            desc: "This type of home has 5 or more dedicated bedrooms.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
        ],
        total: {
          name: "All categories: Number of bedrooms",
          slug: "all-categories-number-of-bedrooms",
          code: "QS411EW0001",
        },
      },
      {
        name: "Owned or renting",
        slug: "owned-or-renting",
        code: "QS403EW",
        desc: "People that live in a home they rent or own.",
        units: "People",
        categories: [
          {
            name: "Owned homes",
            slug: "owned-homes",
            code: "QS403EW0002",
            desc: "This is a home where the home owner either owns the home outright, has a mortage or loan on the property.",
            category_h_pt2: "of {category_unit} in {location} live in",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) live in {category_name}.",
          },
          {
            name: "Shared ownership homes",
            slug: "shared-ownership-homes",
            code: "QS403EW0005",
            desc: "This is a home that is part rented and part owned.",
            category_h_pt2: "of {category_unit} in {location} live in",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) live in {category_name}.",
          },
          {
            name: "Social rented homes",
            slug: "social-rented-homes",
            code: "QS403EW0006",
            desc: "This is a home where the tenants pays rent to a local authority or housing association.",
            category_h_pt2: "of {category_unit} in {location} live in",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) live in {category_name}.",
          },
          {
            name: "Private rented homes",
            slug: "private-rented-homes",
            code: "QS403EW0009",
            desc: "This is a home where the tenants pay rent to a private landlord.",
            category_h_pt2: "of {category_unit} in {location} live in",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) live in {category_name}.",
          },
        ],
        total: {
          name: "All categories: Tenure",
          slug: "all-categories-tenure",
          code: "QS403EW0001",
        },
      },
      {
        name: "Car or van availability",
        slug: "car-or-van-availability",
        code: "QS416EW",
        desc: "People living in the same home that have use of or own a car or van.",
        units: "Households",
        categories: [
          {
            name: "No cars or vans available",
            slug: "no-cars-or-vans-available",
            code: "QS416EW0002",
            desc: "The people living in this home do not have a car or van available to use.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "1 car or van",
            slug: "1-car-or-van",
            code: "QS416EW0003",
            desc: "This is the number of cars or vans people living in the same home own or use.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) available.",
          },
          {
            name: "2 cars or vans",
            slug: "2-cars-or-vans",
            code: "QS416EW0004",
            desc: "This is the number of cars or vans people living in the same home own or use.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) available.",
          },
        ],
        total: {
          name: "All categories: Car or van availability",
          slug: "all-categories-car-or-van-availability",
          code: "QS416EW0001",
        },
      },
      {
        name: "Heating",
        slug: "heating",
        code: "QS415EW",
        desc: "Types of central heating available for use in the home.",
        units: "Households",
        categories: [
          {
            name: "No central heating",
            slug: "no-central-heating",
            code: "QS415EW0002",
            desc: "This home does not have central heating.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Gas central heating",
            slug: "gas-central-heating",
            code: "QS415EW0003",
            desc: "This central heating system is fuelled by gas and heats more than one room in a building.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Electric central heating (including storage heaters)",
            slug: "electric-central-heating-including-storage-heaters",
            code: "QS415EW0004",
            desc: "This central heating system is fuelled by electricity (inlcuding storage heaters) and heats more than one room in a building.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Oil central heating",
            slug: "oil-central-heating",
            code: "QS415EW0005",
            desc: "This central heating system is fuelled by oil heats more than one room in a building.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Solid fuel central heating (for example wood, coal)",
            slug: "solid-fuel-central-heating-for-example-wood-coal",
            code: "QS415EW0006",
            desc: "This central heating system is fuelled by a solid fuel such as wood or coal and heats more than one room in a building.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Other central heating",
            slug: "other-central-heating",
            code: "QS415EW0007",
            desc: "This central heating system is not fuelled by a solid fuel, oil, gas or electricity. It heats more than one room in a building.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Two or more types of central heating",
            slug: "two-or-more-types-of-central-heating",
            code: "QS415EW0008",
            desc: "This central heating system is has more than one fuel source and heats morte than one room in a building.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
        ],
        total: {
          name: "All categories: Type of central heating in household",
          slug: "all-categories-type-of-central-heating-in-household",
          code: "QS415EW0001",
        },
      },
      {
        name: "Residence type",
        slug: "residence-type",
        code: "QS101EW",
        desc: "Families and other groups living in the same home or communal establishment.",
        units: "People",
        categories: [
          {
            name: "Live in a household",
            slug: "live-in-a-household",
            code: "QS101EW0002",
            desc: "A place where people live alone or together",
            category_h_pt2: "of {category_unit} in {location}",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) {category_name}.",
          },
          {
            name: "Live in a communal establishment",
            slug: "live-in-a-communal-establishment",
            code: "QS101EW0003",
            desc: "A place that provides managed residential accommodation.",
            category_h_pt2: "of {category_unit} in {location}",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) {category_name}.",
          },
        ],
        total: {
          name: "All categories: Residence type",
          slug: "all-categories-residence-type",
          code: "QS101EW0001",
        },
      },
    ],
  },
  {
    name: "Identity",
    slug: "identity",
    desc: "How residents identify themselves and their beliefs.",
    variables: [
      {
        name: "Ethnicity",
        slug: "ethnicity",
        code: "QS201EW",
        desc: "People who feel they belong to an ethnic group.",
        units: "People",
        categories: [
          {
            name: "Asian/Asian British: Indian",
            slug: "asian-asian-british-indian",
            code: "QS201EW0010",
            desc: "People who identified themselves as belonging to this ethnic group.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are Asian/Asian British: Indian.",
          },
          {
            name: "Asian/Asian British: Pakistani",
            slug: "asian-asian-british-pakistani",
            code: "QS201EW0011",
            desc: "People who identified themselves as belonging to this ethnic group.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are Asian/Asian British: Pakistani.",
          },
          {
            name: "Asian/Asian British: Bangladeshi",
            slug: "asian-asian-british-bangladeshi",
            code: "QS201EW0012",
            desc: "People who identified themselves as belonging to this ethnic group.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are Asian/Asian British: Bangladeshi.",
          },
          {
            name: "Asian/Asian British: Chinese",
            slug: "asian-asian-british-chinese",
            code: "QS201EW0013",
            desc: "People who identified themselves as belonging to this ethnic group.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are Asian/Asian British: Chinese.",
          },
          {
            name: "Asian/Asian British: Other Asian",
            slug: "asian-asian-british-other-asian",
            code: "QS201EW0014",
            desc: "People who identified themselves as belonging to this ethnic group.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are Asian/Asian British: Other Asian.",
          },
          {
            name: "Black/African/Caribbean/Black British: African",
            slug: "black-african-caribbean-black-british-african",
            code: "QS201EW0015",
            desc: "People who identified themselves as belonging to this ethnic group.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are Black/African/Caribbean/Black British: African.",
          },
          {
            name: "Black/African/Caribbean/Black British: Caribbean",
            slug: "black-african-caribbean-black-british-caribbean",
            code: "QS201EW0016",
            desc: "People who identified themselves as belonging to this ethnic group.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are Black/African/Caribbean/Black British: Caribbean.",
          },
          {
            name: "Black/African/Caribbean/Black British: Other Black",
            slug: "black-african-caribbean-black-british-other-black",
            code: "QS201EW0017",
            desc: "People who identified themselves as belonging to this ethnic group.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are Black/African/Caribbean/Black British: Other Black.",
          },
          {
            name: "Mixed/multiple ethnic group: White and Black Caribbean",
            slug: "mixed-multiple-ethnic-group-white-and-black-caribbean",
            code: "QS201EW0006",
            desc: "People who identified themselves as belonging to this ethnic group.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are Mixed/multiple ethnic group: White and Black Caribbean.",
          },
          {
            name: "Mixed/multiple ethnic group: White and Black African",
            slug: "mixed-multiple-ethnic-group-white-and-black-african",
            code: "QS201EW0007",
            desc: "People who identified themselves as belonging to this ethnic group.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are Mixed/multiple ethnic group: White and Black African.",
          },
          {
            name: "Mixed/multiple ethnic group: White and Asian",
            slug: "mixed-multiple-ethnic-group-white-and-asian",
            code: "QS201EW0008",
            desc: "People who identified themselves as belonging to this ethnic group.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are Mixed/multiple ethnic group: White and Asian.",
          },
          {
            name: "Mixed/multiple ethnic group: Other Mixed",
            slug: "mixed-multiple-ethnic-group-other-mixed",
            code: "QS201EW0009",
            desc: "People who identified themselves as belonging to this ethnic group.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are Mixed/multiple ethnic group: Other Mixed.",
          },
          {
            name: "White: English/Welsh/Scottish/Northern Irish/British",
            slug: "white-english-welsh-scottish-northern-irish-british",
            code: "QS201EW0002",
            desc: "People who identified themselves as belonging to this ethnic group.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are White: English/Welsh/Scottish/Northern Irish/British.",
          },
          {
            name: "White: Irish",
            slug: "white-irish",
            code: "QS201EW0003",
            desc: "People who identified themselves as belonging to this ethnic group.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are White: Irish.",
          },
          {
            name: "White: Gypsy or Irish Traveller",
            slug: "white-gypsy-or-irish-traveller",
            code: "QS201EW0004",
            desc: "People who identified themselves as belonging to this ethnic group.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are White: Gypsy or Irish Traveller.",
          },
          {
            name: "White: Other White",
            slug: "white-other-white",
            code: "QS201EW0005",
            desc: "People who identified themselves as belonging to this ethnic group.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are White: Other White.",
          },
          {
            name: "Other ethnic group: Arab",
            slug: "other-ethnic-group-arab",
            code: "QS201EW0018",
            desc: "People who identified themselves as belonging to this ethnic group.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are other ethnic group: Arab.",
          },
          {
            name: "Other ethnic group: Any other ethnic group",
            slug: "other-ethnic-group-any-other-ethnic-group",
            code: "QS201EW0019",
            desc: "People who identified themselves as belonging to this ethnic group.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are other ethnic group: Any other ethnic group.",
          },
        ],
        total: {
          name: "All categories: Ethnic group",
          slug: "all-categories-ethnic-group",
          code: "QS201EW0001",
        },
      },
      {
        name: "Ethnic groups living together",
        slug: "ethnic-groups-living-together",
        code: "QS202EW",
        desc: "The mixture of ethnic groups in a single household.",
        units: "Households",
        categories: [
          {
            name: "All household members from the same ethnic group",
            slug: "all-household-members-from-the-same-ethnic-group",
            code: "QS202EW0003",
            desc: "Households where all members are from the same ethnic group.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Different ethnic groups between the generations only",
            slug: "different-ethnic-groups-between-the-generations-only",
            code: "QS202EW0004",
            desc: "Households where the members are not the the same between generations.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Different ethnic groups within partnerships",
            slug: "different-ethnic-groups-within-partnerships",
            code: "QS202EW0005",
            desc: "Households where the members in a partnership are from different ethnic groups.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Any other combination of multiple ethnic groups",
            slug: "any-other-combination-of-multiple-ethnic-groups",
            code: "QS202EW0006",
            desc: "Households where there are other combinations of multiple ethnic groups.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have other combination of multiple ethnic groups.",
          },
        ],
        total: {
          name: "All categories: Multiple ethnic groups",
          slug: "all-categories-multiple-ethnic-groups",
          code: "QS202EW0001",
        },
      },
      {
        name: "Religion and beliefs",
        slug: "religion-and-beliefs",
        code: "QS208EW",
        desc: "People's religion and beliefs.",
        units: "People",
        topic_page_cat_desc: "People who practice, have religious beliefs or no religion.",
        categories: [
          {
            name: "No religion",
            slug: "no-religion",
            code: "QS208EW0009",
            desc: "People who they neither practice or identify with in any religion.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
          {
            name: "Christian",
            slug: "christian",
            code: "QS208EW0002",
            desc: "This is someone who identify with as Christian whether they practice or have belief in it.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "Buddhist",
            slug: "buddhist",
            code: "QS208EW0003",
            desc: "This is someone who identify with as Buddhist whether they practice or have belief in it.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "Hindu",
            slug: "hindu",
            code: "QS208EW0004",
            desc: "This is someone who identify with as Hindu whether they practice or have belief in it.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "Jewish",
            slug: "jewish",
            code: "QS208EW0005",
            desc: "This is someone who identify with as Jewish whether they practice or have belief in it.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "Muslim",
            slug: "muslim",
            code: "QS208EW0006",
            desc: "This is someone who identify with as Muslim whether they practice or have belief in it.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "Sikh",
            slug: "sikh",
            code: "QS208EW0007",
            desc: "This is someone who identify with as Sikh whether they practice or have belief in it.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "Other religion",
            slug: "other-religion",
            code: "QS208EW0008",
            desc: "This is someone who identify with as another religion whether they practice or have belief in it.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) do not follow one of the main religions.",
          },
          {
            name: "Not stated",
            slug: "not-stated",
            code: "QS208EW0010",
            desc: "This is someone who has chosen to mot state their religion or beliefs.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name} their religion.",
          },
        ],
        total: {
          name: "All categories: Religion",
          slug: "all-categories-religion",
          code: "QS208EW0001",
        },
      },
      {
        name: "Country of birth",
        slug: "country-of-birth",
        code: "QS203EW",
        desc: "People born in or outside the UK.",
        units: "People",
        categories: [
          {
            name: "Europe, United Kingdom",
            slug: "europe-united-kingdom",
            code: "QS203EW0003",
            desc: "People born in the UK and Northern Ireland.",
            category_h_pt2: "of {category_unit} in {location} were born in",
            category_h_pt3: "The United Kingdom",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) were born in The United Kingdom.",
          },
          {
            name: "Europe, Ireland",
            slug: "europe-ireland",
            code: "QS203EW0014",
            desc: "People born in Ireland.",
            category_h_pt2: "of {category_unit} in {location} were born in",
            category_h_pt3: "Ireland",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) were born in Ireland",
          },
          {
            name: "Other Europe",
            slug: "other-europe",
            code: "QS203EW0015",
            desc: "People born in Mainland Europe.",
            category_h_pt2: "of {category_unit} in {location} were born in",
            category_h_pt3: "Europe (excluding The United Kingdom or Ireland).",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) were born in Europe (excluding The United Kingdom or Ireland).",
          },
          {
            name: "Africa",
            slug: "africa",
            code: "QS203EW0032",
            desc: "People born in Africa",
            category_h_pt2: "of {category_unit} in {location} were born in",
            category_h_pt3: "Africa",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) were born in Africa.",
          },
          {
            name: "Middle East and Asia",
            slug: "middle-east-and-asia",
            code: "QS203EW0045",
            desc: "People born in the Middle East and Asia",
            category_h_pt2: "of {category_unit} in {location} were born in",
            category_h_pt3: "the Middle East or Asia",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) were born in the Middle East or Asia.",
          },
          {
            name: "The Americas and the Caribbean",
            slug: "the-americas-and-the-caribbean",
            code: "QS203EW0063",
            desc: "People born in North and South America and the Caribbean.",
            category_h_pt2: "of {category_unit} in {location} were born in",
            category_h_pt3: "North and South America or the Caribbean.",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) were born in North and South America or the Caribbean.",
          },
        ],
        total: {
          name: "All categories: Country of birth",
          slug: "all-categories-country-of-birth",
          code: "QS203EW0001",
        },
      },
      {
        name: "Understand, speak, read or write Welsh",
        slug: "understand-speak-read-or-write-welsh",
        code: "KS207WA",
        desc: "People that speak, read or write Welsh.",
        units: "People",
        categories: [
          {
            name: "Can understand spoken Welsh only",
            slug: "can-understand-spoken-welsh-only",
            code: "KS207WA0003",
            desc: "People that can understand spoken Welsh but cannot read or write it.",
            category_h_pt2: "of {category_unit} in {location}",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) {category_name}.",
          },
          {
            name: "Can speak, read or write Welsh",
            slug: "can-speak-read-or-write-welsh",
            code: "KS207WA0007",
            desc: "People that can speak, read or write Welsh.",
            category_h_pt2: "of {category_unit} in {location}",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) {category_name}.",
          },
          {
            name: "No Welsh skills",
            slug: "no-welsh-skills",
            code: "KS207WA0002",
            desc: "People that cannot read, write, speak Welsh.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have {category_name}.",
          },
        ],
        total: {
          name: "All usual residents aged 3 and over",
          slug: "all-usual-residents-aged-3-and-over",
          code: "KS207WA0001",
        },
      },
      {
        name: "Household deprivation",
        slug: "household-deprivation",
        code: "QS119EW",
        desc: "Households that are deprived in the 4 dimentions of: Employment, Education, Health and disability, and Household overcrowding",
        units: "Households",
        categories: [
          {
            name: "Not deprived in any dimension",
            slug: "not-deprived-in-any-dimension",
            code: "QS119EW0002",
            desc: "These households are not deprived in any of the recognised dimensions.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "Deprived in 1 dimension",
            slug: "deprived-in-1-dimension",
            code: "QS119EW0003",
            desc: "These households are deprived in 1 of the 4 dimensions.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "Deprived in 2 dimensions",
            slug: "deprived-in-2-dimensions",
            code: "QS119EW0004",
            desc: "These households are deprived in 2 of the 4 dimensions.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "Deprived in 3 dimensions",
            slug: "deprived-in-3-dimensions",
            code: "QS119EW0005",
            desc: "These households are deprived in 3 of the 4 dimensions.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "Deprived in 4 dimensions",
            slug: "deprived-in-4-dimensions",
            code: "QS119EW0006",
            desc: "These households are deprived in all 4 dimensions.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
        ],
        total: {
          name: "All categories: Classification of household deprivation",
          slug: "all-categories-classification-of-household-deprivation",
          code: "QS119EW0001",
        },
      },
    ],
  },
  {
    name: "Population",
    slug: "population",
    desc: "Residents and their living arrangements.",
    variables: [
      {
        name: "Marital status",
        slug: "marital-status",
        code: "KS103EW",
        desc: "People married of in civil partnerships.",
        units: "People",
        categories: [
          {
            name: "Single never married or in a civil partnership",
            slug: "single-never-married-or-in-a-civil-partnership",
            code: "KS103EW0002",
            desc: "Households where the members are single and have never been married or in a civil partnership.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "Married",
            slug: "married",
            code: "KS103EW0003",
            desc: "Households where the members are married.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "In a registered civil partnership",
            slug: "in-a-registered-civil-partnership",
            code: "KS103EW0004",
            desc: "Households where the members are in a registered civil partnership..",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "Separated (but still legally married)",
            slug: "separated-but-still-legally-married",
            code: "KS103EW0005",
            desc: "Households where the members are separated but still legally married.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "Divorced or civil partnership dissolved",
            slug: "divorced-or-civil-partnership-dissolved",
            code: "KS103EW0006",
            desc: "Households where the members are either divorced or a civil partnership has been dissolved.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "Widowed or surviving civil partnership partner",
            slug: "widowed-or-surviving-civil-partnership-partner",
            code: "KS103EW0007",
            desc: "Households where the members widowed or a surviving civil partner.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
        ],
        total: {
          name: "All categories: Marital and civil partnership status",
          slug: "all-categories-marital-and-civil-partnership-status",
          code: "KS103EW0001",
        },
      },
      {
        name: "Families living in the same home",
        slug: "families-living-in-the-same-home",
        code: "QS113EW",
        desc: "Types of families living in the same home.",
        units: "Households",
        categories: [
          {
            name: "One person households",
            slug: "one-person-households",
            code: "QS113EW0002",
            desc: "One person household is when someone lives on their own.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "Single family households",
            slug: "single-family-households",
            code: "QS113EW0005",
            desc: "Single family household is when one family live in the same home",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
        ],
        total: {
          name: "All categories: Household composition",
          slug: "all-categories-household-composition",
          code: "QS113EW0001",
        },
      },
      {
        name: "Length of time people have lived in the UK",
        slug: "length-of-time-people-have-lived-in-the-uk",
        code: "QS803EW",
        desc: "People born or have moved to the UK .",
        units: "People",
        topic_page_cat_desc: "This is the length of time someone who was not born in the UK has recently lived here.",
        categories: [
          {
            name: "Born in the UK",
            slug: "born-in-the-uk",
            code: "QS803EW0002",
            desc: "People born in the UK or have emigrated and have returned.",
            category_h_pt2: "of {category_unit} in {location} were",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) were {category_name}.",
          },
          {
            name: "Less than 2 years",
            slug: "less-than-2-years",
            code: "QS803EW0003",
            desc: "This is the length of time someone who was not born in the UK has recently lived here.",
            category_h_pt2: "of {category_unit} in {location} have lived in the UK",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have lived in the UK {category_name}.",
          },
          {
            name: "2 to 4 years",
            slug: "2-to-4-years",
            code: "QS803EW0004",
            desc: "This is the length of time someone who was not born in the UK has recently lived here.",
            category_h_pt2: "of {category_unit} in {location} have lived in the UK",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have lived in the UK {category_name}.",
          },
          {
            name: "5 to 9 years",
            slug: "5-to-9-years",
            code: "QS803EW0005",
            desc: "This is the length of time someone who was not born in the UK has recently lived here.",
            category_h_pt2: "of {category_unit} in {location} have lived in the UK",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have lived in the UK {category_name}.",
          },
          {
            name: "10 years or more",
            slug: "10-years-or-more",
            code: "QS803EW0006",
            desc: "This is the length of time someone who was not born in the UK has recently lived here.",
            category_h_pt2: "of {category_unit} in {location} have lived in the UK",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) have lived in the UK {category_name}.",
          },
        ],
        total: {
          name: "All categories: Length of residence in the UK",
          slug: "all-categories-length-of-residence-in-the-uk",
          code: "QS803EW0001",
        },
      },
    ],
  },
  {
    name: "Work",
    slug: "work",
    desc: "Residents employment status.",
    variables: [
      {
        name: "Economic activity",
        slug: "economic-activity",
        code: "QS601EW",
        desc: "People who are in work, starting work, looking for or do not work.",
        units: "People",
        topic_page_cat_desc: "People who are in work, starting work, looking for or do not work.",
        categories: [
          {
            name: "Economically active",
            slug: "economically-active",
            code: "QS601EW0002",
            desc: "Anyone aged 16 years and over was economically active if they were employed, waiting to start work or looking for work at the time of the census.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
          {
            name: "Economically inactive",
            slug: "economically-inactive",
            code: "QS601EW0011",
            desc: "Economically inactive people did not have a job, had not looked for work or could not start work at the time of the census.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) are {category_name}.",
          },
        ],
        total: {
          name: "All categories: Economic activity",
          slug: "all-categories-economic-activity",
          code: "QS601EW0001",
        },
      },
      {
        name: "Working hours",
        slug: "working-hours",
        code: "QS604EW",
        desc: "Hours people work per week.",
        units: "People",
        topic_page_cat_desc:
          "The number of hours someone aged 16 to 74 years in employment worked in their job or their last job.",
        categories: [
          {
            name: "Part-time",
            slug: "part-time",
            code: "QS604EW0002",
            desc: "These are people that work between 15 and 30 hours per week.",
            category_h_pt2: "of {category_unit} in {location} work",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) work {category_name}.",
          },
          {
            name: "Full-time",
            slug: "full-time",
            code: "QS604EW0005",
            desc: "These are people that work a minimum of 31 hours per week.",
            category_h_pt2: "of {category_unit} in {location} work",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) work {category_name}.",
          },
        ],
        total: {
          name: "All categories: Hours worked",
          slug: "all-categories-hours-worked",
          code: "QS604EW0001",
        },
      },
      {
        name: "Job",
        slug: "job",
        code: "KS608EW",
        desc: "The types of jobs people do or did?",
        units: "People",
        topic_page_cat_desc:
          "This is what someone does as their main job. It is based on their job title or details of the activities they do in their job.",
        categories: [
          {
            name: "Managers, directors and senior officials",
            slug: "managers-directors-and-senior-officials",
            code: "KS608EW0002",
            desc: "People whose work activities or job title are a manager, director or senior official in their main job.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) work as {category_name}.",
          },
          {
            name: "Professional occupations",
            slug: "professional-occupations",
            code: "KS608EW0003",
            desc: "People whose work activities or job title are a professional in their main job.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) work in {category_name}.",
          },
          {
            name: "Associate professionals and technical occupations",
            slug: "associate-professionals-and-technical-occupations",
            code: "KS608EW0004",
            desc: "People whose work activities at or job titles are associate or technical professionals in their main job.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) work in {category_name}.",
          },
          {
            name: "Administrative and secretarial occupations",
            slug: "administrative-and-secretarial-occupations",
            code: "KS608EW0005",
            desc: "People whose work activities or job titles are administrative or secretarial in their main job.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) work in {category_name}.",
          },
          {
            name: "Process, plant and machine operatives",
            slug: "process-plant-and-machine-operatives",
            code: "KS608EW0009",
            desc: "People whose work activities or job titles are process, plant and machine operative in their main job.",
            category_h_pt2: "of {category_unit} in {location} are",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) work as {category_name}.",
          },
          {
            name: "Unskilled or semi-skilled occupations",
            slug: "unskilled-or-semi-skilled-occupations",
            code: "KS608EW0010",
            desc: "People whose work activities or job titles are unskilled or semi-skilled in their main job.",
            category_h_pt2: "of {category_unit} in {location} have",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) work in {category_name}.",
          },
        ],
        total: {
          name: "All categories: Occupation",
          slug: "all-categories-occupation",
          code: "KS608EW0001",
        },
      },
      {
        name: "Travel to work",
        slug: "travel-to-work",
        code: "QS701EW",
        desc: "Types of transport people use to travel to work.",
        units: "People",
        topic_page_cat_desc:
          "This is the type of transport someone uses for the longest part by distance of their journey to their main job.",
        categories: [
          {
            name: "Work mainly from home",
            slug: "work-mainly-from-home",
            code: "QS701EW0002",
            desc: "People that mainly work from home so do not travel to work for their main job.",
            category_h_pt2: "of {category_unit} in {location}",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) {category_name}.",
          },
          {
            name: "London Underground, metro, light rail, tram",
            slug: "london-underground-metro-light-rail-tram",
            code: "QS701EW0003",
            desc: "People that use London Underground (the tube), metro, light rail or tram for the longest, part by, distance of their journey to their main job.",
            category_h_pt2: "of {category_unit} in {location} travel to work by",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) travel to work by {category_name}.",
          },
          {
            name: "Train",
            slug: "train",
            code: "QS701EW0004",
            desc: "People that use a train for the longest part, by distance, of their journey to their main job.",
            category_h_pt2: "of {category_unit} in {location} travel to work by",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) travel to work by {category_name}.",
          },
          {
            name: "Bus, minibus or coach",
            slug: "bus-minibus-or-coach",
            code: "QS701EW0005",
            desc: "People that use a bus, minibus or coach for the longest part, by distance, of their journey to their main job.",
            category_h_pt2: "of {category_unit} in {location} travel to work by",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) travel to work by {category_name}.",
          },
          {
            name: "Motorcycle, scooter or moped",
            slug: "motorcycle-scooter-or-moped",
            code: "QS701EW0007",
            desc: "People that use a motorcycle, scooter or moped for the longest part, by distance, of their journey to their main job.",
            category_h_pt2: "of {category_unit} in {location} travel to work by",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) travel to work by {category_name}.",
          },
          {
            name: "Bicycle",
            slug: "bicycle",
            code: "QS701EW0010",
            desc: "People that use a bicyle for the longest part, by distance, of their journey to their main job.",
            category_h_pt2: "of {category_unit} in {location} travel to work by",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) travel to work by {category_name}.",
          },
          {
            name: "Walk",
            slug: "walk",
            code: "QS701EW0011",
            desc: "People that walk for the longest part, by distance, of their journey to their main job.",
            category_h_pt2: "of {category_unit} in {location}",
            category_h_pt3: "walk to work",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) walk to work.",
          },
          {
            name: "Other",
            slug: "other",
            code: "QS701EW0012",
            desc: "People that use other means of transport for the longest part by distance of their journey to their main job.",
            category_h_pt2: "of {category_unit} in {location} travel to work by",
            category_h_pt3: "alternative methods",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) travel to work using alternative methods of transport such as ferry.",
          },
        ],
        total: {
          name: "All categories: Method of travel to work",
          slug: "all-categories-method-of-travel-to-work",
          code: "QS701EW0001",
        },
      },
      {
        name: "Distance travelled to work",
        slug: "distance-travelled-to-work",
        code: "QS702EW",
        desc: "The daily distance travelled to work.",
        units: "People",
        topic_page_cat_desc: "The total distance people travel to their man job.",
        categories: [
          {
            name: "Less than 2km",
            slug: "less-than-2km",
            code: "QS702EW0002",
            desc: "People that travel less than 2 km (1.25 miles) to their main job.",
            category_h_pt2: "of {category_unit}s in {location} {variable_name} is",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) travel {category_name} to work.",
          },
          {
            name: "2km to less than 5km",
            slug: "2km-to-less-than-5km",
            code: "QS702EW0003",
            desc: "People that travel between 2 km (1.25 miles) and 5 km (3.10 miles) to their main job.",
            category_h_pt2: "of {category_unit}s in {location} {variable_name} is",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) travel between 2 km (1.25 miles) and 5 km (3.10 miles) to their main job.",
          },
          {
            name: "5km to less than 10km",
            slug: "5km-to-less-than-10km",
            code: "QS702EW0004",
            desc: "People that travel between 5 km (3.10 miles) and 10 km (6.21 miles) to their main job.",
            category_h_pt2: "of {category_unit}s in {location} {variable_name} is",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) travel between 5 km (3.10 miles) and 10 km (6.21 miles) to their main job.",
          },
          {
            name: "10km to less than 20km",
            slug: "10km-to-less-than-20km",
            code: "QS702EW0005",
            desc: "People that travel between 10 km (6.21 miles) and 20 km (12.42 miles) to their main job.",
            category_h_pt2: "of {category_unit}s in {location} {variable_name} is",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) travel between 10 km (6.21 miles) and 20 km (12.42 miles) to their main job.",
          },
          {
            name: "20km to less than 30km",
            slug: "20km-to-less-than-30km",
            code: "QS702EW0006",
            desc: "People that travel between 20 km (12.42 miles) and 30 km (18.64 miles) to their main job.",
            category_h_pt2: "of {category_unit}s in {location} {variable_name} is",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) travel between 20 km (12.42 miles) and 30 km (18.64 miles) to their main job.",
          },
          {
            name: "30km to less than 40km",
            slug: "30km-to-less-than-40km",
            code: "QS702EW0007",
            desc: "People that travel between 30 km (18.64 miles) and 40 km (24.85 miles) to their main job.",
            category_h_pt2: "of {category_unit}s in {location} {variable_name} is",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) travel between 30 km (18.64 miles) and 40 km (24.85 miles) to their main job.",
          },
          {
            name: "40km to less than 60km",
            slug: "40km-to-less-than-60km",
            code: "QS702EW0008",
            desc: "People that travel between 40 km (24.85 miles) and 60 km (37.28 miles) to their main job.",
            category_h_pt2: "of {category_unit}s in {location} {variable_name} is",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage})travel between 40 km (24.85 miles) and 60 km (37.28 miles) to their main job.",
          },
          {
            name: "60km and over",
            slug: "60km-and-over",
            code: "QS702EW0009",
            desc: "People that travel over 60 km (37.28 miles) to their main job.",
            category_h_pt2: "of {category_unit}s in {location} {variable_name} is",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) travel over 60 km (37.28 miles) to their main job.",
          },
          {
            name: "Mainly work from home",
            slug: "mainly-work-from-home",
            code: "QS702EW0010",
            desc: "People that mainly work from home so do not travel to work for their main job.",
            category_h_pt2: "of {category_unit}s in {location} {variable_name}",
            category_h_pt3: "{category_name}",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) work from home.",
          },
          {
            name: "Other",
            slug: "other",
            code: "QS702EW0011",
            desc: "People that neither travel to work or work from home.",
            category_h_pt2: "of {category_unit}s in {location}",
            category_h_pt3: "work offshore, outside of UK or at no fixed location",
            cat_location_summary_pt2:
              "Out of {category_total} {category_unit} in {location}, {category_value} ({category_percentage}%) either have no fixed place of work, work on an offshore installation or work outside of the UK.",
          },
        ],
        total: {
          name: "All categories: Distance travelled to work",
          slug: "all-categories-distance-travelled-to-work",
          code: "QS702EW0001",
        },
      },
    ],
  },
];
