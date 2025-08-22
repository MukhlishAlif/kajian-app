"use client";

import { useState } from "react";
import { Eye } from "lucide-react";

type ViewButtonProps = {
    id: string;
    name: string;
    email: string;
    branch: string;
    contact: string;
    onView?: (id: string) => void;
};

export default function ViewButton({ id, name, email, branch, contact, onView }: ViewButtonProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => {
                    setOpen(true);
                    onView?.(id);
                }}
                className="p-1 rounded hover:bg-neutral-700"
            >
                <Eye className="w-4 h-4 text-blue-500" />
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
                        <h2 className="text-lg font-semibold text-center">Detail Pengguna</h2>
                        <div className="space-y-3 text-sm">
                            <div>
                                <label className="block font-medium mb-1">Nama</label>
                                <input
                                    type="text"
                                    value={name}
                                    disabled
                                    className="input-field w-full"
                                />
                            </div>
                            <div>
                                <label className="block font-medium mb-1">Email</label>
                                <input
                                    type="text"
                                    value={email}
                                    disabled
                                    className="input-field w-full"
                                />
                            </div>
                            <div>
                                <label className="block font-medium mb-1">Cabang</label>
                                <input
                                    type="text"
                                    value={branch}
                                    disabled
                                    className="input-field w-full"
                                />
                            </div>
                            <div>
                                <label className="block font-medium mb-1">No. HP</label>
                                <input
                                    type="text"
                                    value={contact}
                                    disabled
                                    className="input-field w-full"
                                />
                            </div>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="self-end button-secondary"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
