import Figure from "./components/Figure";

export default function App() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTcyNTk1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Majestic Mountain Landscape",
      alt: "Snow-capped mountains against a blue sky",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW98ZW58MHx8MHx8fDA%3D",
      caption: "Tokyo City",
      alt: `It's a beautiful Tokyo City`,
    },
    {
      src: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9jZWFufGVufDB8fDB8fHww",
      caption: "Ocean view",
      alt: `I want to go to ocean like this Image`,
    },
    {
      src: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGFuaW1lfGVufDB8fDB8fHww",
      caption: "Toy Story",
      alt: "어렸을 때 봤던 토이스토리 우디",
    },
    {
      src: "https://images.unsplash.com/photo-1665041982909-8a86864a1e49?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGFuaW1lfGVufDB8fDB8fHww",
      caption: "Game JoyStick",
      alt: "오랜만에 비디오 게임 하고 싶어진다",
    },
    {
      src: "https://images.unsplash.com/photo-1729931597466-49440ea8f6b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3V6dW1lfGVufDB8fDB8fHww",
      caption: "Suzume",
      alt: "스즈메의 문단속에서 나온 빨간 전철",
    },
    {
      src: "https://images.unsplash.com/photo-1607874090079-aa58bc731e2b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2FueWV8ZW58MHx8MHx8fDA%3D",
      caption: "Kanye West",
      alt: "이제는 Ye가 되어버린 Kanye West",
    },
    {
      src: "https://images.unsplash.com/flagged/photo-1557286249-08f5bc2ef21d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmlzJTIwc2NvdHR8ZW58MHx8MHx8fDA%3D",
      caption: "Travis Scott",
      alt: "트래비스 스캇 초창기 공연장과 비슷해 보인다.",
    },
  ];
  return (
    <main className="min-h-screen bg-background">
      <header className="text-center py-8 sm:py-12 px-4 sm:px-6">
        <h1 className="mb-3 sm:mb-4 text-xl sm:text-2xl">Gallery Wall</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
          An art gallery inspired collection featuring natural landscapes in
          various scales and arrangements
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
        <article
          className="grid gap-2 sm:gap-3 md:gap-4 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          style={{
            gridAutoRows: "150px sm:180px md:200px",
          }}
        >
          {/* 이미지 1장 렌더링 */}
          {images.map((image, index) => (
            <Figure image={image} index={index} />
          ))}
        </article>
      </section>

      <footer className="text-center py-6 sm:py-8 px-4 sm:px-6 border-t border-border bg-muted/30">
        <p className="text-muted-foreground text-sm sm:text-base">
          <span className="block sm:inline">
            Curated Photography Collection
          </span>
          <span className="hidden sm:inline"> • </span>
          <span className="block sm:inline">Gallery Wall Experience</span>
          <span className="block mt-2 text-xs sm:text-sm">
            0 images hidden • 0 displayed
          </span>
        </p>
      </footer>
    </main>
  );
}
