export const UserInfo = ({ user }) => (
  <a key={user.id} className="UserInfo" href={user.email}>
    {user.name}
  </a>
);
