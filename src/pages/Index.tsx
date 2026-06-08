import { useState, useEffect } from "react";

type SlideBase = { id: number; type: string; bg: string; accentBg: string; accent: string; title: string };
type TitleSlide = SlideBase & { type: "title"; subtitle: string };
type ConceptSlide = SlideBase & { type: "concept"; tag: string; num: string; lead: string; paragraphs: string[]; footer: string; image?: string };
type ConceptB = SlideBase & { type: "conceptB"; tag: string; num: string; quote: string; body: string; image: string };
type Concept3Slide = SlideBase & { type: "concept3"; tag: string; num: string; lead: string; rooms: string[]; footer: string; image: string };
type Concept3B = SlideBase & { type: "concept3B"; tag: string; num: string; body: string; image: string };
type Concept4Slide = SlideBase & { type: "concept4"; tag: string; num: string; lead: string; body: string; footer: string; image: string };
type Concept4B = SlideBase & { type: "concept4B"; tag: string; num: string; body: string; image: string };
type Concept5Slide = SlideBase & { type: "concept5"; tag: string; num: string; para1: string; para2: string; image: string };
type Concept5B = SlideBase & { type: "concept5B"; tag: string; num: string; body: string; image: string };
type FinalSlide = SlideBase & { type: "final"; tagline: string; body: string; image?: string };
type Slide = TitleSlide | ConceptSlide | ConceptB | Concept3Slide | Concept3B | Concept4Slide | Concept4B | Concept5Slide | Concept5B | FinalSlide;

