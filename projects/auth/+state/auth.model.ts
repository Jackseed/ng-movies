
export interface User {
  uid: string;
  email: string;
  photoURL: string;
  displayName: string;
}

export function createUser({ uid, email, photoURL, displayName }): User {
  return {
    uid,
    email,
    photoURL,
    displayName
  };
}
