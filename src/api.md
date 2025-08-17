


# GoDoxy API
GoDoxy API
  
> [GoDoxy Docs](https://docs.godoxy.dev)

## Informations

### Version

1.0

### License

[MIT](https://github.com/yusing/godoxy/blob/main/LICENSE)

### Contact

Yusing  https://github.com/yusing/godoxy/issues

### Terms Of Service

https://github.com/yusing/godoxy/blob/main/LICENSE

## Content negotiation

### URI Schemes
  * http

### Consumes
  * application/json
  * text/plain

### Produces
  * image/png
  * image/svg+xml
  * image/webp
  * image/x-icon
  * application/json
  * text/plain
  * application/godoxy+yaml

## All endpoints

###  agent

| Method  | URI     | Name   | Summary |
|---------|---------|--------|---------|
| GET | /api/v1/agent/list | [get agent list](#get-agent-list) | List agents |
| POST | /api/v1/agent/create | [post agent create](#post-agent-create) | Create a new agent |
| POST | /api/v1/agent/verify | [post agent verify](#post-agent-verify) | Verify a new agent |
  


###  auth

| Method  | URI     | Name   | Summary |
|---------|---------|--------|---------|
| HEAD | /api/v1/auth/check | [head auth check](#head-auth-check) | Check authentication status |
| POST | /api/v1/auth/callback | [post auth callback](#post-auth-callback) | Post Auth Callback |
| POST | /api/v1/auth/login | [post auth login](#post-auth-login) | Login |
| POST | /api/v1/auth/logout | [post auth logout](#post-auth-logout) | Logout |
  


###  cert

| Method  | URI     | Name   | Summary |
|---------|---------|--------|---------|
| GET | /api/v1/cert/info | [get cert info](#get-cert-info) | Get cert info |
| GET | /api/v1/cert/renew | [get cert renew](#get-cert-renew) | Renew cert |
  


###  docker

| Method  | URI     | Name   | Summary |
|---------|---------|--------|---------|
| GET | /api/v1/docker/containers | [get docker containers](#get-docker-containers) | Get containers |
| GET | /api/v1/docker/info | [get docker info](#get-docker-info) | Get docker info |
| GET | /api/v1/docker/logs/{server}/{container} | [get docker logs server container](#get-docker-logs-server-container) | Get docker container logs |
  


###  file

| Method  | URI     | Name   | Summary |
|---------|---------|--------|---------|
| GET | /api/v1/file/content | [get file content](#get-file-content) | Get file content |
| GET | /api/v1/file/list | [get file list](#get-file-list) | List files |
| POST | /api/v1/file/validate | [post file validate](#post-file-validate) | Validate file |
| PUT | /api/v1/file/content | [put file content](#put-file-content) | Set file content |
  


###  homepage

| Method  | URI     | Name   | Summary |
|---------|---------|--------|---------|
| GET | /api/v1/homepage/categories | [get homepage categories](#get-homepage-categories) | List homepage categories |
| GET | /api/v1/homepage/items | [get homepage items](#get-homepage-items) | Homepage items |
| POST | /api/v1/homepage/set/category_order | [post homepage set category order](#post-homepage-set-category-order) | Set homepage category order |
| POST | /api/v1/homepage/set/item | [post homepage set item](#post-homepage-set-item) | Override single homepage item |
| POST | /api/v1/homepage/set/item_visible | [post homepage set item visible](#post-homepage-set-item-visible) | Set homepage item visibility |
| POST | /api/v1/homepage/set/items_batch | [post homepage set items batch](#post-homepage-set-items-batch) | Override multiple homepage items |
  


###  metrics

| Method  | URI     | Name   | Summary |
|---------|---------|--------|---------|
| GET | /api/v1/metrics/system_info | [get metrics system info](#get-metrics-system-info) | Get system info |
| GET | /api/v1/metrics/uptime | [get metrics uptime](#get-metrics-uptime) | Get uptime |
  


###  route

| Method  | URI     | Name   | Summary |
|---------|---------|--------|---------|
| GET | /api/v1/route/by_provider | [get route by provider](#get-route-by-provider) | List routes by provider |
| GET | /api/v1/route/list | [get route list](#get-route-list) | List routes |
| GET | /api/v1/route/providers | [get route providers](#get-route-providers) | List route providers |
| GET | /api/v1/route/{which} | [get route which](#get-route-which) | List route |
  


###  version1

| Method  | URI     | Name   | Summary |
|---------|---------|--------|---------|
| GET | /api/v1/favicon | [get favicon](#get-favicon) | Get favicon |
| GET | /api/v1/health | [get health](#get-health) | Get routes health info |
| GET | /api/v1/icons | [get icons](#get-icons) | List icons |
| GET | /api/v1/stats | [get stats](#get-stats) | Get GoDoxy stats |
| GET | /api/v1/version | [get version](#get-version) | Get version |
| POST | /api/v1/reload | [post reload](#post-reload) | Reload config |
  


## Paths

### <span id="get-agent-list"></span> List agents (*GetAgentList*)

```
GET /api/v1/agent/list
```

List agents

#### Consumes
  * application/json

#### Produces
  * application/json

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-agent-list-200) | OK | OK |  | [schema](#get-agent-list-200-schema) |
| [403](#get-agent-list-403) | Forbidden | Forbidden |  | [schema](#get-agent-list-403-schema) |
| [500](#get-agent-list-500) | Internal Server Error | Internal Server Error |  | [schema](#get-agent-list-500-schema) |

#### Responses


##### <span id="get-agent-list-200"></span> 200 - OK
Status: OK

###### <span id="get-agent-list-200-schema"></span> Schema
   
  

[][Agent](#agent)

##### <span id="get-agent-list-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-agent-list-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-agent-list-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="get-agent-list-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-cert-info"></span> Get cert info (*GetCertInfo*)

```
GET /api/v1/cert/info
```

Get cert info

#### Produces
  * application/json

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-cert-info-200) | OK | OK |  | [schema](#get-cert-info-200-schema) |
| [403](#get-cert-info-403) | Forbidden | Forbidden |  | [schema](#get-cert-info-403-schema) |
| [404](#get-cert-info-404) | Not Found | Not Found |  | [schema](#get-cert-info-404-schema) |
| [500](#get-cert-info-500) | Internal Server Error | Internal Server Error |  | [schema](#get-cert-info-500-schema) |

#### Responses


##### <span id="get-cert-info-200"></span> 200 - OK
Status: OK

###### <span id="get-cert-info-200-schema"></span> Schema
   
  

[CertInfo](#cert-info)

##### <span id="get-cert-info-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-cert-info-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-cert-info-404"></span> 404 - Not Found
Status: Not Found

###### <span id="get-cert-info-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-cert-info-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="get-cert-info-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-cert-renew"></span> Renew cert (*GetCertRenew*)

```
GET /api/v1/cert/renew
```

Renew cert

#### Produces
  * text/plain

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-cert-renew-200) | OK | OK |  | [schema](#get-cert-renew-200-schema) |
| [403](#get-cert-renew-403) | Forbidden | Forbidden |  | [schema](#get-cert-renew-403-schema) |
| [500](#get-cert-renew-500) | Internal Server Error | Internal Server Error |  | [schema](#get-cert-renew-500-schema) |

#### Responses


##### <span id="get-cert-renew-200"></span> 200 - OK
Status: OK

###### <span id="get-cert-renew-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="get-cert-renew-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-cert-renew-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-cert-renew-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="get-cert-renew-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-docker-containers"></span> Get containers (*GetDockerContainers*)

```
GET /api/v1/docker/containers
```

Get containers

#### Produces
  * application/json

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-docker-containers-200) | OK | OK |  | [schema](#get-docker-containers-200-schema) |
| [403](#get-docker-containers-403) | Forbidden | Forbidden |  | [schema](#get-docker-containers-403-schema) |
| [500](#get-docker-containers-500) | Internal Server Error | Internal Server Error |  | [schema](#get-docker-containers-500-schema) |

#### Responses


##### <span id="get-docker-containers-200"></span> 200 - OK
Status: OK

###### <span id="get-docker-containers-200-schema"></span> Schema
   
  

[][ContainerResponse](#container-response)

##### <span id="get-docker-containers-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-docker-containers-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-docker-containers-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="get-docker-containers-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-docker-info"></span> Get docker info (*GetDockerInfo*)

```
GET /api/v1/docker/info
```

Get docker info

#### Produces
  * application/json

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-docker-info-200) | OK | OK |  | [schema](#get-docker-info-200-schema) |
| [403](#get-docker-info-403) | Forbidden | Forbidden |  | [schema](#get-docker-info-403-schema) |
| [500](#get-docker-info-500) | Internal Server Error | Internal Server Error |  | [schema](#get-docker-info-500-schema) |

#### Responses


##### <span id="get-docker-info-200"></span> 200 - OK
Status: OK

###### <span id="get-docker-info-200-schema"></span> Schema
   
  

[ServerInfo](#server-info)

##### <span id="get-docker-info-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-docker-info-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-docker-info-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="get-docker-info-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-docker-logs-server-container"></span> Get docker container logs (*GetDockerLogsServerContainer*)

```
GET /api/v1/docker/logs/{server}/{container}
```

Get docker container logs

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| container | `path` | string | `string` |  | ✓ |  | container id |
| server | `path` | string | `string` |  | ✓ |  | server name |
| from | `query` | string | `string` |  |  |  | from timestamp |
| levels | `query` | string | `string` |  |  |  | levels |
| stderr | `query` | boolean | `bool` |  |  |  | show stderr |
| stdout | `query` | boolean | `bool` |  |  |  | show stdout |
| to | `query` | string | `string` |  |  |  | to timestamp |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-docker-logs-server-container-200) | OK | OK |  | [schema](#get-docker-logs-server-container-200-schema) |
| [400](#get-docker-logs-server-container-400) | Bad Request | Bad Request |  | [schema](#get-docker-logs-server-container-400-schema) |
| [403](#get-docker-logs-server-container-403) | Forbidden | Forbidden |  | [schema](#get-docker-logs-server-container-403-schema) |
| [404](#get-docker-logs-server-container-404) | Not Found | Not Found |  | [schema](#get-docker-logs-server-container-404-schema) |
| [500](#get-docker-logs-server-container-500) | Internal Server Error | Internal Server Error |  | [schema](#get-docker-logs-server-container-500-schema) |

#### Responses


##### <span id="get-docker-logs-server-container-200"></span> 200 - OK
Status: OK

###### <span id="get-docker-logs-server-container-200-schema"></span> Schema

##### <span id="get-docker-logs-server-container-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="get-docker-logs-server-container-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-docker-logs-server-container-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-docker-logs-server-container-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-docker-logs-server-container-404"></span> 404 - Not Found
Status: Not Found

###### <span id="get-docker-logs-server-container-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-docker-logs-server-container-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="get-docker-logs-server-container-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-favicon"></span> Get favicon (*GetFavicon*)

```
GET /api/v1/favicon
```

Get favicon

#### Consumes
  * application/json

#### Produces
  * image/svg+xml
  * image/x-icon
  * image/png
  * image/webp

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| alias | `query` | string | `string` |  |  |  | Alias of the route |
| url | `query` | string | `string` |  |  |  | URL of the route |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-favicon-200) | OK | OK |  | [schema](#get-favicon-200-schema) |
| [400](#get-favicon-400) | Bad Request | Bad Request: alias is empty or route is not HTTPRoute |  | [schema](#get-favicon-400-schema) |
| [403](#get-favicon-403) | Forbidden | Forbidden: unauthorized |  | [schema](#get-favicon-403-schema) |
| [404](#get-favicon-404) | Not Found | Not Found: route or icon not found |  | [schema](#get-favicon-404-schema) |
| [500](#get-favicon-500) | Internal Server Error | Internal Server Error: internal error |  | [schema](#get-favicon-500-schema) |

#### Responses


##### <span id="get-favicon-200"></span> 200 - OK
Status: OK

###### <span id="get-favicon-200-schema"></span> Schema
   
  

[][HomepageFetchResult](#homepage-fetch-result)

##### <span id="get-favicon-400"></span> 400 - Bad Request: alias is empty or route is not HTTPRoute
Status: Bad Request

###### <span id="get-favicon-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-favicon-403"></span> 403 - Forbidden: unauthorized
Status: Forbidden

###### <span id="get-favicon-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-favicon-404"></span> 404 - Not Found: route or icon not found
Status: Not Found

###### <span id="get-favicon-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-favicon-500"></span> 500 - Internal Server Error: internal error
Status: Internal Server Error

###### <span id="get-favicon-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-file-content"></span> Get file content (*GetFileContent*)

```
GET /api/v1/file/content
```

Get file content

#### Consumes
  * application/json

#### Produces
  * application/json
  * application/godoxy+yaml

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| filename | `query` | filename (formatted string) | `string` |  | ✓ |  |  |
| type | `query` | string | `string` |  | ✓ |  |  |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-file-content-200) | OK | OK |  | [schema](#get-file-content-200-schema) |
| [400](#get-file-content-400) | Bad Request | Bad Request |  | [schema](#get-file-content-400-schema) |
| [403](#get-file-content-403) | Forbidden | Forbidden |  | [schema](#get-file-content-403-schema) |
| [500](#get-file-content-500) | Internal Server Error | Internal Server Error |  | [schema](#get-file-content-500-schema) |

#### Responses


##### <span id="get-file-content-200"></span> 200 - OK
Status: OK

###### <span id="get-file-content-200-schema"></span> Schema
   
  



##### <span id="get-file-content-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="get-file-content-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-file-content-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-file-content-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-file-content-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="get-file-content-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-file-list"></span> List files (*GetFileList*)

```
GET /api/v1/file/list
```

List files

#### Consumes
  * application/json

#### Produces
  * application/json

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-file-list-200) | OK | OK |  | [schema](#get-file-list-200-schema) |
| [403](#get-file-list-403) | Forbidden | Forbidden |  | [schema](#get-file-list-403-schema) |
| [500](#get-file-list-500) | Internal Server Error | Internal Server Error |  | [schema](#get-file-list-500-schema) |

#### Responses


##### <span id="get-file-list-200"></span> 200 - OK
Status: OK

###### <span id="get-file-list-200-schema"></span> Schema
   
  

[ListFilesResponse](#list-files-response)

##### <span id="get-file-list-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-file-list-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-file-list-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="get-file-list-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-health"></span> Get routes health info (*GetHealth*)

```
GET /api/v1/health
```

Get health info by route name

#### Consumes
  * application/json

#### Produces
  * application/json

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-health-200) | OK | Health info by route name |  | [schema](#get-health-200-schema) |
| [403](#get-health-403) | Forbidden | Forbidden |  | [schema](#get-health-403-schema) |
| [500](#get-health-500) | Internal Server Error | Internal Server Error |  | [schema](#get-health-500-schema) |

#### Responses


##### <span id="get-health-200"></span> 200 - Health info by route name
Status: OK

###### <span id="get-health-200-schema"></span> Schema
   
  

[HealthMap](#health-map)

##### <span id="get-health-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-health-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-health-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="get-health-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-homepage-categories"></span> List homepage categories (*GetHomepageCategories*)

```
GET /api/v1/homepage/categories
```

List homepage categories

#### Consumes
  * application/json

#### Produces
  * application/json

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-homepage-categories-200) | OK | OK |  | [schema](#get-homepage-categories-200-schema) |
| [403](#get-homepage-categories-403) | Forbidden | Forbidden |  | [schema](#get-homepage-categories-403-schema) |

#### Responses


##### <span id="get-homepage-categories-200"></span> 200 - OK
Status: OK

###### <span id="get-homepage-categories-200-schema"></span> Schema
   
  

[]string

##### <span id="get-homepage-categories-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-homepage-categories-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-homepage-items"></span> Homepage items (*GetHomepageItems*)

```
GET /api/v1/homepage/items
```

Homepage items

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| category | `query` | string | `string` |  |  |  | Category filter |
| provider | `query` | string | `string` |  |  |  | Provider filter |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-homepage-items-200) | OK | OK |  | [schema](#get-homepage-items-200-schema) |
| [400](#get-homepage-items-400) | Bad Request | Bad Request |  | [schema](#get-homepage-items-400-schema) |
| [403](#get-homepage-items-403) | Forbidden | Forbidden |  | [schema](#get-homepage-items-403-schema) |

#### Responses


##### <span id="get-homepage-items-200"></span> 200 - OK
Status: OK

###### <span id="get-homepage-items-200-schema"></span> Schema
   
  

[HomepageItems](#homepage-items)

##### <span id="get-homepage-items-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="get-homepage-items-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-homepage-items-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-homepage-items-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-icons"></span> List icons (*GetIcons*)

```
GET /api/v1/icons
```

List icons

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| keyword | `query` | string | `string` |  |  |  | Keyword |
| limit | `query` | integer | `int64` |  |  |  | Limit |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-icons-200) | OK | OK |  | [schema](#get-icons-200-schema) |
| [400](#get-icons-400) | Bad Request | Bad Request |  | [schema](#get-icons-400-schema) |
| [403](#get-icons-403) | Forbidden | Forbidden |  | [schema](#get-icons-403-schema) |

#### Responses


##### <span id="get-icons-200"></span> 200 - OK
Status: OK

###### <span id="get-icons-200-schema"></span> Schema
   
  

[][HomepageIconMetaSearch](#homepage-icon-meta-search)

##### <span id="get-icons-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="get-icons-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-icons-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-icons-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-metrics-system-info"></span> Get system info (*GetMetricsSystemInfo*)

```
GET /api/v1/metrics/system_info
```

Get system info

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| agentAddr | `query` | string | `string` |  |  |  |  |
| aggregate | `query` | string | `string` |  |  |  |  |
| period | `query` | string | `string` |  |  |  |  |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-metrics-system-info-200) | OK | period specified |  | [schema](#get-metrics-system-info-200-schema) |
| [400](#get-metrics-system-info-400) | Bad Request | Bad Request |  | [schema](#get-metrics-system-info-400-schema) |
| [403](#get-metrics-system-info-403) | Forbidden | Forbidden |  | [schema](#get-metrics-system-info-403-schema) |
| [404](#get-metrics-system-info-404) | Not Found | Not Found |  | [schema](#get-metrics-system-info-404-schema) |
| [500](#get-metrics-system-info-500) | Internal Server Error | Internal Server Error |  | [schema](#get-metrics-system-info-500-schema) |

#### Responses


##### <span id="get-metrics-system-info-200"></span> 200 - period specified
Status: OK

###### <span id="get-metrics-system-info-200-schema"></span> Schema
   
  

[SystemInfoAggregate](#system-info-aggregate)

##### <span id="get-metrics-system-info-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="get-metrics-system-info-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-metrics-system-info-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-metrics-system-info-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-metrics-system-info-404"></span> 404 - Not Found
Status: Not Found

###### <span id="get-metrics-system-info-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-metrics-system-info-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="get-metrics-system-info-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-metrics-uptime"></span> Get uptime (*GetMetricsUptime*)

```
GET /api/v1/metrics/uptime
```

Get uptime

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| interval | `query` | string | `string` |  |  |  |  |
| keyword | `query` | string | `string` |  |  |  |  |
| limit | `query` | integer | `int64` |  |  |  |  |
| offset | `query` | integer | `int64` |  |  |  |  |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-metrics-uptime-200) | OK | period specified |  | [schema](#get-metrics-uptime-200-schema) |
| [204](#get-metrics-uptime-204) | No Content | No Content |  | [schema](#get-metrics-uptime-204-schema) |
| [400](#get-metrics-uptime-400) | Bad Request | Bad Request |  | [schema](#get-metrics-uptime-400-schema) |
| [403](#get-metrics-uptime-403) | Forbidden | Forbidden |  | [schema](#get-metrics-uptime-403-schema) |
| [500](#get-metrics-uptime-500) | Internal Server Error | Internal Server Error |  | [schema](#get-metrics-uptime-500-schema) |

#### Responses


##### <span id="get-metrics-uptime-200"></span> 200 - period specified
Status: OK

###### <span id="get-metrics-uptime-200-schema"></span> Schema
   
  

[UptimeAggregate](#uptime-aggregate)

##### <span id="get-metrics-uptime-204"></span> 204 - No Content
Status: No Content

###### <span id="get-metrics-uptime-204-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-metrics-uptime-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="get-metrics-uptime-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-metrics-uptime-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-metrics-uptime-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-metrics-uptime-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="get-metrics-uptime-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-route-by-provider"></span> List routes by provider (*GetRouteByProvider*)

```
GET /api/v1/route/by_provider
```

List routes by provider

#### Consumes
  * application/json

#### Produces
  * application/json

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-route-by-provider-200) | OK | OK |  | [schema](#get-route-by-provider-200-schema) |
| [403](#get-route-by-provider-403) | Forbidden | Forbidden |  | [schema](#get-route-by-provider-403-schema) |
| [500](#get-route-by-provider-500) | Internal Server Error | Internal Server Error |  | [schema](#get-route-by-provider-500-schema) |

#### Responses


##### <span id="get-route-by-provider-200"></span> 200 - OK
Status: OK

###### <span id="get-route-by-provider-200-schema"></span> Schema
   
  

[RouteAPIRoutesByProvider](#route-api-routes-by-provider)

##### <span id="get-route-by-provider-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-route-by-provider-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-route-by-provider-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="get-route-by-provider-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-route-list"></span> List routes (*GetRouteList*)

```
GET /api/v1/route/list
```

List routes

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| provider | `query` | string | `string` |  |  |  | Provider |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-route-list-200) | OK | OK |  | [schema](#get-route-list-200-schema) |
| [403](#get-route-list-403) | Forbidden | Forbidden |  | [schema](#get-route-list-403-schema) |

#### Responses


##### <span id="get-route-list-200"></span> 200 - OK
Status: OK

###### <span id="get-route-list-200-schema"></span> Schema
   
  

[][Route](#route)

##### <span id="get-route-list-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-route-list-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-route-providers"></span> List route providers (*GetRouteProviders*)

```
GET /api/v1/route/providers
```

List route providers

#### Consumes
  * application/json

#### Produces
  * application/json

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-route-providers-200) | OK | OK |  | [schema](#get-route-providers-200-schema) |
| [403](#get-route-providers-403) | Forbidden | Forbidden |  | [schema](#get-route-providers-403-schema) |
| [500](#get-route-providers-500) | Internal Server Error | Internal Server Error |  | [schema](#get-route-providers-500-schema) |

#### Responses


##### <span id="get-route-providers-200"></span> 200 - OK
Status: OK

###### <span id="get-route-providers-200-schema"></span> Schema
   
  

[][RouteProvider](#route-provider)

##### <span id="get-route-providers-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-route-providers-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-route-providers-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="get-route-providers-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-route-which"></span> List route (*GetRouteWhich*)

```
GET /api/v1/route/{which}
```

List route

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| which | `path` | string | `string` |  | ✓ |  | Route name |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-route-which-200) | OK | OK |  | [schema](#get-route-which-200-schema) |
| [400](#get-route-which-400) | Bad Request | Bad Request |  | [schema](#get-route-which-400-schema) |
| [403](#get-route-which-403) | Forbidden | Forbidden |  | [schema](#get-route-which-403-schema) |
| [404](#get-route-which-404) | Not Found | Not Found |  | [schema](#get-route-which-404-schema) |

#### Responses


##### <span id="get-route-which-200"></span> 200 - OK
Status: OK

###### <span id="get-route-which-200-schema"></span> Schema
   
  

[Route](#route)

##### <span id="get-route-which-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="get-route-which-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-route-which-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-route-which-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-route-which-404"></span> 404 - Not Found
Status: Not Found

###### <span id="get-route-which-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-stats"></span> Get GoDoxy stats (*GetStats*)

```
GET /api/v1/stats
```

Get stats

#### Consumes
  * application/json

#### Produces
  * application/json

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-stats-200) | OK | OK |  | [schema](#get-stats-200-schema) |
| [403](#get-stats-403) | Forbidden | Forbidden |  | [schema](#get-stats-403-schema) |
| [500](#get-stats-500) | Internal Server Error | Internal Server Error |  | [schema](#get-stats-500-schema) |

#### Responses


##### <span id="get-stats-200"></span> 200 - OK
Status: OK

###### <span id="get-stats-200-schema"></span> Schema
   
  

[StatsResponse](#stats-response)

##### <span id="get-stats-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-stats-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-stats-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="get-stats-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-version"></span> Get version (*GetVersion*)

```
GET /api/v1/version
```

Get the version of the GoDoxy

#### Consumes
  * application/json

#### Produces
  * text/plain

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-version-200) | OK | version |  | [schema](#get-version-200-schema) |

#### Responses


##### <span id="get-version-200"></span> 200 - version
Status: OK

###### <span id="get-version-200-schema"></span> Schema
   
  



### <span id="head-auth-check"></span> Check authentication status (*HeadAuthCheck*)

```
HEAD /api/v1/auth/check
```

Checks if the user is authenticated by validating their token

#### Produces
  * text/plain

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#head-auth-check-200) | OK | OK |  | [schema](#head-auth-check-200-schema) |
| [403](#head-auth-check-403) | Forbidden | Forbidden: use X-Redirect-To header to redirect to login page |  | [schema](#head-auth-check-403-schema) |

#### Responses


##### <span id="head-auth-check-200"></span> 200 - OK
Status: OK

###### <span id="head-auth-check-200-schema"></span> Schema
   
  



##### <span id="head-auth-check-403"></span> 403 - Forbidden: use X-Redirect-To header to redirect to login page
Status: Forbidden

###### <span id="head-auth-check-403-schema"></span> Schema
   
  



### <span id="post-agent-create"></span> Create a new agent (*PostAgentCreate*)

```
POST /api/v1/agent/create
```

Create a new agent and return the docker compose file, encrypted CA and client PEMs
The returned PEMs are encrypted with a random key and will be used for verification when adding a new agent

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| request | `body` | [NewAgentRequest](#new-agent-request) | `models.NewAgentRequest` | | ✓ | | Request |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-agent-create-200) | OK | OK |  | [schema](#post-agent-create-200-schema) |
| [400](#post-agent-create-400) | Bad Request | Bad Request |  | [schema](#post-agent-create-400-schema) |
| [403](#post-agent-create-403) | Forbidden | Forbidden |  | [schema](#post-agent-create-403-schema) |
| [409](#post-agent-create-409) | Conflict | Conflict |  | [schema](#post-agent-create-409-schema) |
| [500](#post-agent-create-500) | Internal Server Error | Internal Server Error |  | [schema](#post-agent-create-500-schema) |

#### Responses


##### <span id="post-agent-create-200"></span> 200 - OK
Status: OK

###### <span id="post-agent-create-200-schema"></span> Schema
   
  

[NewAgentResponse](#new-agent-response)

##### <span id="post-agent-create-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="post-agent-create-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-agent-create-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="post-agent-create-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-agent-create-409"></span> 409 - Conflict
Status: Conflict

###### <span id="post-agent-create-409-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-agent-create-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="post-agent-create-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="post-agent-verify"></span> Verify a new agent (*PostAgentVerify*)

```
POST /api/v1/agent/verify
```

Verify a new agent and return the number of routes added

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| request | `body` | [VerifyNewAgentRequest](#verify-new-agent-request) | `models.VerifyNewAgentRequest` | | ✓ | | Request |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-agent-verify-200) | OK | OK |  | [schema](#post-agent-verify-200-schema) |
| [400](#post-agent-verify-400) | Bad Request | Bad Request |  | [schema](#post-agent-verify-400-schema) |
| [403](#post-agent-verify-403) | Forbidden | Forbidden |  | [schema](#post-agent-verify-403-schema) |
| [500](#post-agent-verify-500) | Internal Server Error | Internal Server Error |  | [schema](#post-agent-verify-500-schema) |

#### Responses


##### <span id="post-agent-verify-200"></span> 200 - OK
Status: OK

###### <span id="post-agent-verify-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="post-agent-verify-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="post-agent-verify-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-agent-verify-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="post-agent-verify-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-agent-verify-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="post-agent-verify-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="post-auth-callback"></span> Post Auth Callback (*PostAuthCallback*)

```
POST /api/v1/auth/callback
```

Handles the callback from the provider after successful authentication

#### Produces
  * text/plain

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| body | `body` | [AuthUserPassAuthCallbackRequest](#auth-user-pass-auth-callback-request) | `models.AuthUserPassAuthCallbackRequest` | | ✓ | | Userpass only |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-auth-callback-200) | OK | Userpass: OK |  | [schema](#post-auth-callback-200-schema) |
| [302](#post-auth-callback-302) | Found | OIDC: Redirects to home page |  | [schema](#post-auth-callback-302-schema) |
| [400](#post-auth-callback-400) | Bad Request | Userpass: invalid request / credentials |  | [schema](#post-auth-callback-400-schema) |
| [500](#post-auth-callback-500) | Internal Server Error | Internal server error |  | [schema](#post-auth-callback-500-schema) |

#### Responses


##### <span id="post-auth-callback-200"></span> 200 - Userpass: OK
Status: OK

###### <span id="post-auth-callback-200-schema"></span> Schema
   
  



##### <span id="post-auth-callback-302"></span> 302 - OIDC: Redirects to home page
Status: Found

###### <span id="post-auth-callback-302-schema"></span> Schema
   
  



##### <span id="post-auth-callback-400"></span> 400 - Userpass: invalid request / credentials
Status: Bad Request

###### <span id="post-auth-callback-400-schema"></span> Schema
   
  



##### <span id="post-auth-callback-500"></span> 500 - Internal server error
Status: Internal Server Error

###### <span id="post-auth-callback-500-schema"></span> Schema
   
  



### <span id="post-auth-login"></span> Login (*PostAuthLogin*)

```
POST /api/v1/auth/login
```

Initiates the login process by redirecting the user to the provider's login page

#### Produces
  * text/plain

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [302](#post-auth-login-302) | Found | Redirects to login page or IdP |  | [schema](#post-auth-login-302-schema) |
| [403](#post-auth-login-403) | Forbidden | Forbidden(webui): follow X-Redirect-To header |  | [schema](#post-auth-login-403-schema) |
| [429](#post-auth-login-429) | Too Many Requests | Too Many Requests |  | [schema](#post-auth-login-429-schema) |

#### Responses


##### <span id="post-auth-login-302"></span> 302 - Redirects to login page or IdP
Status: Found

###### <span id="post-auth-login-302-schema"></span> Schema
   
  



##### <span id="post-auth-login-403"></span> 403 - Forbidden(webui): follow X-Redirect-To header
Status: Forbidden

###### <span id="post-auth-login-403-schema"></span> Schema
   
  



##### <span id="post-auth-login-429"></span> 429 - Too Many Requests
Status: Too Many Requests

###### <span id="post-auth-login-429-schema"></span> Schema
   
  



### <span id="post-auth-logout"></span> Logout (*PostAuthLogout*)

```
POST /api/v1/auth/logout
```

Logs out the user by invalidating the token

#### Produces
  * text/plain

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [302](#post-auth-logout-302) | Found | Redirects to home page |  | [schema](#post-auth-logout-302-schema) |

#### Responses


##### <span id="post-auth-logout-302"></span> 302 - Redirects to home page
Status: Found

###### <span id="post-auth-logout-302-schema"></span> Schema
   
  



### <span id="post-file-validate"></span> Validate file (*PostFileValidate*)

```
POST /api/v1/file/validate
```

Validate file

#### Consumes
  * text/plain

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| type | `query` | string | `string` |  | ✓ |  | Type |
| file | `body` | string | `string` | | ✓ | | File content |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-file-validate-200) | OK | File validated |  | [schema](#post-file-validate-200-schema) |
| [400](#post-file-validate-400) | Bad Request | Bad request |  | [schema](#post-file-validate-400-schema) |
| [403](#post-file-validate-403) | Forbidden | Forbidden |  | [schema](#post-file-validate-403-schema) |
| [417](#post-file-validate-417) | Expectation Failed | Validation failed |  | [schema](#post-file-validate-417-schema) |
| [500](#post-file-validate-500) | Internal Server Error | Internal server error |  | [schema](#post-file-validate-500-schema) |

#### Responses


##### <span id="post-file-validate-200"></span> 200 - File validated
Status: OK

###### <span id="post-file-validate-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="post-file-validate-400"></span> 400 - Bad request
Status: Bad Request

###### <span id="post-file-validate-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-file-validate-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="post-file-validate-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-file-validate-417"></span> 417 - Validation failed
Status: Expectation Failed

###### <span id="post-file-validate-417-schema"></span> Schema
   
  

any

##### <span id="post-file-validate-500"></span> 500 - Internal server error
Status: Internal Server Error

###### <span id="post-file-validate-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="post-homepage-set-category-order"></span> Set homepage category order (*PostHomepageSetCategoryOrder*)

```
POST /api/v1/homepage/set/category_order
```

Set homepage category order.

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| request | `body` | [HomepageOverrideCategoryOrderParams](#homepage-override-category-order-params) | `models.HomepageOverrideCategoryOrderParams` | | ✓ | | Override category order |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-homepage-set-category-order-200) | OK | OK |  | [schema](#post-homepage-set-category-order-200-schema) |
| [400](#post-homepage-set-category-order-400) | Bad Request | Bad Request |  | [schema](#post-homepage-set-category-order-400-schema) |
| [500](#post-homepage-set-category-order-500) | Internal Server Error | Internal Server Error |  | [schema](#post-homepage-set-category-order-500-schema) |

#### Responses


##### <span id="post-homepage-set-category-order-200"></span> 200 - OK
Status: OK

###### <span id="post-homepage-set-category-order-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="post-homepage-set-category-order-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="post-homepage-set-category-order-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-homepage-set-category-order-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="post-homepage-set-category-order-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="post-homepage-set-item"></span> Override single homepage item (*PostHomepageSetItem*)

```
POST /api/v1/homepage/set/item
```

Override single homepage item.

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| request | `body` | [HomepageOverrideItemParams](#homepage-override-item-params) | `models.HomepageOverrideItemParams` | | ✓ | | Override single item |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-homepage-set-item-200) | OK | OK |  | [schema](#post-homepage-set-item-200-schema) |
| [400](#post-homepage-set-item-400) | Bad Request | Bad Request |  | [schema](#post-homepage-set-item-400-schema) |
| [500](#post-homepage-set-item-500) | Internal Server Error | Internal Server Error |  | [schema](#post-homepage-set-item-500-schema) |

#### Responses


##### <span id="post-homepage-set-item-200"></span> 200 - OK
Status: OK

###### <span id="post-homepage-set-item-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="post-homepage-set-item-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="post-homepage-set-item-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-homepage-set-item-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="post-homepage-set-item-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="post-homepage-set-item-visible"></span> Set homepage item visibility (*PostHomepageSetItemVisible*)

```
POST /api/v1/homepage/set/item_visible
```

POST list of item ids and visibility value.

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| request | `body` | [HomepageOverrideItemVisibleParams](#homepage-override-item-visible-params) | `models.HomepageOverrideItemVisibleParams` | | ✓ | | Set item visibility |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-homepage-set-item-visible-200) | OK | OK |  | [schema](#post-homepage-set-item-visible-200-schema) |
| [400](#post-homepage-set-item-visible-400) | Bad Request | Bad Request |  | [schema](#post-homepage-set-item-visible-400-schema) |
| [500](#post-homepage-set-item-visible-500) | Internal Server Error | Internal Server Error |  | [schema](#post-homepage-set-item-visible-500-schema) |

#### Responses


##### <span id="post-homepage-set-item-visible-200"></span> 200 - OK
Status: OK

###### <span id="post-homepage-set-item-visible-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="post-homepage-set-item-visible-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="post-homepage-set-item-visible-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-homepage-set-item-visible-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="post-homepage-set-item-visible-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="post-homepage-set-items-batch"></span> Override multiple homepage items (*PostHomepageSetItemsBatch*)

```
POST /api/v1/homepage/set/items_batch
```

Override multiple homepage items.

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| request | `body` | [HomepageOverrideItemsBatchParams](#homepage-override-items-batch-params) | `models.HomepageOverrideItemsBatchParams` | | ✓ | | Override multiple items |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-homepage-set-items-batch-200) | OK | OK |  | [schema](#post-homepage-set-items-batch-200-schema) |
| [400](#post-homepage-set-items-batch-400) | Bad Request | Bad Request |  | [schema](#post-homepage-set-items-batch-400-schema) |
| [500](#post-homepage-set-items-batch-500) | Internal Server Error | Internal Server Error |  | [schema](#post-homepage-set-items-batch-500-schema) |

#### Responses


##### <span id="post-homepage-set-items-batch-200"></span> 200 - OK
Status: OK

###### <span id="post-homepage-set-items-batch-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="post-homepage-set-items-batch-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="post-homepage-set-items-batch-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-homepage-set-items-batch-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="post-homepage-set-items-batch-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="post-reload"></span> Reload config (*PostReload*)

```
POST /api/v1/reload
```

Reload config

#### Consumes
  * application/json

#### Produces
  * application/json

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-reload-200) | OK | OK |  | [schema](#post-reload-200-schema) |
| [403](#post-reload-403) | Forbidden | Forbidden |  | [schema](#post-reload-403-schema) |
| [500](#post-reload-500) | Internal Server Error | Internal Server Error |  | [schema](#post-reload-500-schema) |

#### Responses


##### <span id="post-reload-200"></span> 200 - OK
Status: OK

###### <span id="post-reload-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="post-reload-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="post-reload-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-reload-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="post-reload-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="put-file-content"></span> Set file content (*PutFileContent*)

```
PUT /api/v1/file/content
```

Set file content

#### Consumes
  * text/plain

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| filename | `query` | string | `string` |  | ✓ |  | Filename |
| type | `query` | string | `string` |  | ✓ |  | Type |
| file | `body` | string | `string` | | ✓ | | File |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#put-file-content-200) | OK | OK |  | [schema](#put-file-content-200-schema) |
| [400](#put-file-content-400) | Bad Request | Bad Request |  | [schema](#put-file-content-400-schema) |
| [403](#put-file-content-403) | Forbidden | Forbidden |  | [schema](#put-file-content-403-schema) |
| [500](#put-file-content-500) | Internal Server Error | Internal Server Error |  | [schema](#put-file-content-500-schema) |

#### Responses


##### <span id="put-file-content-200"></span> 200 - OK
Status: OK

###### <span id="put-file-content-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="put-file-content-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="put-file-content-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="put-file-content-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="put-file-content-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="put-file-content-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="put-file-content-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

## Models

### <span id="agent"></span> Agent


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| addr | string| `string` |  | |  |  |
| name | string| `string` |  | |  |  |
| version | string| `string` |  | |  |  |



### <span id="c-id-r"></span> CIDR


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| ip | []int32 (formatted integer)| `[]int32` |  | | network number |  |
| mask | []int32 (formatted integer)| `[]int32` |  | | network mask |  |



### <span id="cert-info"></span> CertInfo


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| dns_names | []string| `[]string` |  | |  |  |
| email_addresses | []string| `[]string` |  | |  |  |
| issuer | string| `string` |  | |  |  |
| not_after | integer| `int64` |  | |  |  |
| not_before | integer| `int64` |  | |  |  |
| subject | string| `string` |  | |  |  |



### <span id="container"></span> Container


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| agent | [Agent](#agent)| `Agent` |  | |  |  |
| aliases | []string| `[]string` |  | |  |  |
| container_id | string| `string` |  | |  |  |
| container_name | string| `string` |  | |  |  |
| docker_host | string| `string` |  | |  |  |
| errors | string| `string` |  | |  |  |
| idlewatcher_config | [IdlewatcherConfig](#idlewatcher-config)| `IdlewatcherConfig` |  | |  |  |
| image | [ContainerImage](#container-image)| `ContainerImage` |  | |  |  |
| is_excluded | boolean| `bool` |  | |  |  |
| is_explicit | boolean| `bool` |  | |  |  |
| is_host_network_mode | boolean| `bool` |  | |  |  |
| labels | map of string| `map[string]string` |  | | for displaying in UI |  |
| mounts | map of string| `map[string]string` |  | | source:destination |  |
| network | string| `string` |  | |  |  |
| private_hostname | string| `string` |  | |  |  |
| private_ports | [Container](#container)| `Container` |  | | privatePort:types.Port |  |
| public_hostname | string| `string` |  | |  |  |
| public_ports | [Container](#container)| `Container` |  | | non-zero publicPort:types.Port |  |
| running | boolean| `bool` |  | |  |  |



### <span id="container-image"></span> ContainerImage


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| author | string| `string` |  | |  |  |
| name | string| `string` |  | |  |  |
| sha256 | string| `string` |  | |  |  |
| tag | string| `string` |  | |  |  |
| version | string| `string` |  | |  |  |



### <span id="container-response"></span> ContainerResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| id | string| `string` |  | |  |  |
| image | string| `string` |  | |  |  |
| name | string| `string` |  | |  |  |
| server | string| `string` |  | |  |  |
| state | [ContainerState](#container-state)| `ContainerState` |  | |  |  |



### <span id="container-state"></span> ContainerState


  

| Name | Type | Go type | Default | Description | Example |
|------|------|---------| ------- |-------------|---------|
| ContainerState | string| string | |  |  |



### <span id="container-stats"></span> ContainerStats


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| paused | integer| `int64` |  | |  |  |
| running | integer| `int64` |  | |  |  |
| stopped | integer| `int64` |  | |  |  |
| total | integer| `int64` |  | |  |  |



### <span id="container-stop-method"></span> ContainerStopMethod


  

| Name | Type | Go type | Default | Description | Example |
|------|------|---------| ------- |-------------|---------|
| ContainerStopMethod | string| string | |  |  |



### <span id="docker-config"></span> DockerConfig


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| container_id | string| `string` | ✓ | |  |  |
| container_name | string| `string` | ✓ | |  |  |
| docker_host | string| `string` | ✓ | |  |  |



### <span id="error-response"></span> ErrorResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| error | string| `string` |  | |  |  |
| message | string| `string` |  | |  |  |



### <span id="file-type"></span> FileType


  

| Name | Type | Go type | Default | Description | Example |
|------|------|---------| ------- |-------------|---------|
| FileType | string| string | |  |  |



### <span id="http-header"></span> HTTPHeader


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| key | string| `string` |  | |  |  |
| value | string| `string` |  | |  |  |



### <span id="health-check-config"></span> HealthCheckConfig


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| disable | boolean| `bool` |  | |  |  |
| interval | integer| `int64` |  | |  |  |
| path | string| `string` |  | |  |  |
| retries | integer| `int64` |  | | <0: immediate, >=0: threshold |  |
| timeout | integer| `int64` |  | |  |  |
| use_get | boolean| `bool` |  | |  |  |



### <span id="health-extra"></span> HealthExtra


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| config | [LoadBalancerConfig](#load-balancer-config)| `LoadBalancerConfig` |  | |  |  |
| pool | map of any | `map[string]interface{}` |  | |  |  |



### <span id="health-json"></span> HealthJSON


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| config | [HealthCheckConfig](#health-check-config)| `HealthCheckConfig` |  | |  |  |
| detail | string| `string` |  | |  |  |
| extra | [HealthJSON](#health-json)| `HealthJSON` |  | |  |  |
| lastSeen | integer| `int64` |  | |  |  |
| lastSeenStr | string| `string` |  | |  |  |
| latency | number| `float64` |  | |  |  |
| latencyStr | string| `string` |  | |  |  |
| name | string| `string` |  | |  |  |
| started | integer| `int64` |  | |  |  |
| startedStr | string| `string` |  | |  |  |
| status | string| `string` |  | |  |  |
| uptime | number| `float64` |  | |  |  |
| uptimeStr | string| `string` |  | |  |  |
| url | string| `string` |  | |  |  |



### <span id="health-map"></span> HealthMap


  

[HealthMap](#health-map)

### <span id="homepage-items"></span> HomepageItems


  

[HomepageItem](#homepage-item)

### <span id="homepage-override-category-order-params"></span> HomepageOverrideCategoryOrderParams


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| value | integer| `int64` |  | |  |  |
| which | string| `string` |  | |  |  |



### <span id="homepage-override-item-params"></span> HomepageOverrideItemParams


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| value | [HomepageItemConfig](#homepage-item-config)| `HomepageItemConfig` |  | |  |  |
| which | string| `string` |  | |  |  |



### <span id="homepage-override-item-visible-params"></span> HomepageOverrideItemVisibleParams


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| value | boolean| `bool` |  | |  |  |
| which | []string| `[]string` |  | |  |  |



### <span id="homepage-override-items-batch-params"></span> HomepageOverrideItemsBatchParams


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| value | map of [HomepageItemConfig](#homepage-item-config)| `map[string]HomepageItemConfig` |  | |  |  |



### <span id="idlewatcher-config"></span> IdlewatcherConfig


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| depends_on | []string| `[]string` |  | |  |  |
| docker | [DockerConfig](#docker-config)| `DockerConfig` |  | |  |  |
| idle_timeout | [IdlewatcherConfig](#idlewatcher-config)| `IdlewatcherConfig` |  | | 0: no idle watcher.</br>Positive: idle watcher with idle timeout.</br>Negative: idle watcher as a dependency.	IdleTimeout time.Duration `json:"idle_timeout" json_ext:"duration"` |  |
| proxmox | [ProxmoxConfig](#proxmox-config)| `ProxmoxConfig` |  | |  |  |
| start_endpoint | string| `string` |  | | Optional path that must be hit to start container |  |
| stop_method | [ContainerStopMethod](#container-stop-method)| `ContainerStopMethod` |  | |  |  |
| stop_signal | string| `string` |  | |  |  |
| stop_timeout | [TimeDuration](#time-duration)| `TimeDuration` |  | |  |  |
| wake_timeout | [TimeDuration](#time-duration)| `TimeDuration` |  | |  |  |



### <span id="list-files-response"></span> ListFilesResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| config | []string| `[]string` |  | |  |  |
| middleware | []string| `[]string` |  | |  |  |
| provider | []string| `[]string` |  | |  |  |



### <span id="load-balancer-config"></span> LoadBalancerConfig


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| link | string| `string` |  | |  |  |
| mode | [LoadBalancerMode](#load-balancer-mode)| `LoadBalancerMode` |  | |  |  |
| options | map of any | `map[string]interface{}` |  | |  |  |
| weight | integer| `int64` |  | |  |  |



### <span id="load-balancer-mode"></span> LoadBalancerMode


  

| Name | Type | Go type | Default | Description | Example |
|------|------|---------| ------- |-------------|---------|
| LoadBalancerMode | string| string | |  |  |



### <span id="log-filter-c-id-r"></span> LogFilter-CIDR


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| negative | boolean| `bool` |  | |  |  |
| values | [][CIDR](#c-id-r)| `[]*CIDR` |  | |  |  |



### <span id="log-filter-http-header"></span> LogFilter-HTTPHeader


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| negative | boolean| `bool` |  | |  |  |
| values | [][HTTPHeader](#http-header)| `[]*HTTPHeader` |  | |  |  |



### <span id="log-filter-http-method"></span> LogFilter-HTTPMethod


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| negative | boolean| `bool` |  | |  |  |
| values | []string| `[]string` |  | |  |  |



### <span id="log-filter-host"></span> LogFilter-Host


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| negative | boolean| `bool` |  | |  |  |
| values | []string| `[]string` |  | |  |  |



### <span id="log-filter-status-code-range"></span> LogFilter-StatusCodeRange


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| negative | boolean| `bool` |  | |  |  |
| values | [][StatusCodeRange](#status-code-range)| `[]*StatusCodeRange` |  | |  |  |



### <span id="log-retention"></span> LogRetention


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| days | integer| `int64` |  | |  |  |
| keep_size | integer| `int64` |  | |  |  |
| last | integer| `int64` |  | |  |  |



### <span id="metrics-period"></span> MetricsPeriod


  

| Name | Type | Go type | Default | Description | Example |
|------|------|---------| ------- |-------------|---------|
| MetricsPeriod | string| string | |  |  |



### <span id="new-agent-request"></span> NewAgentRequest


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| host | string| `string` | ✓ | |  |  |
| name | string| `string` | ✓ | |  |  |
| nightly | boolean| `bool` |  | |  |  |
| port | integer| `int64` | ✓ | |  |  |
| type | string| `string` | ✓ | |  |  |



### <span id="new-agent-response"></span> NewAgentResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| ca | [PEMPairResponse](#p-e-m-pair-response)| `PEMPairResponse` |  | |  |  |
| client | [PEMPairResponse](#p-e-m-pair-response)| `PEMPairResponse` |  | |  |  |
| compose | string| `string` |  | |  |  |



### <span id="p-e-m-pair-response"></span> PEMPairResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| cert | base64 (formatted string)| `string` |  | |  |  |
| key | base64 (formatted string)| `string` |  | |  |  |



### <span id="provider-stats"></span> ProviderStats


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| reverse_proxies | [RouteStats](#route-stats)| `RouteStats` |  | |  |  |
| streams | [RouteStats](#route-stats)| `RouteStats` |  | |  |  |
| total | integer| `int64` |  | |  |  |
| type | [ProviderType](#provider-type)| `ProviderType` |  | |  |  |



### <span id="provider-type"></span> ProviderType


  

| Name | Type | Go type | Default | Description | Example |
|------|------|---------| ------- |-------------|---------|
| ProviderType | string| string | |  |  |



### <span id="proxmox-config"></span> ProxmoxConfig


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| node | string| `string` | ✓ | |  |  |
| vmid | integer| `int64` | ✓ | |  |  |



### <span id="proxy-stats"></span> ProxyStats


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| providers | map of [ProviderStats](#provider-stats)| `map[string]ProviderStats` |  | |  |  |
| reverse_proxies | [RouteStats](#route-stats)| `RouteStats` |  | |  |  |
| streams | [RouteStats](#route-stats)| `RouteStats` |  | |  |  |
| total | integer| `int64` |  | |  |  |



### <span id="request-logger-config"></span> RequestLoggerConfig


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| buffer_size | integer| `int64` |  | | Deprecated: buffer size is adjusted dynamically |  |
| fields | [AccesslogFields](#accesslog-fields)| `AccesslogFields` |  | |  |  |
| filters | [AccesslogFilters](#accesslog-filters)| `AccesslogFilters` |  | |  |  |
| format | string| `string` |  | |  |  |
| path | string| `string` |  | |  |  |
| retention | [LogRetention](#log-retention)| `LogRetention` |  | |  |  |
| rotate_interval | integer| `int64` |  | |  |  |
| stdout | boolean| `bool` |  | |  |  |



### <span id="route"></span> Route


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| access_log | [Route](#route)| `Route` |  | |  |  |
| agent | string| `string` |  | |  |  |
| alias | string| `string` |  | |  |  |
| container | [Route](#route)| `Route` |  | | Docker only |  |
| disable_compression | boolean| `bool` |  | |  |  |
| excluded | boolean| `bool` |  | |  |  |
| health | [Route](#route)| `Route` |  | | for swagger |  |
| healthcheck | [HealthCheckConfig](#health-check-config)| `HealthCheckConfig` |  | |  |  |
| homepage | [HomepageItemConfig](#homepage-item-config)| `HomepageItemConfig` |  | |  |  |
| host | string| `string` |  | |  |  |
| idlewatcher | [Route](#route)| `Route` |  | |  |  |
| load_balance | [Route](#route)| `Route` |  | |  |  |
| lurl | string| `string` |  | | private fields |  |
| middlewares | map of [TypesLabelMap](#types-label-map)| `map[string]TypesLabelMap` |  | |  |  |
| no_tls_verify | boolean| `bool` |  | |  |  |
| path_patterns | []string| `[]string` |  | |  |  |
| port | [RoutePort](#route-port)| `RoutePort` |  | |  |  |
| provider | string| `string` |  | | for backward compatibility |  |
| purl | string| `string` |  | |  |  |
| response_header_timeout | integer| `int64` |  | |  |  |
| root | string| `string` |  | |  |  |
| rules | [][RulesRule](#rules-rule)| `[]*RulesRule` |  | |  |  |
| scheme | [RouteScheme](#route-scheme)| `RouteScheme` |  | |  |  |



### <span id="route-provider"></span> RouteProvider


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| full_name | string| `string` |  | |  |  |
| short_name | string| `string` |  | |  |  |



### <span id="route-stats"></span> RouteStats


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| error | integer| `int64` |  | |  |  |
| healthy | integer| `int64` |  | |  |  |
| napping | integer| `int64` |  | |  |  |
| total | integer| `int64` |  | |  |  |
| unhealthy | integer| `int64` |  | |  |  |
| unknown | integer| `int64` |  | |  |  |



### <span id="route-status"></span> RouteStatus


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| latency | integer| `int64` |  | |  |  |
| status | string| `string` |  | |  |  |
| timestamp | integer| `int64` |  | |  |  |



### <span id="route-statuses-by-alias"></span> RouteStatusesByAlias


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| statuses | map of [RoutesHealthInfo](#routes-health-info)| `map[string]RoutesHealthInfo` |  | |  |  |
| timestamp | integer| `int64` |  | |  |  |



### <span id="route-uptime-aggregate"></span> RouteUptimeAggregate


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| alias | string| `string` |  | |  |  |
| avg_latency | number| `float64` |  | |  |  |
| display_name | string| `string` |  | |  |  |
| downtime | number| `float64` |  | |  |  |
| idle | number| `float64` |  | |  |  |
| statuses | [][RouteStatus](#route-status)| `[]*RouteStatus` |  | |  |  |
| uptime | number| `float64` |  | |  |  |



### <span id="server-info"></span> ServerInfo


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| containers | [ContainerStats](#container-stats)| `ContainerStats` |  | |  |  |
| images | integer| `int64` |  | |  |  |
| memory | string| `string` |  | |  |  |
| n_cpu | integer| `int64` |  | |  |  |
| name | string| `string` |  | |  |  |
| version | string| `string` |  | |  |  |



### <span id="stats-response"></span> StatsResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| proxies | [ProxyStats](#proxy-stats)| `ProxyStats` |  | |  |  |
| uptime | string| `string` |  | |  |  |



### <span id="status-code-range"></span> StatusCodeRange


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| end | integer| `int64` |  | |  |  |
| start | integer| `int64` |  | |  |  |



### <span id="success-response"></span> SuccessResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| details | map of any | `map[string]interface{}` |  | |  |  |
| message | string| `string` |  | |  |  |



### <span id="system-info"></span> SystemInfo


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| cpu_average | number| `float64` |  | |  |  |
| disks | map of [DiskUsageStat](#disk-usage-stat)| `map[string]DiskUsageStat` |  | | disk usage by partition |  |
| disks_io | map of [DiskIOCountersStat](#disk-i-o-counters-stat)| `map[string]DiskIOCountersStat` |  | | disk IO by device |  |
| memory | [MemVirtualMemoryStat](#mem-virtual-memory-stat)| `MemVirtualMemoryStat` |  | |  |  |
| network | [NetIOCountersStat](#net-i-o-counters-stat)| `NetIOCountersStat` |  | |  |  |
| sensors | [][SensorsTemperatureStat](#sensors-temperature-stat)| `[]*SensorsTemperatureStat` |  | | sensor temperature by key |  |
| timestamp | integer| `int64` |  | |  |  |



### <span id="system-info-aggregate"></span> SystemInfoAggregate


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| data | [][map[string]interface{}](#map-string-interface)| `[]map[string]interface{}` |  | |  |  |
| total | integer| `int64` |  | |  |  |



### <span id="system-info-aggregate-mode"></span> SystemInfoAggregateMode


  

| Name | Type | Go type | Default | Description | Example |
|------|------|---------| ------- |-------------|---------|
| SystemInfoAggregateMode | string| string | |  |  |



### <span id="uptime-aggregate"></span> UptimeAggregate


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| data | [][RouteUptimeAggregate](#route-uptime-aggregate)| `[]*RouteUptimeAggregate` |  | |  |  |
| total | integer| `int64` |  | |  |  |



### <span id="verify-new-agent-request"></span> VerifyNewAgentRequest


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| ca | [PEMPairResponse](#p-e-m-pair-response)| `PEMPairResponse` |  | |  |  |
| client | [PEMPairResponse](#p-e-m-pair-response)| `PEMPairResponse` |  | |  |  |
| host | string| `string` |  | |  |  |



### <span id="accesslog-field-config"></span> accesslog.FieldConfig


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| config | map of [AccesslogFieldMode](#accesslog-field-mode)| `map[string]AccesslogFieldMode` |  | |  |  |
| default | [AccesslogFieldConfig](#accesslog-field-config)| `AccesslogFieldConfig` |  | |  |  |



### <span id="accesslog-field-mode"></span> accesslog.FieldMode


  

| Name | Type | Go type | Default | Description | Example |
|------|------|---------| ------- |-------------|---------|
| accesslog.FieldMode | string| string | |  |  |



### <span id="accesslog-fields"></span> accesslog.Fields


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| cookies | [AccesslogFieldConfig](#accesslog-field-config)| `AccesslogFieldConfig` |  | |  |  |
| headers | [AccesslogFieldConfig](#accesslog-field-config)| `AccesslogFieldConfig` |  | |  |  |
| query | [AccesslogFieldConfig](#accesslog-field-config)| `AccesslogFieldConfig` |  | |  |  |



### <span id="accesslog-filters"></span> accesslog.Filters


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| cidr | [LogFilterCIDR](#log-filter-c-id-r)| `LogFilterCIDR` |  | |  |  |
| headers | [AccesslogFilters](#accesslog-filters)| `AccesslogFilters` |  | | header exists or header == value |  |
| host | [LogFilterHost](#log-filter-host)| `LogFilterHost` |  | |  |  |
| method | [LogFilterHTTPMethod](#log-filter-http-method)| `LogFilterHTTPMethod` |  | |  |  |
| status_codes | [LogFilterStatusCodeRange](#log-filter-status-code-range)| `LogFilterStatusCodeRange` |  | |  |  |



### <span id="auth-user-pass-auth-callback-request"></span> auth.UserPassAuthCallbackRequest


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| password | string| `string` |  | |  |  |
| username | string| `string` |  | |  |  |



### <span id="container-port"></span> container.Port


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| IP | string| `string` |  | | Host IP address that the container's port is mapped to |  |
| PrivatePort | integer| `int64` |  | | Port on the container</br>Required: true |  |
| PublicPort | integer| `int64` |  | | Port exposed on the host |  |
| Type | string| `string` |  | | type</br>Required: true |  |



### <span id="disk-i-o-counters-stat"></span> disk.IOCountersStat


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| iops | integer| `int64` |  | | godoxy |  |
| name | string| `string` |  | | ReadCount        uint64 `json:"readCount"`</br>MergedReadCount  uint64 `json:"mergedReadCount"`</br>WriteCount       uint64 `json:"writeCount"`</br>MergedWriteCount uint64 `json:"mergedWriteCount"`</br>ReadBytes        uint64 `json:"readBytes"`</br>WriteBytes       uint64 `json:"writeBytes"`</br>ReadTime         uint64 `json:"readTime"`</br>WriteTime        uint64 `json:"writeTime"`</br>IopsInProgress   uint64 `json:"iopsInProgress"`</br>IoTime           uint64 `json:"ioTime"`</br>WeightedIO       uint64 `json:"weightedIO"` |  |
| read_bytes | integer| `int64` |  | | SerialNumber     string `json:"serialNumber"`</br>Label            string `json:"label"` |  |
| read_count | integer| `int64` |  | |  |  |
| read_speed | number| `float64` |  | | godoxy |  |
| write_bytes | integer| `int64` |  | |  |  |
| write_count | integer| `int64` |  | |  |  |
| write_speed | number| `float64` |  | | godoxy |  |



### <span id="disk-usage-stat"></span> disk.UsageStat


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| free | integer| `int64` |  | |  |  |
| fstype | string| `string` |  | |  |  |
| path | string| `string` |  | |  |  |
| total | integer| `int64` |  | |  |  |
| used | integer| `int64` |  | |  |  |
| used_percent | number| `float64` |  | |  |  |



### <span id="homepage-fetch-result"></span> homepage.FetchResult


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| errMsg | string| `string` |  | |  |  |
| icon | []int32 (formatted integer)| `[]int32` |  | |  |  |
| statusCode | integer| `int64` |  | |  |  |



### <span id="homepage-icon-meta-search"></span> homepage.IconMetaSearch


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| Dark | boolean| `bool` |  | |  |  |
| Light | boolean| `bool` |  | |  |  |
| PNG | boolean| `bool` |  | |  |  |
| Ref | string| `string` |  | |  |  |
| SVG | boolean| `bool` |  | |  |  |
| Source | [HomepageIconSource](#homepage-icon-source)| `HomepageIconSource` |  | |  |  |
| WebP | boolean| `bool` |  | |  |  |



### <span id="homepage-icon-source"></span> homepage.IconSource


  

| Name | Type | Go type | Default | Description | Example |
|------|------|---------| ------- |-------------|---------|
| homepage.IconSource | string| string | |  |  |



### <span id="homepage-item"></span> homepage.Item


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| alias | string| `string` |  | |  |  |
| category | string| `string` |  | |  |  |
| description | string| `string` |  | |  |  |
| icon | string| `string` |  | |  |  |
| name | string| `string` |  | | display name |  |
| origin_url | string| `string` |  | |  |  |
| provider | string| `string` |  | |  |  |
| show | boolean| `bool` |  | |  |  |
| sort_order | integer| `int64` |  | |  |  |
| url | string| `string` |  | |  |  |
| widget_config | [HomepageItem](#homepage-item)| `HomepageItem` |  | |  |  |



### <span id="homepage-item-config"></span> homepage.ItemConfig


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| category | string| `string` |  | |  |  |
| description | string| `string` |  | |  |  |
| icon | string| `string` |  | |  |  |
| name | string| `string` |  | | display name |  |
| show | boolean| `bool` |  | |  |  |
| sort_order | integer| `int64` |  | |  |  |
| url | string| `string` |  | |  |  |



### <span id="mem-virtual-memory-stat"></span> mem.VirtualMemoryStat


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| available | integer| `int64` |  | | RAM available for programs to allocate</br></br>This value is computed from the kernel specific values. |  |
| free | integer| `int64` |  | | This is the kernel's notion of free memory; RAM chips whose bits nobody</br>cares about the value of right now. For a human consumable number,</br>Available is what you really want. |  |
| total | integer| `int64` |  | | Total amount of RAM on this system |  |
| used | integer| `int64` |  | | RAM used by programs</br></br>This value is computed from the kernel specific values. |  |
| used_percent | number| `float64` |  | | Percentage of RAM used by programs</br></br>This value is computed from the kernel specific values. |  |



### <span id="net-i-o-counters-stat"></span> net.IOCountersStat


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| bytes_recv | integer| `int64` |  | | number of bytes received |  |
| bytes_sent | integer| `int64` |  | | Name      string `json:"name"`       // interface name |  |
| download_speed | number| `float64` |  | | godoxy |  |
| upload_speed | number| `float64` |  | | godoxy |  |



### <span id="route-port"></span> route.Port


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| listening | integer| `int64` |  | |  |  |
| proxy | integer| `int64` |  | |  |  |



### <span id="route-route"></span> route.Route


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| access_log | [RouteRoute](#route-route)| `RouteRoute` |  | |  |  |
| agent | string| `string` |  | |  |  |
| alias | string| `string` |  | |  |  |
| container | [RouteRoute](#route-route)| `RouteRoute` |  | | Docker only |  |
| disable_compression | boolean| `bool` |  | |  |  |
| excluded | boolean| `bool` |  | |  |  |
| health | [RouteRoute](#route-route)| `RouteRoute` |  | | for swagger |  |
| healthcheck | [HealthCheckConfig](#health-check-config)| `HealthCheckConfig` |  | |  |  |
| homepage | [HomepageItemConfig](#homepage-item-config)| `HomepageItemConfig` |  | |  |  |
| host | string| `string` |  | |  |  |
| idlewatcher | [RouteRoute](#route-route)| `RouteRoute` |  | |  |  |
| load_balance | [RouteRoute](#route-route)| `RouteRoute` |  | |  |  |
| lurl | string| `string` |  | | private fields |  |
| middlewares | map of [TypesLabelMap](#types-label-map)| `map[string]TypesLabelMap` |  | |  |  |
| no_tls_verify | boolean| `bool` |  | |  |  |
| path_patterns | []string| `[]string` |  | |  |  |
| port | [RoutePort](#route-port)| `RoutePort` |  | |  |  |
| provider | string| `string` |  | | for backward compatibility |  |
| purl | string| `string` |  | |  |  |
| response_header_timeout | integer| `int64` |  | |  |  |
| root | string| `string` |  | |  |  |
| rules | [][RulesRule](#rules-rule)| `[]*RulesRule` |  | |  |  |
| scheme | [RouteScheme](#route-scheme)| `RouteScheme` |  | |  |  |



### <span id="route-scheme"></span> route.Scheme


  

| Name | Type | Go type | Default | Description | Example |
|------|------|---------| ------- |-------------|---------|
| route.Scheme | string| string | |  |  |



### <span id="route-api-routes-by-provider"></span> routeApi.RoutesByProvider


  

[RouteRoute](#route-route)

### <span id="routes-health-info"></span> routes.HealthInfo


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| detail | string| `string` |  | |  |  |
| latency | number| `float64` |  | | latency in microseconds |  |
| status | string| `string` |  | |  |  |
| uptime | number| `float64` |  | | uptime in milliseconds |  |



### <span id="rules-command"></span> rules.Command


  

[interface{}](#interface)

### <span id="rules-rule"></span> rules.Rule


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| do | [RulesCommand](#rules-command)| `RulesCommand` |  | |  |  |
| name | string| `string` |  | |  |  |
| on | [RulesRuleOn](#rules-rule-on)| `RulesRuleOn` |  | |  |  |



### <span id="rules-rule-on"></span> rules.RuleOn


  

[interface{}](#interface)

### <span id="sensors-temperature-stat"></span> sensors.TemperatureStat


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| critical | number| `float64` |  | |  |  |
| high | number| `float64` |  | |  |  |
| name | string| `string` |  | |  |  |
| temperature | number| `float64` |  | |  |  |



### <span id="time-duration"></span> time.Duration


  

| Name | Type | Go type | Default | Description | Example |
|------|------|---------| ------- |-------------|---------|
| time.Duration | int64 (formatted integer)| int64 | |  |  |



### <span id="types-label-map"></span> types.LabelMap


  

[TypesLabelMap](#types-label-map)

### <span id="types-port-mapping"></span> types.PortMapping


  

[TypesPortMapping](#types-port-mapping)

### <span id="widgets-config"></span> widgets.Config


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| config | [interface{}](#interface)| `interface{}` |  | |  |  |
| provider | string| `string` |  | |  |  |


