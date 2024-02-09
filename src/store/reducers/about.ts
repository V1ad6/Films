const initialState = {
  isAboutPage: false
}

export interface AboutPageAction {
  type: 'CHANGE_ABOUT_PAGE_STATUS';
  payload: boolean;
}

export const aboutPageReducer = (state = initialState, action: AboutPageAction) => {
  switch (action.type) {
    case 'CHANGE_ABOUT_PAGE_STATUS': 
      return { isAboutPage: action.payload };
    default: 
      return state;
  }
}