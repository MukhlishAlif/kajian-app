"use client";

import { useState, useEffect, useCallback } from "react";
import { Trash2 } from "lucide-react";

type DeleteButtonProps = {
    id: string;
    name: string;
    onDelete?: (id: string) => void;
};

export default function DeleteButton({ id, name, onDelete }: DeleteButtonProps) {
    const [open, setOpen] = useState(false);

    // ✅ Close modal on Escape key
    useEffect(() => {
        if (!open) return;
        const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [open]);

    const handleConfirm = useCallback(() => {
        onDelete?.(id);
        setOpen(false);
    }, [onDelete, name]);

    return (
        <>
            {/* Delete Button */}
            <button
                onClick={() => setOpen(true)}
                className="p-1 rounded hover:bg-neutral-700"
                aria-label={`Hapus ${name}`}
            >
                <Trash2 className="w-4 h-4 text-red-600" />
            </button>

            {/* Modal */}
            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                    onClick={() => setOpen(false)} // ✅ click outside closes
                >
                    <div
                        className="flex flex-col space-y-4 w-96 max-w-full p-6 rounded-lg container-secondary shadow-lg bg-white text-left"
                        onClick={(e) => e.stopPropagation()} // ✅ prevent closing when clicking modal content
                    >
                        <h2 className="text-lg text-center font-semibold body-primary mb-4">
                            Hapus Pengguna
                        </h2>
                        <p className="body-secondary mb-4 text-left">
                            Apakah kamu yakin ingin menghapus{" "}
                            <span className="font-medium">{name}</span>?
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setOpen(false)}
                                className="button-secondary"
                            >
                                Batal
                            </button>
                            <button
                                onClick={handleConfirm}
                                className="button-secondary-danger"
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
