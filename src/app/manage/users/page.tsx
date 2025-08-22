import Layout from "@/components/layout/Layout";
import SummaryCard from "@/components/common/SummaryCard";
import AlertMessage from "@/components/common/AlertMessage";
import ImportModal from "@/components/manage/users/ImportModal";
import ExportModal from "@/components/manage/users/ExportModal";
import UserTable from "@/components/manage/users/UserTable";

type User = {
    id: string;
    name: string;
    email: string;
    branch: string;
    contact: string;
};


export default function UsersPage() {
    const users: User[] = [
        { id: "1", name: "John Doe", email: "john@example.com", branch: "IT", contact: "08123456789" },
        { id: "2", name: "Jane Smithsmith", email: "jane@example.com", branch: "HR", contact: "08123456789" },];

    return (
        <Layout>
            {/* breadcrumb placeholder */}
            <div className="flex flex-row mx-4 my-2 text-xs text-neutral-400">#todo breadcrumb</div>

            <div className="flex flex-col mx-4 flex-grow container-secondary rounded-lg shadow-lg p-6">
                {/* title and description */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold head-primary">Transaksi</h1>
                    <p className="body-secondary text-sm">Atur dan lihat riwayat transaksi anda.</p>
                </div>

                {/* summary cards */}
                <div className="flex flex-row gap-4 mb-8">
                    <SummaryCard title="Pengguna" summary={3} />
                </div>

                {/* divider + action buttons */}
                <div className="divider-horizontal mb-4"></div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                        <ImportModal />
                        <ExportModal />
                    </div>

                    {/* Alert message */}
                    <AlertMessage message="Transaksi telah berhasil dibuat" visible={true} />
                </div>

                {/* Transaction Table */}
                <UserTable users={users} />
            </div>
        </Layout>
    );
}
