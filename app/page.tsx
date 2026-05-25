const achievements = [
  { value: "約20年", label: "公共福祉施設の運営・管理経験" },
  { value: "10施設", label: "横断の業務標準化・BPR推進" },
  { value: "月20h", label: "業務管理ツールによる工数削減" },
  { value: "15%", label: "購買BPRによる消耗品費削減" },
];

const strengths = [
  {
    title: "現場起点の課題発見",
    description:
      "現場職員へのヒアリングを通じて、表面的な困りごとではなく、業務フロー、属人化、情報分断の原因を整理します。",
  },
  {
    title: "BPR・業務標準化",
    description:
      "施設ごとに異なる処理方法を可視化し、請求、集計、購買、資料作成などの業務を標準化してきました。",
  },
  {
    title: "関係者調整・定着支援",
    description:
      "行政、職員、利用者家族、外部業者など複数の関係者と調整し、改善策を現場に定着させることを重視しています。",
  },
  {
    title: "生成AI・ツール活用",
    description:
      "ChatGPT、Codex、Gemini、NotebookLM、Antigravity、Cursor等を活用し、文書作成、情報整理、業務整理、プロトタイプ開発、ポートフォリオ制作を実施しています。",
  },
];

const caseStudies = [
  {
    number: "01",
    title: "10施設横断の業務管理ツール構築",
    category: "BPR / 業務標準化",
    summary:
      "施設ごとに異なっていた請求処理、集計業務を標準化し、利用者請求、予算資料、統計データを一元管理できる仕組みを構築。",
    results: ["月約20時間の作業工数削減", "月15時間超の残業解消", "10施設共通の業務基盤を整備"],
  },
  {
    number: "02",
    title: "購買BPRによるコスト削減",
    category: "Cost Reduction / Process Design",
    summary:
      "施設、部署ごとの個別発注を見直し、在庫管理を一元化。全施設規模での集中購買体制を構築。",
    results: ["年間消耗品費を前年比15%削減", "過剰在庫と廃棄ロスを抑制", "購買プロセスを標準化"],
  },
  {
    number: "03",
    title: "利用料滞納者ゼロの継続",
    category: "制度理解 / 家族対応 / リスク管理",
    summary:
      "利用者家族の状況を丁寧に確認し、公的制度活用、世帯分離、代行申請などを支援。単なる督促ではなく、制度活用と伴走支援で課題を解決。",
    results: ["担当施設で滞納者ゼロを継続", "家族、行政との調整を実施", "財務リスクと福祉的支援を両立"],
  },
  {
    number: "04",
    title: "生成AI活用・プロトタイプ開発",
    category: "Generative AI / Prototype",
    summary:
      "ChatGPT、Codex、Gemini、NotebookLM、Antigravity、Cursor等を活用し、公文書、説明資料、内部マニュアル作成を効率化。業務支援アプリやポートフォリオサイトの制作にも活用。",
    results: ["資料作成と文書作成を効率化", "現場業務へのAI活用可能性を検証", "プロトタイプを通じて改善案を具体化"],
  },
];

const tools = [
  "ChatGPT",
  "Codex",
  "Gemini",
  "NotebookLM",
  "Antigravity",
  "Cursor",
  "Excel",
  "PowerPoint",
  "Word",
  "Google Workspace",
];

const roles = [
  "DX推進",
  "業務改善 / BPR",
  "社内DX",
  "生成AI活用支援",
  "カスタマーサクセス",
  "導入支援",
  "公共・福祉領域向けITサービス企画",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-28">
          <div>
            <div className="mb-8 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur">
              BPR / DX / Generative AI / Public Sector
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              米山徳彦
              <span className="mt-3 block bg-gradient-to-r from-white via-slate-200 to-cyan-200 bg-clip-text text-2xl text-transparent md:text-4xl">
                現場起点DXポートフォリオ
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-2xl font-semibold leading-relaxed text-slate-100 md:text-3xl">
              公共福祉の現場から、業務改革と生成AI活用を実装する。
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              約20年間、公共福祉施設の運営・管理部門で、10施設横断の業務標準化、BPR、
              関係者調整、生成AIを活用した業務改善に取り組んできました。
              現場課題の整理から、仕組み化、導入後の定着支援まで一気通貫で推進できます。
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#cases"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100"
              >
                実績を見る
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                連絡先を見る
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold tracking-[0.2em] text-cyan-200">
              IMPACT SUMMARY
            </p>

            <div className="mt-6 grid gap-4">
              {achievements.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
                >
                  <p className="text-3xl font-black text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm font-bold tracking-[0.2em] text-cyan-700">ABOUT</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            IT専任者や十分な予算がない現場で、改善を形にしてきた実務家です。
          </h2>
          <p className="mt-6 max-w-5xl text-base leading-8 text-slate-700 md:text-lg">
            公共福祉施設組合にて、総務・管理部門および施設運営支援に従事。
            業務フロー整理、関係者調整、Excel等による業務管理、生成AIを活用した資料作成、
            情報整理、プロトタイプ開発を通じて、現場に根付く改善を推進してきました。
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.2em] text-cyan-700">STRENGTHS</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              提供できる価値
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {strengths.map((strength) => (
              <article
                key={strength.title}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-black text-slate-950">{strength.title}</h3>
                <p className="mt-4 leading-8 text-slate-700">{strength.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold tracking-[0.2em] text-cyan-700">CASE STUDIES</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            主な実績
          </h2>
          <p className="mt-5 leading-8 text-slate-700">
            単なる作業改善ではなく、現場課題の把握、業務設計、関係者調整、運用定着までを一気通貫で行ってきました。
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {caseStudies.map((item) => (
            <article
              key={item.number}
              className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:grid-cols-[0.25fr_1fr_0.8fr] md:p-9"
            >
              <div>
                <p className="text-5xl font-black text-slate-200">{item.number}</p>
                <p className="mt-4 inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-800">
                  {item.category}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-4 leading-8 text-slate-700">{item.summary}</p>
              </div>

              <div className="rounded-3xl bg-slate-950 p-5 text-white">
                <p className="text-sm font-bold tracking-[0.18em] text-cyan-200">RESULT</p>
                <ul className="mt-4 space-y-3">
                  {item.results.map((result) => (
                    <li key={result} className="flex gap-3 text-sm leading-6 text-slate-200">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-cyan-200">SKILLS / TOOLS</p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">使用ツール・スキル</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-cyan-200">TARGET ROLES</p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">希望・適性職種</h2>
            <div className="mt-8 grid gap-3">
              {roles.map((role) => (
                <div
                  key={role}
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-semibold text-slate-100"
                >
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
            <p className="text-sm font-bold tracking-[0.2em] text-cyan-200">CONTACT</p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              現場に根付くDX・業務改善を推進します。
            </h2>
            <p className="mt-6 max-w-4xl leading-8 text-slate-300">
              BPR、DX推進、生成AI活用支援、公共・福祉領域向けITサービスに関するご相談や選考のご連絡は、
              職務経歴書または各転職サービス上のメッセージよりお願いいたします。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

