import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { prisma } from "@/lib/prisma";

export default async function PropertiesPage() {
  const properties = await prisma.property.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <Header />

      <main className="properties-page">

        {/* ページヘッダー */}
        <section className="properties-hero">
          <div className="properties-hero-inner">
            <p className="section-label">PROPERTY</p>

            <h1>
              物件を探す
            </h1>

            <p>
              群馬県渋川市を中心に、
              <br />
              現在取り扱っている物件をご紹介します。
            </p>
          </div>
        </section>

        {/* 物件一覧 */}
        <section className="properties-list-section">
          <div className="properties-list-inner">

            <div className="properties-list-heading">
              <div>
                <p className="section-label">PROPERTY LIST</p>

                <h2>
                  取り扱い物件
                </h2>
              </div>

              <p className="property-count">
                {properties.length} 件
              </p>
            </div>

            {/* 絞り込み */}
            <div className="property-filters">
              <button className="property-filter active">
                すべて
              </button>

              <button className="property-filter">
                土地
              </button>

              <button className="property-filter">
                中古住宅
              </button>
            </div>

            {/* カード */}
            <div className="properties-grid">

              {properties.map((property) => (
                <Link
                  href={`/properties/${property.id}`}
                  key={property.id}
                  className="property-list-card"
                >
                  <div className="property-list-image">
                    <span>PROPERTY IMAGE</span>
                  </div>

                  <div className="property-list-content">

                    <p className="property-list-type">
                      {property.type}
                    </p>

                    <h3>
                      {property.title}
                    </h3>

                    <p className="property-list-price">
                      {property.price
                        ? `${property.price.toLocaleString()}万円`
                        : "価格相談"}
                    </p>

                    <p className="property-list-detail">
                      {property.landArea
                        ? `土地面積：${property.landArea}㎡`
                        : ""}
                    </p>

                    <p className="property-list-address">
                      {property.address}
                    </p>

                    <span className="property-list-link">
                      詳細を見る →
                    </span>

                  </div>
                </Link>
              ))}

            </div>

          </div>
        </section>

        {/* お問い合わせ */}
        <section className="properties-contact">
          <div className="properties-contact-inner">

            <p className="section-label">
              CONTACT
            </p>

            <h2>
              気になる物件があれば、
              <br />
              お気軽にご相談ください。
            </h2>

            <p>
              掲載している物件以外にも、
              ご希望に合わせて物件をお探しします。
            </p>

            <Link
              href="/contact"
              className="button button-dark"
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
