import { handleActions } from 'redux-actions';

const initialState = {
  fetchCourses: {
    requesting: false,
    courses: null,
    error: null,
  },
  fetchCourse: {
    requesting: false,
    course: null,
    error: null,
  },
};

export default handleActions({
  REQUEST_COURSES: (state, action) => ({
    ...state,
    fetchCourses: {
      ...state.fetchCourses,
      requesting: true,
    },
  }),
  RECEIVE_COURSES: {
    next(state, action) {
      return {
        ...state,
        fetchCourses: {
          ...state.fetchCourses,
          requesting: false,
          courses: action.payload,
          error: null,
        },
      };
    },
    throw(state, action) {
      return {
        ...state,
        fetchCourses: {
          ...state.fetchCourses,
          requesting: false,
          courses: null,
          error: action.payload,
        },
      };
    }
  },
  REQUEST_COURSE: (state, action) => ({
    ...state,
    fetchCourse: {
      ...state.fetchCourse,
      requesting: true,
      course: null,
      error: null,
    },
  }),
  RECEIVE_COURSE: {
    next(state, action) {
      return {
        ...state,
        fetchCourse: {
          ...state.fetchCourse,
          requesting: false,
          course: action.payload,
          error: null,
        },
      };
    },
    throw(state, action) {
      return {
        ...state,
        fetchCourse: {
          ...state.fetchCourse,
          requesting: false,
          course: null,
          error: action.payload,
        },
      };
    }
  },
}, initialState);
