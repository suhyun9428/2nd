import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const weeks = [1, 2, 3];
  return (
    <div className="box__second-terms">
      <nav className="box__navigation">
        {weeks.map((week, idx) => {
          return (
            <NavLink
              key={idx}
              to={`${week}`}
              className={({ isActive, isPending, isTransitioning }) =>
                "link__navi " +
                (isPending
                  ? "link__pending"
                  : isTransitioning
                    ? "link__transition"
                    : isActive
                      ? "link__active"
                      : "")
              }
            >
              {week}주차
            </NavLink>
          );
        })}
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
