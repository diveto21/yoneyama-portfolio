const caseStudies = [
  {
    title: "10施設横断の業務管理ツール構築",
    points: [
      "施設ごとに異なっていた請求処理・集計業務を標準化",
      "利用者請求、予算資料、統計データを一元管理",
      "月約20時間の作業工数削減",
      "月15時間超の残業解消",
    ],
  },
  {
    title: "購買BPRによるコスト削減",
    points: [
      "施設・部署ごとの個別発注を見直し",
      "在庫管理を一元化",
      "全施設規模で集中購買体制を構築",
      "年間消耗品費を前年比15%削減",
    ],
  },
  {
    title: "利用料滞納者ゼロの継続",
    points: [
      "利用者家族の状況を丁寧に確認",
      "公的制度活用、世帯分離、代行申請などを支援",
      "担当施設で滞納者ゼロを継続",
    ],
  },
  {
    title: "生成AI活用・プロトタイプ開発",
    points: [
      "ChatGPT、Claude、Cursorを活用",
      "公文書、説明資料、内部マニュアル作成を効率化",
      "業務支援アプリのプロトタイプを作成",
      "現場業務へのAI活用可能性を検証",
    ],
  },
];

const strengths = [
  "現場ヒアリングから課題を構造化する力",
  "業務フローを整理し、属人化を標準化する力",
  "行政・家族・職員・業者との合意形成力",
  "生成AIやツールを使って改善案を形にする力",
];

const tools = [
  "ChatGPT",
  "Claude",
  "Cursor",
  "Excel",
  "PowerPoint",
  "Word",
  "Google Workspace",
  "Notion",
];

const targetRoles = [
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
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-slate-500">
              BPR / DX / GENERATIVE AI
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
              米山徳彦
              <span className="block text-2xl font-semibold text-slate-600 md:text-4xl">
                現場起点DXポートフォリオ
              </span>
            </h1>
            <p className="mt-8 text-2xl font-semibold leading-relaxed text-slate-800 md:text-3xl">
              公共福祉の現場から、業務改革と生成AI活用を実装する。
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              約20年間、公共福祉施設の運営・管理部門で、10施設横断の業務標準化、BPR、関係者調整、生成AIを活用した業務改善に取り組んできました。
              現場課題の整理から、仕組み化、導入後の定着支援まで一気通貫で推進できます。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-3xl font-bold text-slate-950">約20年</p>
              <p className="mt-2 text-sm text-slate-600">公共福祉施設の運営・管理経験</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-3xl font-bold text-slate-950">10施設</p>
              <p className="mt-2 text-sm text-slate-600">横断の業務標準化・改善</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-3xl font-bold text-slate-950">15%削減</p>
              <p className="mt-2 text-sm text-slate-600">購買BPRによる消耗品費削減</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-950 md:text-3xl">About</h2>
        <p className="mt-6 max-w-4xl text-base leading-8 text-slate-700">
          公共福祉施設組合にて、総務・管理部門および施設運営支援に従事。
          IT専任者や十分な予算がない環境の中で、現場ヒアリング、業務フロー整理、
          Excelや生成AI、Webアプリのプロトタイプを活用し、現場に根付く業務改善を推進してきました。
        </p>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-950 md:text-3xl">Strengths</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {strengths.map((strength) => (
              <div
                key={strength}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <p className="font-semibold text-slate-800">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-950 md:text-3xl">Case Studies</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {caseStudies.map((caseStudy, index) => (
            <article
              key={caseStudy.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-500">
                CASE {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-bold text-slate-950">{caseStudy.title}</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                {caseStudy.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-700" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-950 md:text-3xl">Skills / Tools</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-950 md:text-3xl">Target Roles</h2>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {targetRoles.map((role) => (
            <div key={role} className="rounded-xl border border-slate-200 bg-white px-5 py-4">
              <p className="font-medium text-slate-800">{role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold md:text-3xl">Contact</h2>
          <p className="mt-6 max-w-3xl leading-8 text-slate-300">
            BPR、DX推進、生成AI活用支援、公共・福祉領域向けITサービスに関するご相談や選考のご連絡は、
            職務経歴書または各転職サービス上のメッセージよりお願いいたします。
          </p>
        </div>
      </section>
    </main>
  );
}