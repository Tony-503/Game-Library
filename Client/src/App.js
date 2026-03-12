import { use } from "react";

useEffect(() => {
const fetchGames = async () => {
    const response = await fetch('/games');
    const data = await response.json()
    setGames(json);
}
fetchGames();
}, []);

