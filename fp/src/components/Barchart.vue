<script>
    import Bar from 'vue-chartjs'
    export default {
      extends: Bar,
      data (){ 
          return{
                chartData: {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    datasets: [
      {
        label: 'Data One',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
          }
      } ,
        
      mounted () {
        this.renderChart(this.chartData, this.options)
      }
    }
  </script>