export interface Roles {
  viewer?: boolean;
  editor?: boolean;
  admin?: boolean;
}
export interface User {
  uid: string;
  email: string;
  roles: Roles;
  photoURL: string;
  displayName: string;
}

export function createUser({ uid, email, roles, photoURL, displayName }): User {
  return {
    uid,
    email,
    roles,
    photoURL,
    displayName
  };
}
