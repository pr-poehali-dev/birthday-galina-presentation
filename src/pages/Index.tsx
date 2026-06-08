import { useState, useEffect } from "react";

type SlideBase = { id: number; type: string; accent: string; title: string };
type TitleSlide = SlideBase & { type: "title" };
type ConceptSlide = SlideBase & { type: "concept"; tag: string; num: string; lead: string; paragraphs: string[]; footer: string; image?: string };
type ConceptB = SlideBase & { type: "conceptB"; tag: string; num: string; body: string; image: string };
type Concept3Slide = SlideBase & { type: "concept3"; tag: string; num: string; lead: string; rooms: string[]; footer: string; image: string };
type Concept3B = SlideBase & { type: "concept3B"; tag: string; num: string; body: string; image: string };
type Concept4Slide = SlideBase & { type: "concept4"; tag: string; num: string; lead: string; body: string; footer: string; image: string };
type Concept4B = SlideBase & { type: "concept4B"; tag: string; num: string; body: string; image: string };
type Concept5Slide = SlideBase & { type: "concept5"; tag: string; num: string; para1: string; para2: string; image: string };
type Concept5B = SlideBase & { type: "concept5B"; tag: string; num: string; body: string; image: string };
type FinalSlide = SlideBase & { type: "final"; tagline: string; body: string; image?: string };
type Slide = TitleSlide | ConceptSlide | ConceptB | Concept3Slide | Concept3B | Concept4Slide | Concept4B | Concept5Slide | Concept5B | FinalSlide;

const F = "Golos Text, sans-serif";
const PAGE = "#F4F1EC";
const INK = "#1A1815";
const MUTED = "#6E6A62";

