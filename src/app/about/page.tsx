import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="about-page">
        {/* =========================
            About Hero
        ========================= */}
        <section className="about-hero">
          <div className="about-hero-inner">
            <p className="section-label">ABOUT US</p>

            <h1>
              私たちについて
            </h1>

            <p>
              群馬・渋川の暮らしと不動産に、
              <br />
              地域に寄り添いながら向き合います。
            </p>
          </div>
        </section>

        {/* =========================
            Message
        ========================= */}
        <section className="about-message section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-label">MESSAGE</p>

              <h2>
                渋川で暮らす人の
                <br />
                これからを考える。
              </h2>
            </div>

            <div className="about-message-content">
              <p>
                TACHIBANA ESTATEは、
                群馬県渋川市を中心に不動産の売買をサポートする
                地域密着型の不動産会社です。
              </p>

              <p>
                不動産は、単に「土地」や「建物」を
                取り引きするものではありません。
                その先には、そこで暮らす人の生活があります。
              </p>

              <p>
                「どんな場所で暮らしたいのか」
                「どんな暮らしをしたいのか」
                「今ある不動産をどうしたいのか」
                一人ひとりのお話を伺いながら、
                その人に合った選択肢をご提案することを大切にしています。
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            Strength
        ========================= */}
        <section className="about-strength section">
          <div className="section-inner">
            <div className="section-heading center">
              <p className="section-label">OUR STRENGTH</p>

              <h2>
                TACHIBANA ESTATEが
                <br />
                大切にしていること
              </h2>
            </div>

            <div className="about-strength-grid">
              <article className="about-strength-card">
                <span className="about-strength-number">01</span>

                <h3>地域を知っていること</h3>

                <p>
                  渋川・群馬の地域性や暮らしを大切にし、
                  地域に根ざした不動産会社として
                  お客様のご相談に向き合います。
                </p>
              </article>

              <article className="about-strength-card">
                <span className="about-strength-number">02</span>

                <h3>一人ひとりに寄り添うこと</h3>

                <p>
                  物件をご紹介するだけではなく、
                  ご希望やライフスタイルを伺いながら、
                  納得できる住まい探しをサポートします。
                </p>
              </article>

              <article className="about-strength-card">
                <span className="about-strength-number">03</span>

                <h3>売ることにも向き合うこと</h3>

                <p>
                  購入だけでなく、
                  土地や建物の売却についてもご相談いただけます。
                  「何から始めればいいかわからない」という段階から
                  お気軽にご相談ください。
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =========================
            Company
        ========================= */}
        <section className="company-section section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-label">COMPANY</p>

              <h2>会社情報</h2>
            </div>

            <div className="company-info">
              <div className="company-info-row">
                <span>会社名</span>
                <strong>TACHIBANA ESTATE</strong>
              </div>

              <div className="company-info-row">
                <span>法人名</span>
                <strong>有限会社TACHIBANA ESTATE</strong>
              </div>

              <div className="company-info-row">
                <span>所在地</span>
                <span>群馬県渋川市</span>
              </div>

              <div className="company-info-row">
                <span>事業内容</span>
                <span>不動産売買仲介</span>
              </div>

              <div className="company-info-row">
                <span>宅地建物取引業免許</span>
                <span>XXXXXXXX号</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            Contact
        ========================= */}
        <section className="about-contact">
          <div className="about-contact-inner">
            <p className="section-label">CONTACT</p>

            <h2>
              不動産について、
              <br />
              お気軽にご相談ください。
            </h2>

            <p>
              物件探しから売却のご相談まで、
              <br />
              まずはお話をお聞かせください。
            </p>

            <Link href="/contact" className="button button-dark">
              お問い合わせ
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}