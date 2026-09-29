import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* =========================
          Footer Main
      ========================= */}
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image
              src="/logo/tachibana-estate.png"
              alt="橘 ESTATE"
              width={240}
              height={100}
            />
          </Link>

          <p className="footer-description">
            群馬県渋川市を中心に、
            <br />
            暮らしと不動産のご相談を承っています。
          </p>

          <p className="footer-description">
            土地・中古住宅・不動産売却など、
            <br />
            地域に寄り添った不動産仲介を行っています。
          </p>
        </div>

        {/* Menu */}
        <nav className="footer-menu" aria-label="フッターナビゲーション">
          <p className="footer-title">MENU</p>

          <Link href="/">ホーム</Link>
          <Link href="/about">私たちについて</Link>
          <Link href="/properties">物件を探す</Link>
          <Link href="/sell">売却相談</Link>
          <Link href="/contact">お問い合わせ</Link>
        </nav>

        {/* Contact */}
        <div className="footer-contact">
          <p className="footer-title">CONTACT</p>

          <p className="footer-contact-text">
            不動産のこと、
            <br />
            お気軽にご相談ください。
          </p>

          <a href="tel:0000000000" className="footer-phone">
            000-0000-0000
          </a>

          <div className="footer-social">
            <a
              href="https://www.instagram.com/tachibana_estate_gunma?stkn=ajN4OW54bHdidDk%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* =========================
          Company Information
      ========================= */}
      <div className="footer-company-area">
        <div className="footer-company-inner">
          <div>
            <p className="footer-company-name">
              橘 ESTATE
            </p>

            <p>株式会社橘不動産</p>

            <p>代表者：石田省吾</p>
          </div>

          <div className="footer-company-info">
            <p>
              株式会社橘電工として地域で20年
            </p>

            <p>
              その地域とのつながりを活かし、
              <br />
              不動産事業を行っています。
            </p>
          </div>
        </div>
      </div>

      {/* =========================
          Copyright
      ========================= */}
      <div className="footer-bottom">
        <p>© 橘 ESTATE All Rights Reserved.</p>
      </div>
    </footer>
  );
}
