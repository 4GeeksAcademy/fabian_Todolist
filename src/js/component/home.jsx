import React, { useState } from "react";



//create your first component
const Home = () => {

	const [tarea, setTarea] = useState("");
	const [tareas, setTareas] = useState([]);
	const [hoveredIndex, setHoveredIndex] = useState(null);

	const agregarTarea = () => {
		if (tarea.trim()) {
			setTareas((prev) => [...prev, tarea]);
			setTarea("");
		}
	};

	const eliminarTarea = (index) => {
		setTareas((prev) => prev.filter((_, i) => i !== index));
	};

	const handleKeyDown = (evento) => {
		if (evento.key === "Enter") {
			agregarTarea();
		}
	}


	return (
		<div className="list" >
			<h1 className="title">ToDo List</h1>
			<div className="card">
				<input
					className="input"
					type="text"
					value={tarea}
					onChange={(evento) => { setTarea(evento.target.value) }}
					onKeyDown={handleKeyDown} 
					placeholder="What need to be done?"
					/>


				<ul className="task-list">
					{tareas.map((posicion, index) => (
						<li
							key={index}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							className="task-item"
						>
							{posicion}{""}
							{hoveredIndex === index && (
								<button className="delete" onClick={() => eliminarTarea(index)}><i class="fa-solid fa-xmark"></i></button>
							)}
						</li>
					))}
				</ul>
				<div class="footer">
					{tareas.length} {tareas.length === 1 ? "item" : "items"} left
					
				</div>
			</div>
		</div>
	);
};

export default Home;
