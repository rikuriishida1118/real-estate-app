import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { prisma } from "@/lib/prisma";

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const property = await prisma.property.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!property) {
    return (
      <>
        <Header />

        <main className="property-detail-page">
          <section className="property-not-found">
            <p className="section-label">PROPERTY</p>

            <h1>物件が見つかりません</h1>

            <p>
              お探しの物件は掲載終了したか、
              URLが間違っている可能性があります。
            </p>

            <Link href="/properties" className="button button-dark">
              物件一覧へ戻る
            </Link>
          </section>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="property-detail-page">
        <section className="property-detail-hero">
          <div className="property-detail-inner">
            <p className="section-label">{property.type}</p>

            <h1>{property.title}</h1>

            <p className="property-detail-price">
              {property.price
                ? `${property.price.toLocaleString()}万円`
                : "価格相談"}
            </p>
          </div>
        </section>

        <section className="property-detail-section">
          <div className="property-detail-inner">

            <div className="property-main-image">
              <span>PROPERTY IMAGE</span>
            </div>

            <div className="property-detail-content">

              <div className="property-detail-block">
                <p className="property-detail-label">
                  PROPERTY INFORMATION
                </p>

                <h2>物件情報</h2>
              </div>

              <div className="property-info-table">

                <div className="property-info-row">
                  <span>価格</span>
                  <strong>
                    {property.price
                      ? `${property.price.toLocaleString()}万円`
                      : "価格相談"}
                  </strong>
                </div>

                {property.address && (
                  <div className="property-info-row">
                    <span>所在地</span>
                    <span>{property.address}</span>
                  </div>
                )}

                {property.landArea && (
                  <div className="property-info-row">
                    <span>土地面積</span>
                    <span>{property.landArea}㎡</span>
                  </div>
                )}

                {property.buildingArea && (
                  <div className="property-info-row">
                    <span>建物面積</span>
                    <span>{property.buildingArea}㎡</span>
                  </div>
                )}

                {property.floorPlan && (
                  <div className="property-info-row">
                    <span>間取り</span>
                    <span>{property.floorPlan}</span>
                  </div>
                )}

                {property.buildingAge !== null && (
                  <div className="property-info-row">
                    <span>築年数</span>
                    <span>{property.buildingAge}年</span>
                  </div>
                )}

                {property.station && (
                  <div className="property-info-row">
                    <span>最寄り駅</span>
                    <span>{property.station}</span>
                  </div>
                )}

                <div className="property-info-row">
                  <span>物件種別</span>
                  <span>{property.type}</span>
                </div>

              </div>

              {property.description && (
                <div className="property-description">
                  <p>{property.description}</p>
                </div>
              )}

              <div className="property-detail-actions">
                <Link
                  href="/contact"
                  className="button button-dark"
                >
                  この物件について問い合わせる
                </Link>

                <Link
                  href="/properties"
                  className="text-link"
                >
                  ← 物件一覧へ戻る
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
