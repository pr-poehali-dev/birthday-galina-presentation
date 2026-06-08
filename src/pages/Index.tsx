import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: 0,
    type: "title",
    bg: "from-pastel-rose via-pastel-lavender to-pastel-peach",
    accent: "#C084A0",
    label: "",
    title: "День рождения\nГалины",
    subtitle: "Концепции праздника",
    decor: "🌸",
  },
  {
    id: 1,
    type: "concept",
    bg: "from-pastel-rose to-pastel-cream",
    accent: "#D4749A",
    label: "Концепция 1",
    title: "Розовый сад",
    subtitle: "Элегантный праздник в стиле французского розария",
    details: [
      "Живые розы и пионы в пастельных тонах",
      "Белые деревянные арки с цветочными гирляндами",
      "Меню из лёгких блюд прованской кухни",
      "Музыкальный квартет с классическими мелодиями",
    ],
    mood: "Нежность · Романтика · Изысканность",
    decor: "🌹",
  },
  {
    id: 2,
    type: "concept",
    bg: "from-pastel-lavender to-pastel-cream",
    accent: "#9B7EC8",
    label: "Концепция 2",
    title: "Лавандовые поля",
    subtitle: "Праздник вдохновлённый летним Провансом",
    details: [
      "Фиолетово-белая флористика с лавандой",
      "Ароматические свечи и диффузоры с лавандой",
      "Фотозона с корзинами сухоцветов",
      "Авторские лавандовые десерты",
    ],
    mood: "Спокойствие · Уют · Аромат",
    decor: "💜",
  },
  {
    id: 3,
    type: "concept",
    bg: "from-pastel-peach to-pastel-cream",
    accent: "#D4845A",
    label: "Концепция 3",
    title: "Персиковый закат",
    subtitle: "Тёплый вечер в оттенках персика и золота",
    details: [
      "Декор в тонах персика, коралла и золота",
      "Терракотовая посуда и льняные скатерти",
      "Фуршетные столы с фруктами и сырами",
      "Живой джаз или акустическая гитара",
    ],
    mood: "Теплота · Радость · Золотой час",
    decor: "🍑",
  },
  {
    id: 4,
    type: "concept",
    bg: "from-pastel-mint to-pastel-cream",
    accent: "#5AAA8A",
    label: "Концепция 4",
    title: "Утро в саду",
    subtitle: "Брunch-вечеринка в свежем утреннем стиле",
    details: [
      "Зелёный декор с суккулентами и зеленью",
      "Бранч-меню с панкейками и смузи",
      "Ботанические принты в оформлении",
      "Мастер-класс по флористике для гостей",
    ],
    mood: "Свежесть · Природа · Вдохновение",
    decor: "🌿",
  },
  {
    id: 5,
    type: "concept",
    bg: "from-pastel-sky to-pastel-cream",
    accent: "#5A8AC8",
    label: "Концепция 5",
    title: "Небесный бал",
    subtitle: "Торжественный вечер в небесно-голубых тонах",
    details: [
      "Голубые и белые воздушные шары и ткани",
      "Хрустальный декор и зеркальные поверхности",
      "Гала-ужин с дресс-кодом «белое и голубое»",
      "Фейерверк или световое шоу в финале",
    ],
    mood: "Торжество · Сияние · Волшебство",
    decor: "✨",
  },
  {
    id: 6,
    type: "final",
    bg: "from-pastel-rose via-pastel-lavender to-pastel-peach",
    accent: "#C084A0",
    label: "Итог",
    title: "Выбираем\nконцепцию",
    subtitle: "Каждая идея создана с любовью для особенного дня Галины",
    decor: "🎂",
  },
];

