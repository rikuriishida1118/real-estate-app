import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="contact-page">
        {/* =========================
            Hero
        ========================== */}
        <section className="contact-hero">
          <div className="contact-hero-inner">
            <p className="section-label">CONTACT</p>

            <h1>
              不動産のこと、
              <br />
              まずはご相談ください。
            </h1>

            <p>
              物件探しから不動産売却まで、
              <br />
              お気軽にお問い合わせください。
            </p>
          </div>
        </section>

        {/* =========================
            Message
        ========================== */}
        <section className="contact-message section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-label">MESSAGE</p>

              <h2>
                ちょっとしたご相談も、
                <br />
                お気軽に。
              </h2>
            </div>

            <div className="contact-message-content">
              <p>
                「気になる物件がある」
                <br />
                「渋川市で土地を探している」
                <br />
                「不動産を売却したい」
              </p>

              <p>
                まだ具体的に決まっていない段階でも、
                まずはお気軽にご相談ください。
              </p>

              <p>
                橘 ESTATEでは、
                お客様のお話を伺いながら、
                これからの暮らしや不動産について
                一緒に考えていきます。
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            Contact Form
        ========================== */}
        <section className="contact-form-section section">
          <div className="section-inner">
            <div className="section-heading center">
              <p className="section-label">INQUIRY FORM</p>

              <h2>お問い合わせフォーム</h2>

              <p className="contact-form-lead">
                以下のフォームに必要事項をご入力ください。
                <br />
                内容を確認のうえ、担当者よりご連絡いたします。
              </p>
            </div>

            <form className="contact-form">
              <div className="contact-form-group">
                <label htmlFor="category">
                  ご相談内容
                  <span>必須</span>
                </label>

                <select id="category" name="category" defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option value="property">
                    物件を探している
                  </option>
                  <option value="sell">
                    不動産を売却したい
                  </option>
                  <option value="property-info">
                    物件について詳しく知りたい
                  </option>
                  <option value="other">
                    その他
                  </option>
                </select>
              </div>

              <div className="contact-form-group">
                <label htmlFor="name">
                  お名前
                  <span>必須</span>
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="例：山田 太郎"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">
                  メールアドレス
                  <span>必須</span>
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="例：example@email.com"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="phone">
                  電話番号
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="例：090-0000-0000"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">
                  お問い合わせ内容
                  <span>必須</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  placeholder="ご相談内容をご入力ください。"
                  required
                ></textarea>
              </div>

              <div className="contact-form-note">
                <p>
                  ※現在はお問い合わせフォームの画面のみ実装しています。
                  <br />
                  送信機能は今後実装予定です。
                </p>
              </div>

              <div className="contact-form-submit">
                <button type="submit">
                  入力内容を確認する
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* =========================
            Other Contact
        ========================== */}
        <section className="contact-other section">
          <div className="section-inner">
            <div className="section-heading center">
              <p className="section-label">OTHER CONTACT</p>

              <h2>
                お電話・Instagramからも
                <br />
                お問い合わせいただけます。
              </h2>
            </div>

            <div className="contact-other-grid">
              <a
                href="tel:0000000000"
                className="contact-other-card"
              >
                <span className="contact-other-label">
                  PHONE
                </span>

                <h3>
                  電話で相談する
                </h3>

                <p>
                  お急ぎの方や、
                  <br />
                  直接相談したい方はこちら。
                </p>

                <strong>
                  000-0000-0000
                </strong>
              </a>

              <a
                href="https://www.instagram.com/tachibana_estate_gunma?stkn=ajN4OW54bHdidDk%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-other-card"
              >
                <span className="contact-other-label">
                  INSTAGRAM
                </span>

                <h3>
                  Instagramを見る
                </h3>

                <p>
                  物件情報や、
                  <br />
                  日々の情報を発信しています。
                </p>

                <strong>
                  @tachibana_estate_gunma
                </strong>
              </a>
            </div>
          </div>
        </section>

        {/* =========================
            Final CTA
        ========================== */}
        <section className="contact-final">
          <div className="contact-final-inner">
            <p className="section-label">
              TACHIBANA ESTATE
            </p>

            <h2>
              渋川での暮らし、
              <br />
              一緒に考えてみませんか。
            </h2>

            <p>
              土地探し、中古住宅、不動産売却など、
              <br />
              まずはお気軽にご相談ください。
            </p>

            <a
              href="tel:0000000000"
              className="button button-light"
            >
              電話で相談する
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