const slides: Slide[] = [
  {
    id: 0, type: "title", bg: "#0F0E0D", accentBg: "#1A1410", accent: "#C8A882",
    title: "Предложение по концепциям\nДня рождения для Галины", subtitle: "",
  },
  {
    id: 1, type: "concept", bg: "#0F0E0D", accentBg: "#1A1410", accent: "#BF6D5A", num: "01",
    tag: "Вариант 1", title: "Эффект присутствия",
    lead: "Именинница будет знать, что её ждёт сюрприз, но каким именно он будет — нет.",
    paragraphs: [
      "Проживаем заново ключевые события жизни Галины — первая любовь, расставание, победа, первый заработок, потеря — как перформансы.",
      "Каждый вечер завершается ужином, который является «вкусом» того времени. Для проведения используются природные локации невероятной красоты, которые будут только усиливать восприятие.",
    ],
    footer: "Для этого варианта необходимо провести интервью с именинницей",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/9ceb4b5c-ba80-4ffb-8667-e358b43422d7.jpg",
  },
  {
    id: 2, type: "conceptB", bg: "#0F0E0D", accentBg: "#1A1410", accent: "#BF6D5A", num: "01",
    tag: "Вариант 1", title: "Эффект присутствия", quote: "",
    body: "Природные локации становятся декорацией для каждого перформанса. Каждое место подобрано под эмоцию той истории, которую предстоит прожить заново. Воссозданные детали, запахи, музыка — всё работает на один образ: здесь и сейчас, снова.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/28aa57f0-a78c-4556-b9a1-a6b83823d58e.jpg",
  },
  {
    id: 3, type: "concept", bg: "#0F0E0D", accentBg: "#1A1410", accent: "#9B7EC8", num: "02",
    tag: "Вариант 2", title: "Архетипы женщины",
    lead: "Мама. Женщина. Вселенная. Муза.",
    paragraphs: [
      "Уютное пространство, нежный свет заката, длинный единый стол. На нём — рулон жатой бумаги с фразами и словами именинницы: мыслями, мечтами, воспоминаниями.",
      "Рулон уходит в сценическое пространство, где сидит рассказчик — известный актёр. Пространство дополняется летящими тканевыми полотнами.",
    ],
    footer: "Для этого варианта необходимо провести интервью с каждым членом семьи",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/b7f8b29b-b200-4c80-8164-8e5c5b63a557.jpg",
  },
  {
    id: 4, type: "conceptB", bg: "#0F0E0D", accentBg: "#1A1410", accent: "#9B7EC8", num: "02",
    tag: "Вариант 2", title: "Архетипы женщины", quote: "",
    body: "Вокруг стола собирается семья, каждый человек из которой приносит свою историю и свои чувства — каждый описывает именинницу с одной или нескольких граней её личности: как мать, как музу / возлюбленную, наставника и т.д. Они могут прикоснуться к рулону бумаги, добавить свои слова или просто насладиться атмосферой единства и любви. Этот момент становится не только праздником дня рождения именинницы, но и настоящим творческим актом совместного создания.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/86f13260-c497-4761-a705-148d089f1d56.jpg",
  },
  {
    id: 5, type: "concept3", bg: "#0F0E0D", accentBg: "#1A1410", accent: "#C8A882", num: "03",
    tag: "Вариант 3", title: "Машина времени",
    lead: "Каждый из нас хоть раз мечтал пережить счастливые мгновения снова.",
    rooms: ["День знакомства пары", "День из жизни каждой из дочерей", "Общий семейный день"],
    footer: "Для этого варианта важно провести интервью, чтобы узнать все детали событий",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/1b1ab2b5-1f0a-4b49-b2af-81b49ad3bfe4.jpg",
  },
  {
    id: 6, type: "concept3B", bg: "#0F0E0D", accentBg: "#1A1410", accent: "#C8A882", num: "03",
    tag: "Вариант 3", title: "Машина времени",
    body: "Каждое пространство воссоздаётся в деталях: музыка, запахи, реквизит. Участники не просто наблюдают — они проживают момент: снова слышат те слова, снова чувствуют то тепло. Это не реконструкция прошлого — это подарок из него.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/1b8b6b7c-4812-4ae4-8a71-6bd69549a4d0.jpg",
  },
  {
    id: 7, type: "concept4", bg: "#0F0E0D", accentBg: "#1A1410", accent: "#C8A96E", num: "04",
    tag: "Вариант 4", title: "Зов Алтая",
    lead: "В современном мире для людей доступны разные способы познания себя, истин, открытия нового и неизведанного.",
    body: "Мы предлагаем пережить эмоции нового опыта через погружение в легенды и обряды / ретриты, на которые богат Алтайский край.",
    footer: "Уникальный опыт, который останется в памяти навсегда",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/7aa235f8-930c-4cc9-b3af-ed2bb9cab603.jpg",
  },
  {
    id: 8, type: "concept4B", bg: "#0F0E0D", accentBg: "#1A1410", accent: "#C8A96E", num: "04",
    tag: "Вариант 4", title: "Зов Алтая",
    body: "Священный огонь, круг у костра под звёздным небом, горы на горизонте. Шаманские практики и алтайские ретриты открывают то, что невозможно найти в городе — тишину внутри себя. Этот день рождения станет точкой отсчёта нового этапа.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/73f83ec2-a8ed-4b6f-90d5-90819d7adc56.jpg",
  },
  {
    id: 9, type: "concept5", bg: "#0F0E0D", accentBg: "#1A1410", accent: "#D4A85A", num: "05",
    tag: "Вариант 5", title: "Режиссёрская\nверсия",
    para1: "Этот день рождения — не просто праздник, а режиссёрская версия жизни, где именинница становится главной героиней собственной истории. Вместо привычного застолья — съёмочная площадка: каждый член семьи получает роль (близкие становятся партнёрами по кадру, второстепенными персонажами или антагонистами, которых нужно «переиграть»).",
    para2: "Смысл не в том, чтобы изобразить чужую жизнь, а чтобы заново прожить свою: взять в руки воображаемый режиссёрский хлопок, сказать «Мотор!» и впустить родных в ту внутреннюю вселенную, где она всегда была главной героиней.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/0c639da5-89e4-418d-8a5c-f9eb93f51da1.jpg",
  },
  {
    id: 10, type: "concept5B", bg: "#0F0E0D", accentBg: "#1A1410", accent: "#D4A85A", num: "05",
    tag: "Вариант 5", title: "Режиссёрская\nверсия",
    body: "Кульминацией становится финальный кадр — общая семейная сцена, которая больше не выглядит как постановка, потому что в ней впервые все играют не роли, а настоящие чувства. Свет гаснет. Аплодисменты. Занавес.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/48a538c2-dd58-4811-9fca-f9b800be9336.jpg",
  },
  {
    id: 11, type: "final", bg: "#0F0E0D", accentBg: "#1A1410", accent: "#C8A882",
    title: "Дома на колёсах",
    tagline: "Общее предложение для всех концепций",
    body: "Путешествие в домах на колёсах позволит посетить несколько уникальных локаций и не быть привязанными к одному месту. Это добавит приключения и живых впечатлений в сценарий праздника.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/87e4e508-d6a4-49c5-b8cc-a4e49ad7cfcc.jpg",
  },
];

