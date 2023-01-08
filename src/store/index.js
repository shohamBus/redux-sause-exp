import { createStore } from "redux";

import reducers from "./ducks";
// import reducers from "./whithoutSause/reducers/index";

const store = createStore(reducers);

export default store;
