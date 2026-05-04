# Product brief

## Problema
Non-Plus merchants need a lightweight way to schedule sale prices and restore original prices without Launchpad.

## Usuario objetivo
Store owner or merchandising lead planning flash sales, seasonal markdowns and collection promos.

## Merchant persona
Merchant con catalogo activo, equipo chico y necesidad de resolver un problema operativo puntual sin instalar una suite pesada.

## Flujo principal
Create a campaign, select products or collections, preview price changes, schedule start/end and review restore state.

## Propuesta de valor
A cautious sale campaign screen with price snapshots, restore checks and auditability before any product write.

## MVP
- Campaign dashboard with scheduled, active and restore-needed states.
- Planner table showing products, current price, sale price and restore state.
- Validation for end date after start date, percent ranges and missing product selection.
- Audit trail placeholder for price snapshots.

## Futuro fuera de alcance
- Background scheduler with idempotent apply/restore jobs.
- Collection-based product expansion.
- Countdown theme block.
- Conflict detection when merchants edit prices during active sale.
