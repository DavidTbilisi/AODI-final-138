import { configureStore } from "@reduxjs/toolkit";

import cvReducer from "./cvReducer";

export default configureStore({
    reducer: {
        cv: cvReducer
    }
});

