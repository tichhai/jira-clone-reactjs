import { createReducer } from "@reduxjs/toolkit";


//[] = initState
export const todoReducer = createReducer([], {
    addTodo: (state, action) => {
      // 1. Có thể mutate data trực tiếp 
      state.push(action.payload)
    },
    removeTodo: (state, action) => {
      // 2. Hoặc phải trả về state mới
      // CHỨ KO ĐƯỢC cả 1 và 2 nha 
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    }
  })