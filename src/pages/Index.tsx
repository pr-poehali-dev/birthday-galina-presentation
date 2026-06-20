import { useState, useEffect } from "react";

type Slide = {
  id: number;
  side: "left" | "right";
  gradient: string;
  accent: string;
  tag: string;
  title: string;
  lead?: string;
  paragraphs: string[];
  footer?: string;
  image: string;
  imagePos?: string;
};

const SERIF = "Cormorant, serif";
const SANS = "Manrope, sans-serif";
const INK = "#3A3550";
const BODY = "#564E66";
const SOFT = "rgba(86,78,102,0.5)";

const slides: Slide[] = [
  {
    id: 0, side: "right",
    gradient: "linear-gradient(135deg, #F3EEF8 0%, #ECE9F6 45%, #E6EEF6 100%)",
    accent: "#1A1815",
    tag: "День рождения Галины",
    title: "Предложение\nпо концепциям",
    lead: "Несколько вариантов праздника — каждый со своим характером и настроением.",
    paragraphs: [
      "Мы собрали идеи, в которых главное — не масштаб, а ощущение. Каждая концепция превращает день рождения в путешествие сквозь эмоции, воспоминания и красоту.",
    ],
    footer: "Шесть концепций · одна героиня",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/87e4e508-d6a4-49c5-b8cc-a4e49ad7cfcc.jpg",
  },
  {
    id: 1, side: "right",
    gradient: "linear-gradient(135deg, #F6EEEC 0%, #F2EAEA 50%, #ECE9F4 100%)",
    accent: "#BF6D5A",
    tag: "Вариант 1",
    title: "Эффект присутствия",
    lead: "Именинница будет знать, что её ждёт сюрприз, но каким именно он будет — нет.",
    paragraphs: [
      "Мы проживаем заново ключевые события её жизни — первую любовь и расставание, победу и потерю, первый заработок — превращая каждое в отдельный перформанс.",
      "Каждый вечер завершается ужином, который становится «вкусом» того времени. А природные локации невероятной красоты лишь усиливают каждое переживание.",
    ],
    footer: "Необходимо провести интервью с именинницей",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/9ceb4b5c-ba80-4ffb-8667-e358b43422d7.jpg",
  },
  {
    id: 2, side: "left",
    gradient: "linear-gradient(135deg, #ECE9F4 0%, #F2EAEA 50%, #F6EEEC 100%)",
    accent: "#9B6FA8",
    tag: "Вариант 2",
    title: "Архетипы женщины",
    lead: "Мама. Женщина. Вселенная. Муза.",
    paragraphs: [
      "Представьте уютное пространство, где нежный свет заката окутывает атмосферу теплом. В центре — длинный единый стол, словно приглашение к единству.",
      "На столе расстелен рулон жатой бумаги с фразами и словами именинницы — её мыслями, мечтами, воспоминаниями. Рулон уходит за пределы стола, в сценическое пространство, где сидит рассказчик — известный актёр. Воздух наполняют летящие тканевые полотна.",
      "Вокруг стола собирается семья — каждый описывает именинницу как мать, музу, наставника. Они прикасаются к рулону, добавляют свои слова — и это становится настоящим творческим актом совместного создания.",
    ],
    footer: "Необходимо провести интервью с каждым членом семьи",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/a4547770-e134-4001-be63-c01730da9bca.png",
  },
  {
    id: 3, side: "right",
    gradient: "linear-gradient(135deg, #F4EFE6 0%, #EFEAEA 50%, #E9EAF2 100%)",
    accent: "#A8824A",
    tag: "Вариант 3",
    title: "Машина времени",
    lead: "Каждый из нас хоть раз мечтал пережить счастливые мгновения снова.",
    paragraphs: [
      "Кажется, что такое бывает только в фильмах. Но мы воссоздаём все тонкости прекрасных мгновений — день знакомства пары, день из жизни каждой из дочерей, общий семейный день — чтобы участники вновь почувствовали трепет тех событий.",
      "Каждое пространство воссоздаётся в деталях: музыка, запахи, реквизит. Участники не наблюдают — они проживают момент заново. Это не реконструкция прошлого, а подарок из него.",
    ],
    footer: "Важно провести интервью, чтобы узнать все детали событий",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/1b1ab2b5-1f0a-4b49-b2af-81b49ad3bfe4.jpg",
  },
  {
    id: 4, side: "left",
    gradient: "linear-gradient(135deg, #E9F0EA 0%, #E9EDF2 50%, #EFEAF2 100%)",
    accent: "#5E7355",
    tag: "Вариант 4",
    title: "Зов Алтая",
    lead: "Есть способы познания себя, доступные лишь там, где замолкает город.",
    paragraphs: [
      "Мы предлагаем пережить эмоции нового опыта через погружение в легенды, обряды и ретриты, которыми так богат Алтайский край.",
      "Священный огонь, круг у костра под звёздным небом, горы на горизонте. Шаманские практики открывают то, что невозможно найти в суете — тишину внутри себя. Этот день рождения станет точкой отсчёта нового этапа.",
    ],
    footer: "Уникальный опыт, который останется в памяти навсегда",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/7aa235f8-930c-4cc9-b3af-ed2bb9cab603.jpg",
  },
  {
    id: 5, side: "right",
    gradient: "linear-gradient(135deg, #F4EEE4 0%, #F0EAEA 50%, #EAEAF4 100%)",
    accent: "#C08A3E",
    tag: "Вариант 5",
    title: "Режиссёрская версия",
    lead: "День рождения как режиссёрская версия жизни, где она — главная героиня.",
    paragraphs: [
      "Вместо привычного застолья — съёмочная площадка. Каждый член семьи получает роль: близкие становятся партнёрами по кадру, второстепенными персонажами или антагонистами, которых нужно «переиграть».",
      "Смысл — не изобразить чужую жизнь, а заново прожить свою. Взять воображаемый хлопок, сказать «Мотор!» и впустить родных в ту вселенную, где она всегда была главной героиней. Кульминация — финальный кадр, где впервые все играют не роли, а настоящие чувства. Свет гаснет. Аплодисменты. Занавес.",
    ],
    footer: "Мотор!",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/bucket/0c639da5-89e4-418d-8a5c-f9eb93f51da1.jpg",
  },
  {
    id: 6, side: "left",
    gradient: "linear-gradient(135deg, #EDEAF6 0%, #E8ECF6 50%, #E6EFF4 100%)",
    accent: "#7E6FB5",
    tag: "Вариант 6 · Серия первая",
    title: "Кинолента длиною\nв несколько дней",
    lead: "Праздник, который разворачивается как сериал — серия за серией, день за днём.",
    paragraphs: [
      "В вечер прилёта каждому гостю торжественно вручается особый образ — наряд, выбранный специально для путешествия следующего дня. Так начинается история, в которой все становятся её героями.",
      "Первая серия раскрывается у подножия гор — в месте такой красоты, что захватывает дыхание. На склоны и вековой лес ложатся живые проекции, превращая природу в огромный экран. Сквозь все дни гостей сопровождает народный артист — ведущий и проводник этой кинематографичной истории.",
    ],
    footer: "Серия I · У подножия гор",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/250d70e5-0075-4264-b550-df2d6bbb5870.jpg",
  },
  {
    id: 7, side: "right",
    gradient: "linear-gradient(135deg, #F6EAF0 0%, #F2E9F2 50%, #ECEAF6 100%)",
    accent: "#C46E96",
    tag: "Серия вторая",
    title: "Ужин на розовом\nозере",
    lead: "Вторая серия раскрывается там, где вода окрашена в нежно-розовый.",
    paragraphs: [
      "Гостей встречает изысканный ужин на берегу розового озера — стол среди отражений закатного неба, свечи и цветы, плывущие в зеркале воды. Всё действие происходит в эксклюзивных, по-настоящему люксовых локациях.",
      "Прямо вокруг гостей разворачивается живой перформанс: артисты, музыка и движение становятся частью трапезы. А народный артист, как и в первый день, ведёт повествование — связывая серии в единую красивую историю.",
    ],
    footer: "Серия II · Розовое озеро",
    image: "https://cdn.poehali.dev/projects/a3376ae3-8f62-47f8-b79c-e02f1acc0f7e/files/f10d44e4-1133-4adc-a65f-120ecd6011c6.jpg",
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
    setTimeout(() => { setCurrent(idx); setAnimating(false); }, 320);
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(current - 1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [current, animating]);

  const s = slides[current];

  const TextBlock = (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: "clamp(40px,6vw,80px) clamp(40px,5vw,72px)", position: "relative" }}>
      {/* tag */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "clamp(14px,2vw,26px)" }}>
        <span style={{ width: "clamp(20px,3vw,38px)", height: 1, background: s.accent, opacity: 0.55 }} />
        <span style={{ fontFamily: SANS, fontWeight: 500, fontSize: "clamp(8px,0.85vw,11px)", letterSpacing: "0.3em", textTransform: "uppercase", color: s.accent, opacity: 0.85 }}>{s.tag}</span>
      </div>
      {/* title */}
      <h1 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 500, fontSize: "clamp(34px,5.2vw,72px)", lineHeight: 1.0, color: INK, margin: 0, letterSpacing: "-0.01em", whiteSpace: "pre-line" }}>{s.title}</h1>
      {/* lead */}
      {s.lead && (
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(14px,1.7vw,22px)", lineHeight: 1.4, color: s.accent, margin: "clamp(14px,2vw,26px) 0 0", opacity: 0.9 }}>{s.lead}</p>
      )}
      {/* paragraphs */}
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(8px,1.2vw,16px)", marginTop: "clamp(16px,2.2vw,30px)", maxWidth: "94%" }}>
        {s.paragraphs.map((p, i) => (
          <p key={i} style={{ fontFamily: SANS, fontWeight: 400, fontSize: "clamp(10px,1.15vw,14px)", lineHeight: 1.75, color: BODY, margin: 0 }}>{p}</p>
        ))}
      </div>
      {/* footer */}
      {s.footer && (
        <div style={{ position: "absolute", bottom: "clamp(34px,5vw,72px)", left: "clamp(40px,5vw,72px)", right: "clamp(40px,5vw,72px)", display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ width: "clamp(16px,2.5vw,30px)", height: 1, background: SOFT }} />
          <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(11px,1.25vw,16px)", color: SOFT }}>{s.footer}</span>
        </div>
      )}
    </div>
  );

  const ImageBlock = (
    <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
      <img src={s.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: s.imagePos || "center" }} />
      {/* мягкая растушёвка к фону */}
      <div style={{ position: "absolute", inset: 0, background: s.side === "right"
        ? "linear-gradient(to right, rgba(243,238,248,0.55) 0%, transparent 22%)"
        : "linear-gradient(to left, rgba(243,238,248,0.55) 0%, transparent 22%)" }} />
    </div>
  );

  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center" style={{ background: "#D9D5E2" }}>
      <div
        className="relative overflow-hidden"
        style={{
          width: "min(100vw, calc(100vh * 16 / 9))",
          height: "min(100vh, calc(100vw * 9 / 16))",
          maxWidth: 1280, maxHeight: 720,
          background: s.gradient,
          boxShadow: "0 30px 90px rgba(58,53,80,0.28)",
          transition: "background 0.5s ease",
        }}
      >
        <div
          className="grid h-full"
          style={{
            gridTemplateColumns: s.side === "right" ? "1.1fr 1fr" : "1fr 1.1fr",
            opacity: animating ? 0 : 1,
            transform: animating ? `translateX(${dir === "next" ? "16px" : "-16px"})` : "translateX(0)",
            transition: "opacity 0.32s ease, transform 0.32s ease",
          }}
        >
          {s.side === "right" ? (<>{TextBlock}{ImageBlock}</>) : (<>{ImageBlock}{TextBlock}</>)}
        </div>

        {/* навигация — точки */}
        <div style={{ position: "absolute", bottom: "clamp(18px,2.4vw,30px)", left: 0, right: 0, display: "flex", justifyContent: "center", alignItems: "center", gap: 8, zIndex: 6 }}>
          {slides.map((sl, i) => (
            <button key={i} onClick={() => goTo(i)} style={{ width: i === current ? 26 : 7, height: 7, borderRadius: 6, background: i === current ? s.accent : "rgba(86,78,102,0.22)", border: "none", padding: 0, cursor: "pointer", transition: "all 0.3s ease" }} />
          ))}
        </div>

        {/* стрелки */}
        {current > 0 && (
          <button onClick={() => goTo(current - 1)} aria-label="prev" style={{ position: "absolute", left: "clamp(10px,1.5vw,20px)", top: "50%", transform: "translateY(-50%)", width: "clamp(30px,3.4vw,42px)", height: "clamp(30px,3.4vw,42px)", borderRadius: "50%", background: "rgba(255,255,255,0.4)", backdropFilter: "blur(6px)", border: "1px solid rgba(86,78,102,0.12)", cursor: "pointer", color: INK, fontSize: "clamp(14px,1.6vw,20px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 7 }}>‹</button>
        )}
        {current < slides.length - 1 && (
          <button onClick={() => goTo(current + 1)} aria-label="next" style={{ position: "absolute", right: "clamp(10px,1.5vw,20px)", top: "50%", transform: "translateY(-50%)", width: "clamp(30px,3.4vw,42px)", height: "clamp(30px,3.4vw,42px)", borderRadius: "50%", background: "rgba(255,255,255,0.4)", backdropFilter: "blur(6px)", border: "1px solid rgba(86,78,102,0.12)", cursor: "pointer", color: INK, fontSize: "clamp(14px,1.6vw,20px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 7 }}>›</button>
        )}
      </div>
    </div>
  );
}
