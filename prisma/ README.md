# Database README

## 概要

本プロジェクトでは、PostgreSQLをデータベースとして使用し、
Prismaを介して物件情報を管理しています。

現在は不動産仲介サイトの物件情報を管理することを目的としています。

---

## 使用技術

- PostgreSQL
- Prisma 7.8.0
- Next.js
- TypeScript

---

## データベース構成

現在は `Property` モデルを使用しています。

### Property

物件情報を管理するテーブルです。

| カラム | 型 | 必須 | 説明 |
|---|---|---|---|
| id | Int | ○ | 物件ID |
| propertyNo | String | ○ | 物件番号 |
| type | String | ○ | 物件種別（土地・中古住宅など） |
| title | String | ○ | 物件タイトル |
| price | Int | × | 価格 |
| address | String | × | 所在地 |
| station | String | × | 最寄り駅 |
| floorPlan | String | × | 間取り |
| landArea | Float | × | 土地面積 |
| buildingArea | Float | × | 建物面積 |
| buildingAge | Int | × | 築年数 |
| description | String | × | 物件説明 |
| createdAt | DateTime | ○ | 登録日時 |

---

## Prisma Schema

データベースの定義は以下のファイルで管理しています。

```text
prisma/schema.prisma