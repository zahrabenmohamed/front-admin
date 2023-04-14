import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
            © 2023 made by
            <span className="font-medium ml-2">PCA</span>
        </div>
    );
};

export default AppFooter;
