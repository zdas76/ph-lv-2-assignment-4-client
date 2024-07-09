import { NavLink } from "react-router-dom";
import { TNavItem, TUserPath } from "../types";

export const navberItemsGenerator = (router: TUserPath[]) => {
  const navberItems = router.reduce((acc: TNavItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`${item.path}`}> {} </NavLink>,
      });
    }
    return acc;
  }, []);
  return navberItems;
};
