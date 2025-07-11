import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const weeks = [
    {
      text: "베스트",
      path: "1",
    },
    {
      text: "이마트",
      path: "2",
    },
    {
      text: "약관",
      path: "3",
    },
    {
      text: "Swiper",
      path: "4",
    },
    {
      text: "숙박필터",
      path: "5",
    },
    {
      text: "토스트, 로띠",
      path: "6",
    },
  ];
  return (
    <div className="box__second-terms">
      <nav className="box__navigation">
        {weeks.map((week, idx) => {
          return (
            <NavLink
              key={idx}
              to={week.path}
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
              {week.text}
            </NavLink>
          );
        })}
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
