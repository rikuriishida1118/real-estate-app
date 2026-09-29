"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">

        {/* Logo */}
        <Link href="/" className="site-logo" onClick={closeMenu}>
          <Image
            src="/logo/tachibana-estate.png"
            alt="橘 ESTATE"
            width={190}
            height={100}
            priority
          />
        </Link>

        {/* PC Navigation */}
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <Link href="/">
            ホーム
          </Link>

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

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="menu-button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="モバイルナビゲーション"
        >
          <Link href="/" onClick={closeMenu}>
            ホーム
          </Link>

          <Link href="/about" onClick={closeMenu}>
            私たちについて
          </Link>

          <Link href="/properties" onClick={closeMenu}>
            物件を探す
          </Link>

          <Link href="/sell" onClick={closeMenu}>
            売却相談
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            お問い合わせ
          </Link>
        </nav>
      )}
    </header>
  );
}
