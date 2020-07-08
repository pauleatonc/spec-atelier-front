export const HIDE_SPEC_IMAGES_MODAL_SUCCESS = 'HIDE_SPEC_IMAGES_MODAL_SUCCESS';
export const onHideSpecImagesModalSuccess = () => ({ type: HIDE_SPEC_IMAGES_MODAL_SUCCESS });

export const SHOW_SPEC_IMAGES_MODAL_SUCCESS = 'SHOW_SPEC_IMAGES_MODAL_SUCCESS';
export const onShowSpecImagesModalSuccess = payload => ({ payload, type: SHOW_SPEC_IMAGES_MODAL_SUCCESS });
