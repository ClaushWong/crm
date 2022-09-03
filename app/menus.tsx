import { DashboardOutlined, DoubleRightOutlined } from "@ant-design/icons";

export interface IMenu {
  id: string;
  name: string;
  path?: string;
  icon?: React.ReactNode;
  children?: IMenu[];
  roles?: string[];
}

export const PORTAL_MENU: IMenu[] = [
  {
    id: "dashboard",
    name: "Dashboard",
    path: "/app/dashboard",
    icon: <DashboardOutlined />,
  },
  {
    id: "rogue",
    name: "Rogue",
    icon: <DoubleRightOutlined />,
    path: "/app/rogue",
  },
];
