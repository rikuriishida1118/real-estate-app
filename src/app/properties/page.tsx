import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import fs from "fs";
import path from "path";

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

        {/* ========================================
            Hero
        ========================================= */}
        <section className="properties-hero">
          <div className="properties-hero-inner">
            <p className="section-label">
              PROPERTY
            </p>

            <h1>
              物件を探す
            </h1>

            <p>
              群馬県渋川市を中心に、
              <br />
              土地・中古住宅などの物件をご紹介しています。
            </p>
          </div>
        </section>

        {/* ========================================
            Property List
        ========================================= */}
        <section className="properties-list-section">

          <div className="properties-list-inner">

            <div className="properties-list-heading">

              <div>
                <p className="section-label">
                  PROPERTIES
                </p>

                <h2>
                  取り扱い物件
                </h2>
              </div>

              <p className="property-count">
                {properties.length} 件
              </p>

            </div>

            {/* ====================================
                Filters
            ==================================== */}
            <div className="property-filters">

              <button
                type="button"
                className="property-filter active"
              >
                すべて
              </button>

              <button
                type="button"
                className="property-filter"
              >
                土地
              </button>

              <button
                type="button"
                className="property-filter"
              >
                中古住宅
              </button>

            </div>

            {/* ====================================
                Properties
            ==================================== */}
            {properties.length > 0 ? (

              <div className="properties-grid">

                {properties.map((property) => {

                  /*
                   * --------------------------------
                   * 物件画像の確認
                   * --------------------------------
                   *
                   * propertyNo = 0001
                   *
                   * ↓
                   *
                   * public/images/properties/0001/main.jpg
                   */

                  const imagePath = path.join(
                    process.cwd(),
                    "public",
                    "images",
                    "properties",
                    property.propertyNo,
                    "main.jpg"
                  );

                  const hasMainImage =
                    fs.existsSync(imagePath);

                  const imageUrl =
                    `/images/properties/${property.propertyNo}/main.jpg`;

                  return (
                    <Link
                      key={property.id}
                      href={`/properties/${property.id}`}
                      className="property-list-card"
                    >

                      {/* ==================================
                          Property Image
                      ================================== */}
                      <div className="property-list-image">

                        {hasMainImage ? (

                          <Image
                            src={imageUrl}
                            alt={property.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="property-list-image-content"
                          />

                        ) : (

                          <span>
                            PROPERTY
                          </span>

                        )}

                      </div>

                      {/* ==================================
                          Property Information
                      ================================== */}
                      <div className="property-list-content">

                        <p className="property-list-type">
                          {property.type}
                        </p>

                        <h3>
                          {property.title}
                        </h3>

                        {property.price !== null && (
                          <p className="property-list-price">
                            {property.price.toLocaleString()}円
                          </p>
                        )}

                        {property.address && (
                          <p className="property-list-address">
                            {property.address}
                          </p>
                        )}

                        {property.landArea !== null && (
                          <p className="property-list-detail">
                            土地面積 {property.landArea}㎡
                          </p>
                        )}

                        {property.buildingArea !== null && (
                          <p className="property-list-detail">
                            建物面積 {property.buildingArea}㎡
                          </p>
                        )}

                        <span className="property-list-link">
                          物件詳細を見る →
                        </span>

                      </div>

                    </Link>
                  );
                })}

              </div>

            ) : (

              /* ====================================
                 No Properties
              ==================================== */
              <div className="properties-empty">

                <p>
                  現在、掲載中の物件はありません。
                </p>

                <p>
                  気になるエリアや条件がございましたら、
                  <br />
                  お気軽にお問い合わせください。
                </p>

                <Link
                  href="/contact"
                  className="button button-primary"
                >
                  お問い合わせ
                </Link>

              </div>

            )}

          </div>

        </section>

        {/* ========================================
            Contact
        ========================================= */}
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
              掲載されている物件以外についても、
              <br />
              ご希望の条件をお聞かせください。
            </p>

            <Link
              href="/contact"
              className="button button-primary"
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