const slides: Slide[] = [
  { id: 0, type: "title", accent: "#1A1815", title: "Предложение по концепциям\nДня рождения для Галины" },
  {
    id: 1, type: "concept", accent: "#BF6D5A", num: "01",
    tag: "Вариант 1", title: "Эффект присутствия",
    lead: "Именинница будет знать, что её ждёт сюрприз, но каким именно он будет — нет.",
    paragraphs: [
      "Проживаем заново ключевые события жизни Галины — первая любовь, расставание, победа, первый заработок, потеря — как перформансы.",
      "Каждый вечер завершается ужином, который является «вкусом» того времени. Для проведения используются природные локации невероятной красоты, которые будут только усиливать восприятие.",
    ],
    footer: "Необходимо провести интервью с именинницей",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/9ceb4b5c-ba80-4ffb-8667-e358b43422d7.jpg",
  },
  {
    id: 2, type: "conceptB", accent: "#BF6D5A", num: "01",
    tag: "Вариант 1", title: "Эффект присутствия",
    body: "Природные локации становятся декорацией для каждого перформанса. Каждое место подобрано под эмоцию той истории, которую предстоит прожить заново. Воссозданные детали, запахи, музыка — всё работает на один образ: здесь и сейчас, снова.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/28aa57f0-a78c-4556-b9a1-a6b83823d58e.jpg",
  },
  {
    id: 3, type: "concept", accent: "#8A65B5", num: "02",
    tag: "Вариант 2", title: "Архетипы женщины",
    lead: "Мама. Женщина. Вселенная. Муза.",
    paragraphs: [
      "Уютное пространство, нежный свет заката, длинный единый стол. На нём — рулон жатой бумаги с фразами и словами именинницы: мыслями, мечтами, воспоминаниями.",
      "Рулон уходит в сценическое пространство, где сидит рассказчик — известный актёр. Пространство дополняется летящими тканевыми полотнами.",
    ],
    footer: "Необходимо провести интервью с каждым членом семьи",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/b7f8b29b-b200-4c80-8164-8e5c5b63a557.jpg",
  },
  {
    id: 4, type: "conceptB", accent: "#8A65B5", num: "02",
    tag: "Вариант 2", title: "Архетипы женщины",
    body: "Вокруг стола собирается семья, каждый человек из которой приносит свою историю и свои чувства — каждый описывает именинницу с одной или нескольких граней её личности: как мать, как музу / возлюбленную, наставника и т.д. Они могут прикоснуться к рулону бумаги, добавить свои слова или просто насладиться атмосферой единства и любви. Этот момент становится не только праздником дня рождения именинницы, но и настоящим творческим актом совместного создания.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/86f13260-c497-4761-a705-148d089f1d56.jpg",
  },
  {
    id: 5, type: "concept3", accent: "#8B6340", num: "03",
    tag: "Вариант 3", title: "Машина времени",
    lead: "Каждый из нас хоть раз мечтал пережить счастливые мгновения снова.",
    rooms: ["День знакомства пары", "День из жизни каждой из дочерей", "Общий семейный день"],
    footer: "Важно провести интервью, чтобы узнать все детали событий",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/1b1ab2b5-1f0a-4b49-b2af-81b49ad3bfe4.jpg",
  },
  {
    id: 6, type: "concept3B", accent: "#8B6340", num: "03",
    tag: "Вариант 3", title: "Машина времени",
    body: "Каждое пространство воссоздаётся в деталях: музыка, запахи, реквизит. Участники не просто наблюдают — они проживают момент: снова слышат те слова, снова чувствуют то тепло. Это не реконструкция прошлого — это подарок из него.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/1b8b6b7c-4812-4ae4-8a71-6bd69549a4d0.jpg",
  },
  {
    id: 7, type: "concept4", accent: "#5E7355", num: "04",
    tag: "Вариант 4", title: "Зов Алтая",
    lead: "В современном мире для людей доступны разные способы познания себя, истин, открытия нового и неизведанного.",
    body: "Мы предлагаем пережить эмоции нового опыта через погружение в легенды и обряды / ретриты, на которые богат Алтайский край.",
    footer: "Уникальный опыт, который останется в памяти навсегда",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/7aa235f8-930c-4cc9-b3af-ed2bb9cab603.jpg",
  },
  {
    id: 8, type: "concept4B", accent: "#5E7355", num: "04",
    tag: "Вариант 4", title: "Зов Алтая",
    body: "Священный огонь, круг у костра под звёздным небом, горы на горизонте. Шаманские практики и алтайские ретриты открывают то, что невозможно найти в городе — тишину внутри себя. Этот день рождения станет точкой отсчёта нового этапа.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/73f83ec2-a8ed-4b6f-90d5-90819d7adc56.jpg",
  },
  {
    id: 9, type: "concept5", accent: "#B5893F", num: "05",
    tag: "Вариант 5", title: "Режиссёрская версия",
    para1: "Этот день рождения — не просто праздник, а режиссёрская версия жизни, где именинница становится главной героиней собственной истории. Вместо привычного застолья — съёмочная площадка: каждый член семьи получает роль (близкие становятся партнёрами по кадру, второстепенными персонажами или антагонистами, которых нужно «переиграть»).",
    para2: "Смысл не в том, чтобы изобразить чужую жизнь, а чтобы заново прожить свою: взять в руки воображаемый режиссёрский хлопок, сказать «Мотор!» и впустить родных в ту внутреннюю вселенную, где она всегда была главной героиней.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/0c639da5-89e4-418d-8a5c-f9eb93f51da1.jpg",
  },
  {
    id: 10, type: "concept5B", accent: "#B5893F", num: "05",
    tag: "Вариант 5", title: "Режиссёрская версия",
    body: "Кульминацией становится финальный кадр — общая семейная сцена, которая больше не выглядит как постановка, потому что в ней впервые все играют не роли, а настоящие чувства. Свет гаснет. Аплодисменты. Занавес.",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/48a538c2-dd58-4811-9fca-f9b800be9336.jpg",
  },
  {
    id: 11, type: "final", accent: "#1A1815",
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
    setTimeout(() => { setCurrent(idx); setAnimating(false); }, 300);
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

  const Kicker = ({ label, accent }: { label: string; accent: string }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent }} />
      <span style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(8px, 0.85vw, 11px)", letterSpacing: "0.32em", textTransform: "uppercase", color: accent }}>{label}</span>
    </div>
  );

  const BigNum = ({ num, accent }: { num: string; accent: string }) => (
    <span style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(60px, 11vw, 150px)", lineHeight: 0.8, color: accent, opacity: 0.1, letterSpacing: "-0.04em", userSelect: "none" }}>{num}</span>
  );

  const Title = ({ text, size }: { text: string; size?: string }) => (
    <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: size || "clamp(26px, 4.4vw, 56px)", lineHeight: 1.0, color: INK, margin: 0, letterSpacing: "-0.025em", whiteSpace: "pre-line" }}>{text}</h2>
  );

  const Frame = ({ src, accent, edge = "bottom", pos }: { src: string; accent: string; edge?: "top" | "bottom"; pos?: string }) => (
    <div style={{ width: "100%", height: "100%", overflow: "hidden", position: "relative" }}>
      <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: pos || "center" }} />
      <div style={{ position: "absolute", [edge]: 0, left: 0, right: 0, height: 4, background: accent } as React.CSSProperties} />
    </div>
  );

  const padImg = "clamp(40px,5.5vw,72px)";

  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center" style={{ background: "#DCD8D0" }}>
      <div
        className="relative overflow-hidden"
        style={{
          width: "min(100vw, calc(100vh * 16 / 9))",
          height: "min(100vh, calc(100vw * 9 / 16))",
          maxWidth: 1280, maxHeight: 720,
          background: PAGE,
          boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
        }}
      >
        <div style={{ position: "absolute", inset: "clamp(14px, 2vw, 26px)", border: "1px solid rgba(26,24,21,0.1)", pointerEvents: "none", zIndex: 5 }} />

        <div style={{ position: "absolute", top: "clamp(22px, 3vw, 40px)", left: "clamp(26px, 3.6vw, 50px)", right: "clamp(26px, 3.6vw, 50px)", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 6 }}>
          <span style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(7px, 0.75vw, 10px)", letterSpacing: "0.25em", textTransform: "uppercase", color: MUTED }}>Галина · День рождения</span>
          <span style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(7px, 0.75vw, 10px)", letterSpacing: "0.25em", color: MUTED }}>{String(current + 1).padStart(2, "0")} — {String(slides.length).padStart(2, "0")}</span>
        </div>

        <div
          className="relative h-full"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? `translateY(${dir === "next" ? "10px" : "-10px"})` : "translateY(0)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >

          {/* TITLE */}
          {slide.type === "title" && (() => {
            const s = slide as TitleSlide;
            return (
              <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 clamp(50px, 9vw, 130px)" }}>
                <span style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(8px, 0.9vw, 12px)", letterSpacing: "0.4em", textTransform: "uppercase", color: MUTED, marginBottom: "clamp(20px, 3vw, 40px)" }}>Концепции праздника</span>
                <h1 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(26px, 5vw, 70px)", lineHeight: 1.05, color: INK, whiteSpace: "pre-line", margin: 0, letterSpacing: "-0.03em" }}>{s.title}</h1>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: "clamp(24px, 3.5vw, 46px)" }}>
                  <div style={{ width: "clamp(40px, 7vw, 90px)", height: 2, background: INK }} />
                  <span style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(8px, 0.85vw, 11px)", letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED }}>5 концепций</span>
                </div>
              </div>
            );
          })()}

          {/* CONCEPT */}
          {slide.type === "concept" && (() => {
            const s = slide as ConceptSlide;
            return (
              <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "1fr 0.85fr" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(50px,7vw,90px) clamp(30px,4vw,55px) clamp(50px,7vw,90px) clamp(50px,8vw,110px)", gap: "clamp(10px, 1.4vw, 16px)", position: "relative" }}>
                  <div style={{ position: "absolute", top: "clamp(40px,6vw,80px)", right: "clamp(20px,3vw,40px)" }}><BigNum num={s.num} accent={s.accent} /></div>
                  <Kicker label={s.tag} accent={s.accent} />
                  <Title text={s.title} />
                  <p style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(12px, 1.5vw, 19px)", color: INK, lineHeight: 1.4, margin: "clamp(4px,0.6vw,8px) 0 0" }}>{s.lead}</p>
                  <div style={{ width: 34, height: 2, background: s.accent, margin: "clamp(4px,0.6vw,8px) 0" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "clamp(7px, 1vw, 12px)" }}>
                    {s.paragraphs.map((p, i) => (
                      <p key={i} style={{ fontFamily: F, fontWeight: 400, fontSize: "clamp(10px, 1.2vw, 14px)", lineHeight: 1.65, color: MUTED, margin: 0 }}>{p}</p>
                    ))}
                  </div>
                  <span style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(8px, 0.9vw, 11px)", color: s.accent, marginTop: "clamp(6px,1vw,12px)" }}>↳ {s.footer}</span>
                </div>
                <div style={{ padding: `${padImg} ${padImg} ${padImg} 0` }}>
                  {s.image && <Frame src={s.image} accent={s.accent} />}
                </div>
              </div>
            );
          })()}

          {/* CONCEPT B */}
          {slide.type === "conceptB" && (() => {
            const s = slide as ConceptB;
            return (
              <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "0.85fr 1fr" }}>
                <div style={{ padding: `${padImg} 0 ${padImg} ${padImg}` }}>
                  <Frame src={s.image} accent={s.accent} edge="top" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(50px,7vw,90px) clamp(50px,8vw,110px) clamp(50px,7vw,90px) clamp(30px,4vw,55px)", gap: "clamp(14px, 2vw, 22px)", position: "relative" }}>
                  <div style={{ position: "absolute", top: "clamp(40px,6vw,80px)", right: "clamp(40px,5vw,70px)" }}><BigNum num={s.num} accent={s.accent} /></div>
                  <Kicker label={s.tag} accent={s.accent} />
                  <Title text={s.title} size="clamp(24px, 4vw, 48px)" />
                  <div style={{ width: 34, height: 2, background: s.accent }} />
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: "clamp(11px, 1.35vw, 16px)", lineHeight: 1.75, color: MUTED, margin: 0, maxWidth: "92%" }}>{s.body}</p>
                </div>
              </div>
            );
          })()}

          {/* CONCEPT 3 */}
          {slide.type === "concept3" && (() => {
            const s = slide as Concept3Slide;
            return (
              <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "0.8fr 1fr" }}>
                <div style={{ padding: `${padImg} 0 ${padImg} ${padImg}` }}>
                  <Frame src={s.image} accent={s.accent} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(46px,6vw,82px) clamp(50px,8vw,110px) clamp(46px,6vw,82px) clamp(30px,4vw,55px)", gap: "clamp(8px, 1.2vw, 14px)", position: "relative" }}>
                  <div style={{ position: "absolute", top: "clamp(38px,5vw,70px)", right: "clamp(40px,5vw,70px)" }}><BigNum num={s.num} accent={s.accent} /></div>
                  <Kicker label={s.tag} accent={s.accent} />
                  <Title text={s.title} size="clamp(24px, 4vw, 48px)" />
                  <p style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(11px, 1.4vw, 17px)", color: INK, lineHeight: 1.4, margin: 0 }}>{s.lead}</p>
                  <div style={{ width: 34, height: 2, background: s.accent }} />
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: "clamp(10px, 1.15vw, 13px)", lineHeight: 1.65, color: MUTED, margin: 0 }}>
                    Кажется, что такое бывает только в фильмах, но мы постараемся воспроизвести все тонкости этих прекрасных мгновений, чтобы участникам удалось почувствовать трепет и эмоции тех событий.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "clamp(5px,0.7vw,8px)", marginTop: 4 }}>
                    {s.rooms.map((r, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                        <span style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(8px,0.85vw,11px)", color: s.accent }}>{String(i + 1).padStart(2, "0")}</span>
                        <span style={{ fontFamily: F, fontWeight: 400, fontSize: "clamp(10px, 1.2vw, 14px)", color: INK }}>{r}</span>
                      </div>
                    ))}
                  </div>
                  <span style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(8px, 0.9vw, 11px)", color: s.accent, marginTop: "clamp(6px,1vw,12px)" }}>↳ {s.footer}</span>
                </div>
              </div>
            );
          })()}

          {/* CONCEPT 3B */}
          {slide.type === "concept3B" && (() => {
            const s = slide as Concept3B;
            return (
              <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "1fr 0.85fr" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(50px,7vw,90px) clamp(30px,4vw,55px) clamp(50px,7vw,90px) clamp(50px,8vw,110px)", gap: "clamp(14px, 2vw, 22px)", position: "relative" }}>
                  <div style={{ position: "absolute", top: "clamp(40px,6vw,80px)", right: "clamp(20px,3vw,40px)" }}><BigNum num={s.num} accent={s.accent} /></div>
                  <Kicker label={s.tag} accent={s.accent} />
                  <Title text={s.title} size="clamp(24px, 4vw, 48px)" />
                  <div style={{ width: 34, height: 2, background: s.accent }} />
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: "clamp(11px, 1.35vw, 16px)", lineHeight: 1.75, color: MUTED, margin: 0 }}>{s.body}</p>
                </div>
                <div style={{ padding: `${padImg} ${padImg} ${padImg} 0` }}>
                  <Frame src={s.image} accent={s.accent} />
                </div>
              </div>
            );
          })()}

          {/* CONCEPT 4 */}
          {slide.type === "concept4" && (() => {
            const s = slide as Concept4Slide;
            return (
              <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "1fr 0.9fr" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(50px,7vw,90px) clamp(30px,4vw,55px) clamp(50px,7vw,90px) clamp(50px,8vw,110px)", gap: "clamp(10px, 1.4vw, 16px)", position: "relative" }}>
                  <div style={{ position: "absolute", top: "clamp(40px,6vw,80px)", right: "clamp(20px,3vw,40px)" }}><BigNum num={s.num} accent={s.accent} /></div>
                  <Kicker label={s.tag} accent={s.accent} />
                  <Title text={s.title} />
                  <p style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(12px, 1.5vw, 18px)", color: INK, lineHeight: 1.4, margin: "clamp(4px,0.6vw,8px) 0 0" }}>{s.lead}</p>
                  <div style={{ width: 34, height: 2, background: s.accent, margin: "clamp(4px,0.6vw,8px) 0" }} />
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: "clamp(10px, 1.2vw, 14px)", lineHeight: 1.65, color: MUTED, margin: 0 }}>{s.body}</p>
                  <span style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(8px, 0.9vw, 11px)", color: s.accent, marginTop: "clamp(6px,1vw,12px)" }}>↳ {s.footer}</span>
                </div>
                <div style={{ padding: `${padImg} ${padImg} ${padImg} 0` }}>
                  <Frame src={s.image} accent={s.accent} />
                </div>
              </div>
            );
          })()}

          {/* CONCEPT 4B */}
          {slide.type === "concept4B" && (() => {
            const s = slide as Concept4B;
            return (
              <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "0.9fr 1fr" }}>
                <div style={{ padding: `${padImg} 0 ${padImg} ${padImg}` }}>
                  <Frame src={s.image} accent={s.accent} edge="top" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(50px,7vw,90px) clamp(50px,8vw,110px) clamp(50px,7vw,90px) clamp(30px,4vw,55px)", gap: "clamp(14px, 2vw, 22px)", position: "relative" }}>
                  <div style={{ position: "absolute", top: "clamp(40px,6vw,80px)", right: "clamp(40px,5vw,70px)" }}><BigNum num={s.num} accent={s.accent} /></div>
                  <Kicker label={s.tag} accent={s.accent} />
                  <Title text={s.title} size="clamp(24px, 4vw, 48px)" />
                  <div style={{ width: 34, height: 2, background: s.accent }} />
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: "clamp(11px, 1.35vw, 16px)", lineHeight: 1.75, color: MUTED, margin: 0 }}>{s.body}</p>
                </div>
              </div>
            );
          })()}

          {/* CONCEPT 5 */}
          {slide.type === "concept5" && (() => {
            const s = slide as Concept5Slide;
            return (
              <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "1fr 0.85fr" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(50px,7vw,90px) clamp(30px,4vw,55px) clamp(50px,7vw,90px) clamp(50px,8vw,110px)", gap: "clamp(10px, 1.3vw, 15px)", position: "relative" }}>
                  <div style={{ position: "absolute", top: "clamp(34px,5vw,68px)", right: "clamp(20px,3vw,40px)" }}><BigNum num={s.num} accent={s.accent} /></div>
                  <Kicker label={s.tag} accent={s.accent} />
                  <Title text={s.title} size="clamp(24px, 4vw, 50px)" />
                  <div style={{ width: 34, height: 2, background: s.accent }} />
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: "clamp(10px, 1.15vw, 14px)", lineHeight: 1.65, color: MUTED, margin: 0 }}>{s.para1}</p>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: "clamp(10px, 1.15vw, 14px)", lineHeight: 1.65, color: MUTED, margin: 0 }}>{s.para2}</p>
                  <span style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(8px, 0.9vw, 11px)", letterSpacing: "0.3em", textTransform: "uppercase", color: s.accent, marginTop: "clamp(4px,0.6vw,8px)" }}>Мотор!</span>
                </div>
                <div style={{ padding: `${padImg} ${padImg} ${padImg} 0` }}>
                  <Frame src={s.image} accent={s.accent} pos="center 30%" />
                </div>
              </div>
            );
          })()}

          {/* CONCEPT 5B */}
          {slide.type === "concept5B" && (() => {
            const s = slide as Concept5B;
            return (
              <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "0.85fr 1fr" }}>
                <div style={{ padding: `${padImg} 0 ${padImg} ${padImg}` }}>
                  <Frame src={s.image} accent={s.accent} edge="top" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(50px,7vw,90px) clamp(50px,8vw,110px) clamp(50px,7vw,90px) clamp(30px,4vw,55px)", gap: "clamp(14px, 2vw, 22px)", position: "relative" }}>
                  <div style={{ position: "absolute", top: "clamp(40px,6vw,80px)", right: "clamp(40px,5vw,70px)" }}><BigNum num={s.num} accent={s.accent} /></div>
                  <Kicker label={s.tag} accent={s.accent} />
                  <Title text={s.title} size="clamp(24px, 4vw, 48px)" />
                  <div style={{ width: 34, height: 2, background: s.accent }} />
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: "clamp(11px, 1.35vw, 16px)", lineHeight: 1.75, color: MUTED, margin: 0 }}>{s.body}</p>
                </div>
              </div>
            );
          })()}

          {/* FINAL */}
          {slide.type === "final" && (() => {
            const s = slide as FinalSlide;
            return (
              <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(50px,7vw,90px) clamp(30px,4vw,55px) clamp(50px,7vw,90px) clamp(50px,8vw,110px)", gap: "clamp(14px, 2vw, 22px)" }}>
                  <Kicker label={s.tagline} accent={s.accent} />
                  <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(30px, 5vw, 62px)", lineHeight: 1.0, color: INK, margin: 0, letterSpacing: "-0.03em" }}>{s.title}</h2>
                  <div style={{ width: 34, height: 2, background: INK }} />
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: "clamp(11px, 1.35vw, 16px)", lineHeight: 1.75, color: MUTED, margin: 0 }}>{s.body}</p>
                </div>
                <div style={{ padding: `${padImg} ${padImg} ${padImg} 0` }}>
                  {s.image && <Frame src={s.image} accent={INK} />}
                </div>
              </div>
            );
          })()}

        </div>

        {/* Нижняя навигация */}
        <div style={{ position: "absolute", bottom: "clamp(20px, 2.8vw, 38px)", left: "clamp(26px, 3.6vw, 50px)", right: "clamp(26px, 3.6vw, 50px)", display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 6 }}>
          {current > 0 ? (
            <button onClick={() => goTo(current - 1)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: F, fontWeight: 500, fontSize: "clamp(8px, 0.85vw, 11px)", letterSpacing: "0.15em", textTransform: "uppercase", color: MUTED, padding: 0 }}>← Назад</button>
          ) : <span />}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} style={{ width: i === current ? 22 : 8, height: 2, background: i === current ? slide.accent : "rgba(26,24,21,0.2)", border: "none", padding: 0, cursor: "pointer", transition: "all 0.3s ease" }} />
            ))}
          </div>
          {current < slides.length - 1 ? (
            <button onClick={() => goTo(current + 1)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: F, fontWeight: 500, fontSize: "clamp(8px, 0.85vw, 11px)", letterSpacing: "0.15em", textTransform: "uppercase", color: INK, padding: 0 }}>Далее →</button>
          ) : <span />}
        </div>

      </div>
    </div>
  );
}
