"use client";

import { useState, useEffect, useCallback } from "react";
import { FileDown } from "lucide-react";

export default function ImportModal() {
    const [open, setOpen] = useState(false);
    const [fileName, setFileName] = useState("");
    const [error, setError] = useState("");

    // ✅ Close modal on Escape
    useEffect(() => {
        if (!open) return;
        const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [open]);

    const handleClose = useCallback(() => {
        setFileName("");
        setError("");
        setOpen(false);
    }, []);

    const handleFileChange = (file: File | null) => {
        if (!file) return;
        // ✅ File validation
        if (file.size > 2 * 1024 * 1024) {
            setError("File size must not exceed 2MB.");
            return;
        }
        if (!["image/png", "image/jpeg", "application/pdf"].includes(file.type)) {
            setError("Only PNG, JPG, or PDF files are allowed.");
            return;
        }
        setError("");
        setFileName(file.name);
    };

    // ✅ Drag & Drop
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileChange(e.dataTransfer.files[0]);
        }
    };

    return (
        <div className="self-center">
            {/* Trigger Button */}
            <button
                onClick={() => setOpen(true)}
                className="flex flex-row items-center button-secondary focus:outline-none"
                aria-haspopup="dialog"
                aria-expanded={open}
                aria-controls="import-modal"
            >
                <FileDown className="w-4 h-4 mr-1" />
                Import
            </button>

            {/* Modal */}
            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                    onClick={handleClose} // click outside
                >
                    <form
                        id="import-modal"
                        role="dialog"
                        aria-modal="true"
                        onClick={(e) => e.stopPropagation()} // stop bubbling
                        className="flex flex-col space-y-4 w-96 max-w-full p-6 rounded-lg container-secondary shadow-lg bg-white items-center"
                    >
                        <h2 className="text-lg font-semibold body-primary mb-4">
                            Import Pengguna
                        </h2>

                        {/* Upload Box */}
                        <div
                            className={`w-full border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition ${fileName ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white"
                                }`}
                            onClick={() => document.getElementById("fileInput")?.click()}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                        >
                            <input
                                id="fileInput"
                                type="file"
                                className="hidden"
                                onChange={(e) =>
                                    handleFileChange(e.target.files ? e.target.files[0] : null)
                                }
                            />
                            <p className="text-sm text-gray-600">
                                <span className="font-medium text-blue-600">Click to upload</span> or drag
                                and drop
                                <br />
                                {fileName || "PNG, JPG, or PDF (Max 2MB)"}
                            </p>
                        </div>

                        {/* Error Message */}
                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        {/* Buttons */}
                        <div className="flex self-end space-x-2 mt-4">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="button-secondary-danger"
                            >
                                Batal
                            </button>
                            <button
                                type="submit"
                                className="button-secondary"
                                disabled={!fileName || !!error}
                            >
                                Import
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
