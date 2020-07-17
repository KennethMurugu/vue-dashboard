export const thisYearSalesChart = {
  // This year sales chart options
  chartOptions: {
    chart: {
      id: 'this-year-sales-chart',
      type: 'bar'
    },
    title: {
      text: 'This Year vs Previous Year Sales'
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'March',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yaxis: {
      title: {
        text: 'KSH (thousands)'
      }
    },
    dataLabels: {
      enabled: false
    }
  },

  series: [
    {
      name: 'This year',
      data: [5, 15, 12, 20, 50, 33, 20, 10, 25, 15, 18]
    },
    {
      name: 'Previous year',
      data: [7, 14, 18, 12, 45, 30, 25, 12, 20, 12, 20]
    }
  ]
}

export const salesByCountryChart = {
  series: [44, 55, 13, 43, 22],
  chartOptions: {
    chart: {
      width: '100%',
      height: '300',
      type: 'pie'
    },
    title: {
      text: 'Sales by Country',
      align: 'center'
    },
    labels: ['Kenya', 'Uganda', 'Tanzania', 'Sudan', 'Rest of Africa'],
    legend: {
      position: 'bottom'
    }
  }
}
