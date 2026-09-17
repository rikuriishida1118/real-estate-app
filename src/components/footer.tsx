import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* ブランド */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image
              src="/logo/tachibana-estate.png"
              alt="TACHIBANA ESTATE"
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

        {/* メニュー */}
        <nav className="footer-menu">
          <p className="footer-title">MENU</p>

          <Link href="/">ホーム</Link>
          <Link href="/about">私たちについて</Link>
          <Link href="/properties">物件を探す</Link>
          <Link href="/sell">売却相談</Link>
          <Link href="/contact">お問い合わせ</Link>
        </nav>

        {/* お問い合わせ */}
        <div className="footer-contact">
          <p className="footer-title">CONTACT</p>

          <p className="footer-contact-text">
            不動産のこと、
            <br />
            お気軽にご相談ください。
          </p>

          <a href="tel:0279257099" className="footer-phone">
            0279-25-7099
          </a>

          <div className="footer-social">
            <a href="#">LINE</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>

      {/* 会社情報 */}
      <div className="footer-company-area">
        <div className="footer-company-inner">
          <div>
            <p className="footer-company-name">
              TACHIBANA ESTATE
            </p>
            <p>橘不動産</p>
          </div>

          <div className="footer-company-info">
            <p>群馬県渋川市</p>
            <p>宅地建物取引業免許：XXXXXXXX号</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© TACHIBANA ESTATE All Rights Reserved.</p>
      </div>
    </footer>
  );
}