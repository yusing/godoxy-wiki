# Benchmark and Resource Usage

## TL;DR

- GoDoxy performs comparably to Traefik, with similar throughput
- Benchmarked on basic route `whoami.domain.com` -> `whoami:80` without access logging and any other middleware
- Real world performance may vary depending on the use case and configuration

## Benchmark

Source code:

- [dev.compose.yml](https://github.com/yusing/godoxy/blob/main/dev.compose.yml)
- [scripts/benchmark.sh](https://github.com/yusing/godoxy/blob/main/scripts/benchmark.sh)

Run the benchmark with:

`make benchmark` or `make TARGET={godoxy|traefik|nginx|caddy} benchmark`

Results (Last updated: `2026-01-03 02:10 +0800`):

| Proxy   | HTTP/1.1 Req/sec | HTTP/2 Req/sec | HTTP/1.1 Latency (avg) | HTTP/2 Latency (avg) | Transfer/sec (HTTP/1.1) |
| ------- | ---------------- | -------------- | ---------------------- | -------------------- | ----------------------- |
| Nginx   | 122,376.70       | 78,290.20      | 1.13ms                 | 1.09ms               | 17.27MB                 |
| Traefik | 92,976.36        | 67,898.40      | 1.39ms                 | 1.42ms               | 9.04MB                  |
| GoDoxy  | 96,319.45        | 68,096.40      | 1.34ms                 | 1.41ms               | 9.37MB                  |
| Caddy   | 12,890.27        | 1,520.50       | 72.51ms                | 65.57ms              | 1.45MB                  |

- **Nginx** leads with the highest throughput on both HTTP/1.1 (~122k req/s) and HTTP/2 (~78k req/s)
- **GoDoxy** performs comparably to Traefik, with slightly higher throughput (~96k req/s HTTP/1.1, ~68k req/s HTTP/2) and lower latency
- **Traefik** is slightly behind GoDoxy but still maintains solid performance (~93k req/s HTTP/1.1, ~68k req/s HTTP/2)
- **Caddy** significantly underperforms, likely a bug (also had errors in HTTP/2 test: 6855 failed requests)

## Resource Usage

> [!NOTE]
>
> For memory constrained environments, you can use the frontend with `latest-lite` tag.
> See [Lite Image](/Home#lite-image) for more details.

![Resource Usage](images/docker-stats.png)

With Lite Image:

![Lite Image](images/docker-stats-lite.png)
