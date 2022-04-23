import onActionCreator from 'config/store/helpers';

export const HIDE_SPEC_CONTENTS = 'HIDE_SPEC_CONTENTS';
export const HIDE_SPEC_CONTENTS_SUCCESS = 'HIDE_SPEC_CONTENTS_SUCCESS';
export const onHideSpecContents = () => (dispatch) =>
  dispatch(onActionCreator(HIDE_SPEC_CONTENTS_SUCCESS));

export const SHOW_SPEC_CONTENTS = 'SHOW_SPEC_CONTENTS';
export const SHOW_SPEC_CONTENTS_SUCCESS = 'SHOW_SPEC_CONTENTS_SUCCESS';
export const onShowSpecContents = () => (dispatch) =>
  dispatch(onActionCreator(SHOW_SPEC_CONTENTS_SUCCESS));
