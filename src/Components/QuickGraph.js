import React from 'react';
import ReactECharts from 'echarts-for-react';

const Graph: React.FC = ({ allValues }) => {
    const options = {
        backgroundColor: '#1c1f22',

        title: {
            text: '',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },

        tooltip: {
            trigger: 'item'
        },

        visualMap: {
            show: false,
            min: 0,
            max: allValues.all,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [
            {
                name: 'Todo Stats',
                type: 'pie',
                radius: '85%',
                center: ['40%', '50%'],
                data: [
                    /* { value: allValues.all, name: 'All' }, */
                    { value: allValues.high, name: 'High' },
                    { value: allValues.med, name: 'Med' },
                    { value: allValues.low, name: 'Low' },
                    { value: allValues.comp, name: 'Complete' }
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                labelLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                itemStyle: {
                    color: 'orange',
                    shadowBlur: 50,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };

    const newDate = new Date().toDateString();
    return (

        <div className='row m-0'>
            <div className='col-sm-12 col-md-12 noMarginMobile'>
                <ReactECharts option={options} />
            </div>
        </div>

    );
};
export default Graph;