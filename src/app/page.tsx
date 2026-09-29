import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* ==================================================
            HERO
        ================================================== */}
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
            <p className="hero-label">
              SHIBUKAWA / GUNMA
            </p>

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

        {/* ==================================================
            ABOUT
        ================================================== */}
        <section className="about-section">
          <div className="about-section-inner">
            <div className="section-heading">
              <p className="section-label">
                ABOUT US
              </p>

              <h2>
                渋川の暮らしを、
                <br />
                もっと身近に。
              </h2>
            </div>

            <div className="about-content">
              <p>
                橘 ESTATEは、群馬県渋川市を中心に、
                土地・中古住宅などの不動産仲介を行っています。
              </p>

              <p>
                地域で暮らす方はもちろん、
                これから渋川・群馬で暮らしたい方にも、
                不動産を通じて地域の魅力をお伝えしていきます。
              </p>

              <p className="home-about-history">
                株式会社橘電工として地域で20年。
                <br />
                これまで築いてきた地域とのつながりを大切に、
                <br />
                新しい暮らしのお手伝いをしています。
              </p>

              <Link
                href="/about"
                className="text-link"
              >
                私たちについて →
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================================
            PROPERTY
        ================================================== */}
        <section className="property-section section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-label">
                PROPERTY
              </p>

              <h2>
                おすすめの
                <br />
                物件
              </h2>
            </div>

            <div className="property-grid">
              {/* Property 01 */}
              <article className="property-card">
                <div className="property-image">
                  <div className="property-image-placeholder">
                    <span>PROPERTY</span>
                  </div>
                </div>

                <div className="property-info">
                  <p className="property-type">
                    土地
                  </p>

                  <h3>
                    渋川市北橘町の土地
                  </h3>

                  <p className="property-price">
                    780万円
                  </p>

                  <p className="property-detail">
                    群馬県渋川市北橘町
                    <br />
                    土地面積 245.80㎡
                  </p>
                </div>
              </article>

              {/* Property 02 */}
              <article className="property-card">
                <div className="property-image">
                  <div className="property-image-placeholder">
                    <span>PROPERTY</span>
                  </div>
                </div>

                <div className="property-info">
                  <p className="property-type">
                    中古住宅
                  </p>

                  <h3>
                    渋川市○○町 中古住宅
                  </h3>

                  <p className="property-price">
                    1,280万円
                  </p>

                  <p className="property-detail">
                    群馬県渋川市○○町
                    <br />
                    詳細は物件ページをご覧ください。
                  </p>
                </div>
              </article>

              {/* Property 03 */}
              <article className="property-card">
                <div className="property-image">
                  <div className="property-image-placeholder">
                    <span>PROPERTY</span>
                  </div>
                </div>

                <div className="property-info">
                  <p className="property-type">
                    土地
                  </p>

                  <h3>
                    渋川市の土地
                  </h3>

                  <p className="property-price">
                    580万円〜
                  </p>

                  <p className="property-detail">
                    渋川市周辺
                    <br />
                    土地・住宅用地
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

        {/* ==================================================
            SELL
        ================================================== */}
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

              <p>
                地域に根ざしてきた経験を活かし、
                大切な不動産の売却を丁寧にサポートします。
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

        {/* ==================================================
            CONTACT
        ================================================== */}
        <section className="contact-section section">
          <div className="section-inner">
            <div className="section-heading center">
              <p className="section-label">
                CONTACT
              </p>

              <h2>
                不動産のこと、
                <br />
                まずはご相談ください。
              </h2>

              <p className="contact-description">
                物件探しから売却のご相談まで、
                <br />
                お気軽にお問い合わせください。
              </p>
            </div>

            <div className="contact-buttons">
              {/* Phone */}
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

              {/* Contact */}
              <Link
                href="/contact"
                className="contact-button"
              >
                <span className="contact-button-label">
                  CONTACT
                </span>

                <span className="contact-button-title">
                  お問い合わせ
                </span>
              </Link>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/tachibana_estate_gunma?stkn=ajN4OW54bHdidDk%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
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
