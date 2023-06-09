import Link from "next/link";
import { classNames } from "primereact/utils";
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
} from "react";
import { LayoutContext } from "./context/layoutcontext";
import { Button } from "primereact/button";

const AppTopbar = forwardRef((props, ref) => {
  const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } =
    useContext(LayoutContext);
  const menubuttonRef = useRef(null);
  const topbarmenuRef = useRef(null);
  const topbarmenubuttonRef = useRef(null);

  useImperativeHandle(ref, () => ({
    menubutton: menubuttonRef.current,
    topbarmenu: topbarmenuRef.current,
    topbarmenubutton: topbarmenubuttonRef.current,
  }));

  return (
    <div className='layout-topbar'>
      <button
        style={{ marginLeft: "0" }}
        ref={menubuttonRef}
        type='button'
        className='p-link layout-menu-button layout-topbar-button'
        onClick={onMenuToggle}
      >
        <i className='pi pi-bars' />
      </button>

      <Link
        href='/'
        style={{ width: "auto", marginLeft: "10px" }}
        className='layout-topbar-logo'
      >
        <img
          src={"/layout/images/pca_logo.svg"}
          width='47.22px'
          height={"35px"}
          widt={"true"}
          alt='logo'
        />
      </Link>

      <button
        ref={topbarmenubuttonRef}
        type='button'
        className='p-link layout-topbar-menu-button layout-topbar-button'
        onClick={showProfileSidebar}
      >
        <i className='pi pi-ellipsis-v' />
      </button>
    </div>
  );
});

export default AppTopbar;
