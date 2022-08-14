export const getDataSelectUser = (approveRequest) =>
  approveRequest.map((request) => ({
    id: request.id,
    date: request.date,
    count: request.count,
    email: request.user.email,
    name: request.user?.name,
    profile_image: request?.user?.profile_image,
  }));
