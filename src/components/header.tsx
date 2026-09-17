"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* ロゴ・会社名 */}
        <Link href="/" className="site-logo">
          <Image
            src="/logo/tachibana-estate.png"
            alt="TACHIBANA ESTATE"
            width={190}
            height={100}
            priority
            />
        </Link>

        {/* PC用ナビゲーション */}
        <nav className="desktop-nav">
          <Link href="/">ホーム</Link>
          <Link href="/about">私たちについて</Link>
          <Link href="/properties">物件を探す</Link>
          <Link href="/sell">売却相談</Link>
          <Link href="/contact" className="nav-contact">
            お問い合わせ
          </Link>
        </nav>

        {/* スマートフォン用メニューボタン */}
        <button
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* スマートフォン用メニュー */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            ホーム
          </Link>

          <Link href="/about" onClick={() => setIsMenuOpen(false)}>
            私たちについて
          </Link>

          <Link href="/properties" onClick={() => setIsMenuOpen(false)}>
            物件を探す
          </Link>

          <Link href="/sell" onClick={() => setIsMenuOpen(false)}>
            売却相談
          </Link>

          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            お問い合わせ
          </Link>
        </nav>
      )}
    </header>
  );
}
