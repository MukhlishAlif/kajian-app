"use client";

import { useState, useEffect, useCallback } from "react";
import { FileUp } from "lucide-react";

type ExportModalProps = {
    action?: string; // custom API endpoint
    method?: "GET" | "POST";
    hiddenInputs?: Record<string, string>; // optional hidden values
};

export default function ExportModal({
    action = "/api/export",
    method = "POST",
    hiddenInputs = {},
}: ExportModalProps) {
    const [open, setOpen] = useState(false);

    // ✅ Escape key closes modal
    useEffect(() => {
        if (!open) return;
        const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [open]);

    const handleClose = useCallback(() => setOpen(false), []);

    return (
        <div className="self-center">
            {/* Trigger Button */}
            <button
                onClick={() => setOpen(true)}
                className="flex flex-row items-center button-secondary focus:outline-none"
                aria-haspopup="dialog"
                aria-expanded={open}
                aria-controls="export-modal"
            >
                <FileUp className="w-4 h-4 mr-1" />
                Export
            </button>

            {/* Modal */}
            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                    onClick={handleClose} // ✅ click outside closes
                >
                    <div
                        id="export-modal"
                        role="dialog"
                        aria-modal="true"
                        onClick={(e) => e.stopPropagation()} // ✅ prevent close on inner click
                        className="flex flex-col space-y-4 w-96 max-w-full p-6 rounded-lg container-secondary shadow-lg bg-white"
                    >
                        <h2 className="text-lg font-semibold body-primary mb-4 text-center">
                            Export Pengguna
                        </h2>
                        <p className="body-secondary text-left">
                            Apakah kamu yakin ingin mengekspor pengguna?
                        </p>

                        {/* Form */}
                        <form
                            className="self-end"
                            action={action}
                            method={method}
                        >
                            {/* hidden inputs */}
                            {Object.entries(hiddenInputs).map(([key, value]) => (
                                <input key={key} type="hidden" name={key} value={value} />
                            ))}

                            <div className="flex space-x-2 mt-4">
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="button-secondary-danger"
                                >
                                    Batal
                                </button>
                                <button type="submit" className="button-secondary">
                                    Export
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
