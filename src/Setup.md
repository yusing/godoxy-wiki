# Setup

## Prerequisites

Configure Wildcard DNS Record(s) to point to machine running `GoDoxy`, e.g.

- A Record: `*.domain.com` -> `10.0.10.1`
- AAAA Record (if you use IPv6): `*.domain.com` -> `::ffff:a00:a01`

## Automatic

> [!NOTE]
> GoDoxy is designed to be running in `host` network mode, do not change it.
>
> To change listening ports, modify `.env`.

1. Prepare a new directory for docker compose and config files.

2. Run setup script inside the directory

   ```shell
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/yusing/godoxy/main/scripts/setup.sh)"
   ```

3. You may now do some extra configuration on WebUI `https://godoxy.yourdomain.com`

## Manual Setup

1. Make `config` directory then grab `config.example.yml` into `config/config.yml`

   `mkdir -p config && wget https://raw.githubusercontent.com/yusing/godoxy/main/config.example.yml -O config/config.yml`

2. Grab `.env.example` into `.env`

   `wget https://raw.githubusercontent.com/yusing/godoxy/main/.env.example -O .env`

3. Grab `compose.example.yml` into `compose.yml`

   `wget https://raw.githubusercontent.com/yusing/godoxy/main/compose.example.yml -O compose.yml`
