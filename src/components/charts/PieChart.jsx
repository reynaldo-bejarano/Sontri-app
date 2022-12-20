import { useContext, useEffect, useMemo } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, DoughnutController, Title, ArcElement, Tooltip, Legend, Filler, BarElement } from "chart.js";
import { Doughnut } from "react-chartjs-2"
import { authContext } from "../../context/AuthProvider";

ChartJS.register(
    CategoryScale, DoughnutController, LinearScale, PointElement, ArcElement, Title, Tooltip, Legend, Filler
);


const options = {
    aspectRatio: 1,
    layout: {
        padding: {
            bottom: 70
        }

    },
    plugins: {
        legend: {
            display: true,
            position: "right",
            labels: {
                color: "white",

            }
        },
        tooltip: {
            enabled: true
        }
    },
}


const PieChart = () => {
    const { FirebaseGetMessagesSize, messagesSize } = useContext(authContext);
    const scores = messagesSize;
    const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    useEffect(() => {
        try {
            FirebaseGetMessagesSize();
        } catch (error) {
            console.log(error)
        }

    }, []);

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


    return <Doughnut data={data} options={options} />
}

export default PieChart