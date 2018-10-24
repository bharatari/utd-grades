import { handleActions } from 'redux-actions';

const initialState = {
  fetchSections: {
    requesting: false,
    sections: null,
    error: null,
  },
  fetchSection: {
    requesting: false,
    section: null,
    error: null,
  },
  fetchOtherSections: {
    requesting: false,
    sections: null,
    error: null,
  },
};

export default handleActions({
  REQUEST_SECTIONS: (state, action) => ({
    ...state,
    fetchSections: {
      ...state.fetchSections,
      requesting: true,
    },
  }),
  RECEIVE_SECTIONS: {
    next(state, action) {
      return {
        ...state,
        fetchSections: {
          ...state.fetchSections,
          requesting: false,
          sections: action.payload,
          error: null,
        },
      };
    },
    throw(state, action) {
      return {
        ...state,
        fetchSections: {
          ...state.fetchSections,
          requesting: false,
          sections: null,
          error: action.payload,
        },
      };
    }
  },
  REQUEST_OTHER_SECTIONS: (state, action) => ({
    ...state,
    fetchOtherSections: {
      ...state.fetchOtherSections,
      requesting: true,
    },
  }),
  RECEIVE_OTHER_SECTIONS: {
    next(state, action) {
      return {
        ...state,
        fetchOtherSections: {
          ...state.fetchOtherSections,
          requesting: false,
          sections: action.payload,
          error: null,
        },
      };
    },
    throw(state, action) {
      return {
        ...state,
        fetchOtherSections: {
          ...state.fetchOtherSections,
          requesting: false,
          sections: null,
          error: action.payload,
        },
      };
    }
  },
  REQUEST_SECTION: (state, action) => ({
    ...state,
    fetchSection: {
      ...state.fetchSection,
      requesting: true,
      section: null,
      error: null,
    },
  }),
  RECEIVE_SECTION: {
    next(state, action) {
      return {
        ...state,
        fetchSection: {
          ...state.fetchSection,
          requesting: false,
          section: action.payload,
          error: null,
        },
      };
    },
    throw(state, action) {
      return {
        ...state,
        fetchSection: {
          ...state.fetchSection,
          requesting: false,
          section: null,
          error: action.payload,
        },
      };
    }
  },
}, initialState);
