"use client";

import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import ViewButton from "./ViewButton";

type User = {
    id: string;
    name: string;
    email: string;
    branch: string;
    contact: string;
};

type Props = {
    users: User[];
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
    onView?: (id: string) => void;
};

export default function UserTable({ users, onEdit, onDelete, onView }: Props) {
    return (
        <div className="overflow-x-auto border rounded-lg">
            <table className="w-full text-sm border-collapse">
                <thead className="bg-neutral-800 text-white">
                    <tr>
                        <th className="px-3 py-2 text-left">Nama</th>
                        <th className="px-3 py-2 text-left">Email</th>
                        <th className="px-3 py-2 text-left">Cabang</th>
                        <th className="px-3 py-2 text-left">No. HP</th>
                        <th className="px-3 py-2 text-center">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr
                            key={user.id}
                            className="hover:bg-neutral-900 transition-colors"
                        >
                            <td className="px-3 py-2 border-t">{user.name}</td>
                            <td className="px-3 py-2 border-t">{user.email}</td>
                            <td className="px-3 py-2 border-t">{user.branch}</td>
                            <td className="px-3 py-2 border-t">{user.contact}</td>
                            <td className="px-3 py-2 border-t text-center">
                                <div className="flex justify-center gap-2">
                                    <ViewButton {...user} onView={onView} />
                                    <EditButton {...user} onEdit={onEdit} />
                                    <DeleteButton id={user.id} name={user.name} onDelete={onDelete} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
