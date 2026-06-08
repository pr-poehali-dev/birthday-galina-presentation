import { useState, useEffect } from "react";

type SlideBase = { id: number; type: string; bg: string; accentBg: string; accent: string; title: string };
type TitleSlide = SlideBase & { type: "title"; subtitle: string };
type ConceptSlide = SlideBase & { type: "concept"; tag: string; lead: string; paragraphs: string[]; footer: string; image?: string };
type ConceptB = SlideBase & { type: "conceptB"; tag: string; quote: string; body: string; image: string };
type Concept3Slide = SlideBase & { type: "concept3"; tag: string; lead: string; rooms: string[]; footer: string; image: string };
type Concept3B = SlideBase & { type: "concept3B"; tag: string; body: string; image: string };
type Concept4Slide = SlideBase & { type: "concept4"; tag: string; lead: string; body: string; footer: string; image: string };
type Concept4B = SlideBase & { type: "concept4B"; tag: string; body: string; image: string };
type Concept5Slide = SlideBase & { type: "concept5"; tag: string; para1: string; para2: string; image: string };
type Concept5B = SlideBase & { type: "concept5B"; tag: string; body: string; image: string };
type FinalSlide = SlideBase & { type: "final"; tagline: string; body: string; image?: string };
type Slide = TitleSlide | ConceptSlide | ConceptB | Concept3Slide | Concept3B | Concept4Slide | Concept4B | Concept5Slide | Concept5B | FinalSlide;

