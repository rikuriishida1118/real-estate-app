import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function SellPage() {
  return (
    <>
      <Header />

      <main className="sell-page">

        {/* ==================================================
            HERO
        ================================================== */}
        <section className="sell-hero">
          <div className="sell-hero-inner">
            <p className="section-label">
              SELL YOUR PROPERTY
            </p>

            <h1>
              不動産を、
              <br />
              売りたい方へ。
            </h1>

            <p>
              土地や建物の売却をお考えの方へ。
              <br />
              地域に寄り添いながら、大切な不動産の売却をサポートします。
            </p>

            <Link
              href="/contact"
              className="button button-light"
            >
              売却について相談する
            </Link>
          </div>
        </section>

        {/* ==================================================
            MESSAGE
        ================================================== */}
        <section className="sell-message section">
          <div className="section-inner">

            <div className="section-heading">
              <p className="section-label">
                MESSAGE
              </p>

              <h2>
                不動産の売却は、
                <br />
                まず相談することから。
              </h2>
            </div>

            <div className="sell-message-content">
              <p>
                「この土地はいくらくらいで売れるのだろう」
                <br />
                「家を売りたいけれど、何から始めればいいかわからない」
              </p>

              <p>
                不動産の売却には、価格や手続き、タイミングなど、
                分からないことがたくさんあります。
              </p>

              <p>
                橘 ESTATEでは、お客様のお話を丁寧に伺いながら、
                物件の状況や地域の特性を踏まえて、
                売却について一緒に考えていきます。
              </p>

              <p>
                まだ売却を決めていない段階でも、
                まずはお気軽にご相談ください。
              </p>
            </div>

          </div>
        </section>

        {/* ==================================================
            FLOW
        ================================================== */}
        <section className="sell-flow section">
          <div className="section-inner">

            <div className="section-heading center">
              <p className="section-label">
                FLOW
              </p>

              <h2>
                売却までの流れ
              </h2>

              <p className="sell-flow-lead">
                ご相談から売却まで、
                <br />
                一つひとつ丁寧にサポートします。
              </p>
            </div>

            <div className="sell-flow-list">

              <div className="sell-flow-item">
                <span className="sell-flow-number">
                  01
                </span>

                <div>
                  <h3>
                    ご相談
                  </h3>

                  <p>
                    まずはお気軽にご相談ください。
                    売却を決めていない段階でも問題ありません。
                  </p>
                </div>
              </div>

              <div className="sell-flow-item">
                <span className="sell-flow-number">
                  02
                </span>

                <div>
                  <h3>
                    物件の確認・査定
                  </h3>

                  <p>
                    土地や建物の状態、立地、周辺環境などを確認し、
                    売却について検討します。
                  </p>
                </div>
              </div>

              <div className="sell-flow-item">
                <span className="sell-flow-number">
                  03
                </span>

                <div>
                  <h3>
                    売却方法のご提案
                  </h3>

                  <p>
                    お客様のご希望を伺いながら、
                    売却に向けた進め方をご提案します。
                  </p>
                </div>
              </div>

              <div className="sell-flow-item">
                <span className="sell-flow-number">
                  04
                </span>

                <div>
                  <h3>
                    販売活動
                  </h3>

                  <p>
                    物件の魅力を整理し、
                    購入を検討される方へ情報を届けていきます。
                  </p>
                </div>
              </div>

              <div className="sell-flow-item">
                <span className="sell-flow-number">
                  05
                </span>

                <div>
                  <h3>
                    ご契約・お引き渡し
                  </h3>

                  <p>
                    条件がまとまりましたら、
                    契約からお引き渡しまでサポートします。
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            POINT
        ================================================== */}
        <section className="sell-point section">
          <div className="section-inner">

            <div className="section-heading">
              <p className="section-label">
                OUR APPROACH
              </p>

              <h2>
                地域を知っているからこそ、
                <br />
                できること。
              </h2>
            </div>

            <div className="sell-point-grid">

              <div className="sell-point-card">
                <span className="sell-point-number">
                  01
                </span>

                <h3>
                  地域とのつながり
                </h3>

                <p>
                  株式会社橘電工として地域で20年。
                  これまで築いてきた地域とのつながりを大切にしながら、
                  不動産事業に取り組んでいます。
                </p>
              </div>

              <div className="sell-point-card">
                <span className="sell-point-number">
                  02
                </span>

                <h3>
                  一つひとつ丁寧に
                </h3>

                <p>
                  不動産は一つとして同じものがありません。
                  物件の状況やお客様のご希望を伺いながら、
                  丁寧に売却を進めていきます。
                </p>
              </div>

              <div className="sell-point-card">
                <span className="sell-point-number">
                  03
                </span>

                <h3>
                  暮らしまで考える
                </h3>

                <p>
                  売却する方だけでなく、
                  その不動産を必要としている次の方の暮らしも考えながら、
                  お取引をサポートします。
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            FAQ
        ================================================== */}
        <section className="sell-faq section">
          <div className="section-inner">

            <div className="section-heading center">
              <p className="section-label">
                FAQ
              </p>

              <h2>
                よくあるご質問
              </h2>
            </div>

            <div className="sell-faq-list">

              <div className="sell-faq-item">
                <h3>
                  Q. まだ売却を決めていなくても相談できますか？
                </h3>

                <p>
                  はい。売却するか迷っている段階でも、
                  お気軽にご相談ください。
                </p>
              </div>

              <div className="sell-faq-item">
                <h3>
                  Q. 土地だけでも相談できますか？
                </h3>

                <p>
                  はい。土地・中古住宅など、
                  不動産の売却についてご相談いただけます。
                </p>
              </div>

              <div className="sell-faq-item">
                <h3>
                  Q. まずは話だけ聞きたいのですが大丈夫ですか？
                </h3>

                <p>
                  もちろんです。
                  売却について分からないことがあれば、
                  まずはお気軽にお問い合わせください。
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            CONTACT
        ================================================== */}
        <section className="sell-contact">
          <div className="sell-contact-inner">

            <p className="section-label">
              CONTACT
            </p>

            <h2>
              不動産の売却について、
              <br />
              まずはご相談ください。
            </h2>

            <p>
              「売るかどうかまだ決めていない」
              <br />
              という段階でもお気軽にご相談ください。
            </p>

            <Link
              href="/contact"
              className="button button-light"
            >
              売却について相談する
            </Link>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
