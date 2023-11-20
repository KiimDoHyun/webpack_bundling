import { useEffect } from "react";

const routeValue = "util1";

function App() {
    useEffect(() => {
        // 명시적
        // const named = import(`./utils/util1`);

        // 변수
        // const withVariables = import(`./utils/${routeValue}`);

        const allRoute = "./utils/util1";
        const withAllVariables = import(`${allRoute}`);
        // print1();
    }, []);

    return <div className="App"></div>;
}

export default App;
