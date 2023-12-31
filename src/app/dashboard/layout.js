import DashboardSidebar from "@/layout/Dashboardsidebar";

function DashBoardLayout({children}) {
    return (
        <DashboardSidebar>{children}</DashboardSidebar>
    );
}

export default DashBoardLayout;