import { createAction } from '@reduxjs/toolkit';
import {INCREMENT} from '../constants/toolkitExamConstants'


const increment = createAction(INCREMENT);// trả về type (constant), toString để xem type
export const incrementAction = increment(3)// truyền payload
// returns { type: 'counter/increment', payload: 3 }
