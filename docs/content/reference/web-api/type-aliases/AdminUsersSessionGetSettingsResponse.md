[@slack/web-api](../index.md) / AdminUsersSessionGetSettingsResponse

# Type Alias: AdminUsersSessionGetSettingsResponse

```ts
type AdminUsersSessionGetSettingsResponse = WebAPICallResult & object;
```

Defined in: [src/types/response/AdminUsersSessionGetSettingsResponse.ts:11](https://github.com/slackapi/node-slack-sdk/blob/main/packages/web-api/src/types/response/AdminUsersSessionGetSettingsResponse.ts#L11)

## Type declaration

### error?

```ts
optional error: string;
```

### needed?

```ts
optional needed: string;
```

### no\_settings\_applied?

```ts
optional no_settings_applied: string[];
```

### ok?

```ts
optional ok: boolean;
```

### provided?

```ts
optional provided: string;
```

### session\_settings?

```ts
optional session_settings: SessionSetting[];
```
