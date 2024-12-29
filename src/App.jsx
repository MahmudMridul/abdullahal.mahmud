import { useState } from "react";
import { useEffect } from "react";
import Loading from "./components/Loading";

export default function App() {
	const [data, setData] = useState(null);
	useEffect(() => {
		fetch("/data.json")
			.then((res) => {
				if (!res.ok) {
					throw new Error("Network response was not ok");
				}
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setData(data);
			})
			.catch((error) => {
				console.error(
					"There has been a problem with your fetch operation:",
					error
				);
			});
	}, []);

	if (!data) {
		return <Loading />;
	}

	return (
		<div className="font-nunito bg-neutral-900 text-gray-50">
			<div className="container mx-auto p-3">{data.general.name}</div>
		</div>
	);
}
