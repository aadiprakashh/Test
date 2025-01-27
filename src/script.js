const revenueChart = echarts.init(document.getElementById('revenue-chart'));
        const revenueOption = {
            animation: false,
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: '#4F46E5'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(79, 70, 229, 0.3)'
                    }, {
                        offset: 1,
                        color: 'rgba(79, 70, 229, 0.1)'
                    }])
                }
            }]
        };

                   revenueChart.setOption(revenueOption);
                   window.addEventListener('resize', function () {
            revenueChart.resize();
        });