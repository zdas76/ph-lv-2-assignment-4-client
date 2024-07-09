import { TRoute, TUserPath } from "./../types/navberTypes";

export const routeGenerator = (items: TUserPath[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    return acc;
  }, []);
  return routes;
};
