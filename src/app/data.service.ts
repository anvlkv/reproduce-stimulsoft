import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public r = `{
    "ReportVersion": "2018.3.4",
    "ReportGuid": "d91c3aeff574fa58de9bff82ddfdb7d7",
    "ReportName": "Report",
    "ReportAlias": "Simple List",
    "ReportFile": "Report.mrt",
    "ReportAuthor": "Stimulsoft",
    "ReportDescription": "This sample demonstrates how to create a simple list report.",
    "ReportCreated": "/Date(0+0100)/",
    "ReportChanged": "/Date(0+0100)/",
    "EngineVersion": "EngineV2",
    "CalculationMode": "Interpretation",
    "ReportUnit": "HundredthsOfInch",
    "Styles": {
      "0": {
        "Ident": "StiStyle",
        "Name": "Header2",
        "HorAlignment": "Center",
        "VertAlignment": "Center",
        "Font": "Segoe UI;21.75;Bold;",
        "Border": "Bottom;158,158,158;;;;;;solid:Black",
        "Brush": "solid:Transparent",
        "TextBrush": "solid:158,158,158"
      },
      "1": {
        "Ident": "StiStyle",
        "Name": "Header3",
        "HorAlignment": "Center",
        "VertAlignment": "Center",
        "Font": "Segoe UI;12;Bold;",
        "Border": "Left;White;;;;;;solid:Black",
        "Brush": "solid:77,182,172",
        "TextBrush": "solid:255,255,255",
        "AllowUseBorderFormatting": false
      },
      "2": {
        "Ident": "StiStyle",
        "Name": "Data1",
        "VertAlignment": "Center",
        "Font": "Segoe UI;9.75;;",
        "Border": ";182,182,182;;;;;;solid:Black",
        "Brush": "solid:Transparent",
        "TextBrush": "solid:74,74,74"
      },
      "3": {
        "Ident": "StiStyle",
        "Name": "Data2",
        "Font": "Segoe UI;9.75;;",
        "Border": ";255,255,255;;;;;;solid:Black",
        "Brush": "solid:224,242,241",
        "TextBrush": "solid:74,74,74"
      },
      "4": {
        "Ident": "StiStyle",
        "Name": "Footer2",
        "HorAlignment": "Right",
        "VertAlignment": "Center",
        "Font": "Segoe UI;9.75;;",
        "Border": ";58,78,94;;;;;;solid:Black",
        "Brush": "solid:Transparent",
        "TextBrush": "solid:158,158,158",
        "AllowUseBorderSides": false
      }
    },
    "Dictionary": {
      "DataSources": {
        "0": {
          "Ident": "StiDataTableSource",
          "Name": "Customers",
          "Alias": "Customers",
          "Columns": {
            "0": {
              "Name": "Address",
              "Index": -1,
              "NameInSource": "Address",
              "Alias": "Address",
              "Type": "System.String"
            },
            "1": {
              "Name": "City",
              "Index": -1,
              "NameInSource": "City",
              "Alias": "City",
              "Type": "System.String"
            },
            "2": {
              "Name": "CompanyName",
              "Index": -1,
              "NameInSource": "CompanyName",
              "Alias": "CompanyName",
              "Type": "System.String"
            },
            "3": {
              "Name": "ContactName",
              "Index": -1,
              "NameInSource": "ContactName",
              "Alias": "ContactName",
              "Type": "System.String"
            },
            "4": {
              "Name": "ContactTitle",
              "Index": -1,
              "NameInSource": "ContactTitle",
              "Alias": "ContactTitle",
              "Type": "System.String"
            },
            "5": {
              "Name": "Country",
              "Index": -1,
              "NameInSource": "Country",
              "Alias": "Country",
              "Type": "System.String"
            },
            "6": {
              "Name": "CustomerID",
              "Index": -1,
              "NameInSource": "CustomerID",
              "Alias": "CustomerID",
              "Type": "System.String"
            },
            "7": {
              "Name": "Fax",
              "Index": -1,
              "NameInSource": "Fax",
              "Alias": "Fax",
              "Type": "System.String"
            },
            "8": {
              "Name": "Phone",
              "Index": -1,
              "NameInSource": "Phone",
              "Alias": "Phone",
              "Type": "System.String"
            },
            "9": {
              "Name": "PostalCode",
              "Index": -1,
              "NameInSource": "PostalCode",
              "Alias": "PostalCode",
              "Type": "System.String"
            },
            "10": {
              "Name": "Region",
              "Index": -1,
              "NameInSource": "Region",
              "Alias": "Region",
              "Type": "System.String"
            }
          },
          "NameInSource": "Demo.Customers"
        },
        "1": {
          "Ident": "StiDataTableSource",
          "Name": "parse",
          "Alias": "parse",
          "Columns": {
            "0": {
              "Name": "DocumentState",
              "Index": -1,
              "NameInSource": "DocumentState",
              "Alias": "DocumentState",
              "Type": "System.String"
            },
            "1": {
              "Name": "Duration",
              "Index": -1,
              "NameInSource": "Duration",
              "Alias": "Duration",
              "Type": "System.Decimal"
            },
            "2": {
              "Name": "Entries",
              "Index": -1,
              "NameInSource": "Entries",
              "Alias": "Entries",
              "Type": "System.String"
            },
            "3": {
              "Name": "Format",
              "Index": -1,
              "NameInSource": "Format",
              "Alias": "Format",
              "Type": "System.String"
            },
            "4": {
              "Name": "Message",
              "Index": -1,
              "NameInSource": "Message",
              "Alias": "Message",
              "Type": "System.String"
            },
            "5": {
              "Name": "Success",
              "Index": -1,
              "NameInSource": "Success",
              "Alias": "Success",
              "Type": "System.Boolean"
            },
            "6": {
              "Name": "title",
              "Index": -1,
              "NameInSource": "title",
              "Alias": "title",
              "Type": "System.String"
            },
            "7": {
              "Name": "type",
              "Index": -1,
              "NameInSource": "type",
              "Alias": "type",
              "Type": "System.Decimal"
            }
          },
          "NameInSource": "import report CoffeePot.CSV 2018-07-02T13-29-00-317Z.parse"
        },
        "2": {
          "Ident": "StiDataTableSource",
          "Name": "parse_Entries",
          "Alias": "parse_Entries",
          "Columns": {
            "0": {
              "Name": "EntityErrors",
              "Index": -1,
              "NameInSource": "EntityErrors",
              "Alias": "EntityErrors",
              "Type": "System.String"
            },
            "1": {
              "Name": "EntityInfo",
              "Index": -1,
              "NameInSource": "EntityInfo",
              "Alias": "EntityInfo",
              "Type": "System.String"
            },
            "2": {
              "Name": "ExistingEntityCount",
              "Index": -1,
              "NameInSource": "ExistingEntityCount",
              "Alias": "ExistingEntityCount",
              "Type": "System.Decimal"
            },
            "3": {
              "Name": "MissingEntities",
              "Index": -1,
              "NameInSource": "MissingEntities",
              "Alias": "MissingEntities",
              "Type": "System.String"
            },
            "4": {
              "Name": "MissingEntityCount",
              "Index": -1,
              "NameInSource": "MissingEntityCount",
              "Alias": "MissingEntityCount",
              "Type": "System.Decimal"
            },
            "5": {
              "Name": "NewEntities",
              "Index": -1,
              "NameInSource": "NewEntities",
              "Alias": "NewEntities",
              "Type": "System.String"
            },
            "6": {
              "Name": "NewEntityCount",
              "Index": -1,
              "NameInSource": "NewEntityCount",
              "Alias": "NewEntityCount",
              "Type": "System.Decimal"
            },
            "7": {
              "Name": "Type",
              "Index": -1,
              "NameInSource": "Type",
              "Alias": "Type",
              "Type": "System.String"
            },
            "8": {
              "Name": "ValueErrors",
              "Index": -1,
              "NameInSource": "ValueErrors",
              "Alias": "ValueErrors",
              "Type": "System.String"
            },
            "9": {
              "Name": "ValueWarnings",
              "Index": -1,
              "NameInSource": "ValueWarnings",
              "Alias": "ValueWarnings",
              "Type": "System.String"
            },
            "10": {
              "Name": "hidden",
              "Index": -1,
              "NameInSource": "hidden",
              "Alias": "hidden",
              "Type": "System.Boolean"
            },
            "11": {
              "Name": "relationId",
              "Index": -1,
              "NameInSource": "relationId",
              "Alias": "relationId",
              "Type": "System.String"
            }
          },
          "NameInSource": "import report CoffeePot.CSV 2018-07-02T13-29-00-317Z.parse_Entries"
        },
        "3": {
          "Ident": "StiDataTableSource",
          "Name": "parse_Entries_EntityErrors",
          "Alias": "parse_Entries_EntityErrors",
          "Columns": {
            "0": {
              "Name": "relationId",
              "Index": -1,
              "NameInSource": "relationId",
              "Alias": "relationId",
              "Type": "System.String"
            },
            "1": {
              "Name": "value",
              "Index": -1,
              "NameInSource": "value",
              "Alias": "value",
              "Type": "System.String"
            }
          },
          "NameInSource": "import report CoffeePot.CSV 2018-07-02T13-29-00-317Z.parse_Entries_EntityErrors"
        },
        "4": {
          "Ident": "StiDataTableSource",
          "Name": "parse_Entries_ValueErrors",
          "Alias": "parse_Entries_ValueErrors",
          "Columns": {
            "0": {
              "Name": "relationId",
              "Index": -1,
              "NameInSource": "relationId",
              "Alias": "relationId",
              "Type": "System.String"
            }
          },
          "NameInSource": "import report CoffeePot.CSV 2018-07-02T13-29-00-317Z.parse_Entries_ValueErrors"
        },
        "5": {
          "Ident": "StiDataTableSource",
          "Name": "parse_Entries_ValueWarnings",
          "Alias": "parse_Entries_ValueWarnings",
          "Columns": {
            "0": {
              "Name": "relationId",
              "Index": -1,
              "NameInSource": "relationId",
              "Alias": "relationId",
              "Type": "System.String"
            }
          },
          "NameInSource": "import report CoffeePot.CSV 2018-07-02T13-29-00-317Z.parse_Entries_ValueWarnings"
        },
        "6": {
          "Ident": "StiSqlSource",
          "Name": "SurveysCategoriesQuestions",
          "Alias": "SurveysCategoriesQuestions",
          "Columns": {
            "0": {
              "Name": "SurveyCategoryName",
              "Index": -1,
              "NameInSource": "SurveyCategoryName",
              "Alias": "SurveyCategoryName",
              "Type": "System.String"
            },
            "1": {
              "Name": "SurveyCategoryQuestionName",
              "Index": -1,
              "NameInSource": "SurveyCategoryQuestionName",
              "Alias": "SurveyCategoryQuestionName",
              "Type": "System.String"
            },
            "2": {
              "Name": "SurveyCategoryQuestionText",
              "Index": -1,
              "NameInSource": "SurveyCategoryQuestionText",
              "Alias": "SurveyCategoryQuestionText",
              "Type": "System.String"
            },
            "3": {
              "Name": "SurveyCategoryQuestionsId",
              "Index": -1,
              "NameInSource": "SurveyCategoryQuestionsId",
              "Alias": "SurveyCategoryQuestionsId",
              "Type": "System.String"
            },
            "4": {
              "Name": "SurveyCategoryQuestionsVersionNumber",
              "Index": -1,
              "NameInSource": "SurveyCategoryQuestionsVersionNumber",
              "Alias": "SurveyCategoryQuestionsVersionNumber",
              "Type": "System.Int32"
            },
            "5": {
              "Name": "SurveyId",
              "Index": -1,
              "NameInSource": "SurveyId",
              "Alias": "SurveyId",
              "Type": "System.String"
            },
            "6": {
              "Name": "SurveyName",
              "Index": -1,
              "NameInSource": "SurveyName",
              "Alias": "SurveyName",
              "Type": "System.String"
            }
          },
          "NameInSource": "Connection",
          "SqlCommand": "select * from SurveysCategoriesQuestions"
        },
        "7": {
          "Ident": "StiSqlSource",
          "Name": "SurveysCategoriesQuestionsAnswers",
          "Alias": "SurveysCategoriesQuestionsAnswers",
          "Columns": {
            "0": {
              "Name": "AnswerValue",
              "Index": -1,
              "NameInSource": "AnswerValue",
              "Alias": "AnswerValue",
              "Type": "System.String"
            },
            "1": {
              "Name": "ColumnTitle",
              "Index": -1,
              "NameInSource": "ColumnTitle",
              "Alias": "ColumnTitle",
              "Type": "System.String"
            },
            "2": {
              "Name": "GridQuestionColumnId",
              "Index": -1,
              "NameInSource": "GridQuestionColumnId",
              "Alias": "GridQuestionColumnId",
              "Type": "System.String"
            },
            "3": {
              "Name": "GridQuestionColumnVersionNumber",
              "Index": -1,
              "NameInSource": "GridQuestionColumnVersionNumber",
              "Alias": "GridQuestionColumnVersionNumber",
              "Type": "System.Int32"
            },
            "4": {
              "Name": "GridQuestionRowId",
              "Index": -1,
              "NameInSource": "GridQuestionRowId",
              "Alias": "GridQuestionRowId",
              "Type": "System.String"
            },
            "5": {
              "Name": "GridQuestionRowVersionNumber",
              "Index": -1,
              "NameInSource": "GridQuestionRowVersionNumber",
              "Alias": "GridQuestionRowVersionNumber",
              "Type": "System.Int32"
            },
            "6": {
              "Name": "IsAnswered",
              "Index": -1,
              "NameInSource": "IsAnswered",
              "Alias": "IsAnswered",
              "Type": "System.Int16"
            },
            "7": {
              "Name": "SurveyId",
              "Index": -1,
              "NameInSource": "SurveyId",
              "Alias": "SurveyId",
              "Type": "System.String"
            }
          },
          "NameInSource": "Connection",
          "SqlCommand": "select * from SurveysCategoriesQuestionsAnswers"
        }
      },
      "Databases": {
        "0": {
          "Ident": "StiSqlDatabase",
          "Name": "Connection",
          "Alias": "Connection",
          "ConnectionStringEncrypted": "9DZTSE8KAZ3iX9WYTpwlXtFgs4lFXuPdYlvo8PEJoD/CQNUJS12T+W8TzWzqIPYX4/L7wk5RUf1veM3cY0ykatlGgevjBUO88x1hiXp89nveWPfCzlmjRfFoJYnlfG273xL1oVtr80VibKWVYwAle5AY0Q=="
        },
        "1": {
          "Ident": "StiJsonDatabase",
          "Name": "import report CoffeePot.CSV 2018-07-02T13-29-00-317Z",
          "Alias": "import report CoffeePot.CSV 2018-07-02T13-29-00-317Z",
          "PathData": "C:\\Users\\Aleksandr.PRECONSULTANTS\\Downloads\\import report CoffeePot.CSV 2018-07-02T13-29-00-317Z.json"
        }
      },
      "Relations": {
        "0": {
          "Name": "parse",
          "ChildColumns": {
            "0": "relationId"
          },
          "ParentColumns": {
            "0": "Entries"
          },
          "NameInSource": "parse_Entries",
          "Alias": "parse",
          "IsCloud": null,
          "ParentSource": "parse",
          "ChildSource": "parse_Entries"
        },
        "1": {
          "Name": "parse_Entries",
          "ChildColumns": {
            "0": "relationId"
          },
          "ParentColumns": {
            "0": "EntityErrors"
          },
          "NameInSource": "parse_Entries_EntityErrors",
          "Alias": "parse_Entries",
          "IsCloud": null,
          "ParentSource": "parse_Entries",
          "ChildSource": "parse_Entries_EntityErrors"
        },
        "2": {
          "Name": "parse_Entries",
          "ChildColumns": {
            "0": "relationId"
          },
          "ParentColumns": {
            "0": "ValueErrors"
          },
          "NameInSource": "parse_Entries_ValueErrors",
          "Alias": "parse_Entries",
          "IsCloud": null,
          "ParentSource": "parse_Entries",
          "ChildSource": "parse_Entries_ValueErrors"
        },
        "3": {
          "Name": "parse_Entries",
          "ChildColumns": {
            "0": "relationId"
          },
          "ParentColumns": {
            "0": "ValueWarnings"
          },
          "NameInSource": "parse_Entries_ValueWarnings",
          "Alias": "parse_Entries",
          "IsCloud": null,
          "ParentSource": "parse_Entries",
          "ChildSource": "parse_Entries_ValueWarnings"
        },
        "4": {
          "Name": "Relation",
          "ChildColumns": {
            "0": "SurveyId"
          },
          "ParentColumns": {
            "0": "SurveyId"
          },
          "NameInSource": "Relation",
          "Alias": "Relation",
          "IsCloud": null,
          "ParentSource": "SurveysCategoriesQuestions",
          "ChildSource": "SurveysCategoriesQuestionsAnswers"
        }
      }
    },
    "Pages": {
      "0": {
        "Ident": "StiPage",
        "Name": "Page1",
        "Guid": "366bfdc35bcf48f3aeb38f2b5f58db21",
        "Interaction": {
          "Ident": "StiInteraction"
        },
        "Border": ";;2;;;;;solid:Black",
        "Brush": "solid:Transparent",
        "Components": {
          "0": {
            "Ident": "StiPageFooterBand",
            "Name": "PageFooterBand1",
            "ClientRectangle": "0,1071,749,20",
            "Interaction": {
              "Ident": "StiInteraction"
            },
            "Border": ";;;;;;;solid:Black",
            "Brush": "solid:Transparent",
            "Components": {
              "0": {
                "Ident": "StiText",
                "Name": "Text6",
                "ClientRectangle": "0,0,749,20",
                "ComponentStyle": "Footer2",
                "Interaction": {
                  "Ident": "StiInteraction"
                },
                "Text": {
                  "Value": "{PageNofM}"
                },
                "HorAlignment": "Right",
                "VertAlignment": "Center",
                "Font": "Segoe UI;9.75;;",
                "Border": ";58,78,94;;;;;;solid:Black",
                "Brush": "solid:Transparent",
                "TextBrush": "solid:158,158,158"
              }
            }
          },
          "1": {
            "Ident": "StiDataBand",
            "Name": "DataBand1",
            "ClientRectangle": "0,20,749,10",
            "Interaction": {
              "Ident": "StiBandInteraction"
            },
            "Border": ";;;;;;;solid:Black",
            "Brush": "solid:Transparent",
            "DataSourceName": "SurveysCategoriesQuestions",
            "Filters": {
              "0": {
                "Ident": "StiFilter",
                "Column": "SurveyId",
                "Value1": "6f4c5f05-9106-4af1-967c-623a402a24d1"
              }
            }
          },
          "2": {
            "Ident": "StiDataBand",
            "Name": "DataBand2",
            "ClientRectangle": "0,70,749,30",
            "Interaction": {
              "Ident": "StiBandInteraction"
            },
            "Border": ";;;;;;;solid:Black",
            "Brush": "solid:Transparent",
            "DataSourceName": "SurveysCategoriesQuestionsAnswers"
          }
        },
        "PaperSize": "A4",
        "Watermark": {
          "Font": ";;Bold;",
          "TextBrush": "solid:50,0,0,0"
        }
      }
    }
  }`;
}
