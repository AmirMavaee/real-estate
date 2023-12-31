import DashboardSidebar from "@/layout/DashboardSidebar";

function DashBoardLayout({children}) {
    return (
        <DashboardSidebar>{children}</DashboardSidebar>
    );
}

export default DashBoardLayout;