const conceptColors = [
  { dot: "#D4749A", name: "Розовый сад" },
  { dot: "#9B7EC8", name: "Лавандовые поля" },
  { dot: "#D4845A", name: "Персиковый закат" },
  { dot: "#5AAA8A", name: "Утро в саду" },
  { dot: "#5A8AC8", name: "Небесный бал" },
];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goTo = (idx: number) => {
    if (animating || idx === current) return;
    setDirection(idx > current ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 320);
  };

  const next = () => goTo(Math.min(current + 1, slides.length - 1));
  const prev = () => goTo(Math.max(current - 1, 0));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, animating]);

  const slide = slides[current];

  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-100 flex items-center justify-center font-body">
      {/* Slide container — 16:9 */}
      <div
        className="relative bg-white shadow-2xl"
        style={{
          width: "min(100vw, calc(100vh * 16 / 9))",
          height: "min(100vh, calc(100vw * 9 / 16))",
          maxWidth: "1280px",
          maxHeight: "720px",
        }}
      >
        {/* Background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${slide.bg} transition-all duration-700`}
        />

        {/* Decorative circles */}
        <div
          className="absolute top-[-10%] right-[-8%] w-[40%] aspect-square rounded-full opacity-20 blur-3xl"
          style={{ background: slide.accent }}
        />
        <div
          className="absolute bottom-[-15%] left-[-5%] w-[35%] aspect-square rounded-full opacity-15 blur-3xl"
          style={{ background: slide.accent }}
        />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #666 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Content */}
        <div
          className={`relative h-full flex flex-col transition-all duration-300 ${
            animating
              ? direction === "next"
                ? "opacity-0 translate-x-4"
                : "opacity-0 -translate-x-4"
              : "opacity-100 translate-x-0"
          }`}
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-[5%] pt-[3.5%]">
            <div className="flex items-center gap-2">
              <span className="text-[1.1vw] font-body font-light tracking-widest uppercase" style={{ color: slide.accent }}>
                День рождения Галины
              </span>
            </div>
            <div className="flex items-center gap-[0.6vw]">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "2vw" : "0.6vw",
                    height: "0.6vw",
                    minWidth: i === current ? 20 : 6,
                    minHeight: 6,
                    background: i === current ? slide.accent : `${slide.accent}55`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Main content */}
          {slide.type === "title" && (
            <div className="flex-1 flex flex-col items-center justify-center text-center px-[10%]">
              <div className="text-[6vw] mb-[1.5vw]">{slide.decor}</div>
              <h1
                className="font-display italic font-light leading-tight mb-[2vw]"
                style={{
                  fontSize: "clamp(32px, 7vw, 90px)",
                  color: slide.accent,
                  lineHeight: 1.1,
                  whiteSpace: "pre-line",
                }}
              >
                {slide.title}
              </h1>
              <div
                className="w-[8vw] h-px mb-[2vw]"
                style={{ background: `${slide.accent}66` }}
              />
              <p
                className="font-body font-light tracking-[0.3em] uppercase"
                style={{ fontSize: "clamp(10px, 1.4vw, 18px)", color: `${slide.accent}CC` }}
              >
                {slide.subtitle}
              </p>

              {/* Concept preview dots */}
              <div className="flex gap-[2vw] mt-[4vw]">
                {conceptColors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i + 1)}
                    className="flex flex-col items-center gap-[0.5vw] group"
                  >
                    <div
                      className="rounded-full transition-transform group-hover:scale-110"
                      style={{
                        width: "clamp(8px, 1.2vw, 14px)",
                        height: "clamp(8px, 1.2vw, 14px)",
                        background: c.dot,
                      }}
                    />
                    <span
                      className="font-body font-light opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ fontSize: "clamp(7px, 0.9vw, 11px)", color: c.dot }}
                    >
                      {i + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {slide.type === "concept" && (
            <div className="flex-1 flex px-[6%] pb-[4%] gap-[4%]">
              {/* Left */}
              <div className="flex flex-col justify-center w-[48%]">
                <span
                  className="font-body font-light tracking-[0.3em] uppercase mb-[1.5vw] block"
                  style={{ fontSize: "clamp(9px, 1vw, 13px)", color: `${slide.accent}99` }}
                >
                  {slide.label}
                </span>
                <div className="text-[3.5vw] mb-[1.5vw]">{slide.decor}</div>
                <h2
                  className="font-display italic font-light leading-tight mb-[1.5vw]"
                  style={{
                    fontSize: "clamp(24px, 5.5vw, 72px)",
                    color: slide.accent,
                    lineHeight: 1.05,
                  }}
                >
                  {slide.title}
                </h2>
                <p
                  className="font-body font-light leading-relaxed mb-[2.5vw]"
                  style={{ fontSize: "clamp(10px, 1.3vw, 17px)", color: "#6B5C5C" }}
                >
                  {slide.subtitle}
                </p>
                <div
                  className="inline-block px-[1.5vw] py-[0.6vw] rounded-full"
                  style={{
                    background: `${slide.accent}18`,
                    fontSize: "clamp(8px, 1vw, 13px)",
                    color: slide.accent,
                    fontFamily: "Golos Text",
                    fontWeight: 300,
                    letterSpacing: "0.08em",
                  }}
                >
                  {slide.mood}
                </div>
              </div>

              {/* Right — details */}
              <div className="flex flex-col justify-center w-[48%] gap-[1.8vw]">
                {slide.details?.map((d, i) => (
                  <div key={i} className="flex items-start gap-[1.2vw]">
                    <div
                      className="shrink-0 rounded-full mt-[0.4vw]"
                      style={{
                        width: "clamp(4px, 0.5vw, 7px)",
                        height: "clamp(4px, 0.5vw, 7px)",
                        background: slide.accent,
                        opacity: 0.6,
                      }}
                    />
                    <p
                      className="font-body font-light leading-snug"
                      style={{ fontSize: "clamp(10px, 1.25vw, 16px)", color: "#6B5C5C" }}
                    >
                      {d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.type === "final" && (
            <div className="flex-1 flex flex-col items-center justify-center text-center px-[10%]">
              <div className="text-[5vw] mb-[2vw]">{slide.decor}</div>
              <h2
                className="font-display italic font-light leading-tight mb-[2.5vw]"
                style={{
                  fontSize: "clamp(28px, 5.5vw, 70px)",
                  color: slide.accent,
                  whiteSpace: "pre-line",
                  lineHeight: 1.1,
                }}
              >
                {slide.title}
              </h2>
              <p
                className="font-body font-light mb-[3vw]"
                style={{ fontSize: "clamp(10px, 1.3vw, 17px)", color: "#6B5C5C", maxWidth: "60%" }}
              >
                {slide.subtitle}
              </p>

              <div className="flex gap-[1.5vw] flex-wrap justify-center">
                {conceptColors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i + 1)}
                    className="flex items-center gap-[0.7vw] px-[1.5vw] py-[0.7vw] rounded-full border transition-all hover:shadow-md"
                    style={{
                      borderColor: `${c.dot}44`,
                      background: `${c.dot}14`,
                    }}
                  >
                    <div
                      className="rounded-full shrink-0"
                      style={{
                        width: "clamp(6px, 0.8vw, 10px)",
                        height: "clamp(6px, 0.8vw, 10px)",
                        background: c.dot,
                      }}
                    />
                    <span
                      className="font-body font-light"
                      style={{ fontSize: "clamp(9px, 1vw, 13px)", color: c.dot }}
                    >
                      {c.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Footer navigation */}
          <div className="flex items-center justify-between px-[5%] pb-[3%]">
            <button
              onClick={prev}
              disabled={current === 0}
              className="flex items-center gap-[0.8vw] transition-all disabled:opacity-20 hover:opacity-70"
              style={{ color: slide.accent }}
            >
              <Icon name="ChevronLeft" size={16} />
              <span className="font-body font-light tracking-wider" style={{ fontSize: "clamp(9px, 1vw, 12px)" }}>
                Назад
              </span>
            </button>

            <span
              className="font-body font-light tracking-widest"
              style={{ fontSize: "clamp(8px, 0.9vw, 11px)", color: `${slide.accent}77` }}
            >
              {current + 1} / {slides.length}
            </span>

            <button
              onClick={next}
              disabled={current === slides.length - 1}
              className="flex items-center gap-[0.8vw] transition-all disabled:opacity-20 hover:opacity-70"
              style={{ color: slide.accent }}
            >
              <span className="font-body font-light tracking-wider" style={{ fontSize: "clamp(9px, 1vw, 12px)" }}>
                Далее
              </span>
              <Icon name="ChevronRight" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
