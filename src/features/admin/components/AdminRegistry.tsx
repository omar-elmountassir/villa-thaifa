"use client";

import { useData } from "@json-render/react";
import React, { useState } from "react";
import { Room, RoomSchema } from "@/features/rooms/model/schema";

// --- Components ---

function Section({ element, children }: any) {
  return (
    <div
      className={`p-8 bg-white rounded-2xl border border-neutral-200 shadow-sm ${element.props.className || ""}`}
    >
      {element.props.title && (
        <h3 className="text-lg font-bold mb-6 text-neutral-900 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-neutral-900 rounded-full inline-block" />
          {element.props.title}
        </h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {children}
      </div>
    </div>
  );
}

function TextField({ element }: any) {
  const { path, label, placeholder, multiline, rows, className } =
    element.props;
  const { get, set } = useData();
  const rawValue = get(path);
  const value = typeof rawValue === "string" ? rawValue : "";

  return (
    <div className={`flex flex-col gap-1.5 ${className || ""}`}>
      <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => set(path, e.target.value)}
          placeholder={placeholder}
          rows={rows || 3}
          className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all resize-none text-neutral-800"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => set(path, e.target.value)}
          placeholder={placeholder}
          className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all text-neutral-800"
        />
      )}
    </div>
  );
}

function NumberField({ element }: any) {
  const { path, label, className } = element.props;
  const { get, set } = useData();
  const rawValue = get(path);
  const value = typeof rawValue === "number" ? rawValue : 0;

  return (
    <div className={`flex flex-col gap-1.5 ${className || ""}`}>
      <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => set(path, Number(e.target.value))}
        className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all w-full text-neutral-800"
      />
    </div>
  );
}

function ActionPanel({ children }: any) {
  return (
    <div className="sticky bottom-6 bg-white/90 backdrop-blur border rounded-lg p-4 shadow-lg flex justify-end gap-4 mt-8">
      {children}
    </div>
  );
}

import { saveRoomData } from "@/features/admin/actions";

function SaveButton({ element }: any) {
  const { label } = element.props;
  const { data } = useData();
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    // Basic validation
    const validation = RoomSchema.safeParse(data);
    if (!validation.success) {
      const issues = validation.error.issues
        .map((i) => `${i.path.join(".")}: ${i.message}`)
        .join("\n");
      alert("Validation failed:\n" + issues);
      return;
    }

    setLoading(true);
    try {
      const result = await saveRoomData(validation.data as Room);
      if (result.success) {
        alert("Saved successfully!");
      } else {
        alert("Failed to save: " + result.error);
      }
    } catch (e) {
      alert("Unexpected error: " + e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSave}
      disabled={loading}
      className="bg-neutral-900 text-white px-8 py-3 rounded-xl hover:bg-neutral-800 active:scale-95 transition-all disabled:opacity-50 font-bold shadow-lg shadow-neutral-200 flex items-center gap-2"
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Saving...
        </>
      ) : (
        label
      )}
    </button>
  );
}

function ListField({ element }: any) {
  const { path, label, className } = element.props;
  const { get, set } = useData();
  const value = get(path);
  const list: string[] = Array.isArray(value) ? value : [];

  const updateItem = (index: number, val: string) => {
    const newList = [...list];
    newList[index] = val;
    set(path, newList);
  };

  const removeItem = (index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    set(path, newList);
  };

  const addItem = () => {
    set(path, [...list, ""]);
  };

  return (
    <div className={`flex flex-col gap-3 ${className || ""}`}>
      <div className="flex justify-between items-center">
        <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
          {label}
        </label>
        <button
          onClick={addItem}
          className="text-[10px] bg-neutral-900 text-white px-2 py-1 rounded font-black uppercase tracking-tighter hover:bg-neutral-800 transition-all"
        >
          + Add Item
        </button>
      </div>
      <div className="space-y-2">
        {list.map((item, idx) => (
          <div key={idx} className="flex gap-2 group">
            <input
              type="text"
              value={item}
              onChange={(e) => updateItem(idx, e.target.value)}
              className="flex-1 p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-neutral-900 outline-none transition-all text-sm"
            />
            <button
              onClick={() => removeItem(idx)}
              className="text-red-400 hover:text-red-600 hover:bg-neutral-50 p-2 rounded-xl transition-all"
              title="Remove"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        ))}
        {list.length === 0 && (
          <div className="py-8 text-center border-2 border-dashed border-neutral-100 rounded-xl bg-neutral-50/50">
            <p className="text-xs text-neutral-400 font-medium">Empty list</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ImageManager({ element }: any) {
  const { path, label } = element.props;
  const { get, set } = useData();
  const value = get(path);
  const images: string[] = Array.isArray(value) ? value : [];

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    set(path, newImages);
  };

  const moveImage = (index: number, direction: "up" | "down") => {
    const newImages = [...images];
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < newImages.length) {
      const temp = newImages[index];
      newImages[index] = newImages[newIndex];
      newImages[newIndex] = temp;
      set(path, newImages);
    }
  };

  const addImageStub = () => {
    const newUrl = prompt("Enter image URL (local path or external):");
    if (newUrl) {
      set(path, [...images, newUrl]);
    }
  };

  return (
    <div className="flex flex-col gap-4 col-span-full">
      <div className="flex justify-between items-center bg-neutral-50 p-4 rounded-xl border border-neutral-100">
        <div>
          <label className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
            {label}
          </label>
          <p className="text-xs text-neutral-500 mt-0.5">
            {images.length} photos assigned to this room
          </p>
        </div>
        <button
          onClick={addImageStub}
          className="bg-neutral-900 text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-neutral-800 transition-all flex items-center gap-2"
        >
          <span>Add Photo URL</span>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="group relative aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden border border-neutral-200 shadow-sm transition-all hover:shadow-md"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt="Room"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end p-4 gap-3">
              <div className="flex gap-2">
                <button
                  onClick={() => moveImage(idx, "up")}
                  disabled={idx === 0}
                  className="bg-white/20 hover:bg-white text-white hover:text-neutral-900 p-2 rounded-xl backdrop-blur-md disabled:hidden transition-all"
                  title="Move Left"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => moveImage(idx, "down")}
                  disabled={idx === images.length - 1}
                  className="bg-white/20 hover:bg-white text-white hover:text-neutral-900 p-2 rounded-xl backdrop-blur-md disabled:hidden transition-all"
                  title="Move Right"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              <button
                onClick={() => removeImage(idx)}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl text-xs font-bold transition-colors"
              >
                Delete Image
              </button>
            </div>

            {idx === 0 && (
              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-neutral-900/90 backdrop-blur-md text-white px-2.5 py-1 rounded-full shadow-lg">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">
                  Cover
                </span>
              </div>
            )}
            <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-lg font-mono">
              {idx + 1}
            </div>
          </div>
        ))}
        {images.length === 0 && (
          <div className="col-span-full py-16 text-center text-neutral-400 border-3 border-dashed border-neutral-100 rounded-2xl bg-neutral-50/30 flex flex-col items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-40"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
            <p className="font-medium">No images assigned to this room.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// --- Registry ---

export const adminRegistry = {
  Section,
  TextField,
  NumberField,
  ActionPanel,
  SaveButton,
  ImageManager,
  ListField,
};
