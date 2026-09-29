import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* ==================================================
            HERO
        ================================================== */}
        <section className="about-hero">
          <div className="about-hero-inner">
            <p className="section-label">
              ABOUT US
            </p>

            <h1>
              私たちについて
            </h1>

            <p>
              地域に根ざし、
              <br />
              暮らしに寄り添う不動産会社へ。
            </p>
          </div>
        </section>

        {/* ==================================================
            MESSAGE
        ================================================== */}
        <section className="about-message section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-label">
                MESSAGE
              </p>

              <h2>
                渋川で暮らす。
                <br />
                その選択に、
                <br />
                寄り添いたい。
              </h2>
            </div>

            <div className="about-message-content">
              <p>
                橘 ESTATEは、群馬県渋川市を中心に、
                土地・中古住宅などの不動産仲介を行っています。
              </p>

              <p>
                不動産を探すことは、
                これからの暮らしを考えることでもあります。
              </p>

              <p>
                どんな場所で暮らしたいのか。
                どんな住まいが自分たちに合っているのか。
                そして、今ある不動産をどうしていくのか。
              </p>

              <p>
                私たちは、一つひとつのご相談に耳を傾けながら、
                地域のことを知る不動産会社として、
                お客様の暮らしに寄り添っていきます。
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================
            REGIONAL ROOTS
        ================================================== */}
        <section className="about-roots section">
          <div className="section-inner">
            <div className="section-heading center">
              <p className="section-label">
                OUR ROOTS
              </p>

              <h2>
                地域とのつながりを、
                <br />
                次の暮らしへ。
              </h2>

              <p className="about-roots-lead">
                株式会社橘電工として地域で20年間、
                事業を続けてきました。
                これまで地域の皆さまと築いてきたつながりを大切にし、
                不動産という新しい形で、
                これからの暮らしをお手伝いします。
              </p>
            </div>

            <div className="about-roots-content">
              <div className="about-roots-item">
                <span className="about-roots-number">
                  01
                </span>

                <h3>
                  地域を知る
                </h3>

                <p>
                  地域で長く事業を続けてきたからこそ、
                  その土地の環境や暮らしについて、
                  お客様と一緒に考えることを大切にしています。
                </p>
              </div>

              <div className="about-roots-item">
                <span className="about-roots-number">
                  02
                </span>

                <h3>
                  人とのつながり
                </h3>

                <p>
                  不動産の取引だけではなく、
                  地域で築いてきた人とのつながりを大切にしながら、
                  一人ひとりのご相談に向き合います。
                </p>
              </div>

              <div className="about-roots-item">
                <span className="about-roots-number">
                  03
                </span>

                <h3>
                  暮らしを支える
                </h3>

                <p>
                  物件をご紹介して終わりではなく、
                  その先の暮らしまで考えたご提案を目指しています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            COMPANY
        ================================================== */}
        <section className="about-company section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-label">
                COMPANY
              </p>

              <h2>
                会社情報
              </h2>
            </div>

            <div className="company-info">
              <div className="company-info-row">
                <dt>
                  会社名
                </dt>

                <dd>
                  株式会社橘不動産
                </dd>
              </div>

              <div className="company-info-row">
                <dt>
                  ブランド名
                </dt>

                <dd>
                  橘 ESTATE
                </dd>
              </div>

              <div className="company-info-row">
                <dt>
                  代表者
                </dt>

                <dd>
                  石田省吾
                </dd>
              </div>

              <div className="company-info-row">
                <dt>
                  所在地
                </dt>

                <dd>
                  群馬県渋川市
                </dd>
              </div>

              <div className="company-info-row">
                <dt>
                  事業内容
                </dt>

                <dd>
                  不動産仲介業
                  <br />
                  土地・中古住宅等の売買仲介
                </dd>
              </div>

              <div className="company-info-row">
                <dt>
                  関連会社
                </dt>

                <dd>
                  株式会社橘電工
                </dd>
              </div>

              <div className="company-info-row">
                <dt>
                  地域での歩み
                </dt>

                <dd>
                  株式会社橘電工として20年
                </dd>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            CONTACT
        ================================================== */}
        <section className="about-contact">
          <div className="about-contact-inner">
            <p className="section-label">
              CONTACT
            </p>

            <h2>
              不動産のこと、
              <br />
              お気軽にご相談ください。
            </h2>

            <p>
              物件探しや不動産売却について、
              <br />
              まずはお気軽にお問い合わせください。
            </p>

            <Link
              href="/contact"
              className="button button-light"
            >
              お問い合わせ
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
