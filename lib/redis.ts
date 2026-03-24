import Redis from "ioredis";

declare global {
    // eslint-disable-next-line no-var
    var redis: Redis | undefined;
}

const redisUrl = process.env.REDIS_URL;

function createRedisClient() {
    if (!redisUrl) {
        throw new Error("REDIS_URL is not defined");
    }

    return new Redis(redisUrl, {
        maxRetriesPerRequest: 2,
        enableReadyCheck: true,
        lazyConnect: true,
    });
}

export const redis = global.redis ?? (() => {
    const client = createRedisClient();

    client.on("error", (err) => {
        console.error("Redis error:", err);
    });

    if (process.env.NODE_ENV !== "production") {
        global.redis = client;
    }

    return client;
})();