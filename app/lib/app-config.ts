export const APP_CONFIG = {
  name: "Sale Scheduler Lite",
  shortName: "Sale Scheduler",
  slug: "sale-scheduler-lite",
  tagline: "Schedule simple compare-at price campaigns and restore original prices safely.",
  problem: "Non-Plus merchants need a lightweight way to schedule sale prices and restore original prices without Launchpad.",
  persona: "Store owner or merchandising lead planning flash sales, seasonal markdowns and collection promos.",
  value: "A cautious sale campaign screen with price snapshots, restore checks and auditability before any product write.",
  primaryFlow: "Create a campaign, select products or collections, preview price changes, schedule start/end and review restore state.",
  color: "#b45309",
  mainObject: "Sale campaign",
  workspaceLabel: "Campaign planner",
  settingsLabel: "Pricing rules",
  requiredScopes: ["read_products","write_products"],
  doNotRequestScopes: ["read_orders","read_customers","write_discounts"],
  integrations: [
  "Admin GraphQL product/variant reads for current price and compare-at values.",
  "productVariantsBulkUpdate for future price application after snapshot validation.",
  "Shopify scheduled publication is not used for price changes; app jobs must handle timing."
],
  mvpFeatures: [
  "Campaign dashboard with scheduled, active and restore-needed states.",
  "Planner table showing products, current price, sale price and restore state.",
  "Validation for end date after start date, percent ranges and missing product selection.",
  "Audit trail placeholder for price snapshots."
],
  outOfScope: [
  "Discount-code campaign management.",
  "Market-specific fixed price editing in v1.",
  "Automatic production scheduler without external job runner configured."
],
  futureFeatures: [
  "Background scheduler with idempotent apply/restore jobs.",
  "Collection-based product expansion.",
  "Countdown theme block.",
  "Conflict detection when merchants edit prices during active sale."
],
  screens: [
  "Dashboard: active campaigns and restore alerts.",
  "Campaign planner: product price preview table.",
  "Pricing rules: discount defaults and restore safeguards.",
  "Help/QA: pricing risk checklist."
],
  sampleRows: [
  [
    "Summer tees",
    "$24.00 -> $19.00",
    "High",
    "Snapshot required"
  ],
  [
    "Accessories",
    "$18.00 -> $15.00",
    "Medium",
    "Ready"
  ],
  [
    "Winter coats",
    "$120.00 -> $96.00",
    "High",
    "Conflict review"
  ]
],
  metrics: [
  [
    "Campaigns drafted",
    "5"
  ],
  [
    "Products staged",
    "186"
  ],
  [
    "Restore checks",
    "4"
  ]
],
  settingsFields: {
  "workflowName": "Weekend flash sale",
  "thresholdLabel": "Max discount percent",
  "thresholdDefault": "35",
  "ownerEmail": "pricing@example.com"
},
  risks: [
  "Any bug touches pricing, so writes must be idempotent and auditable.",
  "Market-specific prices and subscription pricing need explicit exclusions in v1."
],
} as const;

export type AppConfig = typeof APP_CONFIG;

export function requiredScopesText() {
  return APP_CONFIG.requiredScopes.join(",");
}
