export const GET_MOCK_DATA = {
    categories: [
      {
        name: "Sales Overview",
        widgets: [
          {
            type: "pieChart",
            title: "Customer Segmentation",
            dataSource: "customerSegments",
            options: {
              labelField: "segment",
              valueField: "percentage"
            }
          },
          {
            type: "pieChart",
            title: "Customer Segmentation",
            dataSource: "customerSegments",
            options: {
              labelField: "segment",
              valueField: "percentage"
            }
          }
        ]
      },
      {
        name: "Customer Insights",
        widgets: [
          {
            type: "pieChart",
            title: "Customer Segmentation",
            dataSource: "customerSegments",
            options: {
              labelField: "segment",
              valueField: "percentage"
            }
          },
          {
            type: "pieChart",
            title: "Customer Segmentation",
            dataSource: "customerSegments",
            options: {
              labelField: "segment",
              valueField: "percentage"
            }
          }
        ]
      }
    ]
}
