"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FloralDecor from "./FloralDecor";

// Вставь сюда URL твоего Google Apps Script web app
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwjnOcrCuwXnoY9IR-e-LxX1AlsddYC8hGoB4ZRTy38bLlsEDGyLjYMs9jJv782KtWtAQ/exec";

type Status = "idle" | "loading" | "success" | "error";

export default function RSVPForm() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || attending === null) return;

    setStatus("loading");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          attending: attending ? "Приду" : "Не приду",
          date: new Date().toLocaleString("ru-RU"),
        }),
      });

      setStatus("success");
      setName("");
      setAttending(null);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="font-[var(--font-times)] text-2xl md:text-3xl font-semibold text-[#323155]">
              Анкета
            </h2>
            <div className="flex justify-center mt-4">
              <div className="decorative-line" />
            </div>
          </div>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="oval-container px-8 py-12 text-center"
            >
              <p className="font-[var(--font-times)] text-xl text-[#323155] mb-2">
                Махтал!
              </p>
              <p className="font-[var(--font-times)] text-base text-[#c3aca2]">
                Эн хоруйуҥ тиийдэ
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="oval-container px-8 py-12 md:px-12 md:py-14 relative overflow-visible">
                <FloralDecor positions={["top-left", "bottom-right"]} flowerSrc="/flower2.svg" />
                {/* Name field */}
                <div className="mb-8">
                  <label className="block font-[var(--font-times)] text-sm tracking-[0.15em] uppercase text-[#c3aca2] mb-3 text-center">
                    Аатыҥ-суолуҥ (ФИО)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Ааккын суруй"
                    className="w-full bg-transparent border-b border-[#c3aca2] py-3 px-2 text-center font-[var(--font-times)] text-lg text-[#323155] placeholder:text-[#c3aca2]/50 focus:outline-none focus:border-[#b94244] transition-colors"
                  />
                </div>

                {/* Attending toggle */}
                <div className="mb-8">
                  <label className="block font-[var(--font-times)] text-sm tracking-[0.15em] uppercase text-[#c3aca2] mb-4 text-center">
                    Кэлиэҥ дуо?
                  </label>
                  <div className="flex gap-4 justify-center">
                    <button
                      type="button"
                      onClick={() => setAttending(true)}
                      className={`
                        px-8 py-3 rounded-full font-[var(--font-times)] text-base transition-all
                        ${
                          attending === true
                            ? "bg-[#b94244] text-white shadow-[0_4px_15px_rgba(185,66,68,0.3)]"
                            : "border border-[#c3aca2] text-[#323155] hover:border-[#b94244] hover:text-[#b94244]"
                        }
                      `}
                    >
                      Кэлэбин
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttending(false)}
                      className={`
                        px-8 py-3 rounded-full font-[var(--font-times)] text-base transition-all
                        ${
                          attending === false
                            ? "bg-[#323155] text-white shadow-[0_4px_15px_rgba(50,49,85,0.3)]"
                            : "border border-[#c3aca2] text-[#323155] hover:border-[#323155]"
                        }
                      `}
                    >
                      Кыайан кэлбэппин
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={!name.trim() || attending === null || status === "loading"}
                    className="px-12 py-3 rounded-full bg-[#b94244] text-white font-[var(--font-times)] text-base tracking-wider transition-all hover:shadow-[0_4px_20px_rgba(185,66,68,0.35)] disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Ыытыллар..." : "Ыытарга"}
                  </button>
                </div>

                {status === "error" && (
                  <p className="text-center mt-4 font-[var(--font-times)] text-sm text-[#b94244]">
                    Алҕас таҕыста. Хатылаан көр.
                  </p>
                )}
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
