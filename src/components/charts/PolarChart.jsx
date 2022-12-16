import { useMemo } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, RadialLinearScale, PolarAreaController, Title, ArcElement, Tooltip, Legend, Filler, BarElement } from "chart.js";
import { PolarArea } from "react-chartjs-2"

ChartJS.register(
    CategoryScale, PolarAreaController, LinearScale, PointElement, ArcElement, RadialLinearScale, Title, Tooltip, Legend, Filler
);

const scores = [100, 24, 80, 40, 60, 20, 70, 80, 10, 44, 20, 120];
const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const options = {
    responsive: true,
    layout: {
        padding: {
            bottom: 80
        }

    },
    plugins: {
        legend: {
            display: false,
            position: "top",
            labels: {
                color: "white",

            }
        },
        tooltip: {
            enabled: true
        }
    },
}


const PolarChart = () => {
    const data = useMemo(() => {
        return {
            datasets: [{
                label: "Clientes agregados por mes",
                data: scores,
                borderColor: "white",
                backgroundColor: [
                    '#2a9d8f',
                    '#e9c46a',
                    '#f4a261',
                    '#e76f51',
                    '#f48c06',
                    '#faa307',
                    "white",
                    '#219ebc',
                    '#e9c46a',
                    '#f4a261',
                    '#e76f51',
                    '#f08080',

                ]

            }],
            labels
        }
    }, []);


    return <PolarArea data={data} options={options} />
}

export default PolarChart