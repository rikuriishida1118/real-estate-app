import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* =========================================================
            Hero
        ========================================================= */}
        <section className="hero">
          <div className="hero-image">
            <Image
              src="/images/hero/hero-shibukawa.png"
              alt="群馬県渋川市の風景"
              fill
              priority
              sizes="100vw"
              className="hero-image-content"
            />
          </div>

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="hero-label">SHIBUKAWA / GUNMA</p>

            <h1>
              暮らしを、
              <br />
              もっと身近に。
            </h1>

            <p className="hero-description">
              群馬・渋川の暮らしと不動産を、
              <br />
              地域に寄り添いながらお手伝いします。
            </p>

            <div className="hero-buttons">
              <Link
                href="/properties"
                className="button button-primary"
              >
                物件を探す
              </Link>

              <Link
                href="/sell"
                className="button button-secondary"
              >
                不動産を売りたい方へ
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            About
            詳細はAboutページへ。
            トップページでは簡潔な紹介のみ。
        ========================================================= */}
        <section className="about-section">
          <div className="about-section-inner">
            <div className="about-content">
              <p className="section-label">ABOUT US</p>

              <h2>
                渋川の暮らしを、
                <br />
                もっと身近に。
              </h2>

              <Link
                href="/about"
                className="text-link"
              >
                私たちについて →
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            Properties
        ========================================================= */}
        <section className="property-section section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-label">PROPERTY</p>

              <h2>
                おすすめの
                <br />
                物件
              </h2>
            </div>

            <div className="property-grid">
              {/* -------------------------------------------------
                  Property 01
                  ※ 後ほどDBから取得する形に変更
              ------------------------------------------------- */}
              <article className="property-card">
                <div className="property-image">
                  <span>PROPERTY IMAGE</span>
                </div>

                <div className="property-info">
                  <p className="property-type">土地</p>

                  <h3>渋川市 ○○町</h3>

                  <p className="property-price">
                    〇〇〇万円
                  </p>

                  <p className="property-detail">
                    土地面積：〇〇㎡
                  </p>
                </div>
              </article>

              {/* -------------------------------------------------
                  Property 02
              ------------------------------------------------- */}
              <article className="property-card">
                <div className="property-image">
                  <span>PROPERTY IMAGE</span>
                </div>

                <div className="property-info">
                  <p className="property-type">中古住宅</p>

                  <h3>渋川市 ○○町</h3>

                  <p className="property-price">
                    〇〇〇万円
                  </p>

                  <p className="property-detail">
                    土地面積：〇〇㎡
                  </p>
                </div>
              </article>

              {/* -------------------------------------------------
                  Property 03
              ------------------------------------------------- */}
              <article className="property-card">
                <div className="property-image">
                  <span>PROPERTY IMAGE</span>
                </div>

                <div className="property-info">
                  <p className="property-type">土地</p>

                  <h3>渋川市 ○○町</h3>

                  <p className="property-price">
                    〇〇〇万円
                  </p>

                  <p className="property-detail">
                    土地面積：〇〇㎡
                  </p>
                </div>
              </article>
            </div>

            <div className="section-button">
              <Link
                href="/properties"
                className="button button-primary"
              >
                物件を探す
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            Sell
        ========================================================= */}
        <section className="sell-section">
          <div className="sell-inner">
            <div className="sell-content">
              <p className="section-label">
                SELL YOUR PROPERTY
              </p>

              <h2>
                不動産を
                <br />
                売りたい方へ
              </h2>

              <p>
                土地や建物を売りたいけれど、
                「何から始めればいいかわからない」
                という方も、まずはお気軽にご相談ください。
              </p>

              <Link
                href="/sell"
                className="button button-light"
              >
                売却について相談する
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            Contact
        ========================================================= */}
        <section className="contact-section section">
          <div className="section-inner">
            <div className="section-heading center">
              <p className="section-label">CONTACT</p>

              <h2>
                不動産のこと、
                <br />
                まずはご相談ください。
              </h2>

              <p className="contact-description">
                物件探しから売却のご相談まで、
                お気軽にお問い合わせください。
              </p>
            </div>

            <div className="contact-buttons">
              {/* PHONE */}
              <a
                href="tel:0000000000"
                className="contact-button"
              >
                <span className="contact-button-label">
                  PHONE
                </span>

                <span className="contact-button-title">
                  電話で相談する
                </span>
              </a>

              {/* LINE */}
              <a
                href="#"
                className="contact-button"
              >
                <span className="contact-button-label">
                  LINE
                </span>

                <span className="contact-button-title">
                  LINEで相談する
                </span>
              </a>

              {/* INSTAGRAM */}
              <a
                href="#"
                className="contact-button"
              >
                <span className="contact-button-label">
                  INSTAGRAM
                </span>

                <span className="contact-button-title">
                  Instagramを見る
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
