import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

type Variant = { num: string; name: string };
type Card = { num: string; name: string; accent: string; bg: string };

type SlideBase = { id: number; type: string; bg: string; accentBg: string; accent: string; title: string };
type TitleSlide = SlideBase & { type: "title"; tag: string; subtitle: string; decor: string; variants: Variant[] };
type ConceptSlide = SlideBase & { type: "concept"; num: string; tag: string; lead: string; body: string; note: string; footer: string };
type FinalSlide = SlideBase & { type: "final"; subtitle: string; cards: Card[] };
type Slide = TitleSlide | ConceptSlide | FinalSlide;

const slides: Slide[] = [
  {
    id: 0,
    type: "title",
    bg: "#FDF6F0",
    accentBg: "#F9E8E0",
    accent: "#C07A6A",
    tag: "",
    title: "День рождения\nГалины",
    subtitle: "Варианты концепций · Август / Сентябрь",
    decor: "✦",
    variants: [
      { num: "01", name: "Эффект присутствия" },
      { num: "02", name: "Архетипы женщины" },
    ],
  },
  {
    id: 1,
    type: "concept",
    bg: "#FDF3EE",
    accentBg: "#F5DDD5",
    accent: "#BF6D5A",
    num: "01",
    tag: "Вариант 1",
    title: "Эффект присутствия",
    lead: "Именинница будет знать, что её ждёт сюрприз, но каким именно он будет — нет.",
    body: "Проживаем заново ключевые события жизни Галины — первая любовь, расставание, победа, первый заработок, потеря — как перформансы. Каждый вечер завершается ужином, который является «вкусом» того времени.",
    note: "Для проведения используются природные локации невероятной красоты, которые будут только усиливать восприятие.",
    footer: "Для этого варианта необходимо провести интервью с именинницей",
  },
  {
    id: 2,
    type: "concept",
    bg: "#F5F0FA",
    accentBg: "#E8D8F5",
    accent: "#8A65B5",
    num: "02",
    tag: "Вариант 2",
    title: "Архетипы женщины",
    lead: "Мама. Женщина. Вселенная. Муза.",
    body: "Длинный единый стол в центре пространства — на нём рулон жатой бумаги с фразами и словами именинницы. На возвышении — рассказчик (известный актёр), в руках которого конец рулона. Пространство дополняется летящими тканевыми полотнами.",
    note: "Вокруг стола собирается семья. Каждый описывает именинницу с одной или нескольких граней её личности: как мать, как музу, как наставника. Они могут прикоснуться к рулону, добавить свои слова — и это становится настоящим творческим актом.",
    footer: "Для этого варианта необходимо провести интервью с каждым членом семьи",
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
        <div
          style={{
            position: "absolute", top: "-20%", right: "-10%",
            width: "45%", paddingBottom: "45%", borderRadius: "50%",
            background: slide.accentBg, opacity: 0.8, filter: "blur(60px)",
            transition: "background 0.6s ease", pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute", bottom: "-20%", left: "-8%",
            width: "35%", paddingBottom: "35%", borderRadius: "50%",
            background: slide.accentBg, opacity: 0.5, filter: "blur(50px)",
            transition: "background 0.6s ease", pointerEvents: "none",
          }}
        />

        {/* Main content */}
        <div
          className="relative h-full flex flex-col"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? `translateX(${dir === "next" ? "18px" : "-18px"})` : "translateX(0)",
            transition: "opacity 0.28s ease, transform 0.28s ease",
          }}
        >
          {/* Top bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "3% 5% 0" }}>
            <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(8px, 1vw, 13px)", letterSpacing: "0.25em", textTransform: "uppercase", color: slide.accent, opacity: 0.65 }}>
              День рождения Галины
            </span>
            <div style={{ display: "flex", gap: "clamp(4px, 0.6vw, 8px)", alignItems: "center" }}>
              {slides.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} style={{ width: i === current ? "clamp(16px, 2vw, 24px)" : "clamp(5px, 0.6vw, 8px)", height: "clamp(5px, 0.6vw, 8px)", borderRadius: 99, background: i === current ? slide.accent : `${slide.accent}44`, border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }} />
              ))}
            </div>
          </div>

          {/* TITLE */}
          {slide.type === "title" && (() => { const s = slide as TitleSlide; return (
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2% 8%", gap: "4%" }}>
              <div style={{ flex: "0 0 50%" }}>
                <div style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(8px, 1vw, 12px)", letterSpacing: "0.3em", textTransform: "uppercase", color: s.accent, opacity: 0.55, marginBottom: "clamp(8px, 1.5vw, 20px)" }}>
                  Варианты концепций
                </div>
                <h1 style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(30px, 6.5vw, 82px)", lineHeight: 1.05, color: s.accent, whiteSpace: "pre-line", margin: 0, marginBottom: "clamp(10px, 2vw, 28px)" }}>
                  {s.title}
                </h1>
                <div style={{ width: "clamp(24px, 4vw, 50px)", height: 1, background: `${s.accent}44`, marginBottom: "clamp(8px, 1.5vw, 20px)" }} />
                <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(9px, 1.1vw, 14px)", color: s.accent, opacity: 0.55, letterSpacing: "0.08em", margin: 0 }}>
                  {s.subtitle}
                </p>
              </div>
              <div style={{ flex: "0 0 42%", display: "flex", flexDirection: "column", gap: "clamp(8px, 1.5vw, 18px)" }}>
                {s.variants.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i + 1)}
                    style={{ display: "flex", alignItems: "center", gap: "clamp(8px, 1.5vw, 18px)", padding: "clamp(10px, 1.8vw, 22px) clamp(12px, 2vw, 24px)", background: s.accentBg, border: `1px solid ${s.accent}22`, borderRadius: 8, cursor: "pointer", transition: "all 0.2s ease", textAlign: "left" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = `${s.accent}55`)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = `${s.accent}22`)}
                  >
                    <span style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontSize: "clamp(20px, 3vw, 38px)", color: s.accent, opacity: 0.35, lineHeight: 1, flexShrink: 0 }}>{v.num}</span>
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 400, fontSize: "clamp(10px, 1.3vw, 16px)", color: s.accent }}>{v.name}</span>
                    <Icon name="ArrowRight" size={14} style={{ marginLeft: "auto", color: s.accent, opacity: 0.35 }} />
                  </button>
                ))}
              </div>
            </div>
          ); })()}

          {/* CONCEPT */}
          {slide.type === "concept" && (() => { const s = slide as ConceptSlide; return (
            <div style={{ flex: 1, display: "flex", padding: "1.5% 6% 1.5%", gap: "4%" }}>
              <div style={{ flex: "0 0 37%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.6vw, 8px)", marginBottom: "clamp(8px, 1.5vw, 18px)" }}>
                  <div style={{ width: "clamp(14px, 1.8vw, 22px)", height: 1, background: s.accent, opacity: 0.45 }} />
                  <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(8px, 0.9vw, 12px)", letterSpacing: "0.3em", textTransform: "uppercase", color: s.accent, opacity: 0.65 }}>{s.tag}</span>
                </div>
                <div style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontSize: "clamp(50px, 8vw, 100px)", lineHeight: 0.85, color: s.accent, opacity: 0.08, userSelect: "none", marginBottom: "clamp(-24px, -2.5vw, -14px)" }}>
                  {s.num}
                </div>
                <h2 style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(22px, 4vw, 52px)", lineHeight: 1.05, color: s.accent, margin: 0, marginBottom: "clamp(8px, 1.5vw, 18px)", position: "relative" }}>
                  {s.title}
                </h2>
                <p style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontSize: "clamp(11px, 1.45vw, 18px)", color: s.accent, opacity: 0.8, lineHeight: 1.45, margin: 0 }}>
                  {s.lead}
                </p>
              </div>
              <div style={{ width: 1, background: `${s.accent}18`, flexShrink: 0, margin: "4% 0" }} />
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "clamp(10px, 1.8vw, 20px)" }}>
                <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(10px, 1.2vw, 15px)", lineHeight: 1.75, color: "#4A3F3A", margin: 0 }}>
                  {s.body}
                </p>
                <div style={{ padding: "clamp(8px, 1.2vw, 14px) clamp(10px, 1.5vw, 18px)", background: s.accentBg, borderLeft: `3px solid ${s.accent}55`, borderRadius: "0 6px 6px 0" }}>
                  <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(9px, 1.1vw, 14px)", lineHeight: 1.65, color: "#4A3F3A", margin: 0 }}>
                    {s.note}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "clamp(5px, 0.7vw, 9px)", paddingTop: "clamp(4px, 0.6vw, 8px)", borderTop: `1px solid ${s.accent}15` }}>
                  <Icon name="Info" size={12} style={{ color: s.accent, opacity: 0.45, flexShrink: 0 }} />
                  <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(8px, 0.9vw, 11px)", color: s.accent, opacity: 0.55, letterSpacing: "0.03em" }}>
                    {s.footer}
                  </span>
                </div>
              </div>
            </div>
          ); })()}

          {/* FINAL */}
          {slide.type === "final" && (() => { const s = slide as FinalSlide; return (
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
          ); })()}

          {/* Bottom nav */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 5% 3%" }}>
            <button onClick={() => goTo(current - 1)} disabled={current === 0} style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.6vw, 8px)", background: "none", border: "none", cursor: current === 0 ? "default" : "pointer", opacity: current === 0 ? 0.2 : 0.55, color: slide.accent, transition: "opacity 0.2s", padding: 0 }}>
              <Icon name="ChevronLeft" size={14} />
              <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(8px, 0.9vw, 11px)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Назад</span>
            </button>
            <span style={{ fontFamily: "Cormorant, serif", fontSize: "clamp(9px, 1vw, 13px)", color: slide.accent, opacity: 0.4, letterSpacing: "0.15em" }}>
              {current + 1} / {slides.length}
            </span>
            <button onClick={() => goTo(current + 1)} disabled={current === slides.length - 1} style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.6vw, 8px)", background: "none", border: "none", cursor: current === slides.length - 1 ? "default" : "pointer", opacity: current === slides.length - 1 ? 0.2 : 0.55, color: slide.accent, transition: "opacity 0.2s", padding: 0 }}>
              <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(8px, 0.9vw, 11px)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Далее</span>
              <Icon name="ChevronRight" size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}