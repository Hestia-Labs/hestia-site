import { sqliteTable, AnySQLiteColumn, index, integer, text, numeric } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const mailingList = sqliteTable("mailing_list", {
	id: integer().primaryKey({ autoIncrement: true }),
	email: text().notNull(),
	name: text(),
	subscribedOn: numeric("subscribed_on").default(sql`(DATE('now'))`),
	status: text().default("active"),
},
(table) => {
	return {
		idxEmail: index("idx_email").on(table.email),
	}
});

