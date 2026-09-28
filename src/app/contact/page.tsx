import Header from "@/components/header";
import Footer from "@/components/footer";

const INSTAGRAM_URL =
  "https://www.instagram.com/tachibana_estate_gunma/";

const PHONE_NUMBER = "0279-25-7099";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="contact-page">
        {/* =========================================================
            Hero
        ========================================================= */}
        <section className="contact-hero">
          <div className="contact-hero-inner">
            <p className="section-label">CONTACT</p>

            <h1>お問い合わせ</h1>

            <p>
              不動産についてのご相談は、
              <br />
              お気軽にお問い合わせください。
            </p>
          </div>
        </section>

        {/* =========================================================
            Consultation
        ========================================================= */}
        <section className="contact-message section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-label">CONSULTATION</p>

              <h2>
                まずはお気軽に
                <br />
                ご相談ください。
              </h2>
            </div>

            <div className="contact-message-content">
              <p>
                物件探しや土地の購入、不動産の売却など、
                不動産に関することならお気軽にご相談ください。
              </p>

              <p>
                「まだ具体的には決まっていない」
                「ちょっと話を聞いてみたい」
                という段階でも問題ありません。
              </p>

              <p>
                お客様の状況やご希望をお伺いしながら、
                一つひとつ丁寧にご案内します。
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            Contact Method
        ========================================================= */}
        <section className="contact-methods section">
          <div className="section-inner">
            <div className="section-heading center">
              <p className="section-label">CONTACT METHOD</p>

              <h2>お問い合わせ方法</h2>
            </div>

            <div className="contact-method-grid contact-method-grid-two">
              {/* Phone */}
              <a
                href={`tel:${PHONE_NUMBER.replaceAll("-", "")}`}
                className="contact-method-card"
              >
                <span className="contact-method-label">
                  PHONE
                </span>

                <h3>電話で相談する</h3>

                <p>
                  お急ぎの方や直接相談したい方は、
                  お電話でお気軽にお問い合わせください。
                </p>

                <span className="contact-method-action">
                  {PHONE_NUMBER} →
                </span>
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                className="contact-method-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-method-label">
                  INSTAGRAM
                </span>

                <h3>Instagramを見る</h3>

                <p>
                  物件情報や地域の情報などを
                  Instagramでも発信していきます。
                </p>

                <span className="contact-method-action">
                  Instagramを見る →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            Company
        ========================================================= */}
        <section className="contact-company section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-label">COMPANY</p>

              <h2>会社情報</h2>
            </div>

            <div className="contact-company-content">
              <div className="contact-company-info">
                <p className="contact-company-name">
                  橘　ESTATE
                </p>

                <p>株式会社橘電工</p>

                <p>群馬県渋川市</p>

                <p>地域に根ざして20年</p>
              </div>

              <div className="contact-company-info">
                <p>宅地建物取引業免許</p>

                <p>XXXXXXXX号</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            Final CTA
        ========================================================= */}
        <section className="contact-final">
          <div className="contact-final-inner">
            <p className="section-label">橘　ESTATE</p>

            <h2>
              暮らしと不動産のこと、
              <br />
              何でもご相談ください。
            </h2>

            <div className="contact-final-buttons contact-final-buttons-two">
              <a
                href={`tel:${PHONE_NUMBER.replaceAll("-", "")}`}
                className="button button-dark"
              >
                電話で相談する
              </a>

              <a
                href={INSTAGRAM_URL}
                className="button button-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagramを見る
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
