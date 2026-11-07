module.exports = class Data1705779873807 {
    name = 'Data1705779873807'

    async up(db) {
        await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, "network" text NOT NULL, "address" text NOT NULL, "factory" text NOT NULL, "block" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "tx_hash" text NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_70324c99f1bbf273d84ee833ea" ON "account" ("network") `)
        await db.query(`CREATE INDEX "IDX_83603c168bc00b20544539fbea" ON "account" ("address") `)
        await db.query(`CREATE INDEX "IDX_ac3e002d68fc535199cf366f1d" ON "account" ("factory") `)
        await db.query(`CREATE INDEX "IDX_d4828423b208935d40142ffefd" ON "account" ("block") `)
        await db.query(`CREATE INDEX "IDX_d14b5f9cbfb2159367f384c906" ON "account" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_a238c969ac648c1fb20538cccc" ON "account" ("tx_hash") `)
        await db.query(`CREATE TABLE "user_operation" ("id" character varying NOT NULL, "network" text NOT NULL, "sender" text NOT NULL, "paymaster" text NOT NULL, "bundler" text NOT NULL, "user_op_hash" text NOT NULL, "success" boolean NOT NULL, "actual_gas_cost" numeric NOT NULL, "actual_gas_used" numeric NOT NULL, "bundler_gas_cost" numeric NOT NULL, "block" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "tx_hash" text NOT NULL, CONSTRAINT "PK_daae96c3cc5ba909299a40d0e42" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_0c4a89ab1681c26193982d086e" ON "user_operation" ("network") `)
        await db.query(`CREATE INDEX "IDX_4a24c447292900b2759221a516" ON "user_operation" ("sender") `)
        await db.query(`CREATE INDEX "IDX_6c0d2eda3db9a917ddc131bfc2" ON "user_operation" ("paymaster") `)
        await db.query(`CREATE INDEX "IDX_c1b5f34a03acca011a280b37c8" ON "user_operation" ("bundler") `)
        await db.query(`CREATE INDEX "IDX_db6e909c23eefc261fe984c2bc" ON "user_operation" ("success") `)
        await db.query(`CREATE INDEX "IDX_26c7834b2996d8a3180567a5e6" ON "user_operation" ("block") `)
        await db.query(`CREATE INDEX "IDX_a64a8d418e9521d379b898b231" ON "user_operation" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_9972bbf67ef2e2637db5a2e90a" ON "user_operation" ("tx_hash") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "account"`)
        await db.query(`DROP INDEX "public"."IDX_70324c99f1bbf273d84ee833ea"`)
        await db.query(`DROP INDEX "public"."IDX_83603c168bc00b20544539fbea"`)
        await db.query(`DROP INDEX "public"."IDX_ac3e002d68fc535199cf366f1d"`)
        await db.query(`DROP INDEX "public"."IDX_d4828423b208935d40142ffefd"`)
        await db.query(`DROP INDEX "public"."IDX_d14b5f9cbfb2159367f384c906"`)
        await db.query(`DROP INDEX "public"."IDX_a238c969ac648c1fb20538cccc"`)
        await db.query(`DROP TABLE "user_operation"`)
        await db.query(`DROP INDEX "public"."IDX_0c4a89ab1681c26193982d086e"`)
        await db.query(`DROP INDEX "public"."IDX_4a24c447292900b2759221a516"`)
        await db.query(`DROP INDEX "public"."IDX_6c0d2eda3db9a917ddc131bfc2"`)
        await db.query(`DROP INDEX "public"."IDX_c1b5f34a03acca011a280b37c8"`)
        await db.query(`DROP INDEX "public"."IDX_db6e909c23eefc261fe984c2bc"`)
        await db.query(`DROP INDEX "public"."IDX_26c7834b2996d8a3180567a5e6"`)
        await db.query(`DROP INDEX "public"."IDX_a64a8d418e9521d379b898b231"`)
        await db.query(`DROP INDEX "public"."IDX_9972bbf67ef2e2637db5a2e90a"`)
    }
}
