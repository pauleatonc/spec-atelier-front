export const getDataSelecUser = (approveRequest) =>
  approveRequest.map((request) => ({
    id: request.id,
    email: request.user.email,
    name: `${request.user.first_name} ${request.user.last_name}`,
    profile_image: request?.profile_image,
  }));
