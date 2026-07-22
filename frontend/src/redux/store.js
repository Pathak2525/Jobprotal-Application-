// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import authSlice from "./authSlice";
// import jobSlice from "./jobSlice";
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import companySlice from "./companySlice";
// import applicationSlice from "./applicationSlice";

// // const persistConfig = {
// //     key: 'root',
// //     version: 1,
// //     storage,
// // }

// // const rootReducer = combineReducers({
// //     auth:authSlice,
// //     job:jobSlice,
// //     company:companySlice,
// //     application:applicationSlice
// // })

// // const persistedReducer = persistReducer(persistConfig, rootReducer)


// // const store = configureStore({
// //     reducer: persistedReducer,
// //     middleware: (getDefaultMiddleware) =>
// //         getDefaultMiddleware({
// //             serializableCheck: {
// //                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// //             },
// //         }),
// // });
// // export default store;

// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";


// // import storage from "redux-persist/lib/storage";
// // import createWebStorage from "redux-persist/es/storage/createWebStorage";

// // const storage = createWebStorage("local");
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage: storage.default ?? storage,
// };

// import authSlice from "./authSlice";
// import jobSlice from "./jobSlice";
// import companySlice from "./companySlice";
// import applicationSlice from "./applicationSlice";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const rootReducer = combineReducers({
//   auth: authSlice,
//   job: jobSlice,
//   company: companySlice,
//   application: applicationSlice,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);


// console.log("storage =", storage);
// console.log("getItem =", storage.getItem);
// console.log("setItem =", storage.setItem);





// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [
//           FLUSH,
//           REHYDRATE,
//           PAUSE,
//           PERSIST,
//           PURGE,
//           REGISTER,
//         ],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// export default store;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authSlice from "./authSlice";
import jobSlice from "./jobSlice";
import companySlice from "./companySlice";
import applicationSlice from "./applicationSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage: storage.default ?? storage,
};

const rootReducer = combineReducers({
  auth: authSlice,
  job: jobSlice,
  company: companySlice,
  application: applicationSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export const persistor = persistStore(store);

export default store;