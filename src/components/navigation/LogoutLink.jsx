const LogoutLink = ({ logout }) => (
  <div
    onClick={logout}
    className="hover:bg-primary/10 dark:hover:bg-gray/20 p-2 mb-2"
  >
    <h5 className="text-primary dark:text-slate-100 font-semibold cursor-pointer p-1">
      Logout
    </h5>
  </div>
);

export default LogoutLink;
