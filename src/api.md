


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
| GET | /api/v1/auth/logout | [get auth logout](#get-auth-logout) | Logout |
| HEAD | /api/v1/auth/check | [head auth check](#head-auth-check) | Check authentication status |
| POST | /api/v1/auth/callback | [post auth callback](#post-auth-callback) | Auth Callback |
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
| GET | /api/v1/docker/container/{id} | [get docker container ID](#get-docker-container-id) | Get container |
| GET | /api/v1/docker/containers | [get docker containers](#get-docker-containers) | Get containers |
| GET | /api/v1/docker/info | [get docker info](#get-docker-info) | Get docker info |
| GET | /api/v1/docker/logs/{id} | [get docker logs ID](#get-docker-logs-id) | Get docker container logs |
| GET | /api/v1/docker/stats/{id} | [get docker stats ID](#get-docker-stats-id) | Get container stats |
| POST | /api/v1/docker/restart | [post docker restart](#post-docker-restart) | Restart container |
| POST | /api/v1/docker/start | [post docker start](#post-docker-start) | Start container |
| POST | /api/v1/docker/stop | [post docker stop](#post-docker-stop) | Stop container |
  


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
| POST | /api/v1/homepage/item_click | [post homepage item click](#post-homepage-item-click) | Increment item click |
| POST | /api/v1/homepage/set/category_order | [post homepage set category order](#post-homepage-set-category-order) | Set homepage category order |
| POST | /api/v1/homepage/set/item | [post homepage set item](#post-homepage-set-item) | Override single homepage item |
| POST | /api/v1/homepage/set/item_all_sort_order | [post homepage set item all sort order](#post-homepage-set-item-all-sort-order) | Set homepage item all sort order |
| POST | /api/v1/homepage/set/item_fav_sort_order | [post homepage set item fav sort order](#post-homepage-set-item-fav-sort-order) | Set homepage item fav sort order |
| POST | /api/v1/homepage/set/item_favorite | [post homepage set item favorite](#post-homepage-set-item-favorite) | Set homepage item favorite |
| POST | /api/v1/homepage/set/item_sort_order | [post homepage set item sort order](#post-homepage-set-item-sort-order) | Set homepage item sort order |
| POST | /api/v1/homepage/set/item_visible | [post homepage set item visible](#post-homepage-set-item-visible) | Set homepage item visibility |
| POST | /api/v1/homepage/set/items_batch | [post homepage set items batch](#post-homepage-set-items-batch) | Override multiple homepage items |
  


###  metrics

| Method  | URI     | Name   | Summary |
|---------|---------|--------|---------|
| GET | /api/v1/metrics/all_system_info | [get metrics all system info](#get-metrics-all-system-info) | Get system info |
| GET | /api/v1/metrics/system_info | [get metrics system info](#get-metrics-system-info) | Get system info |
| GET | /api/v1/metrics/uptime | [get metrics uptime](#get-metrics-uptime) | Get uptime |
  


###  proxmox

| Method  | URI     | Name   | Summary |
|---------|---------|--------|---------|
| GET | /api/v1/proxmox/journalctl/{node} | [get proxmox journalctl node](#get-proxmox-journalctl-node) | Get journalctl output |
| GET | /api/v1/proxmox/journalctl/{node}/{vmid} | [get proxmox journalctl node vmid](#get-proxmox-journalctl-node-vmid) | Get journalctl output |
| GET | /api/v1/proxmox/journalctl/{node}/{vmid}/{service} | [get proxmox journalctl node vmid service](#get-proxmox-journalctl-node-vmid-service) | Get journalctl output |
| GET | /api/v1/proxmox/stats/{node} | [get proxmox stats node](#get-proxmox-stats-node) | Get proxmox node stats |
| GET | /api/v1/proxmox/stats/{node}/{vmid} | [get proxmox stats node vmid](#get-proxmox-stats-node-vmid) | Get proxmox VM stats |
| POST | /api/v1/proxmox/lxc/:node/:vmid/restart | [post proxmox lxc node vmid restart](#post-proxmox-lxc-node-vmid-restart) | Restart LXC container |
| POST | /api/v1/proxmox/lxc/:node/:vmid/start | [post proxmox lxc node vmid start](#post-proxmox-lxc-node-vmid-start) | Start LXC container |
| POST | /api/v1/proxmox/lxc/:node/:vmid/stop | [post proxmox lxc node vmid stop](#post-proxmox-lxc-node-vmid-stop) | Stop LXC container |
  


###  route

| Method  | URI     | Name   | Summary |
|---------|---------|--------|---------|
| GET | /api/v1/route/by_provider | [get route by provider](#get-route-by-provider) | List routes by provider |
| GET | /api/v1/route/list | [get route list](#get-route-list) | List routes |
| GET | /api/v1/route/providers | [get route providers](#get-route-providers) | List route providers |
| GET | /api/v1/route/{which} | [get route which](#get-route-which) | List route |
| POST | /api/v1/route/playground | [post route playground](#post-route-playground) | Rule Playground |
  


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

#### Responses


##### <span id="get-agent-list-200"></span> 200 - OK
Status: OK

###### <span id="get-agent-list-200-schema"></span> Schema
   
  

[][Agent](#agent)

##### <span id="get-agent-list-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-agent-list-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-auth-logout"></span> Logout (*GetAuthLogout*)

```
GET /api/v1/auth/logout
```

Logs out the user by invalidating the token

#### Produces
  * text/plain

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [302](#get-auth-logout-302) | Found | Redirects to home page |  | [schema](#get-auth-logout-302-schema) |

#### Responses


##### <span id="get-auth-logout-302"></span> 302 - Redirects to home page
Status: Found

###### <span id="get-auth-logout-302-schema"></span> Schema
   
  



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
| [403](#get-cert-info-403) | Forbidden | Unauthorized |  | [schema](#get-cert-info-403-schema) |
| [404](#get-cert-info-404) | Not Found | No certificates found or autocert is not enabled |  | [schema](#get-cert-info-404-schema) |
| [500](#get-cert-info-500) | Internal Server Error | Internal server error |  | [schema](#get-cert-info-500-schema) |

#### Responses


##### <span id="get-cert-info-200"></span> 200 - OK
Status: OK

###### <span id="get-cert-info-200-schema"></span> Schema
   
  

[][CertInfo](#cert-info)

##### <span id="get-cert-info-403"></span> 403 - Unauthorized
Status: Forbidden

###### <span id="get-cert-info-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-cert-info-404"></span> 404 - No certificates found or autocert is not enabled
Status: Not Found

###### <span id="get-cert-info-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-cert-info-500"></span> 500 - Internal server error
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

### <span id="get-docker-container-id"></span> Get container (*GetDockerContainerID*)

```
GET /api/v1/docker/container/{id}
```

Get container by container id

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| id | `path` | string | `string` |  | ✓ |  | Container ID |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-docker-container-id-200) | OK | OK |  | [schema](#get-docker-container-id-200-schema) |
| [400](#get-docker-container-id-400) | Bad Request | ID is required |  | [schema](#get-docker-container-id-400-schema) |
| [403](#get-docker-container-id-403) | Forbidden | Forbidden |  | [schema](#get-docker-container-id-403-schema) |
| [404](#get-docker-container-id-404) | Not Found | Container not found |  | [schema](#get-docker-container-id-404-schema) |
| [500](#get-docker-container-id-500) | Internal Server Error | Internal Server Error |  | [schema](#get-docker-container-id-500-schema) |

#### Responses


##### <span id="get-docker-container-id-200"></span> 200 - OK
Status: OK

###### <span id="get-docker-container-id-200-schema"></span> Schema
   
  

[ContainerResponse](#container-response)

##### <span id="get-docker-container-id-400"></span> 400 - ID is required
Status: Bad Request

###### <span id="get-docker-container-id-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-docker-container-id-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-docker-container-id-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-docker-container-id-404"></span> 404 - Container not found
Status: Not Found

###### <span id="get-docker-container-id-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-docker-container-id-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="get-docker-container-id-500-schema"></span> Schema
   
  

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

### <span id="get-docker-logs-id"></span> Get docker container logs (*GetDockerLogsID*)

```
GET /api/v1/docker/logs/{id}
```

Get docker container logs by container id

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| id | `path` | string | `string` |  | ✓ |  | container id |
| from | `query` | string | `string` |  |  |  | from timestamp |
| levels | `query` | string | `string` |  |  |  | levels |
| limit | `query` | integer | `int64` |  |  |  | limit |
| stderr | `query` | boolean | `bool` |  |  |  | show stderr |
| stdout | `query` | boolean | `bool` |  |  |  | show stdout |
| to | `query` | string | `string` |  |  |  | to timestamp |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-docker-logs-id-200) | OK | OK |  | [schema](#get-docker-logs-id-200-schema) |
| [400](#get-docker-logs-id-400) | Bad Request | Bad Request |  | [schema](#get-docker-logs-id-400-schema) |
| [403](#get-docker-logs-id-403) | Forbidden | Forbidden |  | [schema](#get-docker-logs-id-403-schema) |
| [404](#get-docker-logs-id-404) | Not Found | server not found or container not found |  | [schema](#get-docker-logs-id-404-schema) |
| [500](#get-docker-logs-id-500) | Internal Server Error | Internal Server Error |  | [schema](#get-docker-logs-id-500-schema) |

#### Responses


##### <span id="get-docker-logs-id-200"></span> 200 - OK
Status: OK

###### <span id="get-docker-logs-id-200-schema"></span> Schema

##### <span id="get-docker-logs-id-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="get-docker-logs-id-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-docker-logs-id-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-docker-logs-id-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-docker-logs-id-404"></span> 404 - server not found or container not found
Status: Not Found

###### <span id="get-docker-logs-id-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-docker-logs-id-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="get-docker-logs-id-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-docker-stats-id"></span> Get container stats (*GetDockerStatsID*)

```
GET /api/v1/docker/stats/{id}
```

Get container stats by container id

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| id | `path` | string | `string` |  | ✓ |  | Container ID or route alias |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-docker-stats-id-200) | OK | OK |  | [schema](#get-docker-stats-id-200-schema) |
| [400](#get-docker-stats-id-400) | Bad Request | Invalid request: id is required or route is not a docker container |  | [schema](#get-docker-stats-id-400-schema) |
| [403](#get-docker-stats-id-403) | Forbidden | Forbidden |  | [schema](#get-docker-stats-id-403-schema) |
| [404](#get-docker-stats-id-404) | Not Found | Container not found |  | [schema](#get-docker-stats-id-404-schema) |
| [500](#get-docker-stats-id-500) | Internal Server Error | Internal Server Error |  | [schema](#get-docker-stats-id-500-schema) |

#### Responses


##### <span id="get-docker-stats-id-200"></span> 200 - OK
Status: OK

###### <span id="get-docker-stats-id-200-schema"></span> Schema
   
  

[ContainerStatsResponse](#container-stats-response)

##### <span id="get-docker-stats-id-400"></span> 400 - Invalid request: id is required or route is not a docker container
Status: Bad Request

###### <span id="get-docker-stats-id-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-docker-stats-id-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-docker-stats-id-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-docker-stats-id-404"></span> 404 - Container not found
Status: Not Found

###### <span id="get-docker-stats-id-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-docker-stats-id-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="get-docker-stats-id-500-schema"></span> Schema
   
  

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
   
  

[][IconFetchResult](#icon-fetch-result)

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
| search | `query` | string | `string` |  |  |  | Search query |
| sort_method | `query` | string | `string` |  |  | `"alphabetical"` | Sort method |

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
   
  

[][HomepageCategory](#homepage-category)

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
   
  

[][IconMetaSearch](#icon-meta-search)

##### <span id="get-icons-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="get-icons-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-icons-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-icons-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-metrics-all-system-info"></span> Get system info (*GetMetricsAllSystemInfo*)

```
GET /api/v1/metrics/all_system_info
```

Get system info

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| aggregate | `query` | string | `string` |  |  |  |  |
| interval | `query` | duration (formatted string) | `strfmt.Duration` |  |  |  |  |
| period | `query` | string | `string` |  |  |  |  |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-metrics-all-system-info-200) | OK | period specified, aggregated system info by agent name |  | [schema](#get-metrics-all-system-info-200-schema) |
| [400](#get-metrics-all-system-info-400) | Bad Request | Bad Request |  | [schema](#get-metrics-all-system-info-400-schema) |
| [403](#get-metrics-all-system-info-403) | Forbidden | Forbidden |  | [schema](#get-metrics-all-system-info-403-schema) |
| [500](#get-metrics-all-system-info-500) | Internal Server Error | Internal Server Error |  | [schema](#get-metrics-all-system-info-500-schema) |

#### Responses


##### <span id="get-metrics-all-system-info-200"></span> 200 - period specified, aggregated system info by agent name
Status: OK

###### <span id="get-metrics-all-system-info-200-schema"></span> Schema
   
  

map of [SystemInfoAggregate](#system-info-aggregate)

##### <span id="get-metrics-all-system-info-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="get-metrics-all-system-info-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-metrics-all-system-info-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="get-metrics-all-system-info-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-metrics-all-system-info-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="get-metrics-all-system-info-500-schema"></span> Schema
   
  

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
| agentName | `query` | string | `string` |  |  |  |  |
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

### <span id="get-proxmox-journalctl-node"></span> Get journalctl output (*GetProxmoxJournalctlNode*)

```
GET /api/v1/proxmox/journalctl/{node}
```

Get journalctl output for node or LXC container. If vmid is not provided, streams node journalctl.

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| node | `path` | string | `string` |  | ✓ |  | Node name |
| limit | `query` | integer | `int64` |  |  |  | Limit output lines (1-1000) |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-proxmox-journalctl-node-200) | OK | Journalctl output |  | [schema](#get-proxmox-journalctl-node-200-schema) |
| [400](#get-proxmox-journalctl-node-400) | Bad Request | Invalid request |  | [schema](#get-proxmox-journalctl-node-400-schema) |
| [403](#get-proxmox-journalctl-node-403) | Forbidden | Unauthorized |  | [schema](#get-proxmox-journalctl-node-403-schema) |
| [404](#get-proxmox-journalctl-node-404) | Not Found | Node not found |  | [schema](#get-proxmox-journalctl-node-404-schema) |
| [500](#get-proxmox-journalctl-node-500) | Internal Server Error | Internal server error |  | [schema](#get-proxmox-journalctl-node-500-schema) |

#### Responses


##### <span id="get-proxmox-journalctl-node-200"></span> 200 - Journalctl output
Status: OK

###### <span id="get-proxmox-journalctl-node-200-schema"></span> Schema
   
  



##### <span id="get-proxmox-journalctl-node-400"></span> 400 - Invalid request
Status: Bad Request

###### <span id="get-proxmox-journalctl-node-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-proxmox-journalctl-node-403"></span> 403 - Unauthorized
Status: Forbidden

###### <span id="get-proxmox-journalctl-node-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-proxmox-journalctl-node-404"></span> 404 - Node not found
Status: Not Found

###### <span id="get-proxmox-journalctl-node-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-proxmox-journalctl-node-500"></span> 500 - Internal server error
Status: Internal Server Error

###### <span id="get-proxmox-journalctl-node-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-proxmox-journalctl-node-vmid"></span> Get journalctl output (*GetProxmoxJournalctlNodeVmid*)

```
GET /api/v1/proxmox/journalctl/{node}/{vmid}
```

Get journalctl output for node or LXC container. If vmid is not provided, streams node journalctl.

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| node | `path` | string | `string` |  | ✓ |  | Node name |
| vmid | `path` | integer | `int64` |  |  |  | Container VMID (optional - if not provided, streams node journalctl) |
| limit | `query` | integer | `int64` |  |  |  | Limit output lines (1-1000) |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-proxmox-journalctl-node-vmid-200) | OK | Journalctl output |  | [schema](#get-proxmox-journalctl-node-vmid-200-schema) |
| [400](#get-proxmox-journalctl-node-vmid-400) | Bad Request | Invalid request |  | [schema](#get-proxmox-journalctl-node-vmid-400-schema) |
| [403](#get-proxmox-journalctl-node-vmid-403) | Forbidden | Unauthorized |  | [schema](#get-proxmox-journalctl-node-vmid-403-schema) |
| [404](#get-proxmox-journalctl-node-vmid-404) | Not Found | Node not found |  | [schema](#get-proxmox-journalctl-node-vmid-404-schema) |
| [500](#get-proxmox-journalctl-node-vmid-500) | Internal Server Error | Internal server error |  | [schema](#get-proxmox-journalctl-node-vmid-500-schema) |

#### Responses


##### <span id="get-proxmox-journalctl-node-vmid-200"></span> 200 - Journalctl output
Status: OK

###### <span id="get-proxmox-journalctl-node-vmid-200-schema"></span> Schema
   
  



##### <span id="get-proxmox-journalctl-node-vmid-400"></span> 400 - Invalid request
Status: Bad Request

###### <span id="get-proxmox-journalctl-node-vmid-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-proxmox-journalctl-node-vmid-403"></span> 403 - Unauthorized
Status: Forbidden

###### <span id="get-proxmox-journalctl-node-vmid-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-proxmox-journalctl-node-vmid-404"></span> 404 - Node not found
Status: Not Found

###### <span id="get-proxmox-journalctl-node-vmid-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-proxmox-journalctl-node-vmid-500"></span> 500 - Internal server error
Status: Internal Server Error

###### <span id="get-proxmox-journalctl-node-vmid-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-proxmox-journalctl-node-vmid-service"></span> Get journalctl output (*GetProxmoxJournalctlNodeVmidService*)

```
GET /api/v1/proxmox/journalctl/{node}/{vmid}/{service}
```

Get journalctl output for node or LXC container. If vmid is not provided, streams node journalctl.

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| node | `path` | string | `string` |  | ✓ |  | Node name |
| service | `path` | string | `string` |  |  |  | Service name (e.g., 'pveproxy' for node, 'container@.service' format for LXC) |
| vmid | `path` | integer | `int64` |  |  |  | Container VMID (optional - if not provided, streams node journalctl) |
| limit | `query` | integer | `int64` |  |  |  | Limit output lines (1-1000) |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-proxmox-journalctl-node-vmid-service-200) | OK | Journalctl output |  | [schema](#get-proxmox-journalctl-node-vmid-service-200-schema) |
| [400](#get-proxmox-journalctl-node-vmid-service-400) | Bad Request | Invalid request |  | [schema](#get-proxmox-journalctl-node-vmid-service-400-schema) |
| [403](#get-proxmox-journalctl-node-vmid-service-403) | Forbidden | Unauthorized |  | [schema](#get-proxmox-journalctl-node-vmid-service-403-schema) |
| [404](#get-proxmox-journalctl-node-vmid-service-404) | Not Found | Node not found |  | [schema](#get-proxmox-journalctl-node-vmid-service-404-schema) |
| [500](#get-proxmox-journalctl-node-vmid-service-500) | Internal Server Error | Internal server error |  | [schema](#get-proxmox-journalctl-node-vmid-service-500-schema) |

#### Responses


##### <span id="get-proxmox-journalctl-node-vmid-service-200"></span> 200 - Journalctl output
Status: OK

###### <span id="get-proxmox-journalctl-node-vmid-service-200-schema"></span> Schema
   
  



##### <span id="get-proxmox-journalctl-node-vmid-service-400"></span> 400 - Invalid request
Status: Bad Request

###### <span id="get-proxmox-journalctl-node-vmid-service-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-proxmox-journalctl-node-vmid-service-403"></span> 403 - Unauthorized
Status: Forbidden

###### <span id="get-proxmox-journalctl-node-vmid-service-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-proxmox-journalctl-node-vmid-service-404"></span> 404 - Node not found
Status: Not Found

###### <span id="get-proxmox-journalctl-node-vmid-service-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-proxmox-journalctl-node-vmid-service-500"></span> 500 - Internal server error
Status: Internal Server Error

###### <span id="get-proxmox-journalctl-node-vmid-service-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-proxmox-stats-node"></span> Get proxmox node stats (*GetProxmoxStatsNode*)

```
GET /api/v1/proxmox/stats/{node}
```

Get proxmox node stats in json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| node | `path` | string | `string` |  | ✓ |  | Node name |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-proxmox-stats-node-200) | OK | Stats output |  | [schema](#get-proxmox-stats-node-200-schema) |
| [400](#get-proxmox-stats-node-400) | Bad Request | Invalid request |  | [schema](#get-proxmox-stats-node-400-schema) |
| [403](#get-proxmox-stats-node-403) | Forbidden | Unauthorized |  | [schema](#get-proxmox-stats-node-403-schema) |
| [404](#get-proxmox-stats-node-404) | Not Found | Node not found |  | [schema](#get-proxmox-stats-node-404-schema) |
| [500](#get-proxmox-stats-node-500) | Internal Server Error | Internal server error |  | [schema](#get-proxmox-stats-node-500-schema) |

#### Responses


##### <span id="get-proxmox-stats-node-200"></span> 200 - Stats output
Status: OK

###### <span id="get-proxmox-stats-node-200-schema"></span> Schema
   
  

[ProxmoxNodeStats](#proxmox-node-stats)

##### <span id="get-proxmox-stats-node-400"></span> 400 - Invalid request
Status: Bad Request

###### <span id="get-proxmox-stats-node-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-proxmox-stats-node-403"></span> 403 - Unauthorized
Status: Forbidden

###### <span id="get-proxmox-stats-node-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-proxmox-stats-node-404"></span> 404 - Node not found
Status: Not Found

###### <span id="get-proxmox-stats-node-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-proxmox-stats-node-500"></span> 500 - Internal server error
Status: Internal Server Error

###### <span id="get-proxmox-stats-node-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="get-proxmox-stats-node-vmid"></span> Get proxmox VM stats (*GetProxmoxStatsNodeVmid*)

```
GET /api/v1/proxmox/stats/{node}/{vmid}
```

Get proxmox VM stats in format of "STATUS|CPU%%|MEM USAGE/LIMIT|MEM%%|NET I/O|BLOCK I/O"

#### Produces
  * text/plain

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| node | `path` | string | `string` |  | ✓ |  |  |
| vmid | `path` | integer | `int64` |  | ✓ |  |  |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#get-proxmox-stats-node-vmid-200) | OK | Stats output |  | [schema](#get-proxmox-stats-node-vmid-200-schema) |
| [400](#get-proxmox-stats-node-vmid-400) | Bad Request | Invalid request |  | [schema](#get-proxmox-stats-node-vmid-400-schema) |
| [403](#get-proxmox-stats-node-vmid-403) | Forbidden | Unauthorized |  | [schema](#get-proxmox-stats-node-vmid-403-schema) |
| [404](#get-proxmox-stats-node-vmid-404) | Not Found | Node not found |  | [schema](#get-proxmox-stats-node-vmid-404-schema) |
| [500](#get-proxmox-stats-node-vmid-500) | Internal Server Error | Internal server error |  | [schema](#get-proxmox-stats-node-vmid-500-schema) |

#### Responses


##### <span id="get-proxmox-stats-node-vmid-200"></span> 200 - Stats output
Status: OK

###### <span id="get-proxmox-stats-node-vmid-200-schema"></span> Schema
   
  



##### <span id="get-proxmox-stats-node-vmid-400"></span> 400 - Invalid request
Status: Bad Request

###### <span id="get-proxmox-stats-node-vmid-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-proxmox-stats-node-vmid-403"></span> 403 - Unauthorized
Status: Forbidden

###### <span id="get-proxmox-stats-node-vmid-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-proxmox-stats-node-vmid-404"></span> 404 - Node not found
Status: Not Found

###### <span id="get-proxmox-stats-node-vmid-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="get-proxmox-stats-node-vmid-500"></span> 500 - Internal server error
Status: Internal Server Error

###### <span id="get-proxmox-stats-node-vmid-500-schema"></span> Schema
   
  

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
| [302](#head-auth-check-302) | Found | Redirects to login page or IdP |  | [schema](#head-auth-check-302-schema) |

#### Responses


##### <span id="head-auth-check-200"></span> 200 - OK
Status: OK

###### <span id="head-auth-check-200-schema"></span> Schema
   
  



##### <span id="head-auth-check-302"></span> 302 - Redirects to login page or IdP
Status: Found

###### <span id="head-auth-check-302-schema"></span> Schema
   
  



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

### <span id="post-auth-callback"></span> Auth Callback (*PostAuthCallback*)

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
| [429](#post-auth-login-429) | Too Many Requests | Too Many Requests |  | [schema](#post-auth-login-429-schema) |

#### Responses


##### <span id="post-auth-login-302"></span> 302 - Redirects to login page or IdP
Status: Found

###### <span id="post-auth-login-302-schema"></span> Schema
   
  



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
   
  



### <span id="post-docker-restart"></span> Restart container (*PostDockerRestart*)

```
POST /api/v1/docker/restart
```

Restart container by container id

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| request | `body` | [DockerapiRestartRequest](#dockerapi-restart-request) | `models.DockerapiRestartRequest` | | ✓ | | Request |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-docker-restart-200) | OK | OK |  | [schema](#post-docker-restart-200-schema) |
| [400](#post-docker-restart-400) | Bad Request | Invalid request |  | [schema](#post-docker-restart-400-schema) |
| [403](#post-docker-restart-403) | Forbidden | Forbidden |  | [schema](#post-docker-restart-403-schema) |
| [404](#post-docker-restart-404) | Not Found | Container not found |  | [schema](#post-docker-restart-404-schema) |
| [500](#post-docker-restart-500) | Internal Server Error | Internal Server Error |  | [schema](#post-docker-restart-500-schema) |

#### Responses


##### <span id="post-docker-restart-200"></span> 200 - OK
Status: OK

###### <span id="post-docker-restart-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="post-docker-restart-400"></span> 400 - Invalid request
Status: Bad Request

###### <span id="post-docker-restart-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-docker-restart-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="post-docker-restart-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-docker-restart-404"></span> 404 - Container not found
Status: Not Found

###### <span id="post-docker-restart-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-docker-restart-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="post-docker-restart-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="post-docker-start"></span> Start container (*PostDockerStart*)

```
POST /api/v1/docker/start
```

Start container by container id

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| request | `body` | [DockerapiStartRequest](#dockerapi-start-request) | `models.DockerapiStartRequest` | | ✓ | | Request |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-docker-start-200) | OK | OK |  | [schema](#post-docker-start-200-schema) |
| [400](#post-docker-start-400) | Bad Request | Invalid request |  | [schema](#post-docker-start-400-schema) |
| [403](#post-docker-start-403) | Forbidden | Forbidden |  | [schema](#post-docker-start-403-schema) |
| [404](#post-docker-start-404) | Not Found | Container not found |  | [schema](#post-docker-start-404-schema) |
| [500](#post-docker-start-500) | Internal Server Error | Internal Server Error |  | [schema](#post-docker-start-500-schema) |

#### Responses


##### <span id="post-docker-start-200"></span> 200 - OK
Status: OK

###### <span id="post-docker-start-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="post-docker-start-400"></span> 400 - Invalid request
Status: Bad Request

###### <span id="post-docker-start-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-docker-start-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="post-docker-start-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-docker-start-404"></span> 404 - Container not found
Status: Not Found

###### <span id="post-docker-start-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-docker-start-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="post-docker-start-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="post-docker-stop"></span> Stop container (*PostDockerStop*)

```
POST /api/v1/docker/stop
```

Stop container by container id

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| request | `body` | [DockerapiStopRequest](#dockerapi-stop-request) | `models.DockerapiStopRequest` | | ✓ | | Request |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-docker-stop-200) | OK | OK |  | [schema](#post-docker-stop-200-schema) |
| [400](#post-docker-stop-400) | Bad Request | Invalid request |  | [schema](#post-docker-stop-400-schema) |
| [403](#post-docker-stop-403) | Forbidden | Forbidden |  | [schema](#post-docker-stop-403-schema) |
| [404](#post-docker-stop-404) | Not Found | Container not found |  | [schema](#post-docker-stop-404-schema) |
| [500](#post-docker-stop-500) | Internal Server Error | Internal Server Error |  | [schema](#post-docker-stop-500-schema) |

#### Responses


##### <span id="post-docker-stop-200"></span> 200 - OK
Status: OK

###### <span id="post-docker-stop-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="post-docker-stop-400"></span> 400 - Invalid request
Status: Bad Request

###### <span id="post-docker-stop-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-docker-stop-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="post-docker-stop-403-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-docker-stop-404"></span> 404 - Container not found
Status: Not Found

###### <span id="post-docker-stop-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-docker-stop-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="post-docker-stop-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

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

### <span id="post-homepage-item-click"></span> Increment item click (*PostHomepageItemClick*)

```
POST /api/v1/homepage/item_click
```

Increment item click.

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| which | `query` | string | `string` |  | ✓ |  |  |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-homepage-item-click-200) | OK | OK |  | [schema](#post-homepage-item-click-200-schema) |
| [400](#post-homepage-item-click-400) | Bad Request | Bad Request |  | [schema](#post-homepage-item-click-400-schema) |
| [500](#post-homepage-item-click-500) | Internal Server Error | Internal Server Error |  | [schema](#post-homepage-item-click-500-schema) |

#### Responses


##### <span id="post-homepage-item-click-200"></span> 200 - OK
Status: OK

###### <span id="post-homepage-item-click-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="post-homepage-item-click-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="post-homepage-item-click-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-homepage-item-click-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="post-homepage-item-click-500-schema"></span> Schema
   
  

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

### <span id="post-homepage-set-item-all-sort-order"></span> Set homepage item all sort order (*PostHomepageSetItemAllSortOrder*)

```
POST /api/v1/homepage/set/item_all_sort_order
```

Set homepage item all sort order.

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| request | `body` | [HomepageOverrideItemAllSortOrderParams](#homepage-override-item-all-sort-order-params) | `models.HomepageOverrideItemAllSortOrderParams` | | ✓ | | Set item all sort order |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-homepage-set-item-all-sort-order-200) | OK | OK |  | [schema](#post-homepage-set-item-all-sort-order-200-schema) |
| [400](#post-homepage-set-item-all-sort-order-400) | Bad Request | Bad Request |  | [schema](#post-homepage-set-item-all-sort-order-400-schema) |
| [500](#post-homepage-set-item-all-sort-order-500) | Internal Server Error | Internal Server Error |  | [schema](#post-homepage-set-item-all-sort-order-500-schema) |

#### Responses


##### <span id="post-homepage-set-item-all-sort-order-200"></span> 200 - OK
Status: OK

###### <span id="post-homepage-set-item-all-sort-order-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="post-homepage-set-item-all-sort-order-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="post-homepage-set-item-all-sort-order-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-homepage-set-item-all-sort-order-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="post-homepage-set-item-all-sort-order-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="post-homepage-set-item-fav-sort-order"></span> Set homepage item fav sort order (*PostHomepageSetItemFavSortOrder*)

```
POST /api/v1/homepage/set/item_fav_sort_order
```

Set homepage item fav sort order.

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| request | `body` | [HomepageOverrideItemFavSortOrderParams](#homepage-override-item-fav-sort-order-params) | `models.HomepageOverrideItemFavSortOrderParams` | | ✓ | | Set item fav sort order |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-homepage-set-item-fav-sort-order-200) | OK | OK |  | [schema](#post-homepage-set-item-fav-sort-order-200-schema) |
| [400](#post-homepage-set-item-fav-sort-order-400) | Bad Request | Bad Request |  | [schema](#post-homepage-set-item-fav-sort-order-400-schema) |
| [500](#post-homepage-set-item-fav-sort-order-500) | Internal Server Error | Internal Server Error |  | [schema](#post-homepage-set-item-fav-sort-order-500-schema) |

#### Responses


##### <span id="post-homepage-set-item-fav-sort-order-200"></span> 200 - OK
Status: OK

###### <span id="post-homepage-set-item-fav-sort-order-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="post-homepage-set-item-fav-sort-order-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="post-homepage-set-item-fav-sort-order-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-homepage-set-item-fav-sort-order-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="post-homepage-set-item-fav-sort-order-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="post-homepage-set-item-favorite"></span> Set homepage item favorite (*PostHomepageSetItemFavorite*)

```
POST /api/v1/homepage/set/item_favorite
```

Set homepage item favorite.

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| request | `body` | [HomepageOverrideItemFavoriteParams](#homepage-override-item-favorite-params) | `models.HomepageOverrideItemFavoriteParams` | | ✓ | | Set item favorite |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-homepage-set-item-favorite-200) | OK | OK |  | [schema](#post-homepage-set-item-favorite-200-schema) |
| [400](#post-homepage-set-item-favorite-400) | Bad Request | Bad Request |  | [schema](#post-homepage-set-item-favorite-400-schema) |
| [500](#post-homepage-set-item-favorite-500) | Internal Server Error | Internal Server Error |  | [schema](#post-homepage-set-item-favorite-500-schema) |

#### Responses


##### <span id="post-homepage-set-item-favorite-200"></span> 200 - OK
Status: OK

###### <span id="post-homepage-set-item-favorite-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="post-homepage-set-item-favorite-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="post-homepage-set-item-favorite-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-homepage-set-item-favorite-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="post-homepage-set-item-favorite-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="post-homepage-set-item-sort-order"></span> Set homepage item sort order (*PostHomepageSetItemSortOrder*)

```
POST /api/v1/homepage/set/item_sort_order
```

Set homepage item sort order.

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| request | `body` | [HomepageOverrideItemSortOrderParams](#homepage-override-item-sort-order-params) | `models.HomepageOverrideItemSortOrderParams` | | ✓ | | Set item sort order |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-homepage-set-item-sort-order-200) | OK | OK |  | [schema](#post-homepage-set-item-sort-order-200-schema) |
| [400](#post-homepage-set-item-sort-order-400) | Bad Request | Bad Request |  | [schema](#post-homepage-set-item-sort-order-400-schema) |
| [500](#post-homepage-set-item-sort-order-500) | Internal Server Error | Internal Server Error |  | [schema](#post-homepage-set-item-sort-order-500-schema) |

#### Responses


##### <span id="post-homepage-set-item-sort-order-200"></span> 200 - OK
Status: OK

###### <span id="post-homepage-set-item-sort-order-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="post-homepage-set-item-sort-order-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="post-homepage-set-item-sort-order-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-homepage-set-item-sort-order-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="post-homepage-set-item-sort-order-500-schema"></span> Schema
   
  

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

### <span id="post-proxmox-lxc-node-vmid-restart"></span> Restart LXC container (*PostProxmoxLxcNodeVmidRestart*)

```
POST /api/v1/proxmox/lxc/:node/:vmid/restart
```

Restart LXC container by node and vmid

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| node | `path` | string | `string` |  | ✓ |  |  |
| vmid | `path` | integer | `int64` |  | ✓ |  |  |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-proxmox-lxc-node-vmid-restart-200) | OK | OK |  | [schema](#post-proxmox-lxc-node-vmid-restart-200-schema) |
| [400](#post-proxmox-lxc-node-vmid-restart-400) | Bad Request | Invalid request |  | [schema](#post-proxmox-lxc-node-vmid-restart-400-schema) |
| [404](#post-proxmox-lxc-node-vmid-restart-404) | Not Found | Node not found |  | [schema](#post-proxmox-lxc-node-vmid-restart-404-schema) |
| [500](#post-proxmox-lxc-node-vmid-restart-500) | Internal Server Error | Internal Server Error |  | [schema](#post-proxmox-lxc-node-vmid-restart-500-schema) |

#### Responses


##### <span id="post-proxmox-lxc-node-vmid-restart-200"></span> 200 - OK
Status: OK

###### <span id="post-proxmox-lxc-node-vmid-restart-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="post-proxmox-lxc-node-vmid-restart-400"></span> 400 - Invalid request
Status: Bad Request

###### <span id="post-proxmox-lxc-node-vmid-restart-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-proxmox-lxc-node-vmid-restart-404"></span> 404 - Node not found
Status: Not Found

###### <span id="post-proxmox-lxc-node-vmid-restart-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-proxmox-lxc-node-vmid-restart-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="post-proxmox-lxc-node-vmid-restart-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="post-proxmox-lxc-node-vmid-start"></span> Start LXC container (*PostProxmoxLxcNodeVmidStart*)

```
POST /api/v1/proxmox/lxc/:node/:vmid/start
```

Start LXC container by node and vmid

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| node | `path` | string | `string` |  | ✓ |  |  |
| vmid | `path` | integer | `int64` |  | ✓ |  |  |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-proxmox-lxc-node-vmid-start-200) | OK | OK |  | [schema](#post-proxmox-lxc-node-vmid-start-200-schema) |
| [400](#post-proxmox-lxc-node-vmid-start-400) | Bad Request | Invalid request |  | [schema](#post-proxmox-lxc-node-vmid-start-400-schema) |
| [404](#post-proxmox-lxc-node-vmid-start-404) | Not Found | Node not found |  | [schema](#post-proxmox-lxc-node-vmid-start-404-schema) |
| [500](#post-proxmox-lxc-node-vmid-start-500) | Internal Server Error | Internal Server Error |  | [schema](#post-proxmox-lxc-node-vmid-start-500-schema) |

#### Responses


##### <span id="post-proxmox-lxc-node-vmid-start-200"></span> 200 - OK
Status: OK

###### <span id="post-proxmox-lxc-node-vmid-start-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="post-proxmox-lxc-node-vmid-start-400"></span> 400 - Invalid request
Status: Bad Request

###### <span id="post-proxmox-lxc-node-vmid-start-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-proxmox-lxc-node-vmid-start-404"></span> 404 - Node not found
Status: Not Found

###### <span id="post-proxmox-lxc-node-vmid-start-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-proxmox-lxc-node-vmid-start-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="post-proxmox-lxc-node-vmid-start-500-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

### <span id="post-proxmox-lxc-node-vmid-stop"></span> Stop LXC container (*PostProxmoxLxcNodeVmidStop*)

```
POST /api/v1/proxmox/lxc/:node/:vmid/stop
```

Stop LXC container by node and vmid

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| node | `path` | string | `string` |  | ✓ |  |  |
| vmid | `path` | integer | `int64` |  | ✓ |  |  |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-proxmox-lxc-node-vmid-stop-200) | OK | OK |  | [schema](#post-proxmox-lxc-node-vmid-stop-200-schema) |
| [400](#post-proxmox-lxc-node-vmid-stop-400) | Bad Request | Invalid request |  | [schema](#post-proxmox-lxc-node-vmid-stop-400-schema) |
| [404](#post-proxmox-lxc-node-vmid-stop-404) | Not Found | Node not found |  | [schema](#post-proxmox-lxc-node-vmid-stop-404-schema) |
| [500](#post-proxmox-lxc-node-vmid-stop-500) | Internal Server Error | Internal Server Error |  | [schema](#post-proxmox-lxc-node-vmid-stop-500-schema) |

#### Responses


##### <span id="post-proxmox-lxc-node-vmid-stop-200"></span> 200 - OK
Status: OK

###### <span id="post-proxmox-lxc-node-vmid-stop-200-schema"></span> Schema
   
  

[SuccessResponse](#success-response)

##### <span id="post-proxmox-lxc-node-vmid-stop-400"></span> 400 - Invalid request
Status: Bad Request

###### <span id="post-proxmox-lxc-node-vmid-stop-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-proxmox-lxc-node-vmid-stop-404"></span> 404 - Node not found
Status: Not Found

###### <span id="post-proxmox-lxc-node-vmid-stop-404-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-proxmox-lxc-node-vmid-stop-500"></span> 500 - Internal Server Error
Status: Internal Server Error

###### <span id="post-proxmox-lxc-node-vmid-stop-500-schema"></span> Schema
   
  

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

### <span id="post-route-playground"></span> Rule Playground (*PostRoutePlayground*)

```
POST /api/v1/route/playground
```

Test rules against mock request/response

#### Consumes
  * application/json

#### Produces
  * application/json

#### Parameters

| Name | Source | Type | Go type | Separator | Required | Default | Description |
|------|--------|------|---------|-----------| :------: |---------|-------------|
| request | `body` | [PlaygroundRequest](#playground-request) | `models.PlaygroundRequest` | | ✓ | | Playground request |

#### All responses
| Code | Status | Description | Has headers | Schema |
|------|--------|-------------|:-----------:|--------|
| [200](#post-route-playground-200) | OK | OK |  | [schema](#post-route-playground-200-schema) |
| [400](#post-route-playground-400) | Bad Request | Bad Request |  | [schema](#post-route-playground-400-schema) |
| [403](#post-route-playground-403) | Forbidden | Forbidden |  | [schema](#post-route-playground-403-schema) |

#### Responses


##### <span id="post-route-playground-200"></span> 200 - OK
Status: OK

###### <span id="post-route-playground-200-schema"></span> Schema
   
  

[PlaygroundResponse](#playground-response)

##### <span id="post-route-playground-400"></span> 400 - Bad Request
Status: Bad Request

###### <span id="post-route-playground-400-schema"></span> Schema
   
  

[ErrorResponse](#error-response)

##### <span id="post-route-playground-403"></span> 403 - Forbidden
Status: Forbidden

###### <span id="post-route-playground-403-schema"></span> Schema
   
  

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
| runtime | [AgentContainerRuntime](#agent-container-runtime)| `AgentContainerRuntime` |  | |  |  |
| supports_tcp_stream | boolean| `bool` |  | |  |  |
| supports_udp_stream | boolean| `bool` |  | |  |  |
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
| agent | [AgentpoolAgent](#agentpool-agent)| `AgentpoolAgent` |  | |  |  |
| aliases | []string| `[]string` |  | |  |  |
| container_id | string| `string` |  | |  |  |
| container_name | string| `string` |  | |  |  |
| docker_cfg | [DockerProviderConfig](#docker-provider-config)| `DockerProviderConfig` |  | |  |  |
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
| state | [ContainerContainerState](#container-container-state)| `ContainerContainerState` |  | |  |  |



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
| state | [ContainerResponse](#container-response)| `ContainerResponse` |  | |  |  |



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



### <span id="container-stats-response"></span> ContainerStatsResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| blkio_stats | [ContainerStatsResponse](#container-stats-response)| `ContainerStatsResponse` |  | | BlkioStats stores all IO service stats for data read and write.</br></br>This type is Linux-specific and holds many fields that are specific</br>to cgroups v1.</br></br>On a cgroup v2 host, all fields other than "io_service_bytes_recursive"</br>are omitted or "null".</br></br>This type is only populated on Linux and omitted for Windows containers. |  |
| cpu_stats | [ContainerStatsResponse](#container-stats-response)| `ContainerStatsResponse` |  | | CPUStats contains CPU related info of the container. |  |
| id | string| `string` |  | | ID is the ID of the container for which the stats were collected. |  |
| memory_stats | [ContainerStatsResponse](#container-stats-response)| `ContainerStatsResponse` |  | | MemoryStats aggregates all memory stats since container inception on Linux.</br>Windows returns stats for commit and private working set only. |  |
| name | string| `string` |  | | Name is the name of the container for which the stats were collected. |  |
| networks | map of [ContainerNetworkStats](#container-network-stats)| `map[string]ContainerNetworkStats` |  | | Networks contains Nntwork statistics for the container per interface.</br></br>This field is omitted if the container has no networking enabled. |  |
| num_procs | integer| `int64` |  | | NumProcs is the number of processors on the system.</br></br>This field is Windows-specific and always zero for Linux containers. |  |
| os_type | string| `string` |  | | OSType is the OS of the container ("linux" or "windows") to allow</br>platform-specific handling of stats. |  |
| pids_stats | [ContainerStatsResponse](#container-stats-response)| `ContainerStatsResponse` |  | | PidsStats contains Linux-specific stats of a container's process-IDs (PIDs).</br></br>This field is Linux-specific and omitted for Windows containers. |  |
| precpu_stats | [ContainerStatsResponse](#container-stats-response)| `ContainerStatsResponse` |  | | PreCPUStats contains the CPUStats of the previous sample. |  |
| preread | string| `string` |  | | PreRead is the date and time at which this first sample was collected.</br>This field is not propagated if the "one-shot" option is set. If the</br>"one-shot" option is set, this field may be omitted, empty, or set</br>to a default date (`0001-01-01T00:00:00Z`). |  |
| read | string| `string` |  | | Read is the date and time at which this sample was collected. |  |
| storage_stats | [ContainerStatsResponse](#container-stats-response)| `ContainerStatsResponse` |  | | StorageStats is the disk I/O stats for read/write on Windows.</br></br>This type is Windows-specific and omitted for Linux containers. |  |



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
| docker_cfg | [DockerProviderConfig](#docker-provider-config)| `DockerProviderConfig` | ✓ | |  |  |



### <span id="docker-provider-config"></span> DockerProviderConfig


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| tls | [DockerTLSConfig](#docker-tls-config)| `DockerTLSConfig` |  | |  |  |
| url | string| `string` |  | |  |  |



### <span id="docker-tls-config"></span> DockerTLSConfig


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| ca_file | string| `string` | ✓ | |  |  |
| cert_file | string| `string` |  | |  |  |
| key_file | string| `string` |  | |  |  |



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



### <span id="final-request"></span> FinalRequest


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| body | string| `string` |  | |  |  |
| headers | map of [[]string](#string)| `map[string][]string` |  | |  |  |
| host | string| `string` |  | |  |  |
| method | string| `string` |  | |  |  |
| path | string| `string` |  | |  |  |
| query | map of [[]string](#string)| `map[string][]string` |  | |  |  |



### <span id="final-response"></span> FinalResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| body | string| `string` |  | |  |  |
| headers | map of [[]string](#string)| `map[string][]string` |  | |  |  |
| statusCode | integer| `int64` |  | |  |  |



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
| retries | integer| `int64` |  | | <0: immediate, 0: default, >0: threshold |  |
| timeout | integer| `int64` |  | |  |  |
| use_get | boolean| `bool` |  | |  |  |



### <span id="health-extra"></span> HealthExtra


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| config | [LoadBalancerConfig](#load-balancer-config)| `LoadBalancerConfig` |  | |  |  |
| pool | map of any | `map[string]interface{}` |  | |  |  |



### <span id="health-info-without-detail"></span> HealthInfoWithoutDetail


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| latency | number| `float64` |  | | latency in microseconds |  |
| status | string| `string` |  | |  |  |
| uptime | number| `float64` |  | | uptime in milliseconds |  |



### <span id="health-json"></span> HealthJSON


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| config | [HealthCheckConfig](#health-check-config)| `HealthCheckConfig` |  | |  |  |
| detail | string| `string` |  | |  |  |
| extra | [HealthJSON](#health-json)| `HealthJSON` |  | |  |  |
| lastSeen | integer| `int64` |  | | unix timestamp in seconds |  |
| latency | integer| `int64` |  | | latency in milliseconds |  |
| name | string| `string` |  | |  |  |
| started | integer| `int64` |  | | unix timestamp in seconds |  |
| status | [HealthStatusString](#health-status-string)| `HealthStatusString` |  | |  |  |
| uptime | number| `float64` |  | | uptime in seconds |  |
| url | string| `string` |  | |  |  |



### <span id="health-map"></span> HealthMap


  

[HealthMap](#health-map)

### <span id="health-status-string"></span> HealthStatusString


  

| Name | Type | Go type | Default | Description | Example |
|------|------|---------| ------- |-------------|---------|
| HealthStatusString | string| string | |  |  |



### <span id="homepage-category"></span> HomepageCategory


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| items | [][HomepageItem](#homepage-item)| `[]*HomepageItem` |  | |  |  |
| name | string| `string` |  | |  |  |



### <span id="homepage-item"></span> HomepageItem


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| alias | string| `string` |  | |  |  |
| all_sort_order | integer| `int64` |  | | sort order in all |  |
| category | string| `string` |  | |  |  |
| clicks | integer| `int64` |  | |  |  |
| container_id | string| `string` |  | |  |  |
| description | string| `string` |  | |  |  |
| fav_sort_order | integer| `int64` |  | | sort order in favorite |  |
| favorite | boolean| `bool` |  | |  |  |
| icon | string| `string` |  | |  |  |
| name | string| `string` |  | | display name |  |
| origin_url | string| `string` |  | |  |  |
| provider | string| `string` |  | |  |  |
| show | boolean| `bool` |  | |  |  |
| sort_order | integer| `int64` |  | | sort order in category |  |
| url | string| `string` |  | |  |  |
| widget_config | [HomepageItem](#homepage-item)| `HomepageItem` |  | |  |  |
| widgets | [][HomepageItemWidget](#homepage-item-widget)| `[]*HomepageItemWidget` |  | |  |  |



### <span id="homepage-item-config"></span> HomepageItemConfig


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| category | string| `string` |  | |  |  |
| description | string| `string` |  | |  |  |
| favorite | boolean| `bool` |  | |  |  |
| icon | string| `string` |  | |  |  |
| name | string| `string` |  | | display name |  |
| show | boolean| `bool` |  | |  |  |
| url | string| `string` |  | |  |  |
| widget_config | [HomepageItemConfig](#homepage-item-config)| `HomepageItemConfig` |  | |  |  |



### <span id="homepage-item-widget"></span> HomepageItemWidget


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| label | string| `string` |  | |  |  |
| value | string| `string` |  | |  |  |



### <span id="homepage-override-category-order-params"></span> HomepageOverrideCategoryOrderParams


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| value | integer| `int64` |  | |  |  |
| which | string| `string` |  | |  |  |



### <span id="homepage-override-item-all-sort-order-params"></span> HomepageOverrideItemAllSortOrderParams


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| value | integer| `int64` |  | |  |  |
| which | string| `string` |  | |  |  |



### <span id="homepage-override-item-fav-sort-order-params"></span> HomepageOverrideItemFavSortOrderParams


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| value | integer| `int64` |  | |  |  |
| which | string| `string` |  | |  |  |



### <span id="homepage-override-item-favorite-params"></span> HomepageOverrideItemFavoriteParams


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| value | boolean| `bool` |  | |  |  |
| which | []string| `[]string` |  | |  |  |



### <span id="homepage-override-item-params"></span> HomepageOverrideItemParams


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| value | [HomepageItemConfig](#homepage-item-config)| `HomepageItemConfig` |  | |  |  |
| which | string| `string` |  | |  |  |



### <span id="homepage-override-item-sort-order-params"></span> HomepageOverrideItemSortOrderParams


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| value | integer| `int64` |  | |  |  |
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



### <span id="icon-fetch-result"></span> IconFetchResult


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| icon | []int32 (formatted integer)| `[]int32` |  | |  |  |
| statusCode | integer| `int64` |  | |  |  |



### <span id="icon-meta-search"></span> IconMetaSearch


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| Dark | boolean| `bool` |  | |  |  |
| Light | boolean| `bool` |  | |  |  |
| PNG | boolean| `bool` |  | |  |  |
| Ref | string| `string` |  | |  |  |
| SVG | boolean| `bool` |  | |  |  |
| Source | [IconsSource](#icons-source)| `IconsSource` |  | |  |  |
| WebP | boolean| `bool` |  | |  |  |



### <span id="idlewatcher-config"></span> IdlewatcherConfig


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| depends_on | []string| `[]string` |  | |  |  |
| docker | [DockerConfig](#docker-config)| `DockerConfig` |  | |  |  |
| idle_timeout | [IdlewatcherConfig](#idlewatcher-config)| `IdlewatcherConfig` |  | | 0: no idle watcher.</br>Positive: idle watcher with idle timeout.</br>Negative: idle watcher as a dependency. |  |
| no_loading_page | boolean| `bool` |  | |  |  |
| proxmox | [ProxmoxNodeConfig](#proxmox-node-config)| `ProxmoxNodeConfig` |  | |  |  |
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
| sticky | boolean| `bool` |  | |  |  |
| sticky_max_age | [TimeDuration](#time-duration)| `TimeDuration` |  | |  |  |
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



### <span id="mock-cookie"></span> MockCookie


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| name | string| `string` |  | |  |  |
| value | string| `string` |  | |  |  |



### <span id="mock-request"></span> MockRequest


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| body | string| `string` |  | |  |  |
| cookies | [][MockCookie](#mock-cookie)| `[]*MockCookie` |  | |  |  |
| headers | map of [[]string](#string)| `map[string][]string` |  | |  |  |
| host | string| `string` |  | |  |  |
| method | string| `string` |  | |  |  |
| path | string| `string` |  | |  |  |
| query | map of [[]string](#string)| `map[string][]string` |  | |  |  |
| remoteIP | string| `string` |  | |  |  |



### <span id="mock-response"></span> MockResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| body | string| `string` |  | |  |  |
| headers | map of [[]string](#string)| `map[string][]string` |  | |  |  |
| statusCode | integer| `int64` |  | |  |  |



### <span id="new-agent-request"></span> NewAgentRequest


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| container_runtime | [NewAgentRequest](#new-agent-request)| `NewAgentRequest` |  | `"docker"`|  |  |
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



### <span id="parsed-rule"></span> ParsedRule


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| do | string| `string` |  | |  |  |
| isResponseRule | boolean| `bool` |  | |  |  |
| name | string| `string` |  | |  |  |
| on | string| `string` |  | |  |  |
| validationError | [interface{}](#interface)| `interface{}` |  | |  |  |



### <span id="playground-request"></span> PlaygroundRequest


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| mockRequest | [MockRequest](#mock-request)| `MockRequest` |  | |  |  |
| mockResponse | [MockResponse](#mock-response)| `MockResponse` |  | |  |  |
| rules | [][RouteAPIRawRule](#route-api-raw-rule)| `[]*RouteAPIRawRule` | ✓ | |  |  |



### <span id="playground-response"></span> PlaygroundResponse


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| executionError | [interface{}](#interface)| `interface{}` |  | |  |  |
| finalRequest | [FinalRequest](#final-request)| `FinalRequest` |  | |  |  |
| finalResponse | [FinalResponse](#final-response)| `FinalResponse` |  | |  |  |
| matchedRules | []string| `[]string` |  | |  |  |
| parsedRules | [][ParsedRule](#parsed-rule)| `[]*ParsedRule` |  | |  |  |
| upstreamCalled | boolean| `bool` |  | |  |  |



### <span id="port"></span> Port


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| listening | integer| `int64` |  | |  |  |
| proxy | integer| `int64` |  | |  |  |



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



### <span id="proxmox-node-config"></span> ProxmoxNodeConfig


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| node | string| `string` | ✓ | |  |  |
| service | string| `string` |  | |  |  |
| vmid | integer| `int64` | ✓ | |  |  |
| vmname | string| `string` |  | |  |  |



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
| bind | string| `string` |  | | for TCP and UDP routes, bind address to listen on |  |
| container | [Route](#route)| `Route` |  | | Docker only |  |
| disable_compression | boolean| `bool` |  | |  |  |
| excluded | boolean| `bool` |  | |  |  |
| excluded_reason | string| `string` |  | |  |  |
| health | [Route](#route)| `Route` |  | | for swagger |  |
| healthcheck | [Route](#route)| `Route` |  | | null on load-balancer routes |  |
| homepage | [HomepageItemConfig](#homepage-item-config)| `HomepageItemConfig` |  | |  |  |
| host | string| `string` |  | |  |  |
| idlewatcher | [Route](#route)| `Route` |  | |  |  |
| index | string| `string` |  | | Index file to serve for single-page app mode |  |
| load_balance | [Route](#route)| `Route` |  | |  |  |
| lurl | string| `string` |  | | private fields |  |
| middlewares | map of [TypesLabelMap](#types-label-map)| `map[string]TypesLabelMap` |  | |  |  |
| no_tls_verify | boolean| `bool` |  | |  |  |
| path_patterns | []string| `[]string` |  | |  |  |
| port | [Port](#port)| `Port` |  | |  |  |
| provider | string| `string` |  | | for backward compatibility |  |
| proxmox | [Route](#route)| `Route` |  | |  |  |
| purl | string| `string` |  | |  |  |
| response_header_timeout | integer| `int64` |  | |  |  |
| root | string| `string` |  | |  |  |
| rule_file | string| `string` |  | |  |  |
| rules | [][RulesRule](#rules-rule)| `[]*RulesRule` |  | |  |  |
| scheme | string| `string` |  | |  |  |
| spa | boolean| `bool` |  | | Single-page app mode: serves index for non-existent paths |  |
| ssl_certificate | string| `string` |  | | Path to client certificate |  |
| ssl_certificate_key | string| `string` |  | | Path to client certificate key |  |
| ssl_protocols | []string| `[]string` |  | | Allowed TLS protocols |  |
| ssl_server_name | string| `string` |  | | SSL/TLS proxy options (nginx-like) |  |
| ssl_trusted_certificate | string| `string` |  | | Path to trusted CA certificates |  |



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
| statuses | map of [HealthInfoWithoutDetail](#health-info-without-detail)| `map[string]HealthInfoWithoutDetail` |  | |  |  |
| timestamp | integer| `int64` |  | |  |  |



### <span id="route-uptime-aggregate"></span> RouteUptimeAggregate


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| alias | string| `string` |  | |  |  |
| avg_latency | number| `float64` |  | |  |  |
| current_status | string| `string` |  | |  |  |
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
| uptime | integer| `int64` |  | |  |  |



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
| container_runtime | [AgentContainerRuntime](#agent-container-runtime)| `AgentContainerRuntime` |  | |  |  |
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



### <span id="agent-container-runtime"></span> agent.ContainerRuntime


  

| Name | Type | Go type | Default | Description | Example |
|------|------|---------| ------- |-------------|---------|
| agent.ContainerRuntime | string| string | |  |  |



### <span id="agentpool-agent"></span> agentpool.Agent


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| addr | string| `string` |  | |  |  |
| name | string| `string` |  | |  |  |
| runtime | [AgentContainerRuntime](#agent-container-runtime)| `AgentContainerRuntime` |  | |  |  |
| supports_tcp_stream | boolean| `bool` |  | |  |  |
| supports_udp_stream | boolean| `bool` |  | |  |  |
| version | string| `string` |  | |  |  |



### <span id="auth-user-pass-auth-callback-request"></span> auth.UserPassAuthCallbackRequest


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| password | string| `string` |  | |  |  |
| username | string| `string` |  | |  |  |



### <span id="container-blkio-stat-entry"></span> container.BlkioStatEntry


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| major | integer| `int64` |  | |  |  |
| minor | integer| `int64` |  | |  |  |
| op | string| `string` |  | |  |  |
| value | integer| `int64` |  | |  |  |



### <span id="container-blkio-stats"></span> container.BlkioStats


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| io_merged_recursive | [][ContainerBlkioStatEntry](#container-blkio-stat-entry)| `[]*ContainerBlkioStatEntry` |  | |  |  |
| io_queue_recursive | [][ContainerBlkioStatEntry](#container-blkio-stat-entry)| `[]*ContainerBlkioStatEntry` |  | |  |  |
| io_service_bytes_recursive | [][ContainerBlkioStatEntry](#container-blkio-stat-entry)| `[]*ContainerBlkioStatEntry` |  | | number of bytes transferred to and from the block device |  |
| io_service_time_recursive | [][ContainerBlkioStatEntry](#container-blkio-stat-entry)| `[]*ContainerBlkioStatEntry` |  | |  |  |
| io_serviced_recursive | [][ContainerBlkioStatEntry](#container-blkio-stat-entry)| `[]*ContainerBlkioStatEntry` |  | |  |  |
| io_time_recursive | [][ContainerBlkioStatEntry](#container-blkio-stat-entry)| `[]*ContainerBlkioStatEntry` |  | |  |  |
| io_wait_time_recursive | [][ContainerBlkioStatEntry](#container-blkio-stat-entry)| `[]*ContainerBlkioStatEntry` |  | |  |  |
| sectors_recursive | [][ContainerBlkioStatEntry](#container-blkio-stat-entry)| `[]*ContainerBlkioStatEntry` |  | |  |  |



### <span id="container-cpu-stats"></span> container.CPUStats


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| cpu_usage | [ContainerCPUStats](#container-cpu-stats)| `ContainerCPUStats` |  | | CPU Usage. Linux and Windows. |  |
| online_cpus | integer| `int64` |  | | Online CPUs. Linux only. |  |
| system_cpu_usage | integer| `int64` |  | | System Usage. Linux only. |  |
| throttling_data | [ContainerCPUStats](#container-cpu-stats)| `ContainerCPUStats` |  | | Throttling Data. Linux only. |  |



### <span id="container-cpu-usage"></span> container.CPUUsage


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| percpu_usage | []integer| `[]int64` |  | | Total CPU time consumed per core (Linux). Not used on Windows.</br>Units: nanoseconds. |  |
| total_usage | integer| `int64` |  | | Total CPU time consumed.</br>Units: nanoseconds (Linux)</br>Units: 100's of nanoseconds (Windows) |  |
| usage_in_kernelmode | integer| `int64` |  | | Time spent by tasks of the cgroup in kernel mode (Linux).</br>Time spent by all container processes in kernel mode (Windows).</br>Units: nanoseconds (Linux).</br>Units: 100's of nanoseconds (Windows). Not populated for Hyper-V Containers. |  |
| usage_in_usermode | integer| `int64` |  | | Time spent by tasks of the cgroup in user mode (Linux).</br>Time spent by all container processes in user mode (Windows).</br>Units: nanoseconds (Linux).</br>Units: 100's of nanoseconds (Windows). Not populated for Hyper-V Containers |  |



### <span id="container-container-state"></span> container.ContainerState


  

| Name | Type | Go type | Default | Description | Example |
|------|------|---------| ------- |-------------|---------|
| container.ContainerState | string| string | |  |  |



### <span id="container-memory-stats"></span> container.MemoryStats


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| commitbytes | integer| `int64` |  | | committed bytes |  |
| commitpeakbytes | integer| `int64` |  | | peak committed bytes |  |
| failcnt | integer| `int64` |  | | number of times memory usage hits limits. |  |
| limit | integer| `int64` |  | |  |  |
| max_usage | integer| `int64` |  | | maximum usage ever recorded. |  |
| privateworkingset | integer| `int64` |  | | private working set |  |
| stats | map of int64 (formatted integer)| `map[string]int64` |  | | TODO(vishh): Export these as stronger types.</br>all the stats exported via memory.stat. |  |
| usage | integer| `int64` |  | | current res_counter usage for memory |  |



### <span id="container-network-stats"></span> container.NetworkStats


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| endpoint_id | string| `string` |  | | Endpoint ID. Not used on Linux. |  |
| instance_id | string| `string` |  | | Instance ID. Not used on Linux. |  |
| rx_bytes | integer| `int64` |  | | Bytes received. Windows and Linux. |  |
| rx_dropped | integer| `int64` |  | | Incoming packets dropped. Windows and Linux. |  |
| rx_errors | integer| `int64` |  | | Received errors. Not used on Windows. Note that we don't `omitempty` this</br>field as it is expected in the >=v1.21 API stats structure. |  |
| rx_packets | integer| `int64` |  | | Packets received. Windows and Linux. |  |
| tx_bytes | integer| `int64` |  | | Bytes sent. Windows and Linux. |  |
| tx_dropped | integer| `int64` |  | | Outgoing packets dropped. Windows and Linux. |  |
| tx_errors | integer| `int64` |  | | Sent errors. Not used on Windows. Note that we don't `omitempty` this</br>field as it is expected in the >=v1.21 API stats structure. |  |
| tx_packets | integer| `int64` |  | | Packets sent. Windows and Linux. |  |



### <span id="container-pids-stats"></span> container.PidsStats


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| current | integer| `int64` |  | | Current is the number of pids in the cgroup |  |
| limit | integer| `int64` |  | | Limit is the hard limit on the number of pids in the cgroup.</br>A "Limit" of 0 means that there is no limit. |  |



### <span id="container-port-summary"></span> container.PortSummary


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| IP | [ContainerPortSummary](#container-port-summary)| `ContainerPortSummary` |  | | Host IP address that the container's port is mapped to |  |
| PrivatePort | integer| `int64` |  | | Port on the container</br>Required: true |  |
| PublicPort | integer| `int64` |  | | Port exposed on the host |  |
| Type | string| `string` |  | | type</br>Required: true</br>Enum: ["tcp","udp","sctp"] |  |



### <span id="container-storage-stats"></span> container.StorageStats


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| read_count_normalized | integer| `int64` |  | |  |  |
| read_size_bytes | integer| `int64` |  | |  |  |
| write_count_normalized | integer| `int64` |  | |  |  |
| write_size_bytes | integer| `int64` |  | |  |  |



### <span id="container-throttling-data"></span> container.ThrottlingData


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| periods | integer| `int64` |  | | Number of periods with throttling active |  |
| throttled_periods | integer| `int64` |  | | Number of periods when the container hits its throttling limit. |  |
| throttled_time | integer| `int64` |  | | Aggregate time the container was throttled for in nanoseconds. |  |



### <span id="disk-i-o-counters-stat"></span> disk.IOCountersStat


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| iops | integer| `int64` |  | |  |  |
| name | string| `string` |  | | ReadCount        uint64 `json:"readCount"`</br>MergedReadCount  uint64 `json:"mergedReadCount"`</br>WriteCount       uint64 `json:"writeCount"`</br>MergedWriteCount uint64 `json:"mergedWriteCount"`</br>ReadBytes        uint64 `json:"readBytes"`</br>WriteBytes       uint64 `json:"writeBytes"`</br>ReadTime         uint64 `json:"readTime"`</br>WriteTime        uint64 `json:"writeTime"`</br>IopsInProgress   uint64 `json:"iopsInProgress"`</br>IoTime           uint64 `json:"ioTime"`</br>WeightedIO       uint64 `json:"weightedIO"` |  |
| read_bytes | integer| `int64` |  | | SerialNumber     string `json:"serialNumber"`</br>Label            string `json:"label"` |  |
| read_count | integer| `int64` |  | |  |  |
| read_speed | number| `float64` |  | |  |  |
| write_bytes | integer| `int64` |  | |  |  |
| write_count | integer| `int64` |  | |  |  |
| write_speed | number| `float64` |  | |  |  |



### <span id="disk-usage-stat"></span> disk.UsageStat


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| free | integer| `int64` |  | |  |  |
| fstype | string| `string` |  | |  |  |
| path | string| `string` |  | |  |  |
| total | number| `float64` |  | |  |  |
| used | integer| `int64` |  | |  |  |
| used_percent | number| `float64` |  | |  |  |



### <span id="dockerapi-restart-request"></span> dockerapi.RestartRequest


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| id | string| `string` | ✓ | |  |  |
| signal | string| `string` |  | | Signal (optional) is the signal to send to the container to (gracefully)</br>stop it before forcibly terminating the container with SIGKILL after the</br>timeout expires. If no value is set, the default (SIGTERM) is used. |  |
| timeout | integer| `int64` |  | | Timeout (optional) is the timeout (in seconds) to wait for the container</br>to stop gracefully before forcibly terminating it with SIGKILL.</br></br>- Use nil to use the default timeout (10 seconds).</br>- Use '-1' to wait indefinitely.</br>- Use '0' to not wait for the container to exit gracefully, and</br>  immediately proceeds to forcibly terminating the container.</br>- Other positive values are used as timeout (in seconds). |  |



### <span id="dockerapi-start-request"></span> dockerapi.StartRequest


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| checkpointDir | string| `string` |  | |  |  |
| checkpointID | string| `string` |  | |  |  |
| id | string| `string` | ✓ | |  |  |



### <span id="dockerapi-stop-request"></span> dockerapi.StopRequest


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| id | string| `string` | ✓ | |  |  |
| signal | string| `string` |  | | Signal (optional) is the signal to send to the container to (gracefully)</br>stop it before forcibly terminating the container with SIGKILL after the</br>timeout expires. If no value is set, the default (SIGTERM) is used. |  |
| timeout | integer| `int64` |  | | Timeout (optional) is the timeout (in seconds) to wait for the container</br>to stop gracefully before forcibly terminating it with SIGKILL.</br></br>- Use nil to use the default timeout (10 seconds).</br>- Use '-1' to wait indefinitely.</br>- Use '0' to not wait for the container to exit gracefully, and</br>  immediately proceeds to forcibly terminating the container.</br>- Other positive values are used as timeout (in seconds). |  |



### <span id="icons-source"></span> icons.Source


  

| Name | Type | Go type | Default | Description | Example |
|------|------|---------| ------- |-------------|---------|
| icons.Source | string| string | |  |  |



### <span id="mem-virtual-memory-stat"></span> mem.VirtualMemoryStat


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| available | integer| `int64` |  | | RAM available for programs to allocate</br></br>This value is computed from the kernel specific values. |  |
| total | number| `float64` |  | | Total amount of RAM on this system |  |
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



### <span id="netip-addr"></span> netip.Addr


  

[interface{}](#interface)

### <span id="proxmox-node-stats"></span> proxmox.NodeStats


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| cpu_model | string| `string` |  | |  |  |
| cpu_usage | string| `string` |  | |  |  |
| kernel_version | string| `string` |  | |  |  |
| load_avg_15m | string| `string` |  | |  |  |
| load_avg_1m | string| `string` |  | |  |  |
| load_avg_5m | string| `string` |  | |  |  |
| mem_pct | string| `string` |  | |  |  |
| mem_total | string| `string` |  | |  |  |
| mem_usage | string| `string` |  | |  |  |
| pve_version | string| `string` |  | |  |  |
| rootfs_pct | string| `string` |  | |  |  |
| rootfs_total | string| `string` |  | |  |  |
| rootfs_usage | string| `string` |  | |  |  |
| uptime | string| `string` |  | |  |  |



### <span id="route-route"></span> route.Route


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| access_log | [RouteRoute](#route-route)| `RouteRoute` |  | |  |  |
| agent | string| `string` |  | |  |  |
| alias | string| `string` |  | |  |  |
| bind | string| `string` |  | | for TCP and UDP routes, bind address to listen on |  |
| container | [RouteRoute](#route-route)| `RouteRoute` |  | | Docker only |  |
| disable_compression | boolean| `bool` |  | |  |  |
| excluded | boolean| `bool` |  | |  |  |
| excluded_reason | string| `string` |  | |  |  |
| health | [RouteRoute](#route-route)| `RouteRoute` |  | | for swagger |  |
| healthcheck | [RouteRoute](#route-route)| `RouteRoute` |  | | null on load-balancer routes |  |
| homepage | [HomepageItemConfig](#homepage-item-config)| `HomepageItemConfig` |  | |  |  |
| host | string| `string` |  | |  |  |
| idlewatcher | [RouteRoute](#route-route)| `RouteRoute` |  | |  |  |
| index | string| `string` |  | | Index file to serve for single-page app mode |  |
| load_balance | [RouteRoute](#route-route)| `RouteRoute` |  | |  |  |
| lurl | string| `string` |  | | private fields |  |
| middlewares | map of [TypesLabelMap](#types-label-map)| `map[string]TypesLabelMap` |  | |  |  |
| no_tls_verify | boolean| `bool` |  | |  |  |
| path_patterns | []string| `[]string` |  | |  |  |
| port | [Port](#port)| `Port` |  | |  |  |
| provider | string| `string` |  | | for backward compatibility |  |
| proxmox | [RouteRoute](#route-route)| `RouteRoute` |  | |  |  |
| purl | string| `string` |  | |  |  |
| response_header_timeout | integer| `int64` |  | |  |  |
| root | string| `string` |  | |  |  |
| rule_file | string| `string` |  | |  |  |
| rules | [][RulesRule](#rules-rule)| `[]*RulesRule` |  | |  |  |
| scheme | string| `string` |  | |  |  |
| spa | boolean| `bool` |  | | Single-page app mode: serves index for non-existent paths |  |
| ssl_certificate | string| `string` |  | | Path to client certificate |  |
| ssl_certificate_key | string| `string` |  | | Path to client certificate key |  |
| ssl_protocols | []string| `[]string` |  | | Allowed TLS protocols |  |
| ssl_server_name | string| `string` |  | | SSL/TLS proxy options (nginx-like) |  |
| ssl_trusted_certificate | string| `string` |  | | Path to trusted CA certificates |  |



### <span id="route-api-raw-rule"></span> routeApi.RawRule


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| do | string| `string` |  | |  |  |
| name | string| `string` |  | |  |  |
| on | string| `string` |  | |  |  |



### <span id="route-api-routes-by-provider"></span> routeApi.RoutesByProvider


  

[RouteRoute](#route-route)

### <span id="rules-rule"></span> rules.Rule


  



**Properties**

| Name | Type | Go type | Required | Default | Description | Example |
|------|------|---------|:--------:| ------- |-------------|---------|
| do | string| `string` |  | |  |  |
| name | string| `string` |  | |  |  |
| on | string| `string` |  | |  |  |



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


