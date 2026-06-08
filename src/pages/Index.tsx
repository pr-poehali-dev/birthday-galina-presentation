import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

type Card = { num: string; name: string; accent: string; bg: string };

type SlideBase = { id: number; type: string; bg: string; accentBg: string; accent: string; title: string };
type TitleSlide = SlideBase & { type: "title"; subtitle: string };
type ConceptSlide = SlideBase & {
  type: "concept";
  tag: string;
  lead: string;
  paragraphs: string[];
  footer: string;
  image?: string;
};
type FinalSlide = SlideBase & { type: "final"; subtitle: string; cards: Card[] };
type Slide = TitleSlide | ConceptSlide | FinalSlide;

const slides: Slide[] = [
  {
    id: 0,
    type: "title",
    bg: "#FDF6F0",
    accentBg: "#F9E8E0",
    accent: "#C07A6A",
    title: "День рождения\nГалины",
    subtitle: "Варианты концепций · Август / Сентябрь",
  },
  {
    id: 1,
    type: "concept",
    bg: "#FDF3EE",
    accentBg: "#F5DDD5",
    accent: "#BF6D5A",
    tag: "Вариант 1",
    title: "Эффект присутствия",
    lead: "Именинница будет знать, что её ждёт сюрприз, но каким именно он будет — нет.",
    paragraphs: [
      "Проживаем заново ключевые события жизни Галины — первая любовь, расставание, победа, первый заработок, потеря — как перформансы.",
      "Каждый вечер завершается ужином, который является «вкусом» того времени. Для проведения используются природные локации невероятной красоты, которые будут только усиливать восприятие.",
    ],
    footer: "Для этого варианта необходимо провести интервью с именинницей",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/9ceb4b5c-ba80-4ffb-8667-e358b43422d7.jpg",
  },
  {
    id: 2,
    type: "concept",
    bg: "#F5F0FA",
    accentBg: "#E8D8F5",
    accent: "#8A65B5",
    tag: "Вариант 2",
    title: "Архетипы женщины",
    lead: "Мама. Женщина. Вселенная. Муза.",
    paragraphs: [
      "Представьте себе уютное пространство, где нежный свет заката окутывает атмосферу теплом и уютом. В центре этого пространства длинный единый стол, словно приглашение к общению и единству.",
      "На столе расстелен рулон жатой бумаги, который словно живет своей жизнью. На поверхности нанесены фразы и слова именинницы — искренние мысли, мечты и воспоминания. Каждое слово словно оживает, рассказывая историю о её жизни.",
      "Рулон бумаги продолжает свой путь за пределами стола, уходит в сценическое пространство. На возвышении сидит мужчина — рассказчик (известный актёр). Пространство дополняется летящими тканевыми полотнами.",
      "Вокруг стола собирается семья — каждый описывает именинницу как мать, музу, наставника. Они прикасаются к рулону, добавляют свои слова — и это становится настоящим творческим актом совместного создания.",
    ],
    footer: "Для этого варианта необходимо провести интервью с каждым членом семьи",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/b7f8b29b-b200-4c80-8164-8e5c5b63a557.jpg",
  },
  {
    id: 3,
    type: "final",
    bg: "#FDF6F0",
    accentBg: "#F9E8E0",
    accent: "#C07A6A",
    title: "Выбираем\nконцепцию",
    subtitle: "Каждая идея создана с любовью для особенного дня Галины",
    cards: [
      { num: "01", name: "Эффект присутствия", accent: "#BF6D5A", bg: "#F5DDD5" },
      { num: "02", name: "Архетипы женщины", accent: "#8A65B5", bg: "#E8D8F5" },
    ],
  },
];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState<"next" | "prev">("next");

  const goTo = (idx: number) => {
    if (animating || idx === current || idx < 0 || idx >= slides.length) return;
    setDir(idx > current ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(current - 1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [current, animating]);

  const slide = slides[current];

  return (
    <div
      className="w-screen h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "#E8E2DC" }}
    >
      <div
        className="relative overflow-hidden shadow-2xl"
        style={{
          width: "min(100vw, calc(100vh * 16 / 9))",
          height: "min(100vh, calc(100vw * 9 / 16))",
          maxWidth: 1280,
          maxHeight: 720,
          background: slide.bg,
          transition: "background 0.6s ease",
          borderRadius: 2,
        }}
      >
        {/* Accent blobs */}
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "45%", paddingBottom: "45%", borderRadius: "50%", background: slide.accentBg, opacity: 0.8, filter: "blur(60px)", transition: "background 0.6s ease", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-20%", left: "-8%", width: "35%", paddingBottom: "35%", borderRadius: "50%", background: slide.accentBg, opacity: 0.5, filter: "blur(50px)", transition: "background 0.6s ease", pointerEvents: "none" }} />

        {/* Content */}
        <div
          className="relative h-full flex flex-col"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? `translateX(${dir === "next" ? "18px" : "-18px"})` : "translateX(0)",
            transition: "opacity 0.28s ease, transform 0.28s ease",
          }}
        >
          {/* Nav dots — top right only */}
          <div style={{ display: "flex", justifyContent: "flex-end", padding: "2.5% 5% 0" }}>
            <div style={{ display: "flex", gap: "clamp(4px, 0.6vw, 8px)", alignItems: "center" }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{ width: i === current ? "clamp(16px, 2vw, 24px)" : "clamp(5px, 0.6vw, 8px)", height: "clamp(5px, 0.6vw, 8px)", borderRadius: 99, background: i === current ? slide.accent : `${slide.accent}44`, border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }}
                />
              ))}
            </div>
          </div>

          {/* TITLE */}
          {slide.type === "title" && (() => {
            const s = slide as TitleSlide;
            return (
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2% 10%" }}>
                <div style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(8px, 1vw, 12px)", letterSpacing: "0.35em", textTransform: "uppercase", color: s.accent, opacity: 0.5, marginBottom: "clamp(12px, 2vw, 26px)" }}>
                  Варианты концепций
                </div>
                <h1 style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(42px, 9vw, 112px)", lineHeight: 1.0, color: s.accent, whiteSpace: "pre-line", margin: 0, textAlign: "center", marginBottom: "clamp(12px, 2.5vw, 32px)" }}>
                  {s.title}
                </h1>
                <div style={{ width: "clamp(30px, 5vw, 60px)", height: 1, background: `${s.accent}44`, marginBottom: "clamp(10px, 1.8vw, 22px)" }} />
                <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(10px, 1.3vw, 16px)", color: s.accent, opacity: 0.5, letterSpacing: "0.12em", margin: 0, textAlign: "center" }}>
                  {s.subtitle}
                </p>
              </div>
            );
          })()}

          {/* CONCEPT */}
          {slide.type === "concept" && (() => {
            const s = slide as ConceptSlide;
            return (
              <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
                {/* Left: text */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "2% 4% 2% 6%", overflowY: "auto", gap: "clamp(6px, 1.2vw, 14px)" }}>
                  {/* Tag */}
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.6vw, 8px)" }}>
                    <div style={{ width: "clamp(14px, 1.8vw, 22px)", height: 1, background: s.accent, opacity: 0.45 }} />
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(8px, 0.9vw, 12px)", letterSpacing: "0.3em", textTransform: "uppercase", color: s.accent, opacity: 0.65 }}>{s.tag}</span>
                  </div>

                  {/* Title */}
                  <h2 style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(26px, 4.5vw, 58px)", lineHeight: 1.0, color: s.accent, margin: 0 }}>
                    {s.title}
                  </h2>

                  {/* Lead */}
                  <p style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontSize: "clamp(12px, 1.6vw, 20px)", color: s.accent, opacity: 0.85, lineHeight: 1.4, margin: 0 }}>
                    {s.lead}
                  </p>

                  {/* Paragraphs */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "clamp(5px, 0.9vw, 11px)" }}>
                    {s.paragraphs.map((p, i) => (
                      <p key={i} style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(10px, 1.25vw, 15px)", lineHeight: 1.65, color: "#4A3F3A", margin: 0 }}>
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Footer */}
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(5px, 0.7vw, 9px)", paddingTop: "clamp(4px, 0.6vw, 8px)", borderTop: `1px solid ${s.accent}18`, marginTop: "auto" }}>
                    <Icon name="Info" size={12} style={{ color: s.accent, opacity: 0.45, flexShrink: 0 }} />
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(8px, 0.9vw, 11px)", color: s.accent, opacity: 0.55, letterSpacing: "0.03em" }}>
                      {s.footer}
                    </span>
                  </div>
                </div>

                {/* Right: image */}
                {s.image && (
                  <div style={{ flex: "0 0 38%", position: "relative", overflow: "hidden" }}>
                    <img
                      src={s.image}
                      alt=""
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${s.bg} 0%, transparent 20%)` }} />
                  </div>
                )}
              </div>
            );
          })()}

          {/* FINAL */}
          {slide.type === "final" && (() => {
            const s = slide as FinalSlide;
            return (
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2% 10%", gap: "clamp(12px, 2.5vw, 32px)" }}>
                <h2 style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(26px, 5.5vw, 68px)", lineHeight: 1.05, color: s.accent, textAlign: "center", whiteSpace: "pre-line", margin: 0 }}>
                  {s.title}
                </h2>
                <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(9px, 1.1vw, 14px)", color: s.accent, opacity: 0.55, textAlign: "center", margin: 0, letterSpacing: "0.05em" }}>
                  {s.subtitle}
                </p>
                <div style={{ display: "flex", gap: "clamp(10px, 2vw, 24px)", marginTop: "clamp(4px, 0.8vw, 10px)" }}>
                  {s.cards.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i + 1)}
                      style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "clamp(12px, 2vw, 24px) clamp(16px, 2.5vw, 30px)", background: c.bg, border: `1px solid ${c.accent}22`, borderRadius: 10, cursor: "pointer", transition: "all 0.2s", minWidth: "clamp(110px, 15vw, 180px)", textAlign: "left" }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = `${c.accent}55`)}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = `${c.accent}22`)}
                    >
                      <span style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontSize: "clamp(18px, 2.5vw, 32px)", color: c.accent, opacity: 0.35, lineHeight: 1, marginBottom: "clamp(4px, 0.6vw, 8px)" }}>{c.num}</span>
                      <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 400, fontSize: "clamp(9px, 1.1vw, 14px)", color: c.accent }}>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Bottom nav */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 5% 3%" }}>
            <button
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.6vw, 8px)", background: "none", border: "none", cursor: current === 0 ? "default" : "pointer", opacity: current === 0 ? 0.2 : 0.55, color: slide.accent, transition: "opacity 0.2s", padding: 0 }}
            >
              <Icon name="ChevronLeft" size={14} />
              <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(8px, 0.9vw, 11px)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Назад</span>
            </button>
            <button
              onClick={() => goTo(current + 1)}
              disabled={current === slides.length - 1}
              style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.6vw, 8px)", background: "none", border: "none", cursor: current === slides.length - 1 ? "default" : "pointer", opacity: current === slides.length - 1 ? 0.2 : 0.55, color: slide.accent, transition: "opacity 0.2s", padding: 0 }}
            >
              <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(8px, 0.9vw, 11px)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Далее</span>
              <Icon name="ChevronRight" size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
