# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Проект

Приглашение на юбилей — одностраничное веб-приложение на якутском языке. Дата события: 01.03.2026, 15:00. Дизайн: светлый стиль с овальными контейнерами, цветочными декорациями, анимациями.

## Команды

```bash
npm run dev      # Dev-сервер (порт 3005 в настройках)
npm run build    # Production сборка
npm start        # Production сервер
npm run lint     # ESLint
```

## Стек

- **Next.js 16** (App Router) + **React 19** + **TypeScript 5**
- **Tailwind CSS 4** (через PostCSS)
- **Framer Motion** — анимации при скролле и hover
- Все компоненты — client-side (`"use client"`)

## Архитектура

Одностраничное приложение: `src/app/page.tsx` рендерит последовательность секций-компонентов.

**Порядок секций на странице:**
WelcomeScreen → HeroSection → InvitationSection → EventDetails → PhotoGallery → ProgramSection → CountdownTimer → MapSection → RSVPForm → FooterSection

**Фоновые компоненты** (fixed, поверх всей страницы): BackgroundFlowers, MusicPlayer

**Переиспользуемый декор:** FloralDecor — цветочные украшения для контейнеров секций.

## Цветовая палитра (CSS-переменные в globals.css)

- `--accent-red: #b94244` — основной акцент
- `--navy / --foreground: #323155` — текст
- `--cream: #fffcfb` — фон секций
- `--border-beige: #c3aca2` — границы
- `--accent-gold-start: #e2be87` / `--accent-gold-end: #c3aca2` — градиент

## Шрифт

Times New Roman (italic) загружается локально из `/public/fonts/times.ttf` через CSS-переменную `--font-times`.

## RSVP-форма

Данные (`name`, `attending`, `date`) отправляются POST-запросом на Google Apps Script endpoint. URL хранится прямо в компоненте `RSVPForm.tsx`.

## Оптимизация медиа

Используются оптимизированные версии файлов: `*-opt.jpg`, `*-opt.mp3`, `*-opt.png`. При добавлении медиа — создавать оптимизированные копии.
