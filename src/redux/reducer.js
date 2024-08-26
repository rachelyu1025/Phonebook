const initialState = {
  contactList: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD':
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: payload.name, mobile: payload.mobile },
        ],
      };

    default:
      return { ...state };
  }
}

export default reducer;
