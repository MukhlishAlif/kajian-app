"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";

type EditButtonProps = {
    id: string;
    name: string;
    email: string;
    branch: string;
    contact: string;
    onEdit?: (id: string, data: { name: string; email: string; branch: string; contact: string }) => void;
};

export default function EditButton({ id, name, email, branch, contact, onEdit }: EditButtonProps) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name,
        email,
        branch,
        contact,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleConfirm = () => {
        onEdit?.(id, formData);
        setOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="p-1 rounded hover:bg-neutral-700"
            >
                <Pencil className="w-4 h-4 text-green-600" />
            </button>

            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                    onClick={() => setOpen(false)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="flex flex-col space-y-4 w-96 max-w-full p-6 rounded-lg container-secondary shadow-lg bg-white text-left"
                    >
                        <h2 className="text-lg font-semibold mb-4 text-center">Edit Pengguna</h2>

                        <form className="flex flex-col gap-3">
                            <div>
                                <label className="block font-medium mb-1">Nama</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="input-field w-full"
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input-field w-full"
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-1">Cabang</label>
                                <input
                                    type="text"
                                    name="branch"
                                    value={formData.branch}
                                    onChange={handleChange}
                                    className="input-field w-full"
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-1">No. HP</label>
                                <input
                                    type="text"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    className="input-field w-full"
                                />
                            </div>

                            <div className="flex justify-end gap-2 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="button-secondary"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleConfirm}
                                    className="button-primary"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
