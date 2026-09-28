"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="site-logo" aria-label="橘　ESTATE ホーム">
          <Image
            src="/logo/tachibana-estate.png"
            alt="橘　ESTATE"
            width={190}
            height={100}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <Link href="/">ホーム</Link>

          <Link href="/about">
            私たちについて
          </Link>

          <Link href="/properties">
            物件を探す
          </Link>

          <Link href="/sell">
            売却相談
          </Link>

          <Link href="/contact" className="nav-contact">
            お問い合わせ
          </Link>
        </nav>

        <button
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isMenuOpen}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="mobile-nav" aria-label="モバイルナビゲーション">
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
