import { useState } from "react";

function AdminLayout() {
    const [isOpen, SetIsOpen] = useState<boolean>(true);

    return <div id="app-container" className="w-full h-full"></div>;
}

export default AdminLayout;
