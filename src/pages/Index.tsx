import { useState, useEffect } from "react";

type Card = { num: string; name: string; accent: string; bg: string };
type SlideBase = { id: number; type: string; bg: string; accentBg: string; accent: string; title: string };
type TitleSlide = SlideBase & { type: "title"; subtitle: string };
type ConceptSlide = SlideBase & { type: "concept"; tag: string; lead: string; paragraphs: string[]; footer: string; image?: string };
type Concept3Slide = SlideBase & { type: "concept3"; tag: string; lead: string; rooms: string[]; footer: string; image: string };
type Concept4Slide = SlideBase & { type: "concept4"; tag: string; lead: string; body: string; footer: string; image: string };
type Concept5Slide = SlideBase & { type: "concept5"; tag: string; para1: string; para2: string; image: string };
type FinalSlide = SlideBase & { type: "final"; tagline: string; body: string };
type Slide = TitleSlide | ConceptSlide | Concept3Slide | Concept4Slide | Concept5Slide | FinalSlide;

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
    type: "concept3",
    bg: "#F5EEE6",
    accentBg: "#E8D5C0",
    accent: "#8B6340",
    tag: "Вариант 3",
    title: "Машина времени",
    lead: "Каждый из нас хоть раз мечтал пережить счастливые мгновения снова.",
    rooms: [
      "День знакомства пары",
      "День из жизни каждой из дочерей",
      "Общий семейный день",
    ],
    footer: "Для этого варианта важно провести интервью, чтобы узнать все детали событий",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/1b1ab2b5-1f0a-4b49-b2af-81b49ad3bfe4.jpg",
  },
  {
    id: 4,
    type: "concept4",
    bg: "#2C3A2A",
    accentBg: "#3D5038",
    accent: "#C8A96E",
    tag: "Вариант 4",
    title: "Зов Алтая",
    lead: "В современном мире для людей доступны разные способы познания себя, истин, открытия нового и неизведанного.",
    body: "Мы предлагаем пережить эмоции нового опыта через погружение в легенды и обряды / ретриты, на которые богат Алтайский край.",
    footer: "Уникальный опыт, который останется в памяти навсегда",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/7aa235f8-930c-4cc9-b3af-ed2bb9cab603.jpg",
  },
  {
    id: 5,
    type: "concept5",
    bg: "#1A1410",
    accentBg: "#2E2018",
    accent: "#D4A85A",
    title: "Режиссёрская\nверсия",
    tag: "Вариант 5",
    para1: "Этот день рождения — не просто праздник, а режиссёрская версия жизни, где именинница становится главной героиней собственной истории. Вместо привычного застолья — съёмочная площадка: каждый член семьи получает роль (близкие становятся партнёрами по кадру, второстепенными персонажами или антагонистами, которых нужно «переиграть»).",
    para2: "Смысл не в том, чтобы изобразить чужую жизнь, а чтобы заново прожить свою: взять в руки воображаемый режиссёрский хлопок, сказать «Мотор!» и впустить родных в ту внутреннюю вселенную, где она всегда была главной героиней. Кульминацией становится финальный кадр — общая семейная сцена, которая больше не выглядит как постановка, потому что в ней впервые все играют не роли, а настоящие чувства.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/0c639da5-89e4-418d-8a5c-f9eb93f51da1.jpg",
  },
  {
    id: 6,
    type: "final",
    bg: "#F2EDE6",
    accentBg: "#E0D5C5",
    accent: "#6B5740",
    title: "Дома на колёсах",
    tagline: "Общее предложение для всех концепций",
    body: "Путешествие в домах на колёсах позволит посетить несколько уникальных мест и не быть привязанным к одной локации. Каждая концепция раскрывается по-новому — через смену пейзажей, атмосферу в пути и свободу выбора следующей точки.",
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
                <div style={{ width: "clamp(30px, 5vw, 60px)", height: 1, background: `${s.accent}44` }} />
              </div>
            );
          })()}

          {/* CONCEPT (варианты 1 и 2) */}
          {slide.type === "concept" && (() => {
            const s = slide as ConceptSlide;
            return (
              <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "4% 4% 3% 6%", gap: "clamp(8px, 1.4vw, 16px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.6vw, 8px)" }}>
                    <div style={{ width: "clamp(14px, 1.8vw, 22px)", height: 1, background: s.accent, opacity: 0.45 }} />
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(9px, 1vw, 13px)", letterSpacing: "0.3em", textTransform: "uppercase", color: s.accent, opacity: 0.65 }}>{s.tag}</span>
                  </div>
                  <h2 style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(28px, 5vw, 64px)", lineHeight: 1.0, color: s.accent, margin: 0 }}>
                    {s.title}
                  </h2>
                  <p style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontSize: s.id === 2 ? "clamp(11px, 1.5vw, 18px)" : "clamp(13px, 1.8vw, 22px)", color: s.accent, opacity: 0.85, lineHeight: 1.4, margin: 0 }}>
                    {s.lead}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "clamp(5px, 0.9vw, 11px)" }}>
                    {s.paragraphs.map((p, i) => (
                      <p key={i} style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: s.id === 2 ? "clamp(9px, 1.1vw, 13px)" : "clamp(11px, 1.35vw, 16px)", lineHeight: 1.65, color: "#4A3F3A", margin: 0 }}>
                        {p}
                      </p>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", paddingTop: "clamp(6px, 0.8vw, 10px)", borderTop: `1px solid ${s.accent}18`, marginTop: "auto" }}>
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(10px, 1.2vw, 14px)", color: s.accent, opacity: 0.7 }}>
                      {s.footer}
                    </span>
                  </div>
                </div>
                {s.image && (
                  <div style={{ flex: "0 0 40%", position: "relative", overflow: "hidden" }}>
                    <img src={s.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }} />
                    <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${s.bg} 0%, transparent 25%)` }} />
                  </div>
                )}
              </div>
            );
          })()}

          {/* CONCEPT 3 — Машина времени */}
          {slide.type === "concept3" && (() => {
            const s = slide as Concept3Slide;
            return (
              <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
                <div style={{ flex: "0 0 42%", position: "relative", overflow: "hidden" }}>
                  <img src={s.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(139,99,64,0.15) 0%, transparent 50%, rgba(139,99,64,0.2) 100%)" }} />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to left, ${s.bg} 0%, transparent 25%)` }} />
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "4% 6% 3% 4%", gap: "clamp(6px, 1.1vw, 13px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.6vw, 8px)" }}>
                    <div style={{ width: "clamp(14px, 1.8vw, 22px)", height: 1, background: s.accent, opacity: 0.45 }} />
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(9px, 1vw, 13px)", letterSpacing: "0.3em", textTransform: "uppercase", color: s.accent, opacity: 0.65 }}>{s.tag}</span>
                  </div>
                  <h2 style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(26px, 4.5vw, 58px)", lineHeight: 1.0, color: s.accent, margin: 0 }}>
                    {s.title}
                  </h2>
                  <p style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontSize: "clamp(12px, 1.55vw, 20px)", color: s.accent, opacity: 0.85, lineHeight: 1.4, margin: 0 }}>
                    {s.lead}
                  </p>
                  <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(10px, 1.2vw, 14px)", lineHeight: 1.65, color: "#4A3F3A", margin: 0 }}>
                    Кажется, что такое бывает только в фильмах, но мы постараемся воспроизвести все тонкости этих прекрасных мгновений, чтобы участникам удалось почувствовать трепет и эмоции тех событий.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "clamp(4px, 0.7vw, 10px)" }}>
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(8px, 0.9vw, 11px)", letterSpacing: "0.2em", textTransform: "uppercase", color: s.accent, opacity: 0.55 }}>
                      3 пространства
                    </span>
                    {s.rooms.map((r, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "clamp(6px, 0.8vw, 10px)" }}>
                        <div style={{ width: "clamp(4px, 0.45vw, 6px)", height: "clamp(4px, 0.45vw, 6px)", borderRadius: "50%", background: s.accent, opacity: 0.45, flexShrink: 0 }} />
                        <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(11px, 1.25vw, 15px)", color: "#4A3F3A" }}>{r}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: "auto", paddingTop: "clamp(5px, 0.7vw, 9px)", borderTop: `1px solid ${s.accent}18` }}>
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(10px, 1.1vw, 13px)", color: s.accent, opacity: 0.65 }}>
                      {s.footer}
                    </span>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* CONCEPT 4 — Зов Алтая */}
          {slide.type === "concept4" && (() => {
            const s = slide as Concept4Slide;
            return (
              <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                {/* Full-bleed image background */}
                <img
                  src={s.image}
                  alt=""
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }}
                />
                {/* Overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(30,50,35,0.88) 0%, rgba(30,50,35,0.6) 55%, rgba(30,50,35,0.15) 100%)" }} />

                {/* Text — левая половина */}
                <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "6% 50% 6% 6%", gap: "clamp(10px, 1.6vw, 20px)" }}>
                  {/* Tag */}
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.6vw, 8px)" }}>
                    <div style={{ width: "clamp(14px, 1.8vw, 22px)", height: 1, background: s.accent, opacity: 0.6 }} />
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(9px, 1vw, 13px)", letterSpacing: "0.3em", textTransform: "uppercase", color: s.accent, opacity: 0.8 }}>{s.tag}</span>
                  </div>

                  {/* Title */}
                  <h2 style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(32px, 5.5vw, 70px)", lineHeight: 1.0, color: s.accent, margin: 0 }}>
                    {s.title}
                  </h2>

                  {/* Lead */}
                  <p style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontSize: "clamp(14px, 2vw, 26px)", color: "#F0E8D8", opacity: 0.9, lineHeight: 1.45, margin: 0 }}>
                    {s.lead}
                  </p>

                  {/* Body */}
                  <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(12px, 1.5vw, 18px)", lineHeight: 1.7, color: "#C8BBA8", margin: 0 }}>
                    {s.body}
                  </p>

                  {/* Footer */}
                  <div style={{ marginTop: "auto", paddingTop: "clamp(8px, 1vw, 12px)", borderTop: "1px solid rgba(200,169,110,0.2)" }}>
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(10px, 1.2vw, 14px)", color: s.accent, opacity: 0.65 }}>
                      {s.footer}
                    </span>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* CONCEPT 5 — Режиссёрская версия */}
          {slide.type === "concept5" && (() => {
            const s = slide as Concept5Slide;
            return (
              <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                {/* Full-bleed image */}
                <img src={s.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
                {/* Film-noir overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(10,8,6,0.65) 0%, rgba(10,8,6,0.52) 45%, rgba(10,8,6,0.12) 100%)" }} />
                {/* Vignette */}
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.3) 100%)" }} />

                {/* Clapperboard accent — декоративная деталь */}
                <div style={{ position: "absolute", top: "6%", right: "5%", display: "flex", alignItems: "center", gap: "clamp(5px, 0.7vw, 9px)", opacity: 0.45 }}>
                  <div style={{ width: "clamp(20px, 2.5vw, 32px)", height: 2, background: "#D4A85A" }} />
                  <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(7px, 0.8vw, 10px)", letterSpacing: "0.35em", textTransform: "uppercase", color: "#D4A85A" }}>Мотор!</span>
                  <div style={{ width: "clamp(20px, 2.5vw, 32px)", height: 2, background: "#D4A85A" }} />
                </div>

                {/* Text — поверх картинки */}
                <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "5% 5% 6% 6%", gap: "clamp(10px, 1.6vw, 20px)" }}>
                  {/* Tag */}
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.6vw, 8px)" }}>
                    <div style={{ width: "clamp(14px, 1.8vw, 22px)", height: 1, background: s.accent, opacity: 0.7 }} />
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(9px, 1vw, 13px)", letterSpacing: "0.3em", textTransform: "uppercase", color: s.accent, opacity: 0.85 }}>{s.tag}</span>
                  </div>

                  {/* Title */}
                  <h2 style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(32px, 5.5vw, 70px)", lineHeight: 1.0, color: s.accent, margin: 0, whiteSpace: "pre-line" }}>
                    {s.title}
                  </h2>

                  {/* Two columns of text */}
                  <div style={{ display: "flex", gap: "clamp(16px, 3vw, 40px)" }}>
                    <p style={{ flex: 1, fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(11px, 1.35vw, 17px)", lineHeight: 1.7, color: "#E8DDD0", margin: 0, opacity: 0.92 }}>
                      {s.para1}
                    </p>
                    <p style={{ flex: 1, fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(11px, 1.35vw, 17px)", lineHeight: 1.7, color: "#E8DDD0", margin: 0, opacity: 0.92 }}>
                      {s.para2}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* FINAL — Дома на колёсах */}
          {slide.type === "final" && (() => {
            const s = slide as FinalSlide;
            return (
              <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
                {/* Left — большой текст */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "6% 5% 6% 7%", gap: "clamp(12px, 2vw, 26px)" }}>
                  {/* Tag */}
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.6vw, 8px)" }}>
                    <div style={{ width: "clamp(14px, 1.8vw, 22px)", height: 1, background: s.accent, opacity: 0.45 }} />
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(9px, 1vw, 13px)", letterSpacing: "0.3em", textTransform: "uppercase", color: s.accent, opacity: 0.6 }}>{s.tagline}</span>
                  </div>

                  {/* Big title */}
                  <h2 style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(36px, 6.5vw, 82px)", lineHeight: 1.0, color: s.accent, margin: 0, whiteSpace: "pre-line" }}>
                    {s.title}
                  </h2>

                  <div style={{ width: "clamp(30px, 5vw, 60px)", height: 1, background: `${s.accent}44` }} />

                  {/* Body */}
                  <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(12px, 1.5vw, 18px)", lineHeight: 1.75, color: "#4A3F3A", margin: 0, maxWidth: "85%" }}>
                    {s.body}
                  </p>
                </div>

                {/* Right — декоративная иконка/визуал */}
                <div style={{ flex: "0 0 38%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  {/* Blob */}
                  <div style={{ position: "absolute", width: "70%", paddingBottom: "70%", borderRadius: "50%", background: s.accentBg, opacity: 0.6, filter: "blur(40px)" }} />
                  {/* Emoji van */}
                  <div style={{ position: "relative", textAlign: "center" }}>
                    <div style={{ fontSize: "clamp(60px, 8vw, 100px)", lineHeight: 1, marginBottom: "clamp(8px, 1.2vw, 16px)" }}>🚐</div>
                    <div style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontSize: "clamp(13px, 1.6vw, 20px)", color: s.accent, opacity: 0.5, letterSpacing: "0.1em" }}>
                      свобода пути
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </div>
    </div>
  );
}