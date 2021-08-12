import React, { useState } from "react";
import PropTypes, { object } from "prop-types";
import ReactDOM from "react-dom";

export function Home() {
	const [tareaNueva, setTareaNueva] = useState("");
	const [listaTareas, setListaTareas] = useState([]);

	function agregar(e) {
		if (e.key === "Enter") {
			if (tareaNueva === "") {
				alert("Debes escribir una nueva tarea");
				return;
			} else {
				setListaTareas(arr => [...arr, tareaNueva]);
				setTareaNueva("");
				return;
			}
		}
		return;
	}

	function eliminar(indice) {
		if (indice > -1) {
			//Para validar que el arreglo no esté vacío
			let aux = listaTareas.filter((value, index) => index !== indice);
			setListaTareas(aux);
		}
	}

	return (
		<div className="container d-flex flex-column align-items-center">
			<h1 className="style-1 my-4">To-Do List</h1>
			<ul className="list-group shadow">
				<input
					className="list-group-item caja-todo"
					id="inputTarea"
					placeholder="Escribir una nueva tarea..."
					onChange={e => setTareaNueva(e.target.value)}
					value={tareaNueva}
					onKeyPress={e => agregar(e)}></input>
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
										eliminar(index);
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
		</div>
	);
}
