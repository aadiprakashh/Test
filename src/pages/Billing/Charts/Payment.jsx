import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Payment = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (!chartRef.current) return;

        const paymentChart = echarts.init(chartRef.current);

        const paymentOption = {
            animation: false,
            tooltip: {
                trigger: "item",
            },
            legend: {
                orient: "vertical",
                left: "left",
            },
            series: [
                {
                    type: "pie",
                    radius: "50%",
                    data: [
                        { value: 45, name: "Cash" },
                        { value: 35, name: "Card" },
                        { value: 20, name: "Insurance" },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)",
                        },
                    },
                },
            ],
        };

        paymentChart.setOption(paymentOption);

        const handleResize = () => {
            paymentChart.resize();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            paymentChart.dispose();
        };
    }, []);

    return (
        <div className="bg-white shadow rounded-lg">
            <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Payment Distribution
                </h3>
                <div ref={chartRef} style={{ height: "300px" }}></div>
            </div>
        </div>
    );
};

export default Payment;
