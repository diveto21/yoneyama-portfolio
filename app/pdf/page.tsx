const cases = [
  {
    title: "10施設横断の業務管理ツール構築",
    issue: "施設ごとに請求処理・集計方法が異なり、属人化・非効率が発生。",
    action:
      "現場ヒアリングを行い、利用者請求、予算資料、統計データを一元管理できる仕組みを構築。",
    result: "月約20時間の作業工数削減、月15時間超の残業解消、10施設共通の業務基盤を整備。",
  },
  {
    title: "購買BPRによるコスト削減",
    issue: "施設・部署ごとの個別発注により、過剰在庫や廃棄ロスが発生。",
    action:
      "在庫管理を一元化し、全施設規模での集中購買体制を構築。",
    result: "年間消耗品費を前年比15%削減。購買プロセスの標準化にも貢献。",
  },
  {
    title: "利用料滞納者ゼロの継続",
    issue: "機械的な督促だけでは解決しにくい利用料滞納リスクが存在。",
    action:
      "利用者家族の状況を丁寧に確認し、公的制度活用、世帯分離、代行申請などを支援。",
    result: "担当施設で滞納者ゼロを継続。財務リスク管理と福祉的支援を両立。",
  },
  {
    title: "生成AI活用・プロトタイプ開発",
    issue: "公文書、説明資料、内部マニュアル作成に時間がかかり、現場負担が大きい。",
    action:
      "ChatGPT、Claude、Cursorを活用し、文書作成や業務整理、業務支援アプリのプロトタイプを作成。",
    result: "生成AIを現場業務に適用し、業務効率化と新たな支援ツールの可能性を検証。",
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

const roles = [
  "DX推進",
  "業務改善 / BPR",
  "社内DX",
  "生成AI活用支援",
  "カスタマーサクセス",
  "導入支援",
  "公共・福祉領域向けITサービス企画",
];

export default function PdfPage() {
  return (
    <main className="bg-slate-200 py-8 text-slate-900 print:bg-white print:py-0">
      <div className="mx-auto max-w-[900px] space-y-6 print:max-w-none print:space-y-0">
        <section className="pdf-page rounded-2xl bg-white p-10 shadow print:rounded-none print:shadow-none">
          <p className="text-sm font-bold tracking-[0.25em] text-cyan-700">
            PORTFOLIO SUMMARY
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight">
            米山徳彦
            <span className="block text-2xl text-slate-600">
              現場起点DXポートフォリオ
            </span>
          </h1>

          <p className="mt-8 text-2xl font-bold leading-relaxed">
            公共福祉の現場から、業務改革と生成AI活用を実装する。
          </p>

          <p className="mt-6 leading-8 text-slate-700">
            約20年間、公共福祉施設の運営・管理部門で、10施設横断の業務標準化、BPR、
            関係者調整、生成AIを活用した業務改善に取り組んできました。
            現場課題の整理から、仕組み化、導入後の定着支援まで一気通貫で推進できます。
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-3xl font-black">約20年</p>
              <p className="mt-2 text-sm text-slate-600">公共福祉施設の運営・管理経験</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-3xl font-black">10施設</p>
              <p className="mt-2 text-sm text-slate-600">横断の業務標準化・BPR推進</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-3xl font-black">月20h</p>
              <p className="mt-2 text-sm text-slate-600">業務管理ツールによる工数削減</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-3xl font-black">15%</p>
              <p className="mt-2 text-sm text-slate-600">購買BPRによる消耗品費削減</p>
            </div>
          </div>

          <div className="mt-10 rounded-xl bg-slate-950 p-6 text-white">
            <h2 className="text-xl font-bold">提供できる価値</h2>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm leading-6">
              {strengths.map((item) => (
                <li key={item}>・{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pdf-page rounded-2xl bg-white p-10 shadow print:rounded-none print:shadow-none">
          <p className="text-sm font-bold tracking-[0.25em] text-cyan-700">
            CASE STUDIES 01-02
          </p>
          <h2 className="mt-4 text-3xl font-black">主な実績</h2>

          <div className="mt-8 space-y-6">
            {cases.slice(0, 2).map((item, index) => (
              <article key={item.title} className="rounded-xl border border-slate-200 p-6">
                <p className="text-sm font-bold text-cyan-700">
                  CASE {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-2xl font-black">{item.title}</h3>
                <div className="mt-5 space-y-4 text-sm leading-7">
                  <p><span className="font-bold">課題：</span>{item.issue}</p>
                  <p><span className="font-bold">対応：</span>{item.action}</p>
                  <p><span className="font-bold">成果：</span>{item.result}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pdf-page rounded-2xl bg-white p-10 shadow print:rounded-none print:shadow-none">
          <p className="text-sm font-bold tracking-[0.25em] text-cyan-700">
            CASE STUDIES 03-04
          </p>
          <h2 className="mt-4 text-3xl font-black">主な実績</h2>

          <div className="mt-8 space-y-6">
            {cases.slice(2).map((item, index) => (
              <article key={item.title} className="rounded-xl border border-slate-200 p-6">
                <p className="text-sm font-bold text-cyan-700">
                  CASE {String(index + 3).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-2xl font-black">{item.title}</h3>
                <div className="mt-5 space-y-4 text-sm leading-7">
                  <p><span className="font-bold">課題：</span>{item.issue}</p>
                  <p><span className="font-bold">対応：</span>{item.action}</p>
                  <p><span className="font-bold">成果：</span>{item.result}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pdf-page rounded-2xl bg-white p-10 shadow print:rounded-none print:shadow-none">
          <p className="text-sm font-bold tracking-[0.25em] text-cyan-700">
            SKILLS / TARGET ROLES
          </p>
          <h2 className="mt-4 text-3xl font-black">スキル・希望職種</h2>

          <div className="mt-8">
            <h3 className="text-xl font-bold">使用ツール</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="rounded-full border border-slate-300 px-3 py-1 text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold">希望・適性職種</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {roles.map((role) => (
                <div key={role} className="rounded-lg border border-slate-200 p-3 text-sm">
                  {role}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-xl bg-slate-950 p-6 text-white">
            <h3 className="text-xl font-bold">Web版ポートフォリオ</h3>
            <p className="mt-4 break-all text-sm leading-7 text-slate-200">
              https://yoneyama-portfolio.vercel.app/
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              BPR、DX推進、生成AI活用支援、公共・福祉領域向けITサービスに関するご連絡は、
              職務経歴書または各転職サービス上のメッセージよりお願いいたします。
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}