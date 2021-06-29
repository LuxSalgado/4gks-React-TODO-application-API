import React, { useState } from "react";

let tareasPred = ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4"];

export function Home() {
	const [listaTareas, setListaTareas] = useState(tareasPred);

	function agregar() {
		setListaTareas(arr => [...arr, "Tarea nueva"]);
		return;
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
					/*onChange={""}*/
				></input>
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

// sample datas structure
/* const datas = [
    {
      id:   1,
      name: 'john',
      gender: 'm'
    }
    {
      id:   2,
      name: 'mary',
      gender: 'f'
    }
] */ // make sure to set the default value in the useState call (I already fixed it)
/*
const [datas, setDatas] = useState([
    {
      id:   1,
      name: 'john',
      gender: 'm'
    },
    {
      id:   2,
      name: 'mary',
      gender: 'f'
    }
]);

const updateFieldChanged = index => e => {

    console.log('index: ' + index);
    console.log('property name: '+ e.target.name);
    let newArr = [...datas]; // copying the old datas array
    newArr[index] = e.target.value; // replace e.target.value with whatever you want to change it to

    setDatas(newArr); // ??
}

return (
    <React.Fragment>
        { datas.map( (data, index) => {
              <li key={data.name}>
                <input type="text" name="name" value={data.name} onChange={updateFieldChanged(index)}  />
              </li>
          })
        }
    </React.Fragment>
)*/
