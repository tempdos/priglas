"use client";

import { motion } from "framer-motion";

// March 2026 calendar data
const YEAR = 2026;
const MONTH = 2; // 0-indexed: March = 2
const EVENT_DAY = 1;

const WEEKDAY_LABELS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Бс"];

function getCalendarDays() {
  const firstDay = new Date(YEAR, MONTH, 1);
  const lastDay = new Date(YEAR, MONTH + 1, 0);
  const totalDays = lastDay.getDate();

  // getDay() returns 0=Sunday, we need Monday=0
  let startWeekday = firstDay.getDay() - 1;
  if (startWeekday < 0) startWeekday = 6;

  const days: (number | null)[] = [];

  // Empty cells before the 1st
  for (let i = 0; i < startWeekday; i++) {
    days.push(null);
  }

  // Actual days
  for (let d = 1; d <= totalDays; d++) {
    days.push(d);
  }

  return days;
}

const calendarDays = getCalendarDays();

export default function EventDetails() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-[var(--font-times)] text-2xl md:text-3xl font-semibold text-[#323155]">
            Буолар күнэ
          </h2>
          <div className="flex justify-center mt-4">
            <div className="decorative-line" />
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 justify-center">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-sm"
          >
            <div className="border border-[#c3aca2] rounded-3xl bg-[#fffcfb] p-6 md:p-8 shadow-[0_8px_40px_rgba(195,172,162,0.1)]">
              {/* Month & Year header */}
              <div className="text-center mb-6">
                <p className="font-[var(--font-times)] text-sm tracking-[0.25em] uppercase text-[#c3aca2]">
                  Кулун тутар
                </p>
                <p className="font-[var(--font-times)] text-3xl md:text-4xl font-bold text-[#323155] mt-1">
                  Март 2026
                </p>
              </div>

              {/* Weekday headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {WEEKDAY_LABELS.map((label) => (
                  <div
                    key={label}
                    className="text-center font-[var(--font-times)] text-xs tracking-wider uppercase text-[#c3aca2] py-1"
                  >
                    {label}
                  </div>
                ))}
              </div>

              {/* Days grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => {
                  const isEvent = day === EVENT_DAY;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center"
                    >
                      {day !== null ? (
                        <div
                          className={`
                            w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full
                            font-[var(--font-times)] text-sm md:text-base transition-all
                            ${
                              isEvent
                                ? "bg-[#b94244] text-white font-bold text-lg md:text-xl shadow-[0_4px_15px_rgba(185,66,68,0.35)] scale-110"
                                : "text-[#323155] hover:bg-[#c3aca2]/10"
                            }
                          `}
                        >
                          {day}
                        </div>
                      ) : (
                        <div className="w-9 h-9 md:w-10 md:h-10" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Event indicator legend */}
              <div className="flex items-center justify-center gap-2 mt-5 pt-4 border-t border-[#c3aca2]/20">
                <div className="w-3 h-3 rounded-full bg-[#b94244]" />
                <span className="font-[var(--font-times)] text-sm text-[#323155]">
                  Убүлүөй күнэ
                </span>
              </div>
            </div>
          </motion.div>

          {/* Event info beside calendar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-5 text-center lg:text-left"
          >
            {/* Date */}
            <div>
              <p className="font-[var(--font-times)] text-sm tracking-[0.2em] uppercase text-[#c3aca2] mb-1">
                Буолар күнэ
              </p>
              <p className="font-[var(--font-times)] text-4xl md:text-5xl font-bold text-[#b94244]">
                1
              </p>
              <p className="font-[var(--font-times)] text-lg text-[#323155]">
                Кулун тутар / Март
              </p>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#e2be87] to-transparent mx-auto lg:mx-0" />

            {/* Time - start */}
            <div>
              <p className="font-[var(--font-times)] text-sm tracking-[0.2em] uppercase text-[#c3aca2] mb-1">
                Мустар бириэмэ
              </p>
              <p className="font-[var(--font-times)] text-4xl md:text-5xl font-bold text-[#b94244]">
                15:00
              </p>
              <p className="font-[var(--font-times)] text-lg text-[#323155]">
                саҕаланыыта
              </p>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#e2be87] to-transparent mx-auto lg:mx-0" />

            {/* Algys */}
            <div>
              <p className="font-[var(--font-times)] text-sm tracking-[0.2em] uppercase text-[#c3aca2] mb-1">
                Алгыс
              </p>
              <p className="font-[var(--font-times)] text-4xl md:text-5xl font-bold text-[#b94244]">
                16:00
              </p>
              <p className="font-[var(--font-times)] text-lg text-[#323155]">
                Благословение
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
