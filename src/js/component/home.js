import React, { useState, setState } from "react";

let listaTareas = ["Tarea 1", "Tarea 2", "Tarea 3"];

let state = { value: "" };

export function Home() {
	const [numTareas, setNumTareas] = useState(0);

	function agregar() {
		let aux = numTareas;
		aux++;
		listaTareas.push(this.state.value);
		this.setState("");
		setNumTareas(aux);
		return;
	}

	function eliminar() {
		let aux = numTareas;
		aux--;
		listaTareas.pop();
		setNumTareas(aux);
		return;
	}

	return (
		<div className="container d-flex flex-column align-items-center">
			<h1 className="style-1 my-4">To-Do List</h1>
			<ul className="list-group shadow">
				<input
					className="list-group-item caja-todo"
					placeholder="Escribir una nueva tarea..."
					onChange={e =>
						this.setState({ value: e.target.value })
					}></input>
				{listaTareas.length === 0 ? (
					<li className="list-group-item caja-todo">
						<p className="my-2">No tasks, add a task</p>
					</li>
				) : (
					listaTareas.map(function(name, index) {
						return (
							<li
								key={index}
								className="list-group-item caja-todo d-flex justify-content-between align-items-center seleccionar">
								<p className="my-2">{name}</p>
								<button
									type="button"
									className="btn btn-link hide"
									onClick={eliminar}>
									<i className="fas fa-times"></i>
								</button>
							</li>
						);
					})
				)}
				{listaTareas.length === 0 ? (
					""
				) : (
					<li className="list-group-item caja-todo numero-items py-0">
						<p className="my-2">
							{listaTareas.length === 1
								? listaTareas.length + " tarea por hacer"
								: listaTareas.length + " tareas por hacer"}
						</p>
					</li>
				)}
			</ul>
			<button
				type="button"
				className="btn btn-info my-3 shadow"
				onClick={agregar}>
				Agregar Tarea
			</button>
		</div>
	);
}
