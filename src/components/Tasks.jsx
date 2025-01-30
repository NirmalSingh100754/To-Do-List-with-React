export default function Tasks({ tasks, markTaskAsDone, deleteTask }) {
  return (
    <div>
      <h2
        style={{
          color: "whitesmoke",
          position: "relative",
          paddingRight: "15px",
        }}
      >
        Task List
      </h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => markTaskAsDone(index)}
            />
            <span
              style={{
                textDecoration: task.done ? "line-through" : "none",
                color: "wheat",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
