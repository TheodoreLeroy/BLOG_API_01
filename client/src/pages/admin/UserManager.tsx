import AdminPageLayout from "@layouts/AdminPageLayout";

function UserManager() {
    const user_role = 'admin';
    return (
        <AdminPageLayout userRole={user_role}>
        <h1>Hello world</h1>
        </AdminPageLayout>
    );
}

export default UserManager;