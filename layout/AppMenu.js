import React, { useContext } from "react";
import AppMenuitem from "./AppMenuitem";
import { LayoutContext } from "./context/layoutcontext";
import { MenuProvider } from "./context/menucontext";

const AppMenu = () => {
  const { layoutConfig } = useContext(LayoutContext);

  const model = [
    {
      label: "Home",
      items: [{ label: "Dashboard", icon: "pi pi-fw pi-home", to: "/" }],
    },

    {
      label: "Pages",
      icon: "pi pi-fw pi-briefcase",
      to: "/pages",
      items: [
        {
          label: "Template Generator",
          icon: "pi pi-fw pi-pencil",
          to: "/pages/generator",
        },
        {
          label: "Templates",
          icon: "pi pi-fw pi-pencil",
          to: "/pages/templates",
        },
        {
          label: "Document Generator",
          icon: "pi pi-fw pi-pencil",
          to: "/pages/documentGeneration",
        },
        {
          label: "Generator v2",
          icon: "pi pi-fw pi-pencil",
          to: "/pages/generation",
        },
        {
          label: "Documents",
          icon: "pi pi-fw pi-file",
          to: "http://localhost:3000",
        },
        {
          label: "Help",
          icon: "pi pi-fw pi-info-circle",
          to: "/pages/help",
        },
        {
          label: "Setting",
          icon: "pi pi-fw pi-cog",
          to: "/pages/setting",
        },
        {
          label: "Log out",
          icon: "pi pi-fw pi-sign-out",
        },
      ],
    },
  ];

  return (
    <MenuProvider>
      <ul className='layout-menu'>
        {model.map((item, i) => {
          return !item.seperator ? (
            <AppMenuitem item={item} root={true} index={i} key={item.label} />
          ) : (
            <li className='menu-separator'></li>
          );
        })}
      </ul>
    </MenuProvider>
  );
};

export default AppMenu;
