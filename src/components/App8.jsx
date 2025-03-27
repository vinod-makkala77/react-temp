import { useEffect, useState } from "react";

export default function App8() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState(0);
  const [result, setResult] = useState(0);

  const handleSubmit = () => {
    setTodos([...todos, task]);
    setTask(0);
  };

  useEffect(() => {
   const sum=todos.reduce((acc,value)=>acc+Number(value),0);
    setResult(sum);
  }, [todos]);

  return (
    <div>
      <h3>This is App8</h3>
      <p>
        <input
          type="number"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <p>Sum of tasks: {result}</p>
      
    </div>
  );
}
