[@slack/web-api](../index.md) / UsersListResponse

# Type Alias: UsersListResponse

```ts
type UsersListResponse = WebAPICallResult & object;
```

Defined in: [src/types/response/UsersListResponse.ts:11](https://github.com/slackapi/node-slack-sdk/blob/main/packages/web-api/src/types/response/UsersListResponse.ts#L11)

## Type declaration

### arg?

```ts
optional arg: string;
```

### cache\_ts?

```ts
optional cache_ts: number;
```

### error?

```ts
optional error: string;
```

### members?

```ts
optional members: Member[];
```

### needed?

```ts
optional needed: string;
```

### offset?

```ts
optional offset: string;
```

### ok?

```ts
optional ok: boolean;
```

### provided?

```ts
optional provided: string;
```

### response\_metadata?

```ts
optional response_metadata: ResponseMetadata;
```