const slides: Slide[] = [
  {
    id: 0,
    type: "title",
    bg: "#FDF6F0",
    accentBg: "#F9E8E0",
    accent: "#C07A6A",
    title: "Предложение по концепциям\nДня рождения для Галины",
    subtitle: "",
  },
  // Концепция 1
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
    type: "conceptB",
    bg: "#FDF3EE",
    accentBg: "#F5DDD5",
    accent: "#BF6D5A",
    tag: "Вариант 1 · продолжение",
    title: "Эффект присутствия",
    quote: "",
    body: "Природные локации становятся декорацией для каждого перформанса. Каждое место подобрано под эмоцию той истории, которую предстоит прожить заново. Воссозданные детали, запахи, музыка — всё работает на один образ: здесь и сейчас, снова.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/28aa57f0-a78c-4556-b9a1-a6b83823d58e.jpg",
  },
  // Концепция 2
  {
    id: 3,
    type: "concept",
    bg: "#F5F0FA",
    accentBg: "#E8D8F5",
    accent: "#8A65B5",
    tag: "Вариант 2",
    title: "Архетипы женщины",
    lead: "Мама. Женщина. Вселенная. Муза.",
    paragraphs: [
      "Уютное пространство, нежный свет заката, длинный единый стол. На нём — рулон жатой бумаги с фразами и словами именинницы: мыслями, мечтами, воспоминаниями.",
      "Рулон уходит в сценическое пространство, где сидит рассказчик — известный актёр. Пространство дополняется летящими тканевыми полотнами.",
    ],
    footer: "Для этого варианта необходимо провести интервью с каждым членом семьи",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/b7f8b29b-b200-4c80-8164-8e5c5b63a557.jpg",
  },
  {
    id: 4,
    type: "conceptB",
    bg: "#F5F0FA",
    accentBg: "#E8D8F5",
    accent: "#8A65B5",
    tag: "Вариант 2 · продолжение",
    title: "Архетипы женщины",
    quote: "",
    body: "Вокруг стола собирается семья, каждый человек из которой приносит свою историю и свои чувства — каждый описывает именинницу с одной или нескольких граней её личности: как мать, как музу / возлюбленную, наставника и т.д. Они могут прикоснуться к рулону бумаги, добавить свои слова или просто насладиться атмосферой единства и любви. Этот момент становится не только праздником дня рождения именинницы, но и настоящим творческим актом совместного создания.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/86f13260-c497-4761-a705-148d089f1d56.jpg",
  },
  // Концепция 3
  {
    id: 5,
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
    id: 6,
    type: "concept3B",
    bg: "#F5EEE6",
    accentBg: "#E8D5C0",
    accent: "#8B6340",
    tag: "Вариант 3 · продолжение",
    title: "Машина времени",
    body: "Каждое пространство воссоздаётся в деталях: музыка, запахи, реквизит. Участники не просто наблюдают — они проживают момент: снова слышат те слова, снова чувствуют то тепло. Это не реконструкция прошлого — это подарок из него.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/f1b84c23-4f50-4238-9b3f-5ba824d8d586.jpg",
  },
  // Концепция 4
  {
    id: 7,
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
    id: 8,
    type: "concept4B",
    bg: "#2C3A2A",
    accentBg: "#3D5038",
    accent: "#C8A96E",
    tag: "Вариант 4 · продолжение",
    title: "Зов Алтая",
    body: "Священный огонь, круг у костра под звёздным небом, горы на горизонте. Шаманские практики и алтайские ретриты открывают то, что невозможно найти в городе — тишину внутри себя. Этот день рождения станет точкой отсчёта нового этапа.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/73f83ec2-a8ed-4b6f-90d5-90819d7adc56.jpg",
  },
  // Концепция 5
  {
    id: 9,
    type: "concept5",
    bg: "#1A1410",
    accentBg: "#2E2018",
    accent: "#D4A85A",
    title: "Режиссёрская\nверсия",
    tag: "Вариант 5",
    para1: "Этот день рождения — не просто праздник, а режиссёрская версия жизни, где именинница становится главной героиней собственной истории. Вместо привычного застолья — съёмочная площадка: каждый член семьи получает роль (близкие становятся партнёрами по кадру, второстепенными персонажами или антагонистами, которых нужно «переиграть»).",
    para2: "Смысл не в том, чтобы изобразить чужую жизнь, а чтобы заново прожить свою: взять в руки воображаемый режиссёрский хлопок, сказать «Мотор!» и впустить родных в ту внутреннюю вселенную, где она всегда была главной героиней.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/0c639da5-89e4-418d-8a5c-f9eb93f51da1.jpg",
  },
  {
    id: 10,
    type: "concept5B",
    bg: "#1A1410",
    accentBg: "#2E2018",
    accent: "#D4A85A",
    tag: "Вариант 5 · продолжение",
    title: "Режиссёрская\nверсия",
    body: "Кульминацией становится финальный кадр — общая семейная сцена, которая больше не выглядит как постановка, потому что в ней впервые все играют не роли, а настоящие чувства. Свет гаснет. Аплодисменты. Занавес.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/9a0c3122-ec58-4ebc-9100-a175a851777e.jpg",
  },
  // Финал
  {
    id: 11,
    type: "final",
    bg: "#F2EDE6",
    accentBg: "#E0D5C5",
    accent: "#6B5740",
    title: "Дома на колёсах",
    tagline: "Общее предложение для всех концепций",
    body: "Путешествие в домах на колёсах позволит посетить несколько уникальных локаций и не быть привязанными к одному месту. Это добавит приключения и живых впечатлений в сценарий праздника.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/87e4e508-d6a4-49c5-b8cc-a4e49ad7cfcc.jpg",
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
                <h1 style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(30px, 6.5vw, 84px)", lineHeight: 1.1, color: s.accent, whiteSpace: "pre-line", margin: 0, textAlign: "center", marginBottom: "clamp(12px, 2.5vw, 32px)" }}>
                  {s.title}
                </h1>
                <div style={{ width: "clamp(30px, 5vw, 60px)", height: 1, background: `${s.accent}44` }} />
              </div>
            );
          })()}

          {/* CONCEPT (варианты 1 и 2 — первый слайд) */}
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
                  <p style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontSize: "clamp(12px, 1.6vw, 20px)", color: s.accent, opacity: 0.85, lineHeight: 1.4, margin: 0 }}>
                    {s.lead}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "clamp(5px, 0.9vw, 11px)" }}>
                    {s.paragraphs.map((p, i) => (
                      <p key={i} style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(10px, 1.25vw, 15px)", lineHeight: 1.65, color: "#4A3F3A", margin: 0 }}>
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

          {/* CONCEPT B — вторые слайды концепций 1 и 2 */}
          {slide.type === "conceptB" && (() => {
            const s = slide as ConceptB;
            return (
              <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                <img src={s.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", filter: "brightness(1.05)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(253,243,238,0.97) 0%, rgba(253,243,238,0.88) 42%, rgba(253,243,238,0.25) 65%, transparent 100%)" }} />
                <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "5% 52% 5% 6%", gap: "clamp(12px, 2vw, 24px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.6vw, 8px)" }}>
                    <div style={{ width: "clamp(14px, 1.8vw, 22px)", height: 1, background: s.accent, opacity: 0.45 }} />
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(8px, 0.9vw, 11px)", letterSpacing: "0.3em", textTransform: "uppercase", color: s.accent, opacity: 0.6 }}>{s.tag}</span>
                  </div>
                  <h2 style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(26px, 4.5vw, 58px)", lineHeight: 1.0, color: s.accent, margin: 0 }}>
                    {s.title}
                  </h2>
                  {s.quote && (
                    <p style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontSize: "clamp(13px, 1.7vw, 21px)", color: s.accent, opacity: 0.75, lineHeight: 1.35, margin: 0 }}>
                      «{s.quote}»
                    </p>
                  )}
                  <div style={{ width: "clamp(24px, 3.5vw, 44px)", height: 1, background: `${s.accent}44` }} />
                  <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(11px, 1.3vw, 15px)", lineHeight: 1.75, color: "#3A2E24", margin: 0 }}>
                    {s.body}
                  </p>
                </div>
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
                        <div style={{ width: "clamp(4px, 0.5vw, 6px)", height: "clamp(4px, 0.5vw, 6px)", borderRadius: "50%", background: s.accent, opacity: 0.4, flexShrink: 0 }} />
                        <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(10px, 1.25vw, 15px)", color: "#4A3F3A" }}>{r}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", paddingTop: "clamp(6px, 0.8vw, 10px)", borderTop: `1px solid ${s.accent}18`, marginTop: "auto" }}>
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(10px, 1.2vw, 14px)", color: s.accent, opacity: 0.7 }}>
                      {s.footer}
                    </span>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* CONCEPT 3B — второй слайд Машины времени */}
          {slide.type === "concept3B" && (() => {
            const s = slide as Concept3B;
            return (
              <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                <img src={s.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", filter: "brightness(1.05)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(245,238,230,0.97) 0%, rgba(245,238,230,0.88) 40%, rgba(245,238,230,0.2) 62%, transparent 100%)" }} />
                <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "5% 52% 5% 6%", gap: "clamp(12px, 2vw, 24px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.6vw, 8px)" }}>
                    <div style={{ width: "clamp(14px, 1.8vw, 22px)", height: 1, background: s.accent, opacity: 0.45 }} />
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(8px, 0.9vw, 11px)", letterSpacing: "0.3em", textTransform: "uppercase", color: s.accent, opacity: 0.6 }}>{s.tag}</span>
                  </div>
                  <h2 style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(26px, 4.5vw, 58px)", lineHeight: 1.0, color: s.accent, margin: 0 }}>
                    {s.title}
                  </h2>
                  <div style={{ width: "clamp(24px, 3.5vw, 44px)", height: 1, background: `${s.accent}44` }} />
                  <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(11px, 1.35vw, 16px)", lineHeight: 1.75, color: "#3A2E24", margin: 0 }}>
                    {s.body}
                  </p>
                </div>
              </div>
            );
          })()}

          {/* CONCEPT 4 — Зов Алтая */}
          {slide.type === "concept4" && (() => {
            const s = slide as Concept4Slide;
            return (
              <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                <img src={s.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(20,28,18,0.82) 0%, rgba(20,28,18,0.6) 45%, rgba(20,28,18,0.1) 100%)" }} />
                <div style={{ position: "relative", height: "100%", display: "flex" }}>
                  <div style={{ width: "55%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "5% 4% 5% 6%", gap: "clamp(10px, 1.6vw, 20px)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.6vw, 8px)" }}>
                      <div style={{ width: "clamp(14px, 1.8vw, 22px)", height: 1, background: s.accent, opacity: 0.6 }} />
                      <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(9px, 1vw, 13px)", letterSpacing: "0.3em", textTransform: "uppercase", color: s.accent, opacity: 0.8 }}>{s.tag}</span>
                    </div>
                    <h2 style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(32px, 5.5vw, 70px)", lineHeight: 1.0, color: s.accent, margin: 0 }}>
                      {s.title}
                    </h2>
                    <div style={{ width: "clamp(24px, 3.5vw, 44px)", height: 1, background: `${s.accent}55` }} />
                    <p style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontSize: "clamp(13px, 1.7vw, 21px)", color: s.accent, opacity: 0.8, lineHeight: 1.4, margin: 0 }}>
                      {s.lead}
                    </p>
                    <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(11px, 1.3vw, 16px)", lineHeight: 1.7, color: "#D0C8B8", margin: 0 }}>
                      {s.body}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", paddingTop: "clamp(6px, 0.8vw, 10px)", borderTop: "1px solid rgba(200,169,110,0.2)", marginTop: "auto" }}>
                      <span style={{ fontFamily: "Golos Text, sans-serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(10px, 1.2vw, 14px)", color: s.accent, opacity: 0.65 }}>
                        {s.footer}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* CONCEPT 4B — второй слайд Зова Алтая */}
          {slide.type === "concept4B" && (() => {
            const s = slide as Concept4B;
            return (
              <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                <img src={s.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", filter: "brightness(1.05)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, rgba(44,58,42,0.97) 0%, rgba(44,58,42,0.88) 38%, rgba(44,58,42,0.25) 62%, transparent 100%)" }} />
                <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", padding: "5% 6% 5% 52%" }}>
                  <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "clamp(12px, 2vw, 24px)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.6vw, 8px)" }}>
                      <div style={{ width: "clamp(14px, 1.8vw, 22px)", height: 1, background: s.accent, opacity: 0.5 }} />
                      <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(8px, 0.9vw, 11px)", letterSpacing: "0.3em", textTransform: "uppercase", color: s.accent, opacity: 0.7 }}>{s.tag}</span>
                    </div>
                    <h2 style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(26px, 4.5vw, 58px)", lineHeight: 1.0, color: s.accent, margin: 0, whiteSpace: "pre-line" }}>
                      {s.title}
                    </h2>
                    <div style={{ width: "clamp(24px, 3.5vw, 44px)", height: 1, background: `${s.accent}44` }} />
                    <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(11px, 1.35vw, 16px)", lineHeight: 1.75, color: "#D8CEB8", margin: 0 }}>
                      {s.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* CONCEPT 5 — Режиссёрская версия */}
          {slide.type === "concept5" && (() => {
            const s = slide as Concept5Slide;
            return (
              <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
                <div style={{ flex: "0 0 52%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "4% 5% 4% 6%", gap: "clamp(10px, 1.5vw, 18px)", background: "#FAF6F0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.6vw, 8px)" }}>
                    <div style={{ width: "clamp(14px, 1.8vw, 22px)", height: 1, background: "#8B6840", opacity: 0.5 }} />
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(9px, 1vw, 13px)", letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B6840", opacity: 0.7 }}>{s.tag}</span>
                  </div>
                  <h2 style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(28px, 4.8vw, 62px)", lineHeight: 1.0, color: "#6B4A28", margin: 0, whiteSpace: "pre-line" }}>
                    {s.title}
                  </h2>
                  <div style={{ width: "clamp(24px, 3.5vw, 44px)", height: 1, background: "#8B684066" }} />
                  <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(10px, 1.2vw, 14px)", lineHeight: 1.7, color: "#4A3A2A", margin: 0 }}>
                    {s.para1}
                  </p>
                  <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(10px, 1.2vw, 14px)", lineHeight: 1.7, color: "#4A3A2A", margin: 0 }}>
                    {s.para2}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(5px, 0.7vw, 9px)", marginTop: "auto", paddingTop: "clamp(5px, 0.7vw, 9px)", borderTop: "1px solid #8B684022" }}>
                    <div style={{ width: "clamp(16px, 2vw, 24px)", height: 2, background: "#8B6840", opacity: 0.4 }} />
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(8px, 0.85vw, 11px)", letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B6840", opacity: 0.5 }}>Мотор!</span>
                    <div style={{ width: "clamp(16px, 2vw, 24px)", height: 2, background: "#8B6840", opacity: 0.4 }} />
                  </div>
                </div>
                <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                  <img src={s.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", filter: "brightness(1.1)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #FAF6F0 0%, transparent 15%)" }} />
                </div>
              </div>
            );
          })()}

          {/* CONCEPT 5B — второй слайд Режиссёрской версии */}
          {slide.type === "concept5B" && (() => {
            const s = slide as Concept5B;
            return (
              <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                <img src={s.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", filter: "brightness(0.9)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(18,14,10,0.88) 0%, rgba(18,14,10,0.65) 45%, rgba(18,14,10,0.15) 100%)" }} />
                <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "5% 50% 5% 6%", gap: "clamp(12px, 2vw, 24px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.6vw, 8px)" }}>
                    <div style={{ width: "clamp(14px, 1.8vw, 22px)", height: 1, background: "#D4A85A", opacity: 0.6 }} />
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(8px, 0.9vw, 11px)", letterSpacing: "0.3em", textTransform: "uppercase", color: "#D4A85A", opacity: 0.75 }}>{s.tag}</span>
                  </div>
                  <h2 style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(26px, 4.5vw, 58px)", lineHeight: 1.0, color: "#D4A85A", margin: 0, whiteSpace: "pre-line" }}>
                    {s.title}
                  </h2>
                  <div style={{ width: "clamp(24px, 3.5vw, 44px)", height: 1, background: "#D4A85A44" }} />
                  <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(11px, 1.35vw, 16px)", lineHeight: 1.75, color: "#E8DDD0", margin: 0 }}>
                    {s.body}
                  </p>
                </div>
              </div>
            );
          })()}

          {/* FINAL — Дома на колёсах */}
          {slide.type === "final" && (() => {
            const s = slide as FinalSlide;
            return (
              <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                {s.image && (
                  <img src={s.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", filter: "brightness(1.15)" }} />
                )}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(242,237,230,0.96) 0%, rgba(242,237,230,0.85) 38%, rgba(242,237,230,0.3) 62%, transparent 100%)" }} />
                <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "6% 52% 6% 7%", gap: "clamp(12px, 2vw, 26px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.6vw, 8px)" }}>
                    <div style={{ width: "clamp(14px, 1.8vw, 22px)", height: 1, background: s.accent, opacity: 0.5 }} />
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(9px, 1vw, 13px)", letterSpacing: "0.3em", textTransform: "uppercase", color: s.accent, opacity: 0.65 }}>{s.tagline}</span>
                  </div>
                  <h2 style={{ fontFamily: "Cormorant, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(32px, 5.8vw, 74px)", lineHeight: 1.0, color: s.accent, margin: 0, whiteSpace: "pre-line" }}>
                    {s.title}
                  </h2>
                  <div style={{ width: "clamp(28px, 4vw, 50px)", height: 1, background: `${s.accent}55` }} />
                  <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 300, fontSize: "clamp(12px, 1.45vw, 17px)", lineHeight: 1.75, color: "#3A2E24", margin: 0 }}>
                    {s.body}
                  </p>
                </div>
              </div>
            );
          })()}

        </div>

        {/* Arrow buttons */}
        {current > 0 && (
          <button
            onClick={() => goTo(current - 1)}
            style={{ position: "absolute", left: "clamp(8px, 1.5vw, 18px)", top: "50%", transform: "translateY(-50%)", background: `${slide.accent}18`, border: "none", borderRadius: "50%", width: "clamp(28px, 4vw, 48px)", height: "clamp(28px, 4vw, 48px)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: slide.accent, fontSize: "clamp(12px, 1.8vw, 22px)", transition: "background 0.2s", zIndex: 10 }}
          >
            ‹
          </button>
        )}
        {current < slides.length - 1 && (
          <button
            onClick={() => goTo(current + 1)}
            style={{ position: "absolute", right: "clamp(8px, 1.5vw, 18px)", top: "50%", transform: "translateY(-50%)", background: `${slide.accent}18`, border: "none", borderRadius: "50%", width: "clamp(28px, 4vw, 48px)", height: "clamp(28px, 4vw, 48px)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: slide.accent, fontSize: "clamp(12px, 1.8vw, 22px)", transition: "background 0.2s", zIndex: 10 }}
          >
            ›
          </button>
        )}

      </div>
    </div>
  );
}