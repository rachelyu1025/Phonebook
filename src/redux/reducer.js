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

    case 'DELETE':
      let filteredContact = state.contactList.filter(
        (el) => el.name !== payload.name
      );

      return {
        ...state,
        contactList: filteredContact,
      };

    default:
      return { ...state };
  }
}

export default reducer;
