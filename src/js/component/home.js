import React, { useState } from "react";

export function Home() {
	const [tareaNueva, setTareaNueva] = useState("");
	const [listaTareas, setListaTareas] = useState([
		"Tarea 1",
		"Tarea 2",
		"Tarea 3",
		"Tarea 4"
	]);

	function agregar() {
		if (tareaNueva === "") {
			alert("Debes escribir una nueva tarea");
			return;
		} else {
			setListaTareas(arr => [...arr, tareaNueva]);
			setTareaNueva("");
			return;
		}
	}

	function eliminar(index) {
		/*setListaTareas(
			listaTareas.filter(
				(element, indice) => indice !== index)
		);
        console.log(listaTareas);
        console.log(index);*/
		return;
	}
	return (
		<div className="container d-flex flex-column align-items-center">
			<h1 className="style-1 my-4">To-Do List</h1>
			<ul className="list-group shadow">
				<input
					className="list-group-item caja-todo"
					placeholder="Escribir una nueva tarea..."
					onChange={e => setTareaNueva(e.target.value)}
					value={tareaNueva}></input>
				{listaTareas.length === 0 ? (
					<li className="list-group-item caja-todo">
						<p className="my-2">No hay tareas, agregar tarea</p>
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
									onClick={() => {
										let aux = listaTareas.filter(
											(value, indexu) => index !== indexu
										);
										setListaTareas(aux);
									}}>
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