const FONT_SERIF = "Cormorant, serif";
const FONT_SANS = "Golos Text, sans-serif";

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState<"next" | "prev">("next");

  const goTo = (idx: number) => {
    if (animating || idx === current || idx < 0 || idx >= slides.length) return;
    setDir(idx > current ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => { setCurrent(idx); setAnimating(false); }, 350);
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

  // Shared tag component
  const Tag = ({ label, accent }: { label: string; accent: string }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ width: 28, height: 1, background: accent, opacity: 0.5 }} />
      <span style={{ fontFamily: FONT_SANS, fontWeight: 400, fontSize: "clamp(8px, 0.85vw, 11px)", letterSpacing: "0.28em", textTransform: "uppercase", color: accent, opacity: 0.7 }}>{label}</span>
    </div>
  );

  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center" style={{ background: "#080807" }}>
      <div
        className="relative overflow-hidden"
        style={{
          width: "min(100vw, calc(100vh * 16 / 9))",
          height: "min(100vh, calc(100vw * 9 / 16))",
          maxWidth: 1280, maxHeight: 720,
          background: "#0F0E0D",
          borderRadius: 0,
          boxShadow: "0 0 80px rgba(0,0,0,0.8)",
        }}
      >
        {/* Content */}
        <div
          className="relative h-full"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? `translateY(${dir === "next" ? "12px" : "-12px"})` : "translateY(0)",
            transition: "opacity 0.32s ease, transform 0.32s ease",
          }}
        >

          {/* ── TITLE ── */}
          {slide.type === "title" && (() => {
            const s = slide as TitleSlide;
            return (
              <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}>
                {/* Тонкая горизонтальная линия */}
                <div style={{ position: "absolute", top: "50%", left: "7%", right: "7%", height: 1, background: "rgba(200,168,130,0.12)" }} />
                <div style={{ position: "relative", textAlign: "center", padding: "0 12%" }}>
                  <div style={{ fontFamily: FONT_SANS, fontWeight: 300, fontSize: "clamp(7px, 0.75vw, 10px)", letterSpacing: "0.5em", textTransform: "uppercase", color: "#C8A882", opacity: 0.45, marginBottom: "clamp(20px, 3vw, 40px)" }}>
                    Концепции праздника
                  </div>
                  <h1 style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(28px, 5.5vw, 72px)", lineHeight: 1.1, color: "#F0EAE0", whiteSpace: "pre-line", margin: 0, letterSpacing: "-0.01em" }}>
                    {s.title}
                  </h1>
                  <div style={{ width: 40, height: 1, background: "#C8A882", opacity: 0.4, margin: "clamp(20px, 3vw, 36px) auto 0" }} />
                </div>
              </div>
            );
          })()}

          {/* ── CONCEPT (первые слайды) ── */}
          {slide.type === "concept" && (() => {
            const s = slide as ConceptSlide;
            return (
              <div style={{ width: "100%", height: "100%", display: "flex" }}>
                {/* LEFT — текст 55% */}
                <div style={{ flex: "0 0 55%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "5% 5% 5% 7%", gap: "clamp(10px, 1.5vw, 18px)", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
                  <Tag label={s.tag} accent={s.accent} />
                  {/* Большой номер */}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(8px, 1vw, 14px)" }}>
                    <span style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: "clamp(52px, 9vw, 116px)", lineHeight: 0.9, color: s.accent, opacity: 0.12, fontWeight: 300, letterSpacing: "-0.04em", userSelect: "none" }}>{s.num}</span>
                    <h2 style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(26px, 4.2vw, 54px)", lineHeight: 1.0, color: "#F0EAE0", margin: 0, letterSpacing: "-0.01em" }}>
                      {s.title}
                    </h2>
                  </div>
                  <p style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: "clamp(12px, 1.5vw, 19px)", color: s.accent, lineHeight: 1.45, margin: 0, opacity: 0.9 }}>
                    {s.lead}
                  </p>
                  <div style={{ width: 32, height: 1, background: `${s.accent}50` }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "clamp(6px, 0.9vw, 11px)" }}>
                    {s.paragraphs.map((p, i) => (
                      <p key={i} style={{ fontFamily: FONT_SANS, fontWeight: 300, fontSize: "clamp(10px, 1.15vw, 14px)", lineHeight: 1.7, color: "rgba(240,234,224,0.65)", margin: 0 }}>{p}</p>
                    ))}
                  </div>
                  <div style={{ marginTop: "auto", paddingTop: "clamp(8px, 1vw, 12px)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ fontFamily: FONT_SANS, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(9px, 1vw, 12px)", color: s.accent, opacity: 0.55 }}>{s.footer}</span>
                  </div>
                </div>
                {/* RIGHT — картинка 45% с эффектом */}
                {s.image && (
                  <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                    <img src={s.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "brightness(0.75) saturate(0.85)" }} />
                    {/* Диагональный оверлей */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(15,14,13,0.5) 0%, transparent 60%)" }} />
                    {/* Accent линия снизу */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right, ${s.accent}, transparent)`, opacity: 0.6 }} />
                  </div>
                )}
              </div>
            );
          })()}

          {/* ── CONCEPT B (вторые слайды 1 и 2) ── */}
          {slide.type === "conceptB" && (() => {
            const s = slide as ConceptB;
            return (
              <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
                {/* Картинка на весь фон */}
                <img src={s.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.45) saturate(0.8)" }} />
                {/* Градиент слева */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,14,13,0.98) 0%, rgba(15,14,13,0.85) 40%, rgba(15,14,13,0.2) 70%, transparent 100%)" }} />
                {/* Текст */}
                <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "6% 50% 6% 7%", gap: "clamp(14px, 2vw, 26px)" }}>
                  <Tag label={s.tag} accent={s.accent} />
                  <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(8px, 1vw, 14px)" }}>
                    <span style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: "clamp(44px, 7.5vw, 96px)", lineHeight: 0.9, color: s.accent, opacity: 0.1, fontWeight: 300, letterSpacing: "-0.04em", userSelect: "none" }}>{s.num}</span>
                    <h2 style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(24px, 3.8vw, 48px)", lineHeight: 1.0, color: "#F0EAE0", margin: 0 }}>
                      {s.title}
                    </h2>
                  </div>
                  <div style={{ width: 32, height: 1, background: `${s.accent}50` }} />
                  <p style={{ fontFamily: FONT_SANS, fontWeight: 300, fontSize: "clamp(11px, 1.3vw, 16px)", lineHeight: 1.8, color: "rgba(240,234,224,0.72)", margin: 0 }}>
                    {s.body}
                  </p>
                </div>
              </div>
            );
          })()}

          {/* ── CONCEPT 3 (Машина времени) ── */}
          {slide.type === "concept3" && (() => {
            const s = slide as Concept3Slide;
            return (
              <div style={{ width: "100%", height: "100%", display: "flex" }}>
                {/* LEFT — картинка */}
                <div style={{ flex: "0 0 45%", position: "relative", overflow: "hidden" }}>
                  <img src={s.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7) saturate(0.85)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, rgba(15,14,13,1) 100%)" }} />
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right, ${s.accent}, transparent)`, opacity: 0.7 }} />
                </div>
                {/* RIGHT — текст */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "5% 7% 5% 5%", gap: "clamp(10px, 1.4vw, 17px)" }}>
                  <Tag label={s.tag} accent={s.accent} />
                  <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(6px, 0.8vw, 12px)" }}>
                    <span style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: "clamp(44px, 7.5vw, 96px)", lineHeight: 0.9, color: s.accent, opacity: 0.1, fontWeight: 300, letterSpacing: "-0.04em", userSelect: "none" }}>{s.num}</span>
                    <h2 style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(24px, 3.8vw, 48px)", lineHeight: 1.0, color: "#F0EAE0", margin: 0 }}>
                      {s.title}
                    </h2>
                  </div>
                  <p style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: "clamp(11px, 1.35vw, 17px)", color: s.accent, lineHeight: 1.45, margin: 0, opacity: 0.85 }}>
                    {s.lead}
                  </p>
                  <div style={{ width: 32, height: 1, background: `${s.accent}50` }} />
                  <p style={{ fontFamily: FONT_SANS, fontWeight: 300, fontSize: "clamp(10px, 1.1vw, 13px)", lineHeight: 1.7, color: "rgba(240,234,224,0.6)", margin: 0 }}>
                    Кажется, что такое бывает только в фильмах, но мы постараемся воспроизвести все тонкости этих прекрасных мгновений, чтобы участникам удалось почувствовать трепет и эмоции тех событий.
                  </p>
                  {/* 3 комнаты */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "clamp(5px, 0.7vw, 9px)", marginTop: 4 }}>
                    <span style={{ fontFamily: FONT_SANS, fontSize: "clamp(7px, 0.75vw, 9px)", letterSpacing: "0.3em", textTransform: "uppercase", color: s.accent, opacity: 0.5 }}>3 пространства</span>
                    {s.rooms.map((r, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 16, height: 1, background: s.accent, opacity: 0.35 }} />
                        <span style={{ fontFamily: FONT_SANS, fontWeight: 300, fontSize: "clamp(10px, 1.15vw, 14px)", color: "rgba(240,234,224,0.75)" }}>{r}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: "auto", paddingTop: "clamp(8px, 1vw, 12px)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ fontFamily: FONT_SANS, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(9px, 1vw, 12px)", color: s.accent, opacity: 0.5 }}>{s.footer}</span>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* ── CONCEPT 3B ── */}
          {slide.type === "concept3B" && (() => {
            const s = slide as Concept3B;
            return (
              <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
                <img src={s.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.4) saturate(0.75)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, rgba(15,14,13,0.98) 0%, rgba(15,14,13,0.82) 40%, rgba(15,14,13,0.15) 70%, transparent 100%)" }} />
                <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", padding: "6% 7% 6% 50%" }}>
                  <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "clamp(14px, 2vw, 26px)" }}>
                    <Tag label={s.tag} accent={s.accent} />
                    <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(6px, 0.8vw, 12px)" }}>
                      <span style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: "clamp(44px, 7.5vw, 96px)", lineHeight: 0.9, color: s.accent, opacity: 0.1, fontWeight: 300, letterSpacing: "-0.04em", userSelect: "none" }}>{s.num}</span>
                      <h2 style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(24px, 3.8vw, 48px)", lineHeight: 1.0, color: "#F0EAE0", margin: 0 }}>
                        {s.title}
                      </h2>
                    </div>
                    <div style={{ width: 32, height: 1, background: `${s.accent}50` }} />
                    <p style={{ fontFamily: FONT_SANS, fontWeight: 300, fontSize: "clamp(11px, 1.3vw, 16px)", lineHeight: 1.8, color: "rgba(240,234,224,0.72)", margin: 0 }}>
                      {s.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* ── CONCEPT 4 (Зов Алтая) ── */}
          {slide.type === "concept4" && (() => {
            const s = slide as Concept4Slide;
            return (
              <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
                <img src={s.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5) saturate(0.8)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,14,13,0.97) 0%, rgba(15,14,13,0.65) 45%, rgba(15,14,13,0.1) 100%)" }} />
                {/* Accent линия сверху */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right, transparent, ${s.accent}, transparent)`, opacity: 0.5 }} />
                <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 7% 6% 7%" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(20px, 3vw, 48px)", alignItems: "end" }}>
                    {/* Левая колонка */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 1.4vw, 17px)" }}>
                      <Tag label={s.tag} accent={s.accent} />
                      <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(6px, 0.8vw, 12px)" }}>
                        <span style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: "clamp(44px, 7.5vw, 96px)", lineHeight: 0.9, color: s.accent, opacity: 0.12, fontWeight: 300, letterSpacing: "-0.04em", userSelect: "none" }}>{s.num}</span>
                        <h2 style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(26px, 4.2vw, 54px)", lineHeight: 1.0, color: "#F0EAE0", margin: 0, whiteSpace: "pre-line" }}>
                          {s.title}
                        </h2>
                      </div>
                    </div>
                    {/* Правая колонка */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 1.4vw, 17px)", paddingBottom: 4 }}>
                      <p style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: "clamp(12px, 1.45vw, 18px)", color: s.accent, lineHeight: 1.45, margin: 0, opacity: 0.85 }}>{s.lead}</p>
                      <div style={{ width: 32, height: 1, background: `${s.accent}50` }} />
                      <p style={{ fontFamily: FONT_SANS, fontWeight: 300, fontSize: "clamp(10px, 1.15vw, 14px)", lineHeight: 1.7, color: "rgba(240,234,224,0.65)", margin: 0 }}>{s.body}</p>
                      <span style={{ fontFamily: FONT_SANS, fontStyle: "italic", fontSize: "clamp(9px, 1vw, 12px)", color: s.accent, opacity: 0.5 }}>{s.footer}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* ── CONCEPT 4B ── */}
          {slide.type === "concept4B" && (() => {
            const s = slide as Concept4B;
            return (
              <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
                <img src={s.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.45) saturate(0.75)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,14,13,0.98) 0%, rgba(15,14,13,0.8) 38%, rgba(15,14,13,0.15) 65%, transparent 100%)" }} />
                <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "6% 52% 6% 7%", gap: "clamp(14px, 2vw, 26px)" }}>
                  <Tag label={s.tag} accent={s.accent} />
                  <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(6px, 0.8vw, 12px)" }}>
                    <span style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: "clamp(44px, 7.5vw, 96px)", lineHeight: 0.9, color: s.accent, opacity: 0.1, fontWeight: 300, letterSpacing: "-0.04em", userSelect: "none" }}>{s.num}</span>
                    <h2 style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(24px, 3.8vw, 48px)", lineHeight: 1.0, color: "#F0EAE0", margin: 0, whiteSpace: "pre-line" }}>
                      {s.title}
                    </h2>
                  </div>
                  <div style={{ width: 32, height: 1, background: `${s.accent}50` }} />
                  <p style={{ fontFamily: FONT_SANS, fontWeight: 300, fontSize: "clamp(11px, 1.3vw, 16px)", lineHeight: 1.8, color: "rgba(240,234,224,0.72)", margin: 0 }}>
                    {s.body}
                  </p>
                </div>
              </div>
            );
          })()}

          {/* ── CONCEPT 5 ── */}
          {slide.type === "concept5" && (() => {
            const s = slide as Concept5Slide;
            return (
              <div style={{ width: "100%", height: "100%", display: "flex" }}>
                {/* LEFT */}
                <div style={{ flex: "0 0 55%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "5% 5% 5% 7%", gap: "clamp(10px, 1.4vw, 17px)", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
                  <Tag label={s.tag} accent={s.accent} />
                  <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(6px, 0.8vw, 12px)" }}>
                    <span style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: "clamp(52px, 9vw, 116px)", lineHeight: 0.9, color: s.accent, opacity: 0.12, fontWeight: 300, letterSpacing: "-0.04em", userSelect: "none" }}>{s.num}</span>
                    <h2 style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(26px, 4.2vw, 54px)", lineHeight: 1.0, color: "#F0EAE0", margin: 0, whiteSpace: "pre-line" }}>
                      {s.title}
                    </h2>
                  </div>
                  <div style={{ width: 32, height: 1, background: `${s.accent}50` }} />
                  <p style={{ fontFamily: FONT_SANS, fontWeight: 300, fontSize: "clamp(10px, 1.15vw, 14px)", lineHeight: 1.75, color: "rgba(240,234,224,0.65)", margin: 0 }}>{s.para1}</p>
                  <p style={{ fontFamily: FONT_SANS, fontWeight: 300, fontSize: "clamp(10px, 1.15vw, 14px)", lineHeight: 1.75, color: "rgba(240,234,224,0.65)", margin: 0 }}>{s.para2}</p>
                  <div style={{ marginTop: "auto", paddingTop: "clamp(8px, 1vw, 12px)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ fontFamily: FONT_SANS, fontWeight: 300, fontSize: "clamp(8px, 0.85vw, 11px)", letterSpacing: "0.3em", textTransform: "uppercase", color: s.accent, opacity: 0.4 }}>Мотор!</span>
                  </div>
                </div>
                {/* RIGHT */}
                <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                  <img src={s.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6) saturate(0.8)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(15,14,13,0.6) 0%, transparent 60%)" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right, ${s.accent}, transparent)`, opacity: 0.6 }} />
                </div>
              </div>
            );
          })()}

          {/* ── CONCEPT 5B ── */}
          {slide.type === "concept5B" && (() => {
            const s = slide as Concept5B;
            return (
              <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
                <img src={s.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.45) saturate(0.75)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,14,13,0.98) 0%, rgba(15,14,13,0.82) 42%, rgba(15,14,13,0.18) 68%, transparent 100%)" }} />
                <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "6% 50% 6% 7%", gap: "clamp(14px, 2vw, 26px)" }}>
                  <Tag label={s.tag} accent={s.accent} />
                  <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(6px, 0.8vw, 12px)" }}>
                    <span style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: "clamp(44px, 7.5vw, 96px)", lineHeight: 0.9, color: s.accent, opacity: 0.1, fontWeight: 300, letterSpacing: "-0.04em", userSelect: "none" }}>{s.num}</span>
                    <h2 style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(24px, 3.8vw, 48px)", lineHeight: 1.0, color: "#F0EAE0", margin: 0, whiteSpace: "pre-line" }}>
                      {s.title}
                    </h2>
                  </div>
                  <div style={{ width: 32, height: 1, background: `${s.accent}50` }} />
                  <p style={{ fontFamily: FONT_SANS, fontWeight: 300, fontSize: "clamp(11px, 1.3vw, 16px)", lineHeight: 1.8, color: "rgba(240,234,224,0.72)", margin: 0 }}>
                    {s.body}
                  </p>
                </div>
              </div>
            );
          })()}

          {/* ── FINAL ── */}
          {slide.type === "final" && (() => {
            const s = slide as FinalSlide;
            return (
              <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
                {s.image && (
                  <img src={s.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5) saturate(0.8)" }} />
                )}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,14,13,0.97) 0%, rgba(15,14,13,0.78) 40%, rgba(15,14,13,0.15) 65%, transparent 100%)" }} />
                {/* Accent линия сверху */}
                <div style={{ position: "absolute", top: 0, left: "7%", width: "30%", height: 1, background: `linear-gradient(to right, ${s.accent}, transparent)`, opacity: 0.6 }} />
                <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "6% 52% 6% 7%", gap: "clamp(14px, 2vw, 26px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 28, height: 1, background: s.accent, opacity: 0.5 }} />
                    <span style={{ fontFamily: FONT_SANS, fontWeight: 300, fontSize: "clamp(7px, 0.75vw, 10px)", letterSpacing: "0.35em", textTransform: "uppercase", color: s.accent, opacity: 0.6 }}>{s.tagline}</span>
                  </div>
                  <h2 style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(30px, 5vw, 64px)", lineHeight: 1.0, color: "#F0EAE0", margin: 0 }}>
                    {s.title}
                  </h2>
                  <div style={{ width: 32, height: 1, background: `${s.accent}50` }} />
                  <p style={{ fontFamily: FONT_SANS, fontWeight: 300, fontSize: "clamp(11px, 1.3vw, 16px)", lineHeight: 1.8, color: "rgba(240,234,224,0.7)", margin: 0 }}>
                    {s.body}
                  </p>
                </div>
              </div>
            );
          })()}

        </div>

        {/* Arrow buttons */}
        {current > 0 && (
          <button onClick={() => goTo(current - 1)} style={{ position: "absolute", left: "clamp(8px, 1.5vw, 18px)", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "50%", width: "clamp(28px, 3.5vw, 44px)", height: "clamp(28px, 3.5vw, 44px)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.4)", fontSize: "clamp(12px, 1.6vw, 20px)", zIndex: 10, transition: "all 0.2s" }}>‹</button>
        )}
        {current < slides.length - 1 && (
          <button onClick={() => goTo(current + 1)} style={{ position: "absolute", right: "clamp(8px, 1.5vw, 18px)", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "50%", width: "clamp(28px, 3.5vw, 44px)", height: "clamp(28px, 3.5vw, 44px)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.4)", fontSize: "clamp(12px, 1.6vw, 20px)", zIndex: 10, transition: "all 0.2s" }}>›</button>
        )}

      </div>
    </div>
  );
}
