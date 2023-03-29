const Main = () => {
	async function callMine(){
		const result = await fetch(`${process.env.REACT_APP_SERVER}/hello`);
		console.log(result);
		const jsonResult = await result.json();

		alert(jsonResult.message);
	}

	async function callExternal(){
		const result = await fetch(`${process.env.REACT_APP_SERVER}/api`);
		console.log(result);

		const jsonResult = await result.json();
		console.log(jsonResult);
		if(jsonResult.statusCode === 500){
			alert('Error!\nMaybe you need to edit api token or change url');
		}
	}

	return(
		<div style={{ margin: "20px" }}>
			<h2>Here is Main Page</h2>

			<button onClick={() => { callMine() }}>Call My API</button>
			{' '}
			<button onClick={() => { callExternal() }}>Call External API</button>
		</div>
	);
}

export default Main;