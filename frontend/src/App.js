import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const remotePath = "https://fsc-task-manager-backend.herokuapp.com";

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get(`${remotePath}/tasks`);

            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    });

    return tasks.map((task) => (
        <>
            <h1>{task.description}</h1>
            <h3>Concluída: {task.isCompleted ? "Sim" : "Não"}</h3>
            <hr />
        </>
    ));
};

export default App;

//https://fsc-task-manager-backend.herokuapp.com => path to replace instead of localhost:8000
