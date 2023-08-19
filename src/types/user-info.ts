export type UserInfo = {
  // always present params
  id: string;
  login: string;
  displayName: string;

  // optional
  email: string | null;
  displayIcon: string | null;
}