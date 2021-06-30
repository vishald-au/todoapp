import React from 'react';
import ReactECharts from 'echarts-for-react';

const Graph: React.FC = () => {
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
            min: 100,
            max: 900,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [
            {
                name: 'Todo Stats',
                type: 'pie',
                radius: '85%',
                center: ['50%', '50%'],
                data: [
                    { value: 535, name: 'All' },
                    { value: 310, name: 'High' },
                    { value: 274, name: 'Med' },
                    { value: 235, name: 'Low' },
                    { value: 400, name: 'Done' }
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
                    color: '#c23531',
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
            <div className='col-sm-12 col-md-4 center-center mobilePadding'>
                <ul className='list-group mb-2 list-group-item-action'>
                    <h2 className='text-light'>Today's Stats</h2>
                    <li className='list-group-item disabled bg-dark d-flex text-light justify-content-between align-items-center'><span className=''>{newDate}</span></li>
                    <li className='list-group-item bg-dark disabled link-light list-group-item-action bg-dark d-flex justify-content-between align-items-center'>Total Tasks <span className=''>100</span></li>
                    <li className='list-group-item bg-dark disabled link-light list-group-item-action bg-dark d-flex justify-content-between align-items-center'>High Priority <span className=''>14</span></li>
                    {/* <li className='list-group-item bg-dark link-light list-group-item-action bg-dark d-flex justify-content-between align-items-center'>Med Priority <span className=''>14</span></li>
                    <li className='list-group-item bg-dark link-light list-group-item-action bg-dark d-flex justify-content-between align-items-center'>Low Priority <span className=''>14</span></li> */}
                    <li className='list-group-item bg-dark disabled link-light list-group-item-action bg-dark d-flex justify-content-between align-items-center'>Completed <span className=''>14</span></li>
                    {/* <li className='list-group-item bg-dark link-light list-group-item-action bg-dark d-flex justify-content-between align-items-center'>InCompleted <span className=''>14</span></li> */}
                </ul>

            </div>
            <div className='col-sm-12 col-md-8 noMarginMobile'>
                <ReactECharts option={options} />
            </div>
        </div>

    );
};
export default Graph;