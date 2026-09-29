import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

type PropertyDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PropertyDetailPage({
  params,
}: PropertyDetailPageProps) {
  const { id } = await params;

  const propertyId = Number(id);

  if (Number.isNaN(propertyId)) {
    notFound();
  }

  const property = await prisma.property.findUnique({
    where: {
      id: propertyId,
    },
  });

  if (!property) {
    notFound();
  }

  /*
   * ----------------------------------------
   * 物件画像
   * ----------------------------------------
   *
   * propertyNo が 0001 の場合
   *
   * public/images/properties/0001/main.jpg
   *
   * を参照する。
   */

  const propertyImageDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "properties",
    property.propertyNo
  );

  const mainImagePath = path.join(
    propertyImageDirectory,
    "main.jpg"
  );

  const hasMainImage = fs.existsSync(mainImagePath);

  const mainImageUrl = `/images/properties/${property.propertyNo}/main.jpg`;

  return (
    <>
      <Header />

      <main className="property-detail-page">

        {/* ========================================
            Hero
        ========================================= */}
        <section className="property-detail-hero">
          <div className="property-detail-inner">

            <p className="section-label">
              {property.type}
            </p>

            <h1>
              {property.title}
            </h1>

            {property.price !== null && (
              <p className="property-detail-price">
                {property.price.toLocaleString()}円
              </p>
            )}

          </div>
        </section>

        {/* ========================================
            Property Detail
        ========================================= */}
        <section className="property-detail-section">

          <div className="property-detail-inner">

            {/* ====================================
                Main Image
            ==================================== */}
            {hasMainImage ? (
              <div className="property-main-image">

                <Image
                  src={mainImageUrl}
                  alt={property.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 1000px"
                  className="property-main-image-content"
                  priority
                />

              </div>
            ) : (
              <div className="property-main-image">
                <span>
                  PROPERTY IMAGE
                </span>
              </div>
            )}

            <div className="property-detail-content">

              {/* ==================================
                  Overview
              ================================== */}
              <div className="property-detail-block">

                <p className="property-detail-label">
                  PROPERTY
                </p>

                <h2>
                  物件概要
                </h2>

              </div>

              <div className="property-info-table">

                {/* 物件種別 */}
                <div className="property-info-row">
                  <span>
                    物件種別
                  </span>

                  <strong>
                    {property.type}
                  </strong>
                </div>

                {/* 価格 */}
                {property.price !== null && (
                  <div className="property-info-row">
                    <span>
                      価格
                    </span>

                    <strong>
                      {property.price.toLocaleString()}円
                    </strong>
                  </div>
                )}

                {/* 所在地 */}
                {property.address && (
                  <div className="property-info-row">
                    <span>
                      所在地
                    </span>

                    <span>
                      {property.address}
                    </span>
                  </div>
                )}

                {/* 交通 */}
                {property.station && (
                  <div className="property-info-row">
                    <span>
                      交通
                    </span>

                    <span>
                      {property.station}
                    </span>
                  </div>
                )}

                {/* 間取り */}
                {property.floorPlan && (
                  <div className="property-info-row">
                    <span>
                      間取り
                    </span>

                    <span>
                      {property.floorPlan}
                    </span>
                  </div>
                )}

                {/* 土地面積 */}
                {property.landArea !== null && (
                  <div className="property-info-row">
                    <span>
                      土地面積
                    </span>

                    <span>
                      {property.landArea}㎡
                    </span>
                  </div>
                )}

                {/* 建物面積 */}
                {property.buildingArea !== null && (
                  <div className="property-info-row">
                    <span>
                      建物面積
                    </span>

                    <span>
                      {property.buildingArea}㎡
                    </span>
                  </div>
                )}

                {/* 築年数 */}
                {property.buildingAge !== null && (
                  <div className="property-info-row">
                    <span>
                      築年数
                    </span>

                    <span>
                      築{property.buildingAge}年
                    </span>
                  </div>
                )}

                {/* 物件番号 */}
                <div className="property-info-row">
                  <span>
                    物件番号
                  </span>

                  <span>
                    {property.propertyNo}
                  </span>
                </div>

              </div>

              {/* ==================================
                  Description
              ================================== */}
              {property.description && (
                <div className="property-description">

                  <div className="property-detail-block">

                    <p className="property-detail-label">
                      DESCRIPTION
                    </p>

                    <h2>
                      物件について
                    </h2>

                  </div>

                  <p>
                    {property.description}
                  </p>

                </div>
              )}

              {/* ==================================
                  Actions
              ================================== */}
              <div className="property-detail-actions">

                <Link
                  href={`/contact?property=${property.id}`}
                  className="button button-primary"
                >
                  この物件について問い合わせる
                </Link>

                <Link
                  href="/properties"
                  className="text-link"
                >
                  物件一覧に戻る →
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
