import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function SellPage() {
  return (
    <>
      <Header />

      <main className="sell-page">
        {/* =========================
            Sell Hero
        ========================= */}
        <section className="sell-hero">
          <div className="sell-hero-inner">
            <p className="section-label">SELL YOUR PROPERTY</p>

            <h1>
              不動産を
              <br />
              売りたい方へ
            </h1>

            <p>
              土地や建物の売却について、
              <br />
              まずはお気軽にご相談ください。
            </p>
          </div>
        </section>

        {/* =========================
            Message
        ========================= */}
        <section className="sell-message section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-label">MESSAGE</p>

              <h2>
                「売りたい」と思ったら、
                <br />
                まずはご相談ください。
              </h2>
            </div>

            <div className="sell-message-content">
              <p>
                不動産の売却は、
                人生の中でも何度も経験することではありません。
              </p>

              <p>
                「いくらくらいで売れるのか」
                「どんな方法で売ればいいのか」
                「売却にどのくらい時間がかかるのか」
                など、わからないことも多いと思います。
              </p>

              <p>
                TACHIBANA ESTATEでは、
                お客様のお話を伺いながら、
                不動産の状況やご希望に合わせた売却方法をご提案します。
              </p>

              <p>
                まだ売却を決めていない段階でも構いません。
                まずは現在の状況をお聞かせください。
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            Reasons
        ========================= */}
        <section className="sell-reasons section">
          <div className="section-inner">
            <div className="section-heading center">
              <p className="section-label">WHY TACHIBANA ESTATE</p>

              <h2>
                売却のご相談で
                <br />
                大切にしていること
              </h2>
            </div>

            <div className="sell-reasons-grid">
              <article className="sell-reason-card">
                <span className="sell-reason-number">01</span>

                <h3>まずはお話を伺います</h3>

                <p>
                  売却の理由やご希望の時期、
                  ご不安に感じていることなどを丁寧にお伺いします。
                </p>
              </article>

              <article className="sell-reason-card">
                <span className="sell-reason-number">02</span>

                <h3>不動産の状況を確認します</h3>

                <p>
                  土地や建物の状態、
                  所在地などを確認し、
                  売却に向けた情報を整理します。
                </p>
              </article>

              <article className="sell-reason-card">
                <span className="sell-reason-number">03</span>

                <h3>売却方法をご提案します</h3>

                <p>
                  お客様のご希望や不動産の状況を踏まえ、
                  売却に向けた進め方をご提案します。
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =========================
            Flow
        ========================= */}
        <section className="sell-flow section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-label">FLOW</p>

              <h2>
                売却までの流れ
              </h2>
            </div>

            <div className="sell-flow-list">
              <div className="sell-flow-item">
                <div className="sell-flow-number">01</div>

                <div className="sell-flow-content">
                  <h3>ご相談</h3>

                  <p>
                    まずはお気軽にご相談ください。
                    売却を決めていない段階でも問題ありません。
                  </p>
                </div>
              </div>

              <div className="sell-flow-item">
                <div className="sell-flow-number">02</div>

                <div className="sell-flow-content">
                  <h3>査定・物件確認</h3>

                  <p>
                    不動産の状況を確認し、
                    売却に向けた情報を整理します。
                  </p>
                </div>
              </div>

              <div className="sell-flow-item">
                <div className="sell-flow-number">03</div>

                <div className="sell-flow-content">
                  <h3>売却方法のご提案</h3>

                  <p>
                    ご希望や不動産の状況に合わせて、
                    売却方法をご提案します。
                  </p>
                </div>
              </div>

              <div className="sell-flow-item">
                <div className="sell-flow-number">04</div>

                <div className="sell-flow-content">
                  <h3>販売活動</h3>

                  <p>
                    物件情報を整理し、
                    購入を検討される方へ向けて販売活動を行います。
                  </p>
                </div>
              </div>

              <div className="sell-flow-item">
                <div className="sell-flow-number">05</div>

                <div className="sell-flow-content">
                  <h3>ご契約・お引き渡し</h3>

                  <p>
                    条件がまとまりましたら、
                    ご契約からお引き渡しまでサポートします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            Consultation
        ========================= */}
        <section className="sell-consultation">
          <div className="sell-consultation-inner">
            <p className="section-label">CONSULTATION</p>

            <h2>
              こんなご相談も
              <br />
              お気軽にどうぞ。
            </h2>

            <div className="sell-consultation-list">
              <p>・相続した土地や建物を売りたい</p>
              <p>・使っていない土地を売りたい</p>
              <p>・現在住んでいる家の売却を考えている</p>
              <p>・不動産の価値を知りたい</p>
              <p>・売却するか迷っている</p>
            </div>
          </div>
        </section>

        {/* =========================
            Contact
        ========================= */}
        <section className="sell-contact">
          <div className="sell-contact-inner">
            <p className="section-label">CONTACT</p>

            <h2>
              不動産の売却について、
              <br />
              まずはご相談ください。
            </h2>

            <p>
              相談だけでも構いません。
              <br />
              お気軽にお問い合わせください。
            </p>

            <div className="sell-contact-buttons">
              <a href="tel:0000000000" className="button button-dark">
                電話で相談する
              </a>

              <a href="#" className="button button-dark">
                LINEで相談する
              </a>

              <Link href="/contact" className="button button-dark">
                お問い合わせ
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